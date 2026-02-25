import { Link } from 'react-router-dom';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  sectionId: string;
  sectionLabel: string;
}

export default function PageLayout({ children, sectionId, sectionLabel }: PageLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAFA', color: '#000000' }}>
      {/* Header */}
      <div className="flex justify-between items-start p-4 md:p-8">
        <Link to="/">
          <img src="/orangewood-black.png" alt="Logo" className="h-8" />
        </Link>
        <Link
          to="/"
          className="menu-box font-space text-sm md:text-base font-semibold px-4 py-2 tracking-wider"
          style={{
            border: '3px solid #000000',
            backgroundColor: 'transparent',
            color: '#000000',
            textDecoration: 'none',
            transition: 'background-color 0.1s, color 0.1s',
          }}
        >
          ← BACK
        </Link>
      </div>

      {/* Section ID bar */}
      <div className="px-4 md:px-8 lg:px-16 mb-8">
        <div className="flex items-center gap-4">
          <span
            className="font-mono-ibm text-xs tracking-widest font-semibold"
            style={{ color: '#858585', letterSpacing: '0.3em' }}
          >
            {sectionId}
          </span>
          <div style={{ flex: 1, height: '2px', backgroundColor: '#000' }} />
        </div>
        <h1
          className="font-anton mt-4"
          style={{ fontSize: 'clamp(48px, 10vw, 140px)', lineHeight: 0.95, color: '#000' }}
        >
          {sectionLabel}<span style={{ color: '#FF4D00' }}>.</span>
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 lg:px-16 pb-20">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
