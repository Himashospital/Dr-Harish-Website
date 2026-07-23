import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Patient Resources & FAQ | Dr. Harish Gowda",
  description: "Pre-surgery preparation, post-surgery care, insurance guidance, and frequently asked questions for patients of Dr. Harish Gowda in Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/patient-resources" },
  openGraph: {
    title: "Patient Resources & FAQ | Dr. Harish Gowda",
    description: "Pre-surgery preparation, post-surgery care, insurance guidance, and frequently asked questions for patients of Dr. Harish Gowda in Basavanagudi.",
    url: "https://drharishgowda.in/patient-resources",
    type: "website",
  },
};

const FAQS = [
  { q: "Where can I find a laparoscopic surgeon for pre-surgery consultation near Basavanagudi?", a: "Dr. Harish Gowda consults at HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi, easily accessible from Jayanagar, JP Nagar, and Banashankari for pre-surgery evaluation and planning." },
  { q: "Is post-surgery follow-up care available near South Bangalore?", a: "Yes. Follow-up consultations, in person or via online consultation, are available at HIMAS Hospital, Basavanagudi, for patients across South Bangalore." },
  { q: "Which hospital in Basavanagudi has emergency surgical care?", a: "HIMAS Hospital, Basavanagudi has a dedicated Surgical ICU for surgical emergencies including appendicitis and complicated hernias." },
  { q: "Does HIMAS Hospital accept cashless treatment through my TPA?", a: "HIMAS Hospital works with major insurance providers and TPAs for cashless and reimbursement claims. Call +91 78998 24417 to confirm your specific provider before your visit." },
  { q: "What should I bring to my first consultation?", a: "Any previous test reports, a list of current medications, and your insurance or TPA card if applicable." },
  { q: "Is laparoscopic surgery covered by insurance in India?", a: "Most laparoscopic procedures are covered under standard health insurance policies. Coverage varies by provider and policy, confirm directly with your insurer or HIMAS Hospital's billing desk." },
  { q: "Do I need a referral to consult Dr. Harish Gowda?", a: "No referral is needed. You can book directly." },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Where can I find a laparoscopic surgeon for pre-surgery consultation near Basavanagudi?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Dr. Harish Gowda consults at HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi, easily accessible from Jayanagar, JP Nagar, and Banashankari for pre-surgery evaluation and planning.\"}}, {\"@type\": \"Question\", \"name\": \"Is post-surgery follow-up care available near South Bangalore?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Follow-up consultations, in person or via online consultation, are available at HIMAS Hospital, Basavanagudi, for patients across South Bangalore.\"}}, {\"@type\": \"Question\", \"name\": \"Which hospital in Basavanagudi has emergency surgical care?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"HIMAS Hospital, Basavanagudi has a dedicated Surgical ICU for surgical emergencies including appendicitis and complicated hernias.\"}}, {\"@type\": \"Question\", \"name\": \"Does HIMAS Hospital accept cashless treatment through my TPA?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"HIMAS Hospital works with major insurance providers and TPAs for cashless and reimbursement claims. Call +91 78998 24417 to confirm your specific provider before your visit.\"}}, {\"@type\": \"Question\", \"name\": \"What should I bring to my first consultation?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Any previous test reports, a list of current medications, and your insurance or TPA card if applicable.\"}}, {\"@type\": \"Question\", \"name\": \"Is laparoscopic surgery covered by insurance in India?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most laparoscopic procedures are covered under standard health insurance policies. Coverage varies by provider and policy, confirm directly with your insurer or HIMAS Hospital's billing desk.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need a referral to consult Dr. Harish Gowda?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No referral is needed. You can book directly.\"}}]}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Patient Resources & FAQ\", \"item\": \"https://drharishgowda.in/patient-resources.html\"}]}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Patient Resources &amp; FAQ</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="?"
        eyebrow="Patient Resources"
        title={<>Answers to Common Questions, <em className="italic text-teal-300">Before and After</em></>}
        description="Pre-surgery preparation, post-surgery care, and everything in between."
      />

      <section className="border-y border-stone-200 bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">How to Prepare for Laparoscopic Surgery</h2>
            <ol className="mt-5 space-y-3">
              {[
                "Fast as instructed by the surgical team, usually 6 to 8 hours before the procedure",
                "Complete any pre-surgery blood tests and scans as advised",
                "Bring previous test reports, current medications, and ID proof",
                "Arrange for someone to accompany you and assist with transport home",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-stone-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-teal-800 font-mono text-[10px] font-semibold text-white">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[11px] italic text-stone-400">Exact clinical instructions pending Dr. Harish Gowda&apos;s sign-off before publishing.</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h2>
            <div className="mt-5 border-t border-stone-200">
              {FAQS.map((faq, i) => (
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

      <CtaBand />
    </>
  );
}
