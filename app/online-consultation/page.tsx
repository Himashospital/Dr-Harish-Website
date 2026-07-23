import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Online Video Consultation | Dr. Harish Gowda",
  description: "Book a secure video consultation with Dr. Harish Gowda from anywhere in Karnataka.",
  alternates: { canonical: "https://drharishgowda.in/online-consultation" },
  openGraph: {
    title: "Online Video Consultation | Dr. Harish Gowda",
    description: "Book a secure video consultation with Dr. Harish Gowda from anywhere in Karnataka.",
    url: "https://drharishgowda.in/online-consultation",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Online Consultation\", \"item\": \"https://drharishgowda.in/online-consultation.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Online Consultation</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="VC"
        eyebrow="Video Consultation"
        title={<>Consult Dr. Harish Gowda Online, <em className="italic text-teal-300">From Anywhere</em></>}
        description="Secure video consultations for patients who can't visit Basavanagudi in person."
      >
        <a href="https://appt.link/meet-with-dr-harish-ns" target="_blank" rel="noopener" className="mt-7 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-white shadow-elevate transition hover:-translate-y-0.5 hover:bg-amber-300">Book Online Consultation</a>
      </PageHero>

      <section className="border-y border-stone-200 bg-white px-5 py-14 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">01 &middot; Book a slot</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">Choose a time that works for you online.</p></div>
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">02 &middot; Receive a secure link</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">A private video consultation link is sent to you.</p></div>
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">03 &middot; Consult</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">Speak with Dr. Harish Gowda in Kannada or English.</p></div>
            <div className="border-t-2 border-teal-800 pt-3"><p className="font-mono text-xs font-semibold text-teal-800">04 &middot; Get a treatment plan</p><p className="mt-1.5 text-xs leading-relaxed text-stone-500">With an in-person follow-up if surgery is needed.</p></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
