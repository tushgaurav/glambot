import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const INCLUDED = [
  'Full GlamBot robotic arm setup & operation',
  'On-site technician for entire event duration',
  'Unlimited captures during 6-hour window',
  'Real-time video processing & delivery',
  'Digital delivery to each guest (QR code)',
  'Pre-event site survey & motion path planning',
  'Equipment transport & setup/teardown',
  'Branded capture zone setup',
];

const ADDONS = [
  { id: 'ADD_01', name: 'EXTENDED HOURS', price: '₹8,000/hr', desc: 'Beyond the standard 6-hour window.' },
  { id: 'ADD_02', name: 'SECOND UNIT', price: '₹35,000', desc: 'Deploy a second GlamBot arm for larger events.' },
  { id: 'ADD_03', name: 'CUSTOM BRANDING', price: '₹5,000', desc: 'Custom overlays, watermarks, and branded delivery page.' },
  { id: 'ADD_04', name: 'RAW FOOTAGE PACKAGE', price: '₹10,000', desc: 'Full uncompressed footage archive on external drive.' },
];

export default function Pricing() {
  return (
    <PageLayout sectionId="SEC_PRICING" sectionLabel="PRICING">
      {/* Main pricing card */}
      <div className="mb-16 md:mb-24">
        <div style={{ border: '3px solid #000' }}>
          <div className="p-8 md:p-12" style={{ borderBottom: '3px solid #000', borderTop: '4px solid #FF4D00' }}>
            <span className="font-mono-ibm text-xs tracking-widest block mb-2" style={{ color: '#858585' }}>
              STANDARD_PACKAGE // PER EVENT
            </span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-anton" style={{ fontSize: 'clamp(60px, 12vw, 140px)', color: '#000', lineHeight: 1 }}>
                ₹50K
              </span>
              <span className="font-mono-ibm text-sm" style={{ color: '#858585' }}>
                INR / DAY
              </span>
            </div>
            <span className="font-mono-ibm text-sm" style={{ color: '#FF4D00' }}>
              6-HOUR EVENT WINDOW
            </span>
          </div>

          {/* Included items */}
          <div className="p-8 md:p-12">
            <span className="font-mono-ibm text-xs tracking-widest block mb-6 font-semibold" style={{ color: '#858585', letterSpacing: '0.3em' }}>
              INCLUDED
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {INCLUDED.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-mono-ibm text-xs mt-0.5" style={{ color: '#FF4D00' }}>■</span>
                  <span className="font-mono-ibm text-xs md:text-sm" style={{ color: '#000' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/book"
          className="cta-button font-mono-ibm text-sm tracking-widest px-8 py-4 mt-6 cursor-pointer inline-block"
          style={{
            border: '3px solid #000',
            backgroundColor: '#000',
            color: '#FAFAFA',
            textDecoration: 'none',
          }}
        >
          BOOK NOW →
        </Link>
      </div>

      {/* Add-ons */}
      <div>
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          ADD-ONS
        </h3>
        <div className="flex flex-col gap-0">
          {ADDONS.map((a) => (
            <div
              key={a.id}
              className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-8 py-5"
              style={{ borderLeft: '5px solid #000', borderBottom: '1px solid #000' }}
            >
              <div className="flex items-center gap-4 md:gap-8">
                <span className="font-mono-ibm text-xs" style={{ color: '#858585' }}>{a.id}</span>
                <div>
                  <span className="font-mono-ibm text-sm tracking-wider block" style={{ color: '#000' }}>{a.name}</span>
                  <span className="font-mono-ibm text-xs block mt-1" style={{ color: '#858585' }}>{a.desc}</span>
                </div>
              </div>
              <span className="font-anton text-xl md:text-2xl mt-2 md:mt-0" style={{ color: '#000' }}>
                {a.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
        [PRICING:V3.0] [CURRENCY:INR] [TAXES:ADDITIONAL]
      </div>
    </PageLayout>
  );
}
