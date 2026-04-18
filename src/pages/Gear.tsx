import PageLayout from '../components/PageLayout';

const GEAR_LIST = [
  {
    id: 'UNIT_01',
    name: 'OWL-6 ROBOTIC ARM',
    spec: '6-AXIS / 1.2M REACH',
    desc: 'Orangewood\'s proprietary 6-axis collaborative robot arm. Designed for human-safe operation with ±0.02mm repeatability. The backbone of the entire GlamBot system.',
    accent: true,
  },
  {
    id: 'UNIT_02',
    name: 'CINEMA CAMERA MODULE',
    spec: '4K / 60FPS / 10-BIT',
    desc: 'Professional cinema camera mounted on the end-effector. Captures 4K slow-motion footage with cinema-grade color depth. Hardened for robotic vibration tolerance.',
  },
  {
    id: 'UNIT_03',
    name: 'MOTION CONTROLLER',
    spec: 'CUSTOM FIRMWARE / 1KHZ',
    desc: 'Real-time motion controller running custom trajectory planning firmware at 1kHz loop rate. Computes smooth B-spline paths for cinematic camera movements.',
  },
  {
    id: 'UNIT_04',
    name: 'LED RING ARRAY',
    spec: '360° / 5600K / CRI 97+',
    desc: 'Circular LED panel array surrounding the capture zone. Provides consistent, high-CRI lighting from all angles. Color temperature matched to daylight for natural skin tones.',
  },
  {
    id: 'UNIT_05',
    name: 'EDGE COMPUTE UNIT',
    spec: 'GPU-ACCELERATED / 256GB',
    desc: 'On-site processing node for real-time video rendering, stabilization, and delivery. Videos are processed and ready for digital delivery within 60 seconds of capture.',
  },
  {
    id: 'UNIT_06',
    name: 'SAFETY PERIMETER SYSTEM',
    spec: 'LIDAR + PRESSURE MATS',
    desc: 'Multi-layered safety system combining LiDAR proximity sensing and floor pressure mats. Automatically halts arm operation if an unauthorized person enters the work envelope.',
  },
  {
    id: 'UNIT_07',
    name: 'PORTABLE STAGING RIG',
    spec: 'MODULAR / 2.5M x 2.5M',
    desc: 'Custom-built modular staging platform. Ships flat, assembles in under 30 minutes. Provides stable mounting surface for the robotic arm and integrated cable management.',
  },
  {
    id: 'UNIT_08',
    name: 'DELIVERY KIOSK',
    spec: 'QR CODE / INSTANT SHARE',
    desc: 'Touchscreen kiosk with QR code scanner. Guests scan to instantly receive their processed video via link. Supports custom branding and social media integration.',
  },
];

export default function Gear() {
  return (
    <PageLayout sectionId="GEAR" sectionLabel="GEAR">
      <div className="mb-8">
        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <p className="font-mono-ibm text-sm leading-relaxed" style={{ color: '#858585' }}>
            Every piece of the GlamBot system is purpose-built or specifically selected
            for robotic motion capture at live events. No consumer gear. No compromises.
            This is the full hardware manifest.
          </p>
        </div>
      </div>

      <div className="font-mono-ibm text-xs mb-8" style={{ color: '#858585' }}>
        TOTAL UNITS: {GEAR_LIST.length} // SYSTEM WEIGHT: ~180KG // SETUP TIME: 45MIN
      </div>

      {/* Gear grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ border: '3px solid #000' }}
      >
        {GEAR_LIST.map((g, i) => (
          <div
            key={g.id}
            className="p-6 md:p-8"
            style={{
              borderRight: i % 2 === 0 ? '3px solid #000' : undefined,
              borderBottom: i < GEAR_LIST.length - 2 ? '3px solid #000' : undefined,
              ...(g.accent ? { borderTop: '4px solid #FF4D00' } : {}),
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-ibm text-xs" style={{ color: '#858585' }}>
                {g.id}
              </span>
              <span className="font-mono-ibm text-xs tracking-wider" style={{ color: '#FF4D00' }}>
                {g.spec}
              </span>
            </div>
            <span className="font-anton text-xl md:text-2xl block mb-3" style={{ color: '#000' }}>
              {g.name}
            </span>
            <p className="font-mono-ibm text-xs leading-relaxed" style={{ color: '#858585' }}>
              {g.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
        [MANIFEST:V4.1] [CLASS:INDUSTRIAL] [CERTIFICATION:CE/IS]
      </div>
    </PageLayout>
  );
}
