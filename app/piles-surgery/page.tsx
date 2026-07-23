import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Painless Laser Piles Treatment in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda treats piles at every grade, from early medication-managed cases to advanced laser surgery, at HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/piles-surgery" },
  openGraph: {
    title: "Painless Laser Piles Treatment in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda treats piles at every grade, from early medication-managed cases to advanced laser surgery, at HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/piles-surgery",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "piles",
        breadcrumbLabel: "Piles Treatment",
        eyebrow: "Piles Treatment in Basavanagudi",
        title: "Painless Laser Piles Treatment in Basavanagudi, Bangalore",
        description: "Dr. Harish Gowda treats piles at every grade, from early medication-managed cases to advanced laser surgery, at HIMAS Hospital, Basavanagudi.",
        symptoms: [
          "Bleeding while passing stool",
          "A lump or swelling near the anus",
          "Pain or discomfort during bowel movements",
          "Itching or irritation around the anus",
          "A feeling of incomplete evacuation",
        ],
        practiceHeading: "In my practice, here's what piles usually looks like",
        practiceNote: "Piles, or haemorrhoids, are swollen veins in and around the anus. In my consultations, most patients wait months before coming in, usually out of embarrassment rather than not noticing the symptoms. Grade 1 and 2 piles often respond to medication and dietary change. Grade 3 and 4 generally need surgical treatment for lasting relief.",
        treatmentHeading: "How I treat it",
        treatmentNote: "For advanced piles, I use laser surgery, a 30-minute procedure with no major cuts and no stitches. Most patients are discharged the same day and resume normal activity within 2 to 3 days. The technique minimises pain compared to conventional surgery and has a low recurrence rate.",
        timeline: [
          { label: "Day 0", text: "Procedure completed, same-day discharge" },
          { label: "Day 1–3", text: "Light activity resumes, mild discomfort managed with medication" },
          { label: "Week 1", text: "Most patients return to normal daily routine" },
          { label: "Week 2", text: "Follow-up consultation to confirm healing" },
        ],
        faqs: [
          { q: "Is there a piles doctor near me in Basavanagudi?", a: "Yes. Dr. Harish Gowda at HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi is one of the nearest and most experienced piles specialists in South Bangalore, serving patients from Basavanagudi, Jayanagar, JP Nagar, and Banashankari." },
          { q: "How much does laser piles surgery cost?", a: "Cost depends on the grade and severity of piles, and whether other conditions need to be treated at the same time. Book a consultation for a personalised estimate." },
          { q: "Is laser piles treatment permanent?", a: "Laser piles surgery has a high success rate with low recurrence when performed at the right stage. Dr. Harish Gowda will assess your grade and advise accordingly." },
          { q: "How many days of rest are needed after piles surgery?", a: "Most patients resume normal activity within 2 to 3 days. The procedure itself takes about 30 minutes with same-day discharge." },
          { q: "Can piles be treated without surgery?", a: "Early-grade piles can often be managed with medication and dietary changes. Grade 3 and 4 generally need laser surgery for permanent relief." },
          { q: "What are the signs that piles need surgery?", a: "Grade 3 or 4 piles, severe bleeding, prolapsed piles that don't retract, or symptoms that haven't improved with medication are signs surgery may be needed." },
        ],
        related: [
          { href: "/fissure-treatment", text: "Piles and fissures often present with similar symptoms. Not sure which one matches yours? Read about Fissure Treatment →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Painless Laser Piles Treatment in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/PercutaneousProcedure\", \"bodyLocation\": \"Piles\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Follow-up consultation to confirm healing\", \"url\": \"https://drharishgowda.in/piles-surgery.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a piles doctor near me in Basavanagudi?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dr. Harish Gowda at HIMAS Hospital, No. 3 Kariyappa Road, Basavanagudi is one of the nearest and most experienced piles specialists in South Bangalore, serving patients from Basavanagudi, Jayanagar, JP Nagar, and Banashankari.\"}}, {\"@type\": \"Question\", \"name\": \"How much does laser piles surgery cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Cost depends on the grade and severity of piles, and whether other conditions need to be treated at the same time. Book a consultation for a personalised estimate.\"}}, {\"@type\": \"Question\", \"name\": \"Is laser piles treatment permanent?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Laser piles surgery has a high success rate with low recurrence when performed at the right stage. Dr. Harish Gowda will assess your grade and advise accordingly.\"}}, {\"@type\": \"Question\", \"name\": \"How many days of rest are needed after piles surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most patients resume normal activity within 2 to 3 days. The procedure itself takes about 30 minutes with same-day discharge.\"}}, {\"@type\": \"Question\", \"name\": \"Can piles be treated without surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Early-grade piles can often be managed with medication and dietary changes. Grade 3 and 4 generally need laser surgery for permanent relief.\"}}, {\"@type\": \"Question\", \"name\": \"What are the signs that piles need surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Grade 3 or 4 piles, severe bleeding, prolapsed piles that don't retract, or symptoms that haven't improved with medication are signs surgery may be needed.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Piles Treatment\", \"item\": \"https://drharishgowda.in/piles-surgery.html\"}]}",
        ],
      }}
    />
  );
}
