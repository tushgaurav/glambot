import { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/about', label: 'ABOUT' },
  { to: '/vision', label: 'VISION' },
  { to: '/gear', label: 'GEAR' },
  { to: '/pricing', label: 'PRICING' },
  { to: '/book', label: 'BOOK NOW' },
  { to: '/privacy', label: 'PRIVACY' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      <div className="flex justify-between items-center p-4 md:p-8">
        <Link to="/">
          <img src="/orangewood-black.png" alt="Logo" className="h-8" />
        </Link>

        {/* Desktop: inline nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link font-mono-ibm text-xs tracking-wider px-3 py-2"
              style={{
                color: '#000',
                textDecoration: 'none',
                transition: 'color 0.1s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: menu button */}
        <button
          className="lg:hidden menu-box font-space text-sm font-semibold px-4 py-2 tracking-wider"
          style={{
            border: '3px solid #000000',
            backgroundColor: menuOpen ? '#000' : 'transparent',
            color: menuOpen ? '#FAFAFA' : '#000000',
            cursor: 'pointer',
            transition: 'background-color 0.1s, color 0.1s',
          }}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile: dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden mx-4 md:mx-8"
          style={{
            border: '3px solid #000',
            backgroundColor: '#FAFAFA',
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-6 py-4 font-mono-ibm text-sm tracking-wider"
              style={{
                color: '#000',
                textDecoration: 'none',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid #000' : undefined,
                transition: 'background-color 0.1s, color 0.1s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.color = '#FAFAFA';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#000';
              }}
            >
              <span>{link.label}</span>
              <span style={{ color: '#FF4D00' }}>→</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
