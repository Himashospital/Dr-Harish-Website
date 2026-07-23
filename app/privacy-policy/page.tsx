import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Harish Gowda",
  description: "How drharishgowda.in and HIMAS Hospital collect, use, and protect personal and medical data under the DPDPA 2023.",
  alternates: { canonical: "https://drharishgowda.in/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Dr. Harish Gowda",
    description: "How drharishgowda.in and HIMAS Hospital collect, use, and protect personal and medical data under the DPDPA 2023.",
    url: "https://drharishgowda.in/privacy-policy",
    type: "website",
  },
};

const SECTIONS = [
  { h: "1. Introduction", p: "This Privacy Policy explains how drharishgowda.in and HIMAS Hospital collect, use, and protect your personal and medical data, in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA)." },
  { h: "2. Data We Collect", p: "We may collect your name, contact details, appointment information, and, where voluntarily shared, relevant medical history submitted through consultation forms, WhatsApp, or phone calls." },
  { h: "3. How We Use Your Data", p: "Your data is used solely to schedule appointments, provide medical consultation, communicate treatment information, and maintain patient records as required by applicable healthcare regulations." },
  { h: "4. Consent", p: "By submitting your information through this website or its associated booking channels, you consent to its collection and use as described in this policy. Consent can be withdrawn at any time by contacting us directly." },
  { h: "5. Your Rights", p: "Under the DPDPA, you have the right to access, correct, or request deletion of your personal data, and to withdraw consent for its processing, subject to applicable medical record-keeping requirements." },
  { h: "6. Data Retention", p: "Personal and medical data is retained only as long as necessary for treatment continuity and as required under applicable healthcare and legal record-keeping obligations." },
  { h: "7. Grievance Redressal", p: "For any questions, concerns, or requests regarding your data, please contact us at the details below." },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Privacy Policy\", \"item\": \"https://drharishgowda.in/privacy-policy.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Privacy Policy</span>
      </div>

      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-900">Privacy Policy</h1>
            <p className="mt-2 font-mono text-[11px] text-stone-400">Last updated: [date pending] &middot; Applies to drharishgowda.in</p>
            <div className="mt-8 space-y-7">
              {SECTIONS.map((s) => (
                <div key={s.h}>
                  <h2 className="font-serif text-lg font-semibold text-slate-900">{s.h}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.p}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border border-stone-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Contact for privacy queries</p>
              <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-mono text-sm text-stone-600 hover:text-teal-800">{PHONE_DISPLAY}</a>
              <p className="mt-1 text-sm text-stone-600">HIMAS Hospital, No. 3 Kariyappa Road, Opp. Krishna Rao Park, Basavanagudi, Bangalore 560004</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
