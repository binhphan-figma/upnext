import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, CalendarDays, UsersRound } from "lucide-react";
import { jobs } from "@upnext/domain";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";

export const metadata: Metadata = {
  title: "Recruiter Jobs Prototype",
  robots: { index: false, follow: false }
};

export default function RecruiterJobsPage() {
  return (
    <PrototypeShell
      badge="Job operations"
      icon={BriefcaseBusiness}
      title="A recruiter job portfolio built for clarity and control."
      description="Recruiters need fast visibility into publication status, applicant quality, deadlines, and where AI can help improve job descriptions."
      primaryAction={{ href: "/recruiter/jobs/new", label: "Draft new job" }}
      secondaryAction={{ href: "/recruiter/applicants", label: "Review applicants" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Active roles"
          title="Published and draft jobs"
          description="Each job card shows operational priority without overwhelming the recruiter."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {jobs.map((job, index) => (
            <div key={job.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {index === 3 ? "Draft" : "Published"}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-ink-900">{job.title}</h2>
                  <p className="mt-1 text-sm text-ink-500">{job.location}</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm">
                  {job.matchScore}% avg fit
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white p-4">
                  <UsersRound className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  <p className="mt-2 font-semibold text-ink-900">{job.applicants} applicants</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <CalendarDays className="h-4 w-4 text-brand-700" aria-hidden="true" />
                  <p className="mt-2 font-semibold text-ink-900">{job.deadline}</p>
                </div>
              </div>
              <div className="mt-5">
                <TagList tags={job.skills.slice(0, 5)} />
              </div>
              <Link
                href="/recruiter/applicants"
                className="mt-5 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-950"
              >
                Open applicants →
              </Link>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
