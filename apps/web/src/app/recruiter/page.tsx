import type { Metadata } from "next";
import {
  applications,
  createMatchExplanation,
  demoUsers,
  getApplicationJob,
  getPermissionsForRole,
  jobs,
  recruiterPipeline
} from "@upnext/domain";
import {
  Bot,
  BriefcaseBusiness,
  Building2,
  FilePenLine,
  MessageSquareText,
  UsersRound
} from "lucide-react";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";
import { EnterpriseCallout } from "@/components/prototype-card";
import { ScoreRing } from "@/components/score-ring";
import { StatusChip } from "@/components/status-chip";
import { WorkspaceLinkGrid, type WorkspaceLink } from "@/components/workspace-link-grid";

export const metadata: Metadata = {
  title: "Recruiter Dashboard",
  description:
    "Manage jobs, applicant pipeline, AI candidate-job fit explanations, and human review decisions.",
  robots: {
    index: false,
    follow: false
  }
};

export default function RecruiterDashboardPage() {
  const featuredApplication = applications[0];
  const featuredJob = featuredApplication ? getApplicationJob(featuredApplication) : jobs[0];
  const featuredMatch = featuredJob ? createMatchExplanation(featuredJob) : undefined;
  const recruiterUser = demoUsers.find((user) => user.role === "recruiter");
  const recruiterLinks: WorkspaceLink[] = [
    {
      href: "/recruiter/company",
      title: "Company",
      description: "Employer profile, verification, culture, and stack.",
      icon: Building2
    },
    {
      href: "/recruiter/jobs",
      title: "Jobs",
      description: "Published roles, deadlines, applicants, and fit signals.",
      icon: BriefcaseBusiness
    },
    {
      href: "/recruiter/jobs/new",
      title: "JD builder",
      description: "Structured, fair, skills-based job posting.",
      icon: FilePenLine
    },
    {
      href: "/recruiter/pipeline",
      title: "Pipeline",
      description: "Board view for AI-reviewed hiring stages.",
      icon: MessageSquareText
    },
    {
      href: "/recruiter/applicants",
      title: "Applicants",
      description: "Explainable AI support with manual decision control.",
      icon: UsersRound
    }
  ];

  return (
    <PageShell>
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge icon={BriefcaseBusiness}>Recruiter workspace</Badge>
          <WorkspaceLinkGrid links={recruiterLinks} />

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <h1 className="text-4xl font-semibold tracking-tight text-ink-900">
                Applicant pipeline
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink-500">
                Recruiters see AI summaries, but every status update remains a human action with
                audit history and company-scoped permissions.
              </p>
              {recruiterUser ? (
                <div className="mt-5">
                  <EnterpriseCallout
                    title={`Demo signed in as ${recruiterUser.email}`}
                    description={`Permissions: ${getPermissionsForRole(recruiterUser.role).join(", ")}.`}
                    tone="blue"
                  />
                </div>
              ) : null}
              <div className="mt-8 grid gap-4 md:grid-cols-4">
                {recruiterPipeline.map((item) => (
                  <div key={item.status} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-3xl font-semibold text-ink-900">{item.value}</p>
                    <p className="mt-1 text-sm text-ink-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Bot className="h-4 w-4" aria-hidden="true" />
                AI decision support
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                AI explains skill evidence, missing signals, risks, and suggested interview
                questions. It never changes status automatically.
              </p>
              {featuredMatch ? (
                <div className="mt-6 rounded-2xl bg-white/10 p-4">
                  <p className="text-3xl font-semibold">{featuredMatch.overallScore}%</p>
                  <p className="mt-1 text-sm text-slate-300">Featured applicant match</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-2">
                <UsersRound className="h-5 w-5 text-brand-600" aria-hidden="true" />
                <h2 className="text-2xl font-semibold tracking-tight text-ink-900">Applicants</h2>
              </div>
              <div className="mt-6 space-y-4">
                {applications.map((application) => {
                  const job = getApplicationJob(application);

                  return (
                    <article
                      key={application.id}
                      className="rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-ink-900">
                            {application.candidateName}
                          </h3>
                          <p className="mt-1 text-sm text-ink-500">{job?.title}</p>
                        </div>
                        <StatusChip status={application.status} />
                      </div>
                      <div className="mt-4 grid gap-3 text-sm text-ink-600 md:grid-cols-2">
                        <span>Match score: {application.matchScore}%</span>
                        <span>Submitted: {application.submittedAt}</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              {featuredMatch ? (
                <ScoreRing
                  score={featuredMatch.overallScore}
                  label="Candidate-job fit"
                  tone="emerald"
                />
              ) : null}
              <div className="mt-6">
                <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink-900">
                  <MessageSquareText className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  Evidence summary
                </h2>
                <div className="mt-4 space-y-3">
                  {featuredApplication?.evidence.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800"
                    >
                      {item}
                    </p>
                  ))}
                  {featuredApplication?.missingSignals.map((item) => (
                    <p key={item} className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
