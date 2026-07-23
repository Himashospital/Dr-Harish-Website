import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-slate-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-teal-400/30 bg-teal-900 font-serif text-[13px] font-semibold italic text-white">HG</span>
            <span className="font-serif text-lg font-semibold text-white">Dr. Harish Gowda</span>
          </div>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-teal-400">
            MS &middot; FMAS &middot; FIAGES &middot; EFIAGES
          </p>
          <div className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed">
            <span className="mt-0.5 text-teal-400">&#128205;</span>
            <span>
              HIMAS Hospital, No. 3 Kariyappa Road, Opp. Krishna Rao Park,
              Basavanagudi, Bangalore 560004
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-2.5 text-sm">
            <span className="text-teal-400">&#128222;</span>
            <a href={`tel:${PHONE_TEL}`} className="font-mono text-[13px] hover:text-white">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/dr.harishgowda/"
              target="_blank"
              rel="noopener"
              aria-label="Dr. Harish Gowda on Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-stone-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/drharishns"
              target="_blank"
              rel="noopener"
              aria-label="Dr. Harish Gowda on Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-stone-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8.2h2.7l.4-3.2h-3.1V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1C16.5 3 15.5 3 14.4 3c-2.4 0-4 1.5-4 4.1v2.5H7.7v3.2h2.7V21h3.1z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@harishans2841"
              target="_blank"
              rel="noopener"
              aria-label="Dr. Harish Gowda on YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-stone-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dr-harish-gowda-48646b129/"
              target="_blank"
              rel="noopener"
              aria-label="Dr. Harish Gowda on LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-stone-300 transition hover:border-teal-400 hover:text-teal-400"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3zM20.45 21h-3.37v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V21h-3.37V8.5h3.24v1.71h.05c.45-.86 1.56-1.77 3.2-1.77 3.43 0 4.06 2.26 4.06 5.2V21z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Sitemap
          </span>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="link-underline hover:text-white">About</Link></li>
            <li><Link href="/procedures" className="link-underline hover:text-white">Procedures</Link></li>
            <li><Link href="/achievements" className="link-underline hover:text-white">Achievements</Link></li>
            <li><Link href="/patient-stories" className="link-underline hover:text-white">Patient Stories</Link></li>
            <li><Link href="/blog" className="link-underline hover:text-white">Blog</Link></li>
            <li><Link href="/patient-resources" className="link-underline hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="link-underline hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
            Legal
          </span>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/privacy-policy" className="link-underline hover:text-white">Privacy Policy</Link></li>
          </ul>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-stone-500">
            Related
          </span>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="https://himashospital.in" className="link-underline hover:text-white">
                HIMAS Hospital facility site &rarr;
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 sm:px-8">
        <p className="mx-auto max-w-6xl font-mono text-[11px] text-stone-500">
          &copy; {new Date().getFullYear()} Dr. Harish Gowda &middot; HIMAS Hospital, Basavanagudi
        </p>
      </div>
    </footer>
  );
}
