import SectionGlow from "@/components/SectionGlow";
import Reveal from "@/components/Reveal";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  bleed,
  align = "left",
  size = "md",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Oversized faint background word/numeral for the bold asymmetric layout, e.g. "01" or a condition name. */
  bleed?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  children?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <section className="relative overflow-hidden bg-slate-900 px-5 py-14 text-white sm:px-8 sm:py-20">
      <SectionGlow />
      {bleed && (
        <span
          aria-hidden
          className={`display-bleed absolute select-none whitespace-nowrap text-[9rem] sm:text-[13rem] ${
            centered ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" : "-right-4 -top-6 sm:-top-10"
          }`}
        >
          {bleed}
        </span>
      )}
      <Reveal className={`relative ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal-400">{eyebrow}</span>
        <h1
          className={`mt-4 font-serif font-semibold leading-[0.98] tracking-tight text-white ${
            size === "lg" ? "text-[2.6rem] sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className={`mt-5 text-[15px] leading-relaxed text-slate-300 ${centered ? "mx-auto max-w-xl" : "max-w-md"}`}>
            {description}
          </p>
        )}
        {children}
      </Reveal>
    </section>
  );
}
