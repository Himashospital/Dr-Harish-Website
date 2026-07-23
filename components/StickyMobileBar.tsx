import { PHONE_TEL, WHATSAPP_HREF } from "@/lib/contact";

export default function StickyMobileBar() {
  return (
    <div className="sticky bottom-0 z-30 grid grid-cols-3 border-t border-stone-200 bg-white sm:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-slate-800"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener"
        className="flex flex-col items-center justify-center gap-1 border-l border-r border-stone-200 py-2.5 text-[11px] font-medium text-emerald-700"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 8.24 8.24c0 4.55-3.7 8.24-8.24 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.24-8.24" />
        </svg>
        WhatsApp
      </a>
      <a
        href="https://appt.link/meet-with-dr-harish-ns"
        target="_blank"
        rel="noopener"
        className="flex flex-col items-center justify-center gap-1 bg-teal-800 py-2.5 text-[11px] font-medium text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        Book
      </a>
    </div>
  );
}
