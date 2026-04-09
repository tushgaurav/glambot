import Header from './Header';

// ── ADD YOUR VIDEO URLS HERE ──────────────────────────────────────────
const VIDEO_URLS = [
  'https://storage.googleapis.com/owlautomation/glambot/videos/lady1.MOV',
  'https://storage.googleapis.com/owlautomation/glambot/videos/girl2.MOV',
  'https://storage.googleapis.com/owlautomation/glambot/videos/girl1.MOV',
  'https://storage.googleapis.com/owlautomation/glambot/videos/deb.MOV',
  'https://storage.googleapis.com/owlautomation/glambot/videos/couple1.MOV',
  'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_2722%20(1).MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_2686.MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_2787.MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_2786.MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_2816.MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_0135.MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/IMG_2820.MOV',
'https://storage.googleapis.com/owlautomation/glambot/videos/c732a66e-4c28-456b-a66c-1dc9f3ed2452.mp4'
];
// ──────────────────────────────────────────────────────────────────────

function VideoCard({ src, index }: { src: string; index: number }) {
  const isAccent = index % 3 === 1;
  return (
    <div className="flex-shrink-0" style={{ width: '160px' }}>
      <div
        style={{
          border: '3px solid #000',
          borderTopColor: isAccent ? '#FF4D00' : '#000',
          borderTopWidth: isAccent ? '4px' : '3px',
          overflow: 'hidden',
        }}
      >
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            aspectRatio: '9/16',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}

function MarqueeRow({ videos, reverse }: { videos: string[]; reverse?: boolean }) {
  // Duplicate the list so the loop is seamless
  const doubled = [...videos, ...videos];
  return (
    <div className="marquee-track-container overflow-hidden">
      <div
        className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
        style={{ display: 'flex', gap: '16px', width: 'max-content' }}
      >
        {doubled.map((src, i) => (
          <VideoCard key={i} src={src} index={i % videos.length} />
        ))}
      </div>
    </div>
  );
}

interface HeroProps {
  heroRevealed: boolean;
}

export default function Hero({ heroRevealed }: HeroProps) {
  // Split videos into two rows for the marquee
  const mid = Math.ceil(VIDEO_URLS.length / 2);
  const row1 = VIDEO_URLS.length > 1 ? VIDEO_URLS.slice(0, mid) : VIDEO_URLS;
  const row2 = VIDEO_URLS.length > 1 ? VIDEO_URLS.slice(mid) : [];

  return (
    <section
      className="relative w-full min-h-screen flex flex-col"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <Header />

      {/* Title overlay — always on top */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-16 z-10 pointer-events-none"
      >
        <h1
          className={`font-anton leading-none tracking-tight pointer-events-auto ${heroRevealed ? 'hero-text-reveal' : ''}`}
          style={{
            fontSize: 'clamp(72px, 16vw, 280px)',
            color: '#000000',
            lineHeight: 0.9,
            clipPath: heroRevealed ? undefined : 'inset(0 100% 0 0)',
            whiteSpace: 'nowrap',
          }}
        >
          GLAMBOT<span style={{ color: '#FF4D00' }}>.</span>
        </h1>

        <div className="mt-4 md:mt-6 max-w-xl">
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

      {/* Video marquee — fills behind the title */}
      <div className="flex-1 flex flex-col justify-center gap-4 pt-28 pb-20 opacity-30 lg:opacity-40">
        <MarqueeRow videos={row1} />
        {row2.length > 0 && <MarqueeRow videos={row2} reverse />}
      </div>

    </section>
  );
}
