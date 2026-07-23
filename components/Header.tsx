"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ConditionIcon from "@/components/ConditionIcon";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_CALLBACK_HREF } from "@/lib/contact";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/procedures", label: "Procedures" },
  { href: "/achievements", label: "Achievements" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/patient-resources", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const PROCEDURES = [
  { key: "piles", name: "Piles", href: "/piles-surgery" },
  { key: "hernia", name: "Hernia", href: "/hernia-repair" },
  { key: "gallbladder", name: "Gallbladder", href: "/gallbladder-removal" },
  { key: "fissure", name: "Fissure", href: "/fissure-treatment" },
  { key: "fistula", name: "Fistula", href: "/fistula-surgery" },
  { key: "appendix", name: "Appendix", href: "/appendix-surgery" },
  { key: "varicose-veins", name: "Varicose Veins", href: "/varicose-veins" },
] as const;

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center border border-teal-800/30 bg-teal-900 font-serif text-[15px] font-semibold italic text-white ${className}`}
    >
      HG
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const [mobileProceduresOpen, setMobileProceduresOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const measure = (href: string) => {
    const el = itemRefs.current[href];
    const nav = navRef.current;
    if (el && nav) {
      const elRect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setPillStyle({ left: elRect.left - navRect.left, width: elRect.width });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProceduresOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div
        className={`hidden overflow-hidden bg-slate-900 text-slate-300 transition-[max-height,opacity] duration-300 md:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 font-mono text-[11px] tracking-wide">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-400">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Basavanagudi, Bangalore
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-400">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {PHONE_DISPLAY}
            </span>
          </div>
          <span className="text-teal-400">Kannada &amp; English Spoken</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`border-b bg-stone-50/95 backdrop-blur transition-shadow ${
          scrolled ? "border-stone-300 shadow-[0_2px_12px_-4px_rgba(11,23,35,0.12)]" : "border-stone-200"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="h-10 w-10 text-base" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[18px] font-semibold tracking-tight text-slate-900">
                Dr. Harish Gowda
              </span>
              <span className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-teal-700">
                MS &middot; FMAS &middot; FIAGES
              </span>
            </span>
          </Link>

          <div
            ref={navRef}
            className="relative hidden items-center gap-0.5 lg:flex"
            onMouseLeave={() => {
              setHoveredHref(null);
              setPillStyle(null);
            }}
          >
            {/* sliding pill highlight — this is the actual "tab" feel, not just a color change */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-1 rounded-full bg-teal-800/8 transition-all duration-300 ease-out"
              style={{
                left: pillStyle?.left ?? 0,
                width: pillStyle?.width ?? 0,
                opacity: pillStyle ? 1 : 0,
              }}
            />
            {NAV_LINKS.map((link) => {
              const isProcedures = link.href === "/procedures";
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (isProcedures) setProceduresOpen(true);
                  }}
                >
                  <Link
                    ref={(el) => {
                      itemRefs.current[link.href] = el;
                    }}
                    href={link.href}
                    onMouseEnter={() => {
                      setHoveredHref(link.href);
                      measure(link.href);
                    }}
                    className={`relative z-10 flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                      isActive(link.href) ? "text-teal-800" : "text-stone-600 hover:text-teal-800"
                    }`}
                  >
                    {link.label}
                    {isProcedures && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${proceduresOpen ? "rotate-180" : ""}`}>
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {isProcedures && (
                    <div
                      className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                        proceduresOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                      onMouseLeave={() => setProceduresOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-1 border border-stone-200 bg-white p-3 shadow-elevate-lg">
                        {PROCEDURES.map((p) => (
                          <Link
                            key={p.href}
                            href={p.href}
                            className="flex items-center gap-3 rounded-md px-2.5 py-2 transition hover:bg-stone-50"
                          >
                            <ConditionIcon name={p.key} />
                            <span className="text-sm font-medium text-slate-900">{p.name}</span>
                          </Link>
                        ))}
                        <Link
                          href="/procedures"
                          className="col-span-2 mt-1 flex items-center justify-center gap-1 border-t border-stone-100 pt-2.5 text-xs font-medium text-teal-800"
                        >
                          View All Procedures &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100 hover:text-teal-800"
              aria-label="Call HIMAS Hospital"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href={WHATSAPP_CALLBACK_HREF}
              target="_blank"
              rel="noopener"
              className="rounded-md border border-emerald-700/40 px-4 py-2 text-[13px] font-medium text-emerald-800 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white hover:shadow-elevate"
            >
              Request a Callback
            </a>
            <a
              href="https://appt.link/meet-with-dr-harish-ns"
              target="_blank"
              rel="noopener"
              className="rounded-md bg-teal-800 px-4 py-2 text-[13px] font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-elevate"
            >
              Book Appointment
            </a>
          </div>

          <button
            className="relative flex h-9 w-9 items-center justify-center lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`absolute h-[1.5px] w-5 bg-slate-900 transition-transform duration-300 ${open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-[1.5px] w-5 bg-slate-900 transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-[1.5px] w-5 bg-slate-900 transition-transform duration-300 ${open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-t border-stone-200 bg-stone-50 transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="flex flex-col px-5 py-2">
            {NAV_LINKS.map((link, i) => {
              const isProcedures = link.href === "/procedures";
              return (
                <div
                  key={link.href}
                  style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                  className={`border-b border-stone-100 transition-all duration-300 last:border-0 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={link.href}
                      className={`text-[15px] ${isActive(link.href) ? "font-semibold text-teal-800" : "text-stone-700"}`}
                    >
                      {link.label}
                    </Link>
                    {isProcedures && (
                      <button
                        onClick={() => setMobileProceduresOpen((o) => !o)}
                        aria-label="Toggle procedures list"
                        className="p-2 text-stone-400"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${mobileProceduresOpen ? "rotate-180" : ""}`}>
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {isProcedures && (
                    <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${mobileProceduresOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
                      <div className="min-h-0 grid grid-cols-2 gap-1 overflow-hidden">
                        {PROCEDURES.map((p) => (
                          <Link key={p.href} href={p.href} className="rounded-md px-2 py-2 text-[13px] text-stone-600">
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="flex flex-col gap-2.5 px-5 pb-6 pt-1">
            <a
              href="https://appt.link/meet-with-dr-harish-ns"
              target="_blank"
              rel="noopener"
              className="rounded-md bg-teal-800 px-4 py-3 text-center text-sm font-medium text-white shadow-sm"
            >
              Book Appointment
            </a>
            <a
              href={WHATSAPP_CALLBACK_HREF}
              target="_blank"
              rel="noopener"
              className="rounded-md border border-emerald-700/40 px-4 py-3 text-center text-sm font-medium text-emerald-800"
            >
              Request a Callback
            </a>
            <a href={`tel:${PHONE_TEL}`} className="py-1.5 text-center font-mono text-xs text-stone-500">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
