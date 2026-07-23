import Reveal from "@/components/Reveal";
import { WHATSAPP_HREF } from "@/lib/contact";

export default function CtaBand({
  heading = "Have a condition you've been putting off?",
  text = "A consultation costs you twenty minutes. Waiting costs more.",
  primaryLabel = "Book Appointment",
  primaryHref = "https://appt.link/meet-with-dr-harish-ns",
  primaryExternal = true,
  secondaryHref = WHATSAPP_HREF,
}: {
  heading?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-5 py-14 text-center text-white sm:px-8">
      <Reveal>
        <h2 className="mx-auto max-w-lg font-serif text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-300">{text}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={primaryHref}
            target={primaryExternal ? "_blank" : undefined}
            rel={primaryExternal ? "noopener" : undefined}
            className="rounded-md bg-amber-400 px-6 py-3 text-sm font-semibold text-white shadow-elevate transition hover:-translate-y-0.5 hover:bg-amber-300"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener"
            className="rounded-md border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
