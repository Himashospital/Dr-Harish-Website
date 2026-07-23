import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Complex Fistula Surgery in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda treats complex and recurrent fistula using laser and VAAFT technique at HIMAS Hospital.",
  alternates: { canonical: "https://drharishgowda.in/fistula-surgery" },
  openGraph: {
    title: "Complex Fistula Surgery in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda treats complex and recurrent fistula using laser and VAAFT technique at HIMAS Hospital.",
    url: "https://drharishgowda.in/fistula-surgery",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "fistula",
        breadcrumbLabel: "Fistula Treatment",
        eyebrow: "Fistula Surgery in Basavanagudi",
        title: "Complex Fistula Surgery in Basavanagudi, Bangalore",
        description: "Dr. Harish Gowda treats complex and recurrent fistula using laser and VAAFT technique at HIMAS Hospital.",
        symptoms: [
          "A painful swelling near the anus that keeps returning",
          "Discharge of pus or blood",
          "Irritation or itching around the opening",
          "Fever alongside swelling, possible abscess",
        ],
        practiceHeading: "In my practice, here's what fistula usually looks like",
        practiceNote: "A fistula is an abnormal tunnel between the anal canal and skin. It doesn't heal on its own, and I see patients who've been treated repeatedly for 'recurring boils' before the fistula is correctly diagnosed.",
        treatmentHeading: "How I treat it",
        treatmentNote: "I use laser and VAAFT technique for complex and recurrent fistulas, minimally invasive with a high success rate, avoiding the long open-wound recovery of traditional fistula surgery.",
        timeline: [
          { label: "Day 0–1", text: "Discharge" },
          { label: "Week 1", text: "Wound care" },
          { label: "Week 2–3", text: "Healing progress" },
          { label: "Week 4", text: "Follow-up confirmation" },
        ],
        faqs: [
          { q: "Is there a fistula specialist near me in Basavanagudi or Banashankari?", a: "Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi specialises in complex and recurrent fistula surgery, serving Basavanagudi, Banashankari, and JP Nagar." },
          { q: "Can fistula be treated without surgery?", a: "No. Fistula requires surgical treatment for permanent cure. Laser and VAAFT technique at HIMAS Hospital is minimally invasive with a high success rate." },
          { q: "What is the difference between fistula, piles, and fissure?", a: "A fistula is an abnormal tunnel causing discharge or abscess. Piles are swollen veins. A fissure is a small tear. Dr. Harish Gowda treats all three." },
          { q: "Does fistula come back after treatment?", a: "Recurrence risk depends on complexity. Dr. Harish Gowda's use of laser and VAAFT technique is specifically aimed at reducing recurrence in complex cases." },
        ],
        related: [
          { href: "/piles-surgery", text: "Fistula is sometimes confused with a simple abscess. Read about Piles Treatment →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Complex Fistula Surgery in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/TherapeuticProcedure\", \"bodyLocation\": \"Fistula\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Follow-up confirmation\", \"url\": \"https://drharishgowda.in/fistula-surgery.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a fistula specialist near me in Basavanagudi or Banashankari?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi specialises in complex and recurrent fistula surgery, serving Basavanagudi, Banashankari, and JP Nagar.\"}}, {\"@type\": \"Question\", \"name\": \"Can fistula be treated without surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Fistula requires surgical treatment for permanent cure. Laser and VAAFT technique at HIMAS Hospital is minimally invasive with a high success rate.\"}}, {\"@type\": \"Question\", \"name\": \"What is the difference between fistula, piles, and fissure?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A fistula is an abnormal tunnel causing discharge or abscess. Piles are swollen veins. A fissure is a small tear. Dr. Harish Gowda treats all three.\"}}, {\"@type\": \"Question\", \"name\": \"Does fistula come back after treatment?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Recurrence risk depends on complexity. Dr. Harish Gowda's use of laser and VAAFT technique is specifically aimed at reducing recurrence in complex cases.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Fistula Treatment\", \"item\": \"https://drharishgowda.in/fistula-surgery.html\"}]}",
        ],
      }}
    />
  );
}
