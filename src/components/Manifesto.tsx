import { forwardRef } from 'react';

interface ManifestoProps {
  visible: boolean;
}

const Manifesto = forwardRef<HTMLElement, ManifestoProps>(({ visible }, ref) => {
  return (
    <section
      ref={ref}
      className={`relative py-16 md:py-24 lg:py-32 ${visible ? 'section-visible' : 'section-hidden'}`}
      style={{ backgroundColor: '#000000', color: '#FAFAFA' }}
    >
      <div className="px-4 md:px-8 lg:px-16 max-w-5xl">
        <h2
          className="font-anton text-4xl md:text-6xl lg:text-8xl leading-none mb-8 md:mb-12"
          style={{ color: '#FAFAFA' }}
        >
          WE DON'T DO PRETTY.<br />
          WE DO PRECISE.
        </h2>

        <div className="pl-4 md:pl-8" style={{ borderLeft: '4px solid #FF4D00' }}>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed" style={{ color: '#B0B0B0' }}>
            GlamBot strips away the unnecessary. No filters. No gimmicks.
            Just a precision-engineered 6-axis robotic arm executing calculated
            motion paths to capture you in cinematic clarity. The machine doesn't
            flatter — it documents. Raw movement. Real moments. Captured with
            surgical precision by a system that doesn't know how to be anything
            other than exact.
          </p>
          <p className="font-mono-ibm text-sm md:text-base leading-relaxed mt-4" style={{ color: '#B0B0B0' }}>
            Every trajectory is computed. Every frame is intentional.
            This is motion capture reduced to its essential truth —
            the intersection of human expression and machine accuracy.
          </p>
        </div>
      </div>
    </section>
  );
});

Manifesto.displayName = 'Manifesto';
export default Manifesto;
