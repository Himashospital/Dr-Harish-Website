import type { Metadata } from "next";
import ConditionIcon from "@/components/ConditionIcon";
import Image from "next/image";
import TrustindexWidget from "@/components/TrustindexWidget";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionGlow from "@/components/SectionGlow";
import VideoTestimonial from "@/components/VideoTestimonial";
import { WHATSAPP_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Consultant Laparoscopic & GI Surgeon, Coloproctologist in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda treats piles, hernia, gallbladder and more with minimally invasive laparoscopic and laser surgery at HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/" },
  openGraph: {
    title: "Consultant Laparoscopic & GI Surgeon, Coloproctologist in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda treats piles, hernia, gallbladder and more with minimally invasive laparoscopic and laser surgery at HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/",
    type: "website",
  },
};

const CONDITIONS = [
  { n: "01", key: "piles", name: "Piles", href: "/piles-surgery", desc: "Painless laser piles treatment, same-day discharge." },
  { n: "02", key: "hernia", name: "Hernia", href: "/hernia-repair", desc: "Laparoscopic hernia repair for patients across South Bangalore." },
  { n: "03", key: "gallbladder", name: "Gallbladder", href: "/gallbladder-removal", desc: "Keyhole gallbladder surgery, home the same day." },
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
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Physician\", \"name\": \"Dr. Harish Gowda\", \"image\": \"https://drharishgowda.in/images/doctor/headshot.jpg\", \"telephone\": \"+917899824417\", \"medicalSpecialty\": [\"Surgery\", \"Gastrointestinal Surgery\", \"Laparoscopic Surgery\"], \"alumniOf\": [{\"@type\": \"CollegeOrUniversity\", \"name\": \"Bengaluru Medical College\"}, {\"@type\": \"CollegeOrUniversity\", \"name\": \"Mysore Medical College\"}], \"memberOf\": [\"Association of Surgeons of India\", \"Indian Association of Gastrointestinal Endo-Surgeons\", \"Association of Minimal Access Surgeons of India\"], \"award\": [\"Gold Medal, Diploma in Minimal Access Surgery, WALS\", \"Young Surgeon Award\"], \"worksFor\": {\"@type\": \"Hospital\", \"name\": \"HIMAS Hospital\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"No. 3 Kariyappa Road, Opp. Krishna Rao Park, Basavanagudi\", \"addressLocality\": \"Bangalore\", \"postalCode\": \"560004\", \"addressCountry\": \"IN\"}}, \"url\": \"https://drharishgowda.in\"}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"LocalBusiness\", \"name\": \"Dr. Harish Gowda \\u2014 HIMAS Hospital\", \"telephone\": \"+917899824417\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"No. 3 Kariyappa Road, Opp. Krishna Rao Park, Basavanagudi\", \"addressLocality\": \"Bangalore\", \"postalCode\": \"560004\", \"addressCountry\": \"IN\"}, \"areaServed\": [\"Basavanagudi\", \"Jayanagar\", \"JP Nagar\", \"Banashankari\", \"BTM Layout\", \"Bangalore\"], \"url\": \"https://drharishgowda.in\"}" }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-900 px-5 py-16 text-white sm:px-8 sm:py-24">
        <SectionGlow />
        <span aria-hidden className="display-bleed absolute -right-8 -top-10 text-[11rem] sm:-top-16 sm:text-[16rem]">01</span>
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400">
              Basavanagudi &middot; Jayanagar &middot; JP Nagar &middot; Banashankari
            </span>
            <h1 className="mt-5 font-serif text-[2.6rem] font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Consultant Laparoscopic &amp; <em className="italic text-teal-300">Gastrointestinal</em> Surgeon, Basavanagudi
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300">
              Dr. Harish Gowda treats piles, hernia, gallbladder, and other conditions patients often delay out of hesitation &mdash; with same-day discharge and minimal scarring, at HIMAS Hospital, Basavanagudi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://appt.link/meet-with-dr-harish-ns"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(184,121,46,0.6)] transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_14px_34px_-8px_rgba(184,121,46,0.7)]"
              >
                Book a Consultation
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-400"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
              <span>MS Gen. Surg</span>
              <span className="text-white/20">&middot;</span>
              <span>FMAS</span>
              <span className="text-white/20">&middot;</span>
              <span>FIAGES</span>
              <span className="text-white/20">&middot;</span>
              <span>EFIAGES</span>
              <span className="text-white/20">&middot;</span>
              <span>FACRSI</span>
              <span className="text-white/20">&middot;</span>
              <span>Gold Medalist, WALS</span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto max-w-[340px]">
              <div className="absolute -left-4 -top-4 h-full w-full border-2 border-teal-700/40 sm:-left-5 sm:-top-5" />
              <div className="relative h-[420px] w-full overflow-hidden rounded-sm border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:h-[460px]">
                <Image
                  src="/images/doctor/harish-sir.jpg"
                  alt="Dr.Harish Gowda at HIMAS Hospital, Basavanagudi"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 640px) 340px, 80vw"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-3 border border-teal-800/10 bg-white px-4 py-3 shadow-elevate-lg">
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-700">
                  HIMAS Hospital
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-b border-teal-950/20 bg-teal-900 py-3">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.14em] text-teal-200">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span>Same-Day Discharge</span>
              <span className="text-teal-500">&#9670;</span>
              <span>1,00,000+ Patients Treated</span>
              <span className="text-teal-500">&#9670;</span>
              <span>Founder &amp; Chief Surgeon, HIMAS Hospital</span>
              <span className="text-teal-500">&#9670;</span>
              <span>Kannada &amp; English Consultations</span>
              <span className="text-teal-500">&#9670;</span>
              <span>Gold Medalist, WALS</span>
              <span className="text-teal-500">&#9670;</span>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="border-b border-stone-200 bg-white px-5 py-10 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4 sm:divide-x sm:divide-stone-200">
            <div>
              <div className="font-mono text-3xl font-semibold text-teal-800">
                <AnimatedCounter target={24} suffix="+" />
              </div>
              <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-stone-500">Years Experience</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-semibold text-emerald-700">
                <AnimatedCounter target={100000} suffix="+" duration={1800} />
              </div>
              <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-stone-500">Patients Treated</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-semibold text-teal-800">1</div>
              <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-stone-500">Day Discharge</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-semibold text-emerald-700">100%</div>
              <div className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-stone-500">Personally Performed</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TRUST NARRATIVE */}
      <section className="px-5 py-16 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-700">The Practice</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A surgeon Basavanagudi has trusted for years
            </h2>
            <p className="mt-4 border-l-2 border-teal-800 pl-5 text-[15px] leading-relaxed text-stone-600">
              Dr. Harish Gowda is a Senior Laparoscopic and Gastrointestinal Surgeon with 24+ years of experience, and the Founder and Chief Surgeon at HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi. He specialises in minimally invasive surgery for conditions many patients put off out of fear or embarrassment, until they can&apos;t anymore &mdash; most procedures are completed in under an hour with same-day discharge and no large incisions. He is the only surgeon in Basavanagudi to run his own dedicated surgical hospital, and unlike large chain hospitals, every single procedure is performed by Dr. Harish Gowda personally, never delegated to a junior surgeon.
            </p>
            <a href="/about" className="link-underline mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-800">
              Read the full story &rarr;
            </a>
          </div>
        </Reveal>
      </section>

      {/* CONDITIONS — clickable card grid */}
      <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-700">Index of Conditions</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Conditions we treat</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CONDITIONS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="group relative flex flex-col border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_16px_30px_-12px_rgba(11,23,35,0.15)] sm:p-6"
              >
                <span className="font-mono text-[10px] text-stone-300">{c.n}</span>
                <div className="mt-3">
                  <ConditionIcon name={c.key} />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-slate-900">{c.name}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-stone-500">{c.desc}</p>
                <span className="mt-4 flex items-center gap-1 text-xs font-medium text-teal-800 opacity-0 transition group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="bg-stone-100 px-5 py-16 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-700">Patient Voices</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">What Our Patients Say</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-600">Real recoveries, in their own words, shared with consent.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { tag: "Piles Surgery", youtubeId: "FA00KLtJXpI" },
              { tag: "Hernia Repair", youtubeId: "FcWRu2MixXc" },
              { tag: "Gallbladder Surgery", youtubeId: "4CtP-kCb0D8" },
            ].map((slot) => (
              <VideoTestimonial key={slot.tag} youtubeId={slot.youtubeId} tag={slot.tag} />
            ))}
          </div>
          <p className="mt-7 text-center">
            <a href="/patient-stories" className="link-underline text-xs font-medium text-teal-800">
              Watch more patient stories &rarr;
            </a>
          </p>
        </Reveal>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-stone-100 px-5 py-16 sm:px-8">
        <Reveal>
          <span className="block text-center font-mono text-[11px] uppercase tracking-[0.2em] text-teal-700">Verified on Google</span>
          <h2 className="mt-3 text-center font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Rated Excellent on Google</h2>
          <div className="mx-auto mt-8 max-w-5xl">
            <TrustindexWidget />
          </div>
          <p className="mt-6 text-center">
            <a href="https://share.google/yH8m8mTSkXy8PTUvY" target="_blank" rel="noopener" className="link-underline text-xs font-medium text-teal-800">
              View Dr. Harish Gowda&apos;s full profile on Google &rarr;
            </a>
          </p>
        </Reveal>
      </section>

      {/* KANNADA STRIP */}
      <section className="border-y border-teal-900/10 bg-teal-900 px-5 py-10 text-center sm:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">Kannada &amp; English</span>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">ಕನ್ನಡದಲ್ಲಿ ಸಮಾಲೋಚನೆ ಲಭ್ಯವಿದೆ</h2>
        <p className="mt-2 text-sm text-teal-100">Explain your symptoms in the language you&apos;re most comfortable in.</p>
      </section>

      {/* ONLINE CONSULT CTA */}
      <section className="bg-slate-900 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-tight">Can&apos;t visit in person?</h3>
            <p className="mt-1 text-sm text-slate-300">Book a secure video consultation from anywhere in Bangalore or beyond.</p>
          </div>
          <a
            href="/online-consultation"
            className="shrink-0 rounded-md bg-amber-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-300"
          >
            Book Online Consultation
          </a>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t border-stone-200 bg-stone-50 px-5 py-12 text-center sm:px-8">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Serving Basavanagudi and South Bangalore</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
          Dr. Harish Gowda at HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi, is the nearest laparoscopic and GI surgeon for patients from Basavanagudi, Jayanagar, JP Nagar, Banashankari, BTM Layout, Girinagar, and Kanakapura Road. Same-week appointments and same-day emergency consultations available.
        </p>
      </section>
    </>
  );
}
