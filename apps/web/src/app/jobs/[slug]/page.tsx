import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Bot, CalendarDays, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { createMatchExplanation, getJobBySlug, jobs } from "@upnext/domain";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";
import { ScoreRing } from "@/components/score-ring";

type JobDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {};
  }

  return {
    title: `${job.title} at ${job.company}`,
    description: job.seoDescription,
    alternates: {
      canonical: `/jobs/${job.slug}`
    },
    openGraph: {
      title: `${job.title} at ${job.company}`,
      description: job.seoDescription
    }
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const match = createMatchExplanation(job);
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company
    },
    jobLocation: {
      "@type": "Place",
      address: job.location
    },
    employmentType: job.employmentType,
    validThrough: job.deadline,
    applicantLocationRequirements: job.workMode,
    skills: job.skills.join(", ")
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <Badge icon={ShieldCheck}>Human-reviewed hiring workflow</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink-900">
              {job.title}
            </h1>
            <p className="mt-3 text-lg text-ink-500">{job.company}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {job.location}
              </span>
              <span>{job.workMode}</span>
              <span>{job.employmentType}</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Apply by {job.deadline}
              </span>
            </div>
            <p className="mt-8 text-base leading-8 text-ink-700">{job.description}</p>

            <section className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                Required skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-brand-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <InfoList title="Responsibilities" items={job.responsibilities} />
              <InfoList title="Requirements" items={job.requirements} />
              <InfoList title="Benefits" items={job.benefits} />
            </div>
          </article>

          <aside className="space-y-5">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <ScoreRing
                score={match.overallScore}
                label="AI-assisted fit preview"
                tone="emerald"
              />
              <p className="mt-5 text-sm leading-6 text-ink-500">{match.recruiterSummary}</p>
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                AI score is a recommendation layer only. Recruiters must review evidence manually.
              </div>
            </section>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                <Bot className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Suggested interview focus
              </div>
              <ul className="mt-4 space-y-3">
                {match.suggestedInterviewQuestions.map((question) => (
                  <li key={question} className="flex gap-3 text-sm leading-6 text-ink-600">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 flex-none text-emerald-600"
                      aria-hidden="true"
                    />
                    {question}
                  </li>
                ))}
              </ul>
            </section>
            <Link
              href={`/candidate/apply/${job.slug}`}
              className="inline-flex w-full justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              Apply with CV snapshot
            </Link>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-ink-900">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-ink-600">
            <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
