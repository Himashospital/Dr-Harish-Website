export default function SectionGlow() {
  return (
    <>
      <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
      {["top-6 left-5 sm:left-8", "top-6 right-5 sm:right-8 [&>*]:ml-auto"].map(
        (pos, i) => (
          <div key={i} className={`pointer-events-none absolute ${pos} hidden sm:block`}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-white/25">
              <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1" />
              <path d="M9 0v4M9 14v4M0 9h4M14 9h4" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        ),
      )}
    </>
  );
}
