import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Laparoscopic Gallbladder Surgery in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda performs keyhole gallbladder removal at HIMAS Hospital, Basavanagudi, through 3 to 4 tiny incisions, with same-day discharge.",
  alternates: { canonical: "https://drharishgowda.in/gallbladder-removal" },
  openGraph: {
    title: "Laparoscopic Gallbladder Surgery in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda performs keyhole gallbladder removal at HIMAS Hospital, Basavanagudi, through 3 to 4 tiny incisions, with same-day discharge.",
    url: "https://drharishgowda.in/gallbladder-removal",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "gallbladder",
        breadcrumbLabel: "Gallbladder Treatment",
        eyebrow: "Gallbladder Surgery in Basavanagudi",
        title: "Laparoscopic Gallbladder Surgery in Basavanagudi, Bangalore",
        description: "Dr. Harish Gowda performs keyhole gallbladder removal at HIMAS Hospital, Basavanagudi, through 3 to 4 tiny incisions, with same-day discharge.",
        symptoms: [
          "Pain in the upper right or centre of the abdomen, especially after fatty food",
          "Nausea or bloating after meals",
          "Pain that radiates to the back or right shoulder",
          "Recurring indigestion",
        ],
        practiceHeading: "In my practice, here's what gallstones usually look like",
        practiceNote: "Most patients with gallstones have lived with vague digestive discomfort for months, assuming it's acid reflux. Once stones are confirmed on ultrasound, laparoscopic removal is usually the right next step, not a last resort.",
        treatmentHeading: "How I treat it",
        treatmentNote: "I perform laparoscopic cholecystectomy through 3 to 4 incisions of less than one centimetre each, guided by camera. Most patients are discharged the same day and return to light activity within 3 to 5 days.",
        timeline: [
          { label: "Day 0", text: "Procedure completed, same-day discharge" },
          { label: "Day 1–3", text: "Light activity resumes" },
          { label: "Week 1", text: "Return to normal routine" },
          { label: "Week 2", text: "Full recovery" },
        ],
        faqs: [
          { q: "Is there a gallbladder surgeon near me in Basavanagudi or South Bangalore?", a: "Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi is a senior laparoscopic gallbladder surgeon serving Basavanagudi, Jayanagar, JP Nagar, and Banashankari." },
          { q: "How much does gallbladder removal surgery cost?", a: "Cost depends on complexity and whether other conditions need treatment. Book a consultation for a personalised estimate." },
          { q: "Is gallbladder removal safe? Can I live without a gallbladder?", a: "Yes. Laparoscopic gallbladder removal has a very high success rate, and you can live a completely normal life without a gallbladder." },
          { q: "How long does recovery take?", a: "Most patients are discharged the same day and return to light activity within 3 to 5 days, with full routine resumed in 1 to 2 weeks." },
        ],
        related: [
          { href: "/hernia-repair", text: "Gallstone pain is sometimes mistaken for a hernia. Not sure which one matches yours? Read about Hernia Repair →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Laparoscopic Gallbladder Surgery in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/PercutaneousProcedure\", \"bodyLocation\": \"Gallbladder\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Full recovery\", \"url\": \"https://drharishgowda.in/gallbladder-removal.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a gallbladder surgeon near me in Basavanagudi or South Bangalore?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi is a senior laparoscopic gallbladder surgeon serving Basavanagudi, Jayanagar, JP Nagar, and Banashankari.\"}}, {\"@type\": \"Question\", \"name\": \"How much does gallbladder removal surgery cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Cost depends on complexity and whether other conditions need treatment. Book a consultation for a personalised estimate.\"}}, {\"@type\": \"Question\", \"name\": \"Is gallbladder removal safe? Can I live without a gallbladder?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Laparoscopic gallbladder removal has a very high success rate, and you can live a completely normal life without a gallbladder.\"}}, {\"@type\": \"Question\", \"name\": \"How long does recovery take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most patients are discharged the same day and return to light activity within 3 to 5 days, with full routine resumed in 1 to 2 weeks.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Gallbladder Treatment\", \"item\": \"https://drharishgowda.in/gallbladder-removal.html\"}]}",
        ],
      }}
    />
  );
}
