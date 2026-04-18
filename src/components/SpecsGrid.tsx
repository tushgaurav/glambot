import { forwardRef } from 'react';

interface SpecsGridProps {
  visible: boolean;
}

const specs = [
  { id: 'AXIS', value: '6 AXIS', label: 'ROBOTIC ARM FREEDOM' },
  { id: 'RANGE', value: '280°', label: 'COVERAGE ARC' },
  { id: 'VIDEO', value: '4K/240', label: 'CAPTURE RESOLUTION', accent: true },
  { id: 'DELIVERY', value: '< 5 MIN', label: 'PROCESSING TIME' },
];

const SpecsGrid = forwardRef<HTMLElement, SpecsGridProps>(({ visible }, ref) => {
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
          TECHNICAL SPECIFICATIONS
        </h3>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative"
          style={{ border: '3px solid #000000' }}
        >
            {specs.map((spec, i) => (
              <div
                key={spec.id}
                className="p-6 md:p-8 relative"
                style={{
                  borderRight: i < 3 ? '3px solid #000000' : undefined,
                  borderBottom: '3px solid #000000',
                  ...(spec.accent ? { borderTop: '4px solid #FF4D00' } : {}),
                }}
              >
                <span className="font-mono-ibm text-xs font-medium block mb-4" style={{ color: '#858585' }}>
                  {spec.id}
                </span>
                <span className="font-anton text-4xl md:text-5xl lg:text-6xl block mb-2" style={{ color: '#000000' }}>
                  {spec.value}
                </span>
                <span className="font-mono-ibm text-xs tracking-wider block" style={{ color: '#858585' }}>
                  {spec.label}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
});

SpecsGrid.displayName = 'SpecsGrid';
export default SpecsGrid;
