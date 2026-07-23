import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ConditionIcon from "@/components/ConditionIcon";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Procedures | Laparoscopic Surgery in Basavanagudi | Dr. Harish Gowda",
  description: "Overview of seven laparoscopic and laser procedures performed by Dr. Harish Gowda at HIMAS Hospital, Basavanagudi: piles, hernia, gallbladder, fissure, fistula, appendix, varicose veins.",
  alternates: { canonical: "https://drharishgowda.in/procedures" },
  openGraph: {
    title: "Procedures | Laparoscopic Surgery in Basavanagudi | Dr. Harish Gowda",
    description: "Overview of seven laparoscopic and laser procedures performed by Dr. Harish Gowda at HIMAS Hospital, Basavanagudi: piles, hernia, gallbladder, fissure, fistula, appendix, varicose veins.",
    url: "https://drharishgowda.in/procedures",
    type: "website",
  },
};

const PROCEDURES = [
  { n: "01", key: "piles", name: "Piles", href: "/piles-surgery", desc: "Painless laser piles treatment in Basavanagudi, same-day discharge." },
  { n: "02", key: "hernia", name: "Hernia", href: "/hernia-repair", desc: "Laparoscopic hernia repair for patients across South Bangalore." },
  { n: "03", key: "gallbladder", name: "Gallbladder", href: "/gallbladder-removal", desc: "Keyhole gallbladder surgery near Basavanagudi, home the same day." },
  { n: "04", key: "fissure", name: "Fissure", href: "/fissure-treatment", desc: "Laser fissure treatment for patients in Jayanagar and JP Nagar." },
  { n: "05", key: "fistula", name: "Fistula", href: "/fistula-surgery", desc: "Complex fistula surgery, trusted across South Bangalore." },
  { n: "06", key: "appendix", name: "Appendix", href: "/appendix-surgery", desc: "Emergency laparoscopic appendix surgery in Basavanagudi." },
  { n: "07", key: "varicose-veins", name: "Varicose Veins", href: "/varicose-veins", desc: "Laser varicose vein treatment near Banashankari and BTM Layout." },
] as const;

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Procedures</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="07"
        eyebrow="Procedures in Basavanagudi, Bangalore"
        title={<>Seven Conditions. <em className="italic text-teal-300">One Surgeon.</em></>}
        description="Every procedure below is performed by Dr. Harish Gowda himself at HIMAS Hospital, Basavanagudi, using minimally invasive laparoscopic and laser techniques."
      />

      <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {PROCEDURES.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="group relative flex flex-col border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-elevate sm:p-6"
              >
                <span className="font-mono text-[10px] text-stone-300">{p.n}</span>
                <div className="mt-3">
                  <ConditionIcon name={p.key} />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-stone-500">{p.desc}</p>
                <span className="mt-4 flex items-center gap-1 text-xs font-medium text-teal-800 opacity-0 transition group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">How surgery day works</h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">01 &middot; Consultation</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">Dr. Harish Gowda examines you and explains your options in Kannada or English.</p></div>
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">02 &middot; Pre-surgery workup</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">Basic tests are arranged, most completed within the hospital.</p></div>
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">03 &middot; Procedure</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">Most surgeries are completed in under an hour.</p></div>
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">04 &middot; Same-day discharge</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">Most patients go home the same day, with clear recovery instructions.</p></div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
