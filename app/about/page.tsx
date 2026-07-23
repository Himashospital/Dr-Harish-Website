import type { Metadata } from "next";
import Tag from "@/components/Tag";
import SectionGlow from "@/components/SectionGlow";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Dr. Harish Gowda | Laparoscopic & GI Surgeon, Basavanagudi",
  description: "Biography, fellowships, awards, and career history of Dr. Harish Gowda, Founder and Chief Surgeon at HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/about" },
  openGraph: {
    title: "About Dr. Harish Gowda | Laparoscopic & GI Surgeon, Basavanagudi",
    description: "Biography, fellowships, awards, and career history of Dr. Harish Gowda, Founder and Chief Surgeon at HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/about",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Physician\", \"name\": \"Dr. Harish Gowda\", \"image\": \"https://drharishgowda.in/images/doctor/headshot.jpg\", \"telephone\": \"+917899824417\", \"medicalSpecialty\": [\"Surgery\", \"Gastrointestinal Surgery\", \"Laparoscopic Surgery\"], \"alumniOf\": [{\"@type\": \"CollegeOrUniversity\", \"name\": \"Bengaluru Medical College\"}, {\"@type\": \"CollegeOrUniversity\", \"name\": \"Mysore Medical College\"}], \"memberOf\": [\"Association of Surgeons of India\", \"Indian Association of Gastrointestinal Endo-Surgeons\", \"Association of Minimal Access Surgeons of India\"], \"award\": [\"Gold Medal, Diploma in Minimal Access Surgery, WALS\", \"Young Surgeon Award\"], \"worksFor\": {\"@type\": \"Hospital\", \"name\": \"HIMAS Hospital\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"No. 3 Kariyappa Road, Opp. Krishna Rao Park, Basavanagudi\", \"addressLocality\": \"Bangalore\", \"postalCode\": \"560004\", \"addressCountry\": \"IN\"}}, \"url\": \"https://drharishgowda.in\"}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://drharishgowda.in/about.html\"}]}" }}
      />

      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">About</span>
      </div>

      <section className="relative overflow-hidden bg-slate-900 px-5 py-12 text-white sm:px-8 sm:py-16">
        <SectionGlow />
        <Reveal className="relative">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-[260px]">
              <div className="relative h-80 w-full overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <Image
                  src="/images/doctor/harish-sir.jpg"
                  alt="Dr. Harish Gowda at his office desk, HIMAS Hospital"
                  fill
                  priority
                  className="object-cover"
                  sizes="260px"
                />
              </div>
              <div className="absolute -bottom-3 left-3 right-3 border border-teal-800/10 bg-white px-3 py-2 text-center shadow-lg">
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-700">Founder &amp; Chief Surgeon</span>
              </div>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-400">About Dr. Harish Gowda, Basavanagudi</span>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl">Meet the surgeon behind <em className="italic text-teal-300">HIMAS Hospital</em></h1>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">Founder and Chief Surgeon, HIMAS Hospital, Basavanagudi.</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                <span>MS Gen. Surg</span><span className="text-white/20">&middot;</span>
                <span>FMAS</span><span className="text-white/20">&middot;</span>
                <span>FIAGES</span><span className="text-white/20">&middot;</span>
                <span>EFIAGES</span><span className="text-white/20">&middot;</span>
                <span>FALS</span><span className="text-white/20">&middot;</span>
                <span>FACRSI</span><span className="text-white/20">&middot;</span>
                <span>FAMAS</span><span className="text-white/20">&middot;</span>
                <span>FCLS</span>
              </div>
              <a href="https://appt.link/meet-with-dr-harish-ns" target="_blank" rel="noopener" className="mt-7 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-300">Book a Consultation</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-stone-200 bg-white px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">The short version</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-600">Dr. Harish Gowda is a senior Laparoscopic and Gastrointestinal Surgeon based in Basavanagudi, Bangalore, and the Founder and Chief Surgeon of HIMAS Hospital.</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Tag>Gastrointestinal Surgery</Tag>
              <Tag>Laparoscopic Procedures</Tag>
              <Tag>Proctology (Piles, Fistula, Fissure)</Tag>
              <Tag>Hernia Repair</Tag>
              <Tag>Gallbladder &amp; Appendix Surgery</Tag>
              <Tag>Gold Medalist, WALS</Tag>
            </div>
            <h2 className="mt-12 font-serif text-3xl font-semibold tracking-tight text-slate-900">Why patients find him through word of mouth</h2>
            <blockquote className="mt-3 border-l-2 border-teal-800 pl-5 text-[15px] italic leading-relaxed text-stone-600">Most of Dr. Harish Gowda&apos;s patients arrive because someone they trust sent them here. Some travel from across Bangalore, India, and abroad to consult him. Whatever the condition, the surgeon who examines you is the same one who operates on you. Nothing is handed off to a junior team.</blockquote>
            <h2 className="mt-12 font-serif text-3xl font-semibold tracking-tight text-slate-900">Training and recognition</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-600">Dr. Harish Gowda holds fellowships from India&apos;s and the world&apos;s leading surgical bodies, spanning minimally invasive surgery, gastrointestinal endoscopy, colorectal surgery, abdominal wall hernia, and bariatric and metabolic surgery. He was awarded the Gold Medal in the Diploma in Minimal Access Surgery by the World Association of Laparoscopic Surgeons, and is a recipient of the Young Surgeon Award.</p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 border-t border-stone-200 pt-8 sm:grid-cols-3">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">Education</span>
              <ul className="mt-3 space-y-1.5 text-sm text-stone-600">
                <li>MBBS, Bengaluru Medical College</li><li>MS General Surgery, Mysore Medical College</li>
              </ul>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">Fellowships</span>
              <p className="mt-3 font-mono text-[13px] leading-relaxed text-stone-600">FMAS &middot; FIAGES &middot; EFIAGES &middot; FALS &middot; FACRSI &middot; FAMAS &middot; FCLS</p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">Awards</span>
              <ul className="mt-3 space-y-1.5 text-sm text-stone-600">
                <li>Gold Medal, Diploma in Minimal Access Surgery, WALS</li><li>Young Surgeon Award</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-teal-800">Current</span>
              <ul className="mt-3 space-y-2 text-sm font-medium text-slate-800">
                <li>President, Surgical Society of Bangalore</li>
                <li>Founder Trustee, HIMAS Charitable Trust</li>
                <li>Chief Mentor, HIMAS India Institute for Advanced Laparoscopic and Endoscopy Training</li>
                <li>Organising Chairman, WORLDCON 2027 (International Society of Coloproctology)</li>
              </ul>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-stone-400">Former</span>
              <ul className="mt-3 space-y-2 text-sm text-stone-500">
                <li>Professor of Surgery, KIMS and Bowring Medical College</li>
                <li>Professor of Surgery, Sri Siddhartha Medical College</li>
                <li>Secretary, Surgical Society of Bangalore</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-stone-200 bg-stone-100 px-5 py-4 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-[11px] text-stone-500">Life Member, ASI &middot; Life Member, IAGES &middot; Life Member, AMASI &middot; Member, WALS &middot; Member, International Robotic Association &middot; Member, Indian Medical Association</p>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl border-l-2 border-amber-400 pl-5">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">How he approaches a first consultation</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone-600">Most patients arrive anxious, having delayed the visit for weeks or months. Dr. Gowda&apos;s approach starts with listening, not scheduling. He explains what is actually happening in the body, in Kannada or English, before discussing options. Surgery is recommended only when it is the right next step, not the only one offered.</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-12 text-center sm:px-8">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-800">Consultations in Kannada and English</span>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-stone-600">Patients from Basavanagudi, Jayanagar, JP Nagar, Banashankari, BTM Layout, Girinagar, and Kanakapura Road consult Dr. Harish Gowda without needing to translate their symptoms into a second language first.</p>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
