import { forwardRef } from 'react';

interface CallToActionProps {
  visible: boolean;
  statusText: string;
}

const CallToAction = forwardRef<HTMLElement, CallToActionProps>(({ visible, statusText }, ref) => {
  return (
    <section
      ref={ref}
      className={`relative py-20 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center ${visible ? 'section-visible' : 'section-hidden'}`}
      style={{ backgroundColor: '#000000' }}
    >
      <h2
        className="font-anton mb-8 md:mb-12"
        style={{
          fontSize: 'clamp(60px, 15vw, 220px)',
          color: '#FAFAFA',
          lineHeight: 0.9,
        }}
      >
        READY?
      </h2>

      <button
        className="cta-button font-mono-ibm text-sm md:text-base tracking-widest px-8 md:px-12 py-4 md:py-5 cursor-pointer"
        style={{
          border: '3px solid #FAFAFA',
          backgroundColor: 'transparent',
          color: '#FAFAFA',
        }}
      >
        INITIATE SESSION →
      </button>

      <p className="font-mono-ibm text-xs mt-8" style={{ color: '#858585' }}>
        SYSTEM STATUS: <span style={{ color: '#FF4D00' }}>{statusText}</span>
      </p>

      <div
        className="blink-cursor absolute"
        style={{
          width: '10px',
          height: '16px',
          backgroundColor: '#FF4D00',
          bottom: '32px',
          right: '32px',
        }}
      />
    </section>
  );
});

CallToAction.displayName = 'CallToAction';
export default CallToAction;
