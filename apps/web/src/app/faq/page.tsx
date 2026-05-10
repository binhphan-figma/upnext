import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { publicFaq } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "UpNext FAQ",
  description:
    "Frequently asked questions about UpNext, AI recruitment, candidate coaching, recruiter decision support, and prototype scope.",
  alternates: { canonical: "/faq" }
};

export default function FaqPage() {
  return (
    <PrototypeShell
      badge="SEO/GEO FAQ"
      icon={HelpCircle}
      title="Clear answers for candidates, recruiters, reviewers, and AI answer engines."
      description="This FAQ page is written in a direct question-answer format so users, Google, and generative search engines can understand the product quickly."
      primaryAction={{ href: "/for-candidates", label: "For candidates" }}
      secondaryAction={{ href: "/for-employers", label: "For employers" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Questions and answers"
            title="UpNext product FAQ"
            description="Use concise answers that are easy to cite in search results and graduation review materials."
          />
          <div className="mt-6 space-y-4">
            {publicFaq.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h2 className="text-lg font-semibold text-ink-900">{item.question}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-500">{item.answer}</p>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <EnterpriseCallout
            title="GEO writing pattern"
            description="Use definitions, direct answers, entity-rich wording, and internal links so AI engines can summarize accurately."
            tone="blue"
          />
          <SurfaceCard>
            <SectionHeading eyebrow="Internal links" title="Recommended next pages" />
            <div className="mt-5">
              <TagList
                tags={["/demo", "/trust", "/ai-transparency", "/jobs", "/career-roadmap", "/blog"]}
                tone="emerald"
              />
            </div>
          </SurfaceCard>
        </div>
      </div>
    </PrototypeShell>
  );
}
