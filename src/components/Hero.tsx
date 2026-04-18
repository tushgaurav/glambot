import { useState, useRef, useCallback } from 'react';

interface HeroProps {
  heroRevealed: boolean;
}

export default function Hero({ heroRevealed }: HeroProps) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5, active: false });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
      active: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse(prev => ({ ...prev, active: false }));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src="https://storage.googleapis.com/owlautomation/glambot/videos/Final.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{
          objectFit: 'cover',
          filter: 'saturate(1.3) contrast(1.2) brightness(0.85) hue-rotate(-5deg)',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {mouse.active && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at ${mouse.x * 100}% ${mouse.y * 100}%, transparent 0%, rgba(0,0,0,0.5) 100%)`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      )}

      <div
        className="absolute top-0 left-0 right-0 z-10"
        style={{
          height: '160px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)',
        }}
      />

      <div className="absolute bottom-16 md:bottom-20 left-4 md:left-8 lg:left-16 z-10">
        <h1
          className={`font-anton leading-none tracking-tight ${heroRevealed ? 'hero-text-reveal' : ''}`}
          style={{
            fontSize: 'clamp(72px, 16vw, 280px)',
            color: '#FFFFFF',
            lineHeight: 0.9,
            clipPath: heroRevealed ? undefined : 'inset(0 100% 0 0)',
            whiteSpace: 'nowrap',
          }}
        >
          GLAMBOT<span style={{ color: '#FF4D00' }}>.</span>
        </h1>

        <div
          className="mt-4 md:mt-6 max-w-xl"
          style={{
            opacity: heroRevealed ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.5s',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#FFFFFF',
              marginBottom: '12px',
            }}
          />
          <p
            className="font-mono-ibm text-xs md:text-sm tracking-widest"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            NOT A CAMERA. NOT A GIMBAL. A FULL-SCALE ROBOTIC ARM ENGINEERED TO MAKE ORDINARY PEOPLE LOOK EXTRAORDINARY.
          </p>
        </div>
      </div>
    </section>
  );
}
