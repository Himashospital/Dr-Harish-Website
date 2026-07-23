import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact | HIMAS Hospital, Basavanagudi | Dr. Harish Gowda",
  description: "Address, phone, map, and parking information for HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/contact" },
  openGraph: {
    title: "Contact | HIMAS Hospital, Basavanagudi | Dr. Harish Gowda",
    description: "Address, phone, map, and parking information for HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/contact",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"LocalBusiness\", \"name\": \"Dr. Harish Gowda \\u2014 HIMAS Hospital\", \"telephone\": \"+917899824417\", \"address\": {\"@type\": \"PostalAddress\", \"streetAddress\": \"No. 3 Kariyappa Road, Opp. Krishna Rao Park, Basavanagudi\", \"addressLocality\": \"Bangalore\", \"postalCode\": \"560004\", \"addressCountry\": \"IN\"}, \"areaServed\": [\"Basavanagudi\", \"Jayanagar\", \"JP Nagar\", \"Banashankari\", \"BTM Layout\", \"Bangalore\"], \"url\": \"https://drharishgowda.in\"}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Contact\", \"item\": \"https://drharishgowda.in/contact.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Contact</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="HG"
        eyebrow="Visit Us"
        title={<>Visit HIMAS Hospital, <em className="italic text-teal-300">Basavanagudi</em></>}
        description="No. 3 Kariyappa Road, Opp. Krishna Rao Park, Basavanagudi, Bangalore 560004."
      />

      <section className="border-y border-stone-200 bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="h-56 overflow-hidden border border-stone-200">
              <iframe
                title="HIMAS Hospital location map"
                src="https://www.google.com/maps?q=HIMAS+Hospital,+No.+3+Kariyappa+Road,+Basavanagudi,+Bangalore+560004&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-5 border-t border-stone-200 pt-1 sm:border-t-0 sm:pt-0">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-stone-400">Phone / WhatsApp</p>
                <a href={`tel:${PHONE_TEL}`} className="mt-1 block font-mono text-sm text-slate-900 hover:text-teal-800">{PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-stone-400">Parking</p>
                <p className="mt-1 text-sm text-stone-600">Street parking available near the hospital. There is no dedicated parking lot on-site.</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap gap-3">
            <a href="https://appt.link/meet-with-dr-harish-ns" target="_blank" rel="noopener" className="rounded-md bg-teal-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-900">Book Appointment</a>
            <a href="https://www.google.com/maps/search/?api=1&query=HIMAS+Hospital+Basavanagudi" className="rounded-md border border-stone-300 px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:border-teal-800 hover:text-teal-800">Get Directions</a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
