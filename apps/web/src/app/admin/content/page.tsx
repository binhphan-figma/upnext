import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { blogPosts } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Content Admin Prototype",
  robots: { index: false, follow: false }
};

export default function AdminContentPage() {
  return (
    <PrototypeShell
      badge="Content operations"
      icon={Newspaper}
      title="Admin content tools for SEO and GEO growth."
      description="Career content should be managed as a product surface with categories, reviewed dates, FAQ blocks, schema readiness, and internal links."
      primaryAction={{ href: "/blog", label: "View blog hub" }}
      secondaryAction={{ href: "/admin/skills", label: "Manage taxonomy" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Editorial queue"
          title="SEO/GEO article workflow"
          description="Each article should be useful to students and understandable by search engines and AI answer engines."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <h2 className="mt-4 font-semibold text-ink-900">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-500">{post.summary}</p>
              <div className="mt-4">
                <TagList tags={["FAQ block", "Article schema", "Internal links"]} tone="emerald" />
              </div>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
