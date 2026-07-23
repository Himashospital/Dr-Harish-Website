import type { Metadata } from "next";
import ConditionPage from "@/components/ConditionPage";

export const metadata: Metadata = {
  title: "Laparoscopic Hernia Repair in Basavanagudi, Bangalore | Dr. Harish Gowda",
  description: "Dr. Harish Gowda performs laparoscopic repair for inguinal, umbilical, and incisional hernia using a 3D mesh technique, at HIMAS Hospital, Basavanagudi.",
  alternates: { canonical: "https://drharishgowda.in/hernia-repair" },
  openGraph: {
    title: "Laparoscopic Hernia Repair in Basavanagudi, Bangalore | Dr. Harish Gowda",
    description: "Dr. Harish Gowda performs laparoscopic repair for inguinal, umbilical, and incisional hernia using a 3D mesh technique, at HIMAS Hospital, Basavanagudi.",
    url: "https://drharishgowda.in/hernia-repair",
    type: "website",
  },
};

export default function Page() {
  return (
    <ConditionPage
      data={{
        icon: "hernia",
        breadcrumbLabel: "Hernia Treatment",
        eyebrow: "Hernia Repair in Basavanagudi",
        title: "Laparoscopic Hernia Repair in Basavanagudi, Bangalore",
        description: "Dr. Harish Gowda performs laparoscopic repair for inguinal, umbilical, and incisional hernia using a 3D mesh technique, at HIMAS Hospital, Basavanagudi.",
        symptoms: [
          "A visible bulge in the abdomen or groin, more noticeable when standing or straining",
          "A dragging or heavy feeling around the bulge",
          "Discomfort that worsens with lifting, coughing, or prolonged standing",
          "A bulge that reduces or disappears when lying down",
        ],
        practiceHeading: "In my practice, here's what hernia usually looks like",
        practiceNote: "Most patients describe a bulge they've been watching for months, hoping it stays the same size. Hernias don't heal on their own and tend to enlarge over time. Once confirmed, laparoscopic repair with mesh is usually the right next step, before it becomes an emergency.",
        treatmentHeading: "How I treat it",
        treatmentNote: "I perform laparoscopic hernia repair using a 3D mesh technique through small keyhole incisions. Most patients are discharged the same day and return to light activity within a week, with a low recurrence rate compared to open surgery.",
        timeline: [
          { label: "Day 0", text: "Procedure completed, same-day discharge" },
          { label: "Day 1–3", text: "Light walking encouraged, heavy lifting avoided" },
          { label: "Week 1", text: "Return to desk-based routine" },
          { label: "Week 3–4", text: "Return to full physical activity" },
        ],
        faqs: [
          { q: "Is there a hernia specialist near me in Basavanagudi or South Bangalore?", a: "Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi performs laparoscopic hernia repair, serving patients from Basavanagudi, Jayanagar, JP Nagar, and Banashankari." },
          { q: "Does a hernia always need surgery?", a: "Most hernias enlarge over time and eventually need surgical repair. Surgery is usually recommended before the hernia becomes an emergency." },
          { q: "Is laparoscopic mesh repair safe?", a: "Yes. Laparoscopic mesh repair is a well-established technique with a high success rate and a lower recurrence rate than open surgery." },
          { q: "How long is recovery after hernia surgery?", a: "Most patients are discharged the same day, return to a desk-based routine within a week, and resume full physical activity in 3 to 4 weeks." },
        ],
        related: [
          { href: "/gallbladder-removal", text: "Hernia pain is sometimes mistaken for gallbladder discomfort. Read about Gallbladder Surgery →" },
          { href: "https://himashospital.in/facility", text: "For details on our operation theatre and post-surgical care infrastructure, visit HIMAS Hospital Facilities →" },
        ],
        schemas: [
          "{\"@context\": \"https://schema.org\", \"@type\": \"MedicalProcedure\", \"name\": \"Laparoscopic Hernia Repair in Basavanagudi, Bangalore\", \"procedureType\": \"https://schema.org/PercutaneousProcedure\", \"bodyLocation\": \"Hernia\", \"preparation\": \"Consultation with Dr. Harish Gowda and pre-surgery workup as advised.\", \"followup\": \"Return to full physical activity\", \"url\": \"https://drharishgowda.in/hernia-repair.html\"}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a hernia specialist near me in Basavanagudi or South Bangalore?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Dr. Harish Gowda at HIMAS Hospital, Basavanagudi performs laparoscopic hernia repair, serving patients from Basavanagudi, Jayanagar, JP Nagar, and Banashankari.\"}}, {\"@type\": \"Question\", \"name\": \"Does a hernia always need surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most hernias enlarge over time and eventually need surgical repair. Surgery is usually recommended before the hernia becomes an emergency.\"}}, {\"@type\": \"Question\", \"name\": \"Is laparoscopic mesh repair safe?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Laparoscopic mesh repair is a well-established technique with a high success rate and a lower recurrence rate than open surgery.\"}}, {\"@type\": \"Question\", \"name\": \"How long is recovery after hernia surgery?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most patients are discharged the same day, return to a desk-based routine within a week, and resume full physical activity in 3 to 4 weeks.\"}}]}",
          "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Procedures\", \"item\": \"https://drharishgowda.in/procedures.html\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Hernia Treatment\", \"item\": \"https://drharishgowda.in/hernia-repair.html\"}]}",
        ],
      }}
    />
  );
}
