import type { Metadata } from "next";
import Link from "next/link";
import { BookmarkCheck, MapPin } from "lucide-react";
import { jobs } from "@upnext/domain";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";

export const metadata: Metadata = {
  title: "Saved Jobs Prototype",
  robots: { index: false, follow: false }
};

export default function SavedJobsPage() {
  return (
    <PrototypeShell
      badge="Saved jobs"
      icon={BookmarkCheck}
      title="A focused shortlist for candidate decision-making."
      description="Saved jobs should help candidates compare fit, missing skills, deadline urgency, and preparation effort."
      primaryAction={{ href: "/jobs", label: "Browse jobs" }}
      secondaryAction={{ href: "/candidate/cv", label: "Improve CV first" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Comparison view"
          title="Saved roles ranked by practical readiness"
          description="For prototype purposes, these cards show the exact UX pattern the final product should support."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {jobs.slice(0, 3).map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold text-ink-900">{job.title}</h2>
                  <p className="mt-1 text-sm text-ink-500">{job.company}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {job.matchScore}% fit
                </span>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-ink-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {job.location} · {job.workMode}
              </p>
              <div className="mt-4">
                <TagList tags={job.skills.slice(0, 4)} tone="blue" />
              </div>
            </Link>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
