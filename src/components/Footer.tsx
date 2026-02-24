export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: '4px solid #000000',
        backgroundColor: '#FAFAFA',
      }}
    >
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="flex justify-center items-center mb-10">
          <img src="/orangewood-black.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex justify-center items-center font-mono-ibm text-xs tracking-wider gap-4" style={{ color: '#858585' }}>
          <div>© {new Date().getFullYear()}</div>
          <div>ALL RIGHTS RESERVED</div>
        </div>

        {/* Orange square design element */}
        <div
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8"
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#FF4D00',
          }}
        />
      </div>
    </footer>
  );
}
