import PageLayout from '../components/PageLayout';

const TEAM = [
  { id: 'OPR_01', name: 'ORANGEWOOD LABS', role: 'PARENT ORGANIZATION', desc: 'Pioneering accessible robotics from Bangalore, India. Building machines that work alongside humans.' },
  { id: 'OPR_02', name: 'ENGINEERING UNIT', role: 'HARDWARE + SOFTWARE', desc: 'Cross-disciplinary team of roboticists, firmware engineers, and motion designers.' },
  { id: 'OPR_03', name: 'CREATIVE DIVISION', role: 'EXPERIENCE DESIGN', desc: 'Translating raw robotic capability into human-centered cinematic experiences.' },
];

const TIMELINE = [
  { year: '2024', event: 'GLAMBOT CONCEPT INITIATED', detail: 'First prototype built on Orangewood\'s 6-axis platform.' },
  { year: '2024', event: 'MOTION PATH ENGINE V1', detail: 'Custom trajectory planning software deployed.' },
  { year: '2025', event: 'FIRST PUBLIC EVENT', detail: 'Live deployment at a 500+ person event in Bangalore.' },
  { year: '2026', event: 'COMMERCIAL LAUNCH', detail: 'Full event service now available across India.' },
];

export default function About() {
  return (
    <PageLayout sectionId="SEC_ABOUT" sectionLabel="ABOUT">
      {/* Manifesto block */}
      <div className="mb-16 md:mb-24">
        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#000' }}>
            GlamBot is a robotic motion capture system built by Orangewood Labs.
            We deploy a precision-engineered 6-axis robotic arm to capture cinematic
            portrait videos at events — weddings, launches, galas, brand activations.
            The machine executes pre-computed motion paths around subjects, producing
            dramatic slow-motion content that no human camera operator can replicate.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#858585' }}>
            No filters. No gimmicks. Just a machine doing what it was built to do —
            with surgical precision and zero ego.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <div className="mb-16 md:mb-24">
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          OPERATIONAL_UNITS
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ border: '3px solid #000' }}
        >
          {TEAM.map((t, i) => (
            <div
              key={t.id}
              className="p-6 md:p-8"
              style={{
                borderRight: i < 2 ? '3px solid #000' : undefined,
                borderBottom: '3px solid #000',
              }}
            >
              <span className="font-mono-ibm text-xs block mb-3" style={{ color: '#858585' }}>
                {t.id}
              </span>
              <span className="font-anton text-2xl md:text-3xl block mb-1" style={{ color: '#000' }}>
                {t.name}
              </span>
              <span className="font-mono-ibm text-xs tracking-wider block mb-4" style={{ color: '#FF4D00' }}>
                {t.role}
              </span>
              <p className="font-mono-ibm text-xs leading-relaxed" style={{ color: '#858585' }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          TIMELINE
        </h3>
        <div className="flex flex-col gap-0">
          {TIMELINE.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-4 md:gap-8 px-4 md:px-8 py-5"
              style={{
                borderLeft: i === TIMELINE.length - 1 ? '5px solid #FF4D00' : '5px solid #000',
                borderBottom: '1px solid #000',
              }}
            >
              <span className="font-anton text-xl md:text-2xl flex-shrink-0" style={{ color: '#000', minWidth: '70px' }}>
                {t.year}
              </span>
              <div>
                <span className="font-mono-ibm text-sm md:text-base tracking-wider block" style={{ color: '#000' }}>
                  {t.event}
                </span>
                <span className="font-mono-ibm text-xs block mt-1" style={{ color: '#858585' }}>
                  {t.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
