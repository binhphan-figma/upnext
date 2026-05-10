import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, SearchCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { blogPosts } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "IT Career Guides for Junior Developers",
  description:
    "Read UpNext career guides for junior developers: CV tips, React interview preparation, and skills-based hiring insights.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "IT Career Guides for Junior Developers | UpNext",
    description: "SEO/GEO-ready career content hub for IT students and junior developers."
  }
};

export default function BlogPage() {
  return (
    <PrototypeShell
      badge="Career content hub"
      icon={BookOpenText}
      title="SEO/GEO-ready content that helps students and strengthens discovery."
      description="The blog is part of the product strategy: helpful guides for candidates, authority signals for search engines, and citation-friendly content for AI answer engines."
      primaryAction={{ href: "/blog/junior-developer-cv-checklist", label: "Read CV checklist" }}
      secondaryAction={{ href: "/jobs", label: "Browse jobs" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Content clusters"
          title="Career articles for junior IT candidates"
          description="Each article should answer a clear question, include examples/checklists, and link to relevant jobs or tools."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <h2 className="mt-5 text-xl font-semibold text-ink-900">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-500">{post.summary}</p>
              <p className="mt-5 text-sm font-semibold text-brand-700">{post.readingTime}</p>
            </Link>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard className="mt-6">
        <SearchCheck className="h-7 w-7 text-brand-700" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold text-ink-900">GEO content structure</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-500">
          Use concise definitions, summary boxes, FAQ sections, comparison tables, updated dates,
          author information, and structured data so generative search tools can understand and cite
          the content.
        </p>
        <div className="mt-5">
          <TagList
            tags={["Article schema", "FAQPage schema", "Entity-rich headings", "Internal links"]}
          />
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
