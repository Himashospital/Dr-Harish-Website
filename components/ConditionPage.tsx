import ConditionIcon from "@/components/ConditionIcon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { WHATSAPP_HREF } from "@/lib/contact";

type ConditionKey =
  | "piles"
  | "hernia"
  | "gallbladder"
  | "fissure"
  | "fistula"
  | "appendix"
  | "varicose-veins";

export type TimelineStep = { label: string; text: string };
export type Faq = { q: string; a: string };
export type RelatedLink = { href: string; text: string };

export type ConditionPageData = {
  icon: ConditionKey;
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  symptoms: string[];
  practiceHeading: string;
  practiceNote: string;
  treatmentHeading: string;
  treatmentNote: string;
  timeline: TimelineStep[];
  faqs: Faq[];
  related: RelatedLink[];
  schemas: string[];
  cta?: {
    heading: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

export default function ConditionPage({ data }: { data: ConditionPageData }) {
  const {
    icon,
    breadcrumbLabel,
    eyebrow,
    title,
    description,
    symptoms,
    practiceHeading,
    practiceNote,
    treatmentHeading,
    treatmentNote,
    timeline,
    faqs,
    related,
    schemas,
    cta,
  } = data;

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: s }} />
      ))}

      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a>
        <span>/</span>
        <a href="/procedures" className="hover:text-teal-800">Procedures</a>
        <span>/</span>
        <span className="text-stone-600">{breadcrumbLabel}</span>
      </div>

      <PageHero eyebrow={eyebrow} title={title} description={description} bleed={breadcrumbLabel.split(" ")[0].toUpperCase()}>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-3">
            <a href="https://appt.link/meet-with-dr-harish-ns" target="_blank" rel="noopener" className="flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-white shadow-elevate transition hover:-translate-y-0.5 hover:bg-amber-300">Book a Consultation</a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-400">Chat on WhatsApp</a>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
            <ConditionIcon name={icon} />
          </div>
        </div>
      </PageHero>

      <section className="border-y border-stone-200 bg-white px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Do you have these symptoms?</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[15px] text-stone-600">
                  <span className="mt-0.5 font-mono text-teal-700">&#10003;</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl border-l-2 border-teal-800 pl-6">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">{practiceHeading}</h2>
            <p className="mt-3 text-[16px] italic leading-relaxed text-stone-600">{practiceNote}</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">{treatmentHeading}</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-stone-600">{treatmentNote}</p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <Reveal>
          <h2 className="text-center font-serif text-2xl font-semibold tracking-tight text-slate-900">Recovery timeline</h2>
          <div className="mx-auto mt-9 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {timeline.map((t, i) => (
              <div key={t.label} className="border-t-2 border-teal-800 pt-3 text-center">
                <p className="font-mono text-xs font-semibold text-teal-800">{String(i + 1).padStart(2, "0")} &middot; {t.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-stone-500">{t.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h2>
            <div className="mt-6 border-t border-stone-200">
              {faqs.map((faq, i) => (
                <div data-faq key={faq.q} className="border-b border-stone-200">
                  <button className="flex w-full items-center justify-between gap-4 py-4 text-left">
                    <span className="text-sm font-medium text-slate-900">{faq.q}</span>
                    <span data-icon className="shrink-0 font-mono text-teal-800">{i === 0 ? "\u2013" : "+"}</span>
                  </button>
                  <p data-panel className={`${i === 0 ? "" : "hidden "}pb-4 text-sm leading-relaxed text-stone-600`}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand
        heading={cta?.heading}
        text={cta?.text}
        primaryLabel={cta?.primaryLabel}
        primaryHref={cta?.primaryHref}
        primaryExternal={!cta}
      />

      <section className="grid grid-cols-1 gap-3 px-5 py-8 sm:mx-auto sm:max-w-3xl sm:grid-cols-2 sm:px-8">
        <Reveal className="contents">
          {related.map((r) => (
            <a key={r.href} href={r.href} className="rounded-md border border-stone-200 p-4 text-sm text-stone-600 transition hover:border-teal-800 hover:shadow-elevate">
              {r.text}
            </a>
          ))}
        </Reveal>
      </section>
    </>
  );
}
