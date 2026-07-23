import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TrustindexWidget from "@/components/TrustindexWidget";
import VideoTestimonial from "@/components/VideoTestimonial";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Patient Stories | Dr. Harish Gowda",
  description: "Consented patient testimonials and Google reviews for Dr. Harish Gowda at HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/patient-stories" },
  openGraph: {
    title: "Patient Stories | Dr. Harish Gowda",
    description: "Consented patient testimonials and Google reviews for Dr. Harish Gowda at HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/patient-stories",
    type: "website",
  },
};

const VIDEO_SLOTS = [
  { tag: "Piles Surgery", youtubeId: "FA00KLtJXpI" },
  { tag: "Piles Surgery", youtubeId: "wyeIi8nR9e8" },
  { tag: "Hernia Repair", youtubeId: "FcWRu2MixXc" },
  { tag: "Hernia Repair", youtubeId: "k6E9ShU0YF8" },
  { tag: "Gallbladder Surgery", youtubeId: "4CtP-kCb0D8" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Patient Stories\", \"item\": \"https://drharishgowda.in/patient-stories.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Patient Stories</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="5.0"
        eyebrow="Patient Stories"
        title={<>What Patients Say <em className="italic text-teal-300">About Their Care</em></>}
        description="Real experiences from patients treated at HIMAS Hospital, Basavanagudi, shared with consent."
      />

      <section className="border-y border-stone-200 bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <TrustindexWidget />
          <p className="mt-6 text-center">
            <a href="https://share.google/yH8m8mTSkXy8PTUvY" target="_blank" rel="noopener" className="link-underline text-xs font-medium text-teal-800">
              View Dr. Harish Gowda&apos;s full profile on Google &rarr;
            </a>
          </p>
        </Reveal>
      </section>

      <section className="bg-stone-100 px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-700">In Their Own Words</span>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Video Testimonials</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-3">
            {VIDEO_SLOTS.map((slot, i) => (
              <VideoTestimonial key={`${slot.youtubeId}-${i}`} youtubeId={slot.youtubeId} tag={slot.tag} />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-md text-center text-[11px] italic text-stone-400">More video testimonials are added as patients sign a DPDPA-compliant consent and release form.</p>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl border border-dashed border-stone-300 bg-white p-6 text-center">
            <p className="text-sm font-medium text-slate-900">Consented written testimonials</p>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-500">No written testimonials are published here yet. Each story requires a signed DPDPA-compliant consent form and procedure tag before publishing. Structure only, content pending.</p>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
