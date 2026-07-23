import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Laser Varicose Veins Treatment in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda offers minimally invasive laser treatment for varicose veins at HIMAS Hospital, no large incisions.",
  alternates: { canonical: "https://drharishgowda.in/varicose-veins" },
  openGraph: {
    title: "Laser Varicose Veins Treatment in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda offers minimally invasive laser treatment for varicose veins at HIMAS Hospital, no large incisions.",
    url: "https://drharishgowda.in/varicose-veins",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "varicose-veins",
        breadcrumbLabel: "Varicose Veins Treatment",
        eyebrow: "Varicose Veins Treatment in Basavanagudi",
        title: "Laser Varicose Veins Treatment in Basavanagudi, Bangalore",
        description: "Dr. Harish Gowda offers minimally invasive laser treatment for varicose veins at HIMAS Hospital, no large incisions.",
        symptoms: [
          "Swollen, twisted, or visibly bulging veins on the legs",
          "Aching or heaviness by end of day",
          "Itching or skin discolouration near veins",
          "Swelling around the ankles",
        ],
        practiceHeading: "In my practice, here's what varicose veins usually look like",
        practiceNote: "Varicose veins are often dismissed as cosmetic. Left alone, they can progress to skin changes and ulcers. Laser treatment addresses both the appearance and the underlying vein dysfunction.",
        treatmentHeading: "How I treat it",
        treatmentNote: "Laser treatment is minimally invasive, no large incisions, with faster recovery and fewer complications than traditional vein stripping surgery.",
        timeline: [
          { label: "Day 0", text: "Procedure completed, same-day discharge" },
          { label: "Day 1–3", text: "Light walking encouraged" },
          { label: "Week 1", text: "Normal activity" },
          { label: "Week 2–3", text: "Full recovery" },
        ],
        faqs: [
          { q: "Is there a varicose veins doctor near me in South Bangalore?", a: "Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi offers laser varicose veins treatment, serving Banashankari, BTM Layout, and South Bangalore." },
          { q: "Is laser treatment better than surgery for varicose veins?", a: "Yes. Laser treatment is minimally invasive, requires no large incisions, and has faster recovery with fewer complications compared to traditional surgery." },
          { q: "Will varicose veins come back after laser treatment?", a: "Recurrence is uncommon when treated at the right stage. Dr. Harish Gowda will assess your case and advise on long-term prevention." },
        ],
        related: [
          { href: "/hernia-repair", text: "Vein health and mobility often go hand in hand with recovery from other procedures. Read about Hernia Repair →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Laser Varicose Veins Treatment in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/PercutaneousProcedure\", \"bodyLocation\": \"Varicose Veins\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Full recovery\", \"url\": \"https://drharishgowda.in/varicose-veins.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a varicose veins doctor near me in South Bangalore?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi offers laser varicose veins treatment, serving Banashankari, BTM Layout, and South Bangalore.\"}}, {\"@type\": \"Question\", \"name\": \"Is laser treatment better than surgery for varicose veins?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Laser treatment is minimally invasive, requires no large incisions, and has faster recovery with fewer complications compared to traditional surgery.\"}}, {\"@type\": \"Question\", \"name\": \"Will varicose veins come back after laser treatment?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Recurrence is uncommon when treated at the right stage. Dr. Harish Gowda will assess your case and advise on long-term prevention.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Varicose Veins Treatment\", \"item\": \"https://drharishgowda.in/varicose-veins.html\"}]}",
        ],
      }}
    />
  );
}
