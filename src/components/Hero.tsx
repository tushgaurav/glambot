import Header from './Header';

interface HeroProps {
  heroRevealed: boolean;
  statusText: string;
}

export default function Hero({ heroRevealed, statusText }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <Header statusText={statusText} />

      {/* Blinking cursor */}
      <div
        className="blink-cursor absolute"
        style={{
          width: '12px',
          height: '20px',
          backgroundColor: '#FF4D00',
          top: '20%',
          right: '8%',
        }}
      />

      {/* Main hero text */}
      <div className="px-4 md:px-8 lg:px-16 mt-16 md:mt-0">
        <h1
          className={`font-anton leading-none tracking-tight ${heroRevealed ? 'hero-text-reveal' : ''}`}
          style={{
            fontSize: 'clamp(80px, 20vw, 300px)',
            color: '#000000',
            lineHeight: 0.9,
            clipPath: heroRevealed ? undefined : 'inset(0 100% 0 0)',
          }}
        >
          GLAMBOT<span style={{ color: '#FF4D00' }}>.</span>
        </h1>

        <div className="mt-4 md:mt-6">
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#000000',
              marginBottom: '12px',
            }}
          />
          <p
            className="font-mono-ibm text-xs md:text-sm tracking-widest"
            style={{ color: '#858585' }}
          >
            ROBOTIC MOTION CAPTURE SYSTEM // ORANGEWOOD LABS // EST. 2024
          </p>
        </div>
      </div>

      {/* Bottom coordinate markers */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
        [X:00 Y:00]
      </div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 font-mono-ibm text-xs" style={{ color: '#B0B0B0' }}>
        [X:FF Y:FF]
      </div>
    </section>
  );
}
