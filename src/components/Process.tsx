import { forwardRef } from 'react';

interface ProcessProps {
  visible: boolean;
}

const steps = [
  {
    num: '001',
    label: 'ENTER THE ZONE',
    bg: '#000000',
    text: '#FAFAFA',
    dash: '#858585',
    borderLeft: '5px solid #FF4D00',
  },
  {
    num: '002',
    label: 'EXECUTE YOUR MOMENT',
    bg: '#FAFAFA',
    text: '#000000',
    dash: '#B0B0B0',
    border: '3px solid #000000',
    borderLeft: '5px solid #000000',
    marginTop: '-3px',
  },
  {
    num: '003',
    label: 'RECEIVE OUTPUT',
    bg: '#FF4D00',
    text: '#000000',
    dash: '#000000',
    borderLeft: '5px solid #000000',
    marginTop: '-3px',
  },
];

const Process = forwardRef<HTMLElement, ProcessProps>(({ visible }, ref) => {
  return (
    <section
      ref={ref}
      className={`relative py-16 md:py-24 lg:py-32 ${visible ? 'section-visible' : 'section-hidden'}`}
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h3
          className="font-mono-ibm text-xs md:text-sm tracking-widest mb-12 md:mb-16 font-semibold"
          style={{ letterSpacing: '0.3em', color: '#000000' }}
        >
          HOW_IT_WORKS
        </h3>

        <div className="flex flex-col gap-0">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-center px-4 md:px-8 py-6 md:py-8"
              style={{
                backgroundColor: step.bg,
                borderLeft: step.borderLeft,
                ...(step.border ? { border: step.border } : {}),
                ...(step.marginTop ? { marginTop: step.marginTop } : {}),
              }}
            >
              <span className="font-anton text-2xl md:text-4xl lg:text-5xl mr-4 md:mr-8" style={{ color: step.text }}>
                {step.num}
              </span>
              <span className="font-mono-ibm text-xs md:text-sm tracking-wider hidden md:inline" style={{ color: step.dash }}>
                —————
              </span>
              <span className="font-mono-ibm text-sm md:text-lg lg:text-xl ml-2 md:ml-8 tracking-wider" style={{ color: step.text }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
          [CYCLE_TIME: ~180s] [MODE: AUTONOMOUS]
        </div>
      </div>
    </section>
  );
});

Process.displayName = 'Process';
export default Process;
