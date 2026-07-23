import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Blog & Patient Education | Dr. Harish Gowda",
  description: "Patient education articles on piles, hernia, gallbladder, and other surgical conditions, written by Dr. Harish Gowda.",
  alternates: { canonical: "https://drharishgowda.in/blog" },
  openGraph: {
    title: "Blog & Patient Education | Dr. Harish Gowda",
    description: "Patient education articles on piles, hernia, gallbladder, and other surgical conditions, written by Dr. Harish Gowda.",
    url: "https://drharishgowda.in/blog",
    type: "website",
  },
};

const POSTS = [
  { tag: "Hernia", title: "When a Hernia Stops Being 'Just a Lump'", excerpt: "Most patients notice the lump months before they act on it. Here's why that delay matters." },
  { tag: "Gallbladder", title: "Understanding Gallstones: A Patient's Case Study", excerpt: "A closer look at how gallstone symptoms are often mistaken for everyday indigestion." },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://drharishgowda.in/index.html\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Blog\", \"item\": \"https://drharishgowda.in/blog.html\"}]}" }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Blog\", \"name\": \"Dr. Harish Gowda's Patient Education Blog\", \"author\": {\"@type\": \"Person\", \"name\": \"Dr. Harish Gowda\"}}" }}
      />
      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-4 font-mono text-[11px] text-stone-400 sm:px-8">
        <a href="/" className="hover:text-teal-800">Home</a><span>/</span><span className="text-stone-600">Blog</span>
      </div>

      <PageHero
        align="center"
        size="lg"
        bleed="02"
        eyebrow="Patient Education"
        title={<>Understanding Your Condition, <em className="italic text-teal-300">From Dr. Gowda</em></>}
        description="Straightforward explanations of common surgical conditions, written in Dr. Harish Gowda's own voice."
      />

      <section className="border-y border-stone-200 bg-white px-5 py-12 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl border-t border-stone-200">
            {POSTS.map((post, i) => (
              <a key={post.title} href="#" className="group flex flex-col gap-1.5 border-b border-stone-200 py-6 transition hover:bg-stone-50">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-stone-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-teal-700">{post.tag}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                <span className="mt-1 flex items-center gap-1 text-xs font-medium text-teal-800 opacity-0 transition group-hover:opacity-100">Read more &rarr;</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
