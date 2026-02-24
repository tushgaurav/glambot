export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 md:p-8 z-10">
      <img src="/orangewood-black.png" alt="Logo" className="h-8" />
      <button
        className="menu-box font-space text-sm md:text-base font-semibold px-4 py-2 tracking-wider"
        style={{
          border: '3px solid #000000',
          backgroundColor: 'transparent',
          color: '#000000',
          cursor: 'pointer',
          transition: 'background-color 0.1s, color 0.1s',
        }}
      >
        MENU
      </button>
    </div>
  );
}
