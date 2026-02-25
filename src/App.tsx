import { useState, useEffect, useRef, useCallback } from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import SpecsGrid from './components/SpecsGrid';
import Process from './components/Process';
import Statement from './components/Statement';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [statusText, setStatusText] = useState('ACTIVE');
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [statementSnapped, setStatementSnapped] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const statementRef = useRef<HTMLElement | null>(null);

  const setSectionRef = useCallback((el: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = el;
  }, []);

  // Hero reveal on mount
  useEffect(() => {
    const timer = setTimeout(() => setHeroRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Blinking status text
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusText((prev) => (prev === 'ACTIVE' ? 'STANDBY' : 'ACTIVE'));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Statement rotation snap on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatementSnapped(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statementRef.current) {
      observer.observe(statementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#FAFAFA', color: '#000000' }}>
        <Hero heroRevealed={heroRevealed} />
        <Manifesto ref={(el) => setSectionRef(el, 0)} visible={visibleSections.has(0)} />
        <SpecsGrid ref={(el) => setSectionRef(el, 1)} visible={visibleSections.has(1)} />
        <Process ref={(el) => setSectionRef(el, 2)} visible={visibleSections.has(2)} />
        <Statement
          ref={(el) => {
            setSectionRef(el, 3);
            statementRef.current = el;
          }}
          visible={visibleSections.has(3)}
          snapped={statementSnapped}
        />
        <CallToAction ref={(el) => setSectionRef(el, 4)} visible={visibleSections.has(4)} statusText={statusText} />
        <Footer />
      </div>
  );
}
