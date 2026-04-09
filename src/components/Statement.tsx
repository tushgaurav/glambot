import { forwardRef } from 'react';

interface StatementProps {
  visible: boolean;
  snapped: boolean;
}

const Statement = forwardRef<HTMLElement, StatementProps>(({ visible, snapped }, ref) => {
  return (
    <section
      ref={ref}
      className={`relative py-20 md:py-32 lg:py-40 overflow-hidden ${visible ? 'section-visible' : 'section-hidden'} statement-section ${snapped ? 'statement-snapped' : ''}`}
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h2
          className="font-anton leading-none relative inline-block"
          style={{
            fontSize: 'clamp(40px, 10vw, 160px)',
            color: '#000000',
            lineHeight: 0.95,
          }}
        >
          YOUR MOMENT.<br />
          OUR MACHINE.
          <span
            className="block mt-2 md:mt-4"
            style={{
              width: '40%',
              height: '5px',
              backgroundColor: '#FF4D00',
            }}
          />
        </h2>
      </div>
    </section>
  );
});

Statement.displayName = 'Statement';
export default Statement;
