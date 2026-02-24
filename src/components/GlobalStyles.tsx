export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

      * {
        border-radius: 0 !important;
      }

      .font-anton {
        font-family: 'Anton', sans-serif;
      }

      .font-mono-ibm {
        font-family: 'IBM Plex Mono', monospace;
      }

      .font-space {
        font-family: 'Space Grotesk', sans-serif;
      }

      @keyframes heroClipReveal {
        0% { clip-path: inset(0 100% 0 0); }
        100% { clip-path: inset(0 0% 0 0); }
      }

      @keyframes cursorBlink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }

      .hero-text-reveal {
        clip-path: inset(0 100% 0 0);
        animation: heroClipReveal 0.4s ease-out forwards;
      }

      .blink-cursor {
        animation: cursorBlink 1s step-end infinite;
      }

      .section-hidden {
        opacity: 0;
      }

      .section-visible {
        opacity: 1;
      }

      .cta-button {
        transition: background-color 0.1s, color 0.1s;
      }

      .cta-button:hover {
        background-color: #FF4D00 !important;
        color: #000000 !important;
        border-color: #FF4D00 !important;
      }

      .menu-box:hover {
        background-color: #000000;
        color: #FAFAFA;
      }

      .statement-section {
        transform: rotate(0deg);
        transition: transform 0s;
      }

      .statement-snapped {
        transform: rotate(-3deg);
      }

      ::selection {
        background: #FF4D00;
        color: #000;
      }
    `}</style>
  );
}
