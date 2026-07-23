import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Achievements & Recognition | Dr. Harish Gowda",
  description: "Gold Medal, Young Surgeon Award, WORLDCON 2027, and the fellowships and academic roles held by Dr. Harish Gowda.",
  alternates: { canonical: "https://drharishgowda.in/achievements" },
  openGraph: {
    title: "Achievements & Recognition | Dr. Harish Gowda",
    description: "Gold Medal, Young Surgeon Award, WORLDCON 2027, and the fellowships and academic roles held by Dr. Harish Gowda.",
    url: "https://drharishgowda.in/achievements",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Achievements\", \"item\": \"https://drharishgowda.in/achievements.html\"}]}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Event\", \"name\": \"WORLDCON 2027\", \"organizer\": \"International Society of Coloproctology\", \"performer\": {\"@type\": \"Person\", \"name\": \"Dr. Harish Gowda\"}}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Achievements</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="24+"
        eyebrow="Recognition"
        title={<>Achievements &amp; <em className="italic text-teal-300">Recognition</em></>}
      />

      <section className="border-y border-stone-200 bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 border-t border-stone-200 sm:grid-cols-2">
            {[
              { title: "Gold Medal, Diploma in Minimal Access Surgery", sub: "World Association of Laparoscopic Surgeons" },
              { title: "Young Surgeon Award", sub: "[Awarding body and year pending verification]" },
              { title: "Organising Chairman, WORLDCON 2027", sub: "In association with the International Society of Coloproctology" },
              { title: "President, Surgical Society of Bangalore", sub: "Current leadership role" },
            ].map((item, i) => (
              <div key={item.title} className={`border-b border-stone-200 py-5 pr-6 ${i % 2 === 0 ? "sm:border-r" : "sm:pl-6"}`}>
                <p className="font-mono text-xs text-teal-700">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs text-stone-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">Fellowships</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">FMAS</span> — Fellow, Association of Minimal Access Surgeons of India</li>
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">FIAGES</span> — Fellow, Indian Association of Gastrointestinal Endo-Surgeons</li>
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">EFIAGES</span> — Endoscopy Fellow, Indian Association of Gastro Intestinal Endosurgeons</li>
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">FALS</span> — Fellow in Advanced Laparoscopic Surgery, IAGES</li>
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">FACRSI</span> — Fellow, Association of Colon and Rectal Surgeons of India</li>
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">FAMAS</span> — Fellow, American Association of Minimal Access Surgeons</li>
              <li className="text-sm text-stone-600"><span className="font-mono text-xs font-semibold text-teal-800">FCLS</span> — Fellow, College of Laparoscopic Surgeons</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="bg-stone-100 px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <span className="block text-center font-mono text-[11px] uppercase tracking-[0.2em] text-teal-700">A Career In Frames</span>
            <h2 className="mt-2 text-center font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Moments along the way</h2>
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {[
                { src: "/images/achievements/award-2-surgeons-day-2026.jpg", alt: "Surgeons Day 2026, Surgical Society of Bangalore" },
                { src: "/images/achievements/award-7-procto-surg-2024.jpg", alt: "Speaking at Procto-Surg 2024, HIMAS" },
                { src: "/images/achievements/award-8-iages-2017.jpg", alt: "14th National Congress of IAGES, 2017" },
                { src: "/images/achievements/award-4-amasicon-2015.jpg", alt: "AMASICON 2015, Mumbai" },
                { src: "/images/achievements/award-6-gem-hospital-cert.jpg", alt: "HPB Surgery course certification, GEM Hospital" },
                { src: "/images/achievements/award-3-with-mentor.jpg", alt: "With mentor surgeon" },
                { src: "/images/achievements/award-5-conference-mentor.jpg", alt: "With mentor at a surgical conference" },
                { src: "/images/achievements/award-1-group-event.jpg", alt: "At a surgical fraternity event" },
              ].map((img) => (
                <div key={img.src} className="group relative aspect-square overflow-hidden border border-stone-300 bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
