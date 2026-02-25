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
        <div className="flex flex-row-reverse items-center justify-between mb-10 gap-3">
          <img src="/orangewood-black.png" alt="Logo" className="h-8" />
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#FB651E"></rect><path d="M7.2 6.5L11.1 13.3V17.5H12.9V13.3L16.8 6.5H14.7L12 11.5L9.3 6.5H7.2Z" fill="white"></path></svg>
            <span
              className="text-xs tracking-wide"
              style={{ color: '#858585' }}
            >
              Backed by Y Combinator
            </span>
          </div>
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
