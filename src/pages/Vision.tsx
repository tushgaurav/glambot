import PageLayout from '../components/PageLayout';

const PRINCIPLES = [
  {
    id: '001',
    title: 'PRECISION OVER PERFECTION',
    desc: 'We don\'t chase aesthetic trends. We engineer exact outcomes. Every motion path is computed, every frame is intentional. The machine doesn\'t guess — it executes.',
  },
  {
    id: '002',
    title: 'ACCESSIBLE ROBOTICS',
    desc: 'Advanced robotics shouldn\'t be locked in factories. We bring industrial-grade 6-axis systems directly to people — at weddings, at events, in spaces where humans gather to celebrate.',
  },
  {
    id: '003',
    title: 'HUMAN + MACHINE',
    desc: 'The best results happen at the intersection of human expression and machine accuracy. We provide the apparatus. You provide the moment. The output is something neither could create alone.',
  },
  {
    id: '004',
    title: 'RAW OUTPUT',
    desc: 'No over-processing. No artificial enhancement. GlamBot footage is delivered as captured — cinematic by engineering, not by filter. The machine\'s output speaks for itself.',
  },
];

export default function Vision() {
  return (
    <PageLayout sectionId="VISION" sectionLabel="VISION">
      {/* Mission statement */}
      <div className="mb-16 md:mb-24">
        <div
          className="p-8 md:p-12"
          style={{ backgroundColor: '#000', color: '#FAFAFA' }}
        >
          <span className="font-mono-ibm text-xs tracking-widest block mb-6" style={{ color: '#858585' }}>
            MISSION STATEMENT
          </span>
          <h2 className="font-anton text-3xl md:text-5xl lg:text-6xl leading-none mb-6" style={{ color: '#FAFAFA' }}>
            BRING CINEMATIC ROBOTICS<br />
            TO EVERY EVENT<span style={{ color: '#FF4D00' }}>.</span>
          </h2>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed max-w-3xl" style={{ color: '#B0B0B0' }}>
            We believe every person deserves a moment captured with the precision and drama
            of a Hollywood production. Our mission is to deploy robotic motion capture
            systems at scale — making cinematic-quality content accessible, affordable,
            and unforgettable.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="mb-16 md:mb-24">
        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <span className="font-mono-ibm text-xs tracking-widest block mb-4" style={{ color: '#858585', letterSpacing: '0.3em' }}>
            VISION STATEMENT
          </span>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#000' }}>
            A future where robotic systems are a standard fixture at every major event —
            not as novelty, but as essential infrastructure. Where the line between
            professional film production and live event capture dissolves entirely.
            Where every guest walks away with content that looks like it was shot
            on a studio lot.
          </p>
        </div>
      </div>

      {/* Principles grid */}
      <div>
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          CORE PRINCIPLES
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ border: '3px solid #000' }}
        >
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.id}
              className="p-6 md:p-8"
              style={{
                borderRight: i % 2 === 0 ? '3px solid #000' : undefined,
                borderBottom: i < 2 ? '3px solid #000' : undefined,
              }}
            >
              <span className="font-anton text-4xl md:text-5xl block mb-2" style={{ color: '#000' }}>
                {p.id}
              </span>
              <span className="font-mono-ibm text-sm tracking-wider block mb-3" style={{ color: '#FF4D00' }}>
                {p.title}
              </span>
              <p className="font-mono-ibm text-xs leading-relaxed" style={{ color: '#858585' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
