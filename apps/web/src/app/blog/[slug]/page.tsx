import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookOpenText, CheckCircle2 } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { blogPosts } from "@/lib/prototype-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Organization",
      name: "UpNext Team"
    }
  };

  return (
    <PrototypeShell
      badge={post.category}
      icon={BookOpenText}
      title={post.title}
      description={post.summary}
      primaryAction={{ href: "/candidate/cv", label: "Analyze your CV" }}
      secondaryAction={{ href: "/blog", label: "All guides" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Summary"
            title="Key takeaways"
            description="This prototype article layout is designed for readability, SEO, and AI answer extraction."
          />
          <div className="mt-6 space-y-5">
            {[
              "Start with a concise profile summary that names target role, stack, and strongest project evidence.",
              "Use measurable project outcomes instead of listing only technologies.",
              "Group skills by category so recruiters can scan quickly.",
              "Add interview preparation links and job recommendations as internal links."
            ].map((takeaway) => (
              <div
                key={takeaway}
                className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                {takeaway}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading eyebrow="GEO blocks" title="Answer-engine ready" />
          <div className="mt-5">
            <TagList
              tags={["Definition", "Checklist", "FAQ", "Examples", "Updated date", "Author signal"]}
              tone="emerald"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="font-semibold text-brand-950">FAQ preview</p>
            <p className="mt-2 text-sm leading-6 text-brand-700">
              “What should a junior developer CV include?” Answer directly, then expand with
              examples.
            </p>
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
