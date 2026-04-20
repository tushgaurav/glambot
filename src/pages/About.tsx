import PageLayout from '../components/PageLayout';

const TIMELINE = [
  { year: '2024', event: 'GLAMBOT CONCEPT INITIATED', detail: 'First prototype built on Orangewood\'s 6-axis platform.' },
  { year: '2024', event: 'MOTION PATH ENGINE V1', detail: 'Custom trajectory planning software deployed.' },
  { year: '2025', event: 'FIRST PUBLIC EVENT', detail: 'Live deployment at a 500+ person event in Bangalore.' },
  { year: '2026', event: 'COMMERCIAL LAUNCH', detail: 'Full event service now available across India.' },
];

const TECH = [
  { name: '6-AXIS ROBOTIC ARM', desc: 'Not a gimbal. Not a crane. A full industrial collaborative robot with 6 degrees of freedom and 1.2m reach. Rated for human-proximity operation at live events.' },
  { name: 'MOTION PATH ENGINE', desc: 'Custom trajectory planning software computes smooth B-spline camera paths around subjects. Every movement is pre-calculated — no joystick, no guesswork, no human error.' },
  { name: 'REAL-TIME PROCESSING', desc: 'On-site GPU-accelerated edge compute processes 4K footage in real time. Videos are color-graded, stabilized, and ready within 60 seconds of capture.' },
  { name: 'INSTANT DELIVERY', desc: 'QR-code based delivery kiosk at the venue. Guests scan, receive their processed video via link, and share to social — all before they leave the event.' },
];

export default function About() {
  return (
    <PageLayout sectionId="ABOUT" sectionLabel="ABOUT">
      {/* Manifesto */}
      <div className="mb-16 md:mb-24">
        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#000' }}>
            GlamBot is a cinematic robotic capture system built by Orangewood Labs. It uses a precision-engineered
            6-axis industrial robotic arm to capture dramatic slow-motion portrait videos at live events. This is
            not a camera rig. Not a gimbal hack. It's a real collaborative robot — the same class of machine that
            assembles components on factory floors — repurposed for red carpets, wedding stages, brand launches,
            galas, and corporate events. The arm orbits around subjects executing pre-computed cinematic trajectories
            that no human camera operator could replicate.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#858585' }}>
            Born out of Orangewood Labs' mission to make robotics accessible, GlamBot proves that industrial-grade
            machines can create art. Every motion path is pre-computed. Every frame is intentional. Every subject
            walks away feeling like the star of their own movie. The machine has no ego, no fatigue, no shaky
            hands — it just executes, with surgical precision, every single time.
          </p>
        </div>
      </div>

      {/* Orangewood Labs */}
      <div className="mb-16 md:mb-24">
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          ORANGEWOOD LABS
        </h3>
        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#858585' }}>
            Orangewood Labs is a Y Combinator-backed robotics company headquartered in Bangalore, India. Founded
            with the belief that robotic arms shouldn't cost a fortune or require a PhD to operate, Orangewood
            builds AI-powered collaborative robotic arms that are affordable, safe, and designed to work alongside
            humans — not behind safety cages.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#858585' }}>
            Their robots are deployed across manufacturing, research labs, educational institutions, and now
            entertainment. GlamBot is the consumer-facing expression of years of R&D in motion planning, safety
            systems, and real-time robotic control. Every lesson learned from thousands of hours of industrial
            deployment is baked into the system that captures your 10-second cinematic moment.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4">
            <a
              href="https://www.orangewood.co/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FF4D00', textDecoration: 'none' }}
            >
              orangewood.co →
            </a>
          </p>
        </div>
      </div>

      {/* RoboGPT */}
      <div className="mb-16 md:mb-24">
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          ROBOGPT
        </h3>
        <div
          className="p-6 md:p-8"
          style={{ border: '3px solid #000' }}
        >
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#858585' }}>
            RoboGPT is Orangewood's AI system that lets anyone command a robotic arm using natural language. Tell
            the robot what you want it to do — in plain English — and it figures out the motion plan, the joint
            trajectories, and the collision-free path to get there. No programming required.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#858585' }}>
            The same motion-planning intelligence that powers RoboGPT is what drives GlamBot's cinematic camera
            movements. Instead of typing commands, event operators select from a library of pre-designed motion
            profiles — sweeping arcs, dramatic reveals, orbital passes — and the arm executes them with
            sub-millimeter precision. It's the same brain, different stage.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4">
            <a
              href="https://www.youtube.com/@robogpt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#FF4D00', textDecoration: 'none' }}
            >
              Watch RoboGPT on YouTube →
            </a>
          </p>
        </div>
      </div>

      {/* The Technology */}
      <div className="mb-16 md:mb-24">
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          THE TECHNOLOGY
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ border: '3px solid #000' }}
        >
          {TECH.map((t, i) => (
            <div
              key={t.name}
              className="p-6 md:p-8"
              style={{
                borderRight: i % 2 === 0 ? '3px solid #000' : undefined,
                borderBottom: i < 2 ? '3px solid #000' : undefined,
              }}
            >
              <span className="font-anton text-xl md:text-2xl block mb-3" style={{ color: '#000' }}>
                {t.name}
              </span>
              <p className="font-mono-ibm text-xs leading-relaxed" style={{ color: '#858585' }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why It Exists */}
      <div className="mb-16 md:mb-24">
        <h3
          className="font-mono-ibm text-xs tracking-widest mb-8 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000' }}
        >
          WHY IT EXISTS
        </h3>
        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#858585' }}>
            Traditional event photography is static and predictable. The same poses, the same angles, the same
            flat lighting. A photographer can only move so fast, hold a camera so steady, and be in so many
            places at once. The results are fine — but they're never cinematic.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#858585' }}>
            Hollywood has used robotic camera systems for decades. The bullet-time rigs in The Matrix. The
            motion-control systems behind every Marvel VFX shot. But those rigs cost millions of dollars, need
            dedicated crews of specialists, and fill entire soundstages. They were never designed for a wedding
            in Bangalore or a product launch in Mumbai.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#000' }}>
            GlamBot collapses that gap. Industrial-grade robotic precision, packed into a portable rig that sets
            up in 45 minutes. Every person who steps in front of it gets a cinematic moment that no human camera
            operator could replicate. Ten seconds of footage that makes ordinary people look extraordinary.
          </p>
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
