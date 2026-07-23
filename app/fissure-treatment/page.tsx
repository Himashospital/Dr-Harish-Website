import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Painless Laser Fissure Treatment in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda offers advanced laser fissure treatment at HIMAS Hospital, same-day discharge, return to normal in 2 to 3 days.",
  alternates: { canonical: "https://drharishgowda.in/fissure-treatment" },
  openGraph: {
    title: "Painless Laser Fissure Treatment in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda offers advanced laser fissure treatment at HIMAS Hospital, same-day discharge, return to normal in 2 to 3 days.",
    url: "https://drharishgowda.in/fissure-treatment",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "fissure",
        breadcrumbLabel: "Fissure Treatment",
        eyebrow: "Fissure Treatment in Basavanagudi",
        title: "Painless Laser Fissure Treatment in Basavanagudi, Bangalore",
        description: "Dr. Harish Gowda offers advanced laser fissure treatment at HIMAS Hospital, same-day discharge, return to normal in 2 to 3 days.",
        symptoms: [
          "Sharp pain during and after passing stool",
          "Bleeding, usually bright red",
          "A visible tear or skin tag near the anus",
          "Spasm or burning that lasts hours after a bowel movement",
        ],
        practiceHeading: "In my practice, here's what fissures usually look like",
        practiceNote: "Fissure pain is often worse than patients expect from something so small, a tear in the anal lining. Acute fissures can heal with medication. Chronic ones, lasting more than six weeks, usually need laser treatment for lasting relief.",
        treatmentHeading: "How I treat it",
        treatmentNote: "Laser fissure treatment is a painless, 20 to 30 minute procedure with same-day discharge. Most patients return to normal activity within 2 to 3 days.",
        timeline: [
          { label: "Day 0", text: "Procedure completed, same-day discharge" },
          { label: "Day 1–3", text: "Mild discomfort managed with medication" },
          { label: "Day 2–3", text: "Return to normal activity" },
          { label: "Week 1", text: "Healing confirmed" },
        ],
        faqs: [
          { q: "Is there a fissure specialist near me in Basavanagudi or Jayanagar?", a: "Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi specialises in painless laser fissure treatment, serving Basavanagudi, Jayanagar, and JP Nagar." },
          { q: "Can fissure heal on its own or does it need surgery?", a: "Acute fissures can sometimes heal with medication. Chronic fissures, lasting more than 6 weeks, usually need laser treatment for permanent relief." },
          { q: "How many days does recovery take?", a: "Laser fissure treatment is a 20 to 30 minute procedure with same-day discharge. Most patients return to normal activities within 2 to 3 days." },
          { q: "What is the difference between fissure and piles?", a: "A fissure is a small tear in the anal lining causing sharp pain. Piles are swollen veins causing bleeding and discomfort. Dr. Harish Gowda treats both." },
        ],
        related: [
          { href: "/piles-surgery", text: "Fissure and piles often present with overlapping symptoms. Read about Piles Treatment →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Painless Laser Fissure Treatment in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/PercutaneousProcedure\", \"bodyLocation\": \"Fissure\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Healing confirmed\", \"url\": \"https://drharishgowda.in/fissure-treatment.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a fissure specialist near me in Basavanagudi or Jayanagar?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi specialises in painless laser fissure treatment, serving Basavanagudi, Jayanagar, and JP Nagar.\"}}, {\"@type\": \"Question\", \"name\": \"Can fissure heal on its own or does it need surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Acute fissures can sometimes heal with medication. Chronic fissures, lasting more than 6 weeks, usually need laser treatment for permanent relief.\"}}, {\"@type\": \"Question\", \"name\": \"How many days does recovery take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Laser fissure treatment is a 20 to 30 minute procedure with same-day discharge. Most patients return to normal activities within 2 to 3 days.\"}}, {\"@type\": \"Question\", \"name\": \"What is the difference between fissure and piles?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A fissure is a small tear in the anal lining causing sharp pain. Piles are swollen veins causing bleeding and discomfort. Dr. Harish Gowda treats both.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Fissure Treatment\", \"item\": \"https://drharishgowda.in/fissure-treatment.html\"}]}",
        ],
      }}
    />
  );
}
