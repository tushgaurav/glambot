import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/about', label: 'ABOUT' },
  { to: '/vision', label: 'VISION' },
  { to: '/gear', label: 'GEAR' },
  { to: '/book', label: 'BOOK NOW' },
  { to: '/privacy', label: 'PRIVACY' },
];

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="font-mono-ibm text-xs tracking-[0.28em] uppercase nav-link"
      style={{
        color: '#FAFAFA',
        textDecoration: 'none',
      }}
    >
      {label}
    </Link>
  );
}

function YcBadge() {
  return (
    <div className="flex items-center gap-2">
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#FB651E" />
        <path d="M7.2 6.5L11.1 13.3V17.5H12.9V13.3L16.8 6.5H14.7L12 11.5L9.3 6.5H7.2Z" fill="white" />
      </svg>
      <span className="font-mono-ibm text-[11px] tracking-[0.24em] uppercase" style={{ color: 'rgba(250,250,250,0.62)' }}>
        Backed by Y Combinator
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative" style={{ borderTop: '4px solid #FAFAFA', backgroundColor: '#000000', color: '#FAFAFA' }}>
      <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono-ibm text-[10px] tracking-[0.34em] uppercase" style={{ color: 'rgba(250,250,250,0.48)' }}>
              What's Next
            </p>
            <h2 className="font-anton mt-4" style={{ fontSize: 'clamp(62px,12vw,170px)', lineHeight: 0.88 }}>
              NEXT
              <br />
              FRAME<span style={{ color: '#FF4D00' }}>?</span>
            </h2>
          </div>

          <div>
            <div style={{ width: '100%', height: '2px', backgroundColor: '#FAFAFA' }} />
            <p className="font-space mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: 'rgba(250,250,250,0.74)' }}>
              Ready to bring cinematic robotics to your next event? Get in touch and we'll handle the rest — setup, capture, delivery.
            </p>
            <Link
              to="/book"
              className="inline-block mt-6 font-mono-ibm text-xs px-6 py-4 tracking-[0.3em] uppercase cta-button"
              style={{ border: '3px solid #FAFAFA', color: '#FAFAFA', textDecoration: 'none' }}
            >
              Book The Session
            </Link>
          </div>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.to} {...link} />
            ))}
          </div>

          <div className="space-y-4">
            <YcBadge />
            <p className="font-mono-ibm text-[11px] tracking-[0.3em] uppercase text-left md:text-right" style={{ color: 'rgba(250,250,250,0.48)' }}>
              © {new Date().getFullYear()} OrangeWood Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
