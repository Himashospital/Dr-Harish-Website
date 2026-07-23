import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Book Appointment | Dr. Harish Gowda, Basavanagudi",
  description: "Book a consultation with Dr. Harish Gowda at HIMAS Hospital, Basavanagudi. Walk-ins welcome.",
  alternates: { canonical: "https://drharishgowda.in/book-appointment" },
  openGraph: {
    title: "Book Appointment | Dr. Harish Gowda, Basavanagudi",
    description: "Book a consultation with Dr. Harish Gowda at HIMAS Hospital, Basavanagudi. Walk-ins welcome.",
    url: "https://drharishgowda.in/book-appointment",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Book Appointment\", \"item\": \"https://drharishgowda.in/book-appointment.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Book Appointment</span>
      </div>

      <section className="px-5 py-10 text-center sm:px-8 sm:py-14">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-800">Book an Appointment</span>
          <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl font-semibold leading-[0.98] tracking-tight text-slate-900 sm:text-5xl">Book Your Consultation With <em className="italic text-teal-700">Dr. Harish Gowda</em></h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-stone-600">Choose a time that works for you. Walk-ins are also welcome at HIMAS Hospital, Basavanagudi.</p>
        </Reveal>
      </section>

      <section className="border-y border-stone-200 bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-lg border border-dashed border-teal-300 bg-teal-50 p-8 text-center">
            <p className="text-sm font-semibold text-slate-900">appt.link booking widget embeds here</p>
            <p className="mt-1.5 text-xs leading-relaxed text-stone-500">Source-tagged per referring channel (GMB, website, WhatsApp) for attribution tracking.</p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl border border-stone-200 bg-stone-100 p-6">
            <p className="text-sm font-semibold text-slate-900">Prefer to walk in?</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi is open <span className="italic text-stone-400">[operating hours pending confirmation]</span>.</p>
          </div>
          <div className="mx-auto mt-4 flex max-w-2xl flex-wrap gap-3">
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener" className="rounded-md border border-stone-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:border-teal-800 hover:text-teal-800">Chat on WhatsApp</a>
            <a href={`tel:${PHONE_TEL}`} className="rounded-md border border-stone-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:border-teal-800 hover:text-teal-800">Call {PHONE_DISPLAY}</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
