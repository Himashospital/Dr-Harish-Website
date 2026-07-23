import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Emergency Laparoscopic Appendix Surgery in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Emergency and elective laparoscopic appendix surgery at HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/appendix-surgery" },
  openGraph: {
    title: "Emergency Laparoscopic Appendix Surgery in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Emergency and elective laparoscopic appendix surgery at HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/appendix-surgery",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "appendix",
        breadcrumbLabel: "Appendix Treatment",
        eyebrow: "Appendix Surgery in Basavanagudi",
        title: "Emergency Laparoscopic Appendix Surgery in Basavanagudi, Bangalore",
        description: "Emergency and elective laparoscopic appendix surgery at HIMAS Hospital, Basavanagudi.",
        symptoms: [
          "Sudden pain in the lower right abdomen",
          "Pain that worsens with movement or coughing",
          "Fever alongside abdominal pain",
          "Nausea or loss of appetite",
        ],
        practiceHeading: "In my practice, here's what appendicitis usually looks like",
        practiceNote: "Appendicitis pain typically starts near the navel and moves to the lower right abdomen within hours. This is one condition where I tell patients not to wait for a scheduled consultation, come in immediately.",
        treatmentHeading: "How I treat it",
        treatmentNote: "Laparoscopic appendix removal is minimally invasive with a short hospital stay. Most patients are discharged in 1 to 2 days and resume normal activity within a week.",
        timeline: [
          { label: "Day 0–2", text: "Discharge" },
          { label: "Week 1", text: "Normal activity" },
          { label: "Week 2", text: "Full recovery" },
        ],
        faqs: [
          { q: "Is there an emergency surgery facility near Basavanagudi?", a: "Yes. HIMAS Hospital, Basavanagudi has a dedicated Surgical ICU for surgical emergencies. Dr. Harish Gowda is available for emergency appendix surgery." },
          { q: "Is laparoscopic appendix surgery safe?", a: "Yes. It is safe and minimally invasive. Most patients are discharged in 1 to 2 days and resume normal activity within a week." },
          { q: "Is surgery always needed for appendicitis?", a: "In most confirmed cases, yes, surgery is the standard treatment to prevent rupture and complications." },
        ],
        related: [
          { href: "/gallbladder-removal", text: "Sudden abdominal pain can have several causes. Read about Gallbladder Surgery →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        cta: {
          heading: "Sudden abdominal pain needs attention now",
          text: "Don't wait for an online slot. Call the hospital directly.",
          primaryLabel: `Call ${PHONE_DISPLAY}`,
          primaryHref: `tel:${PHONE_TEL}`,
        },
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Emergency Laparoscopic Appendix Surgery in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/PercutaneousProcedure\", \"bodyLocation\": \"Appendix\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Full recovery\", \"url\": \"https://drharishgowda.in/appendix-surgery.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there an emergency surgery facility near Basavanagudi?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. HIMAS Hospital, Basavanagudi has a dedicated Surgical ICU for surgical emergencies. Dr. Harish Gowda is available for emergency appendix surgery.\"}}, {\"@type\": \"Question\", \"name\": \"Is laparoscopic appendix surgery safe?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. It is safe and minimally invasive. Most patients are discharged in 1 to 2 days and resume normal activity within a week.\"}}, {\"@type\": \"Question\", \"name\": \"Is surgery always needed for appendicitis?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"In most confirmed cases, yes, surgery is the standard treatment to prevent rupture and complications.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Appendix Treatment\", \"item\": \"https://drharishgowda.in/appendix-surgery.html\"}]}",
        ],
      }}
    />
  );
}
