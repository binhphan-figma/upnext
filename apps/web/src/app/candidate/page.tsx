import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import {
  applications,
  candidateSnapshot,
  createMatchExplanation,
  demoUsers,
  getApplicationJob,
  getPermissionsForRole
} from "@upnext/domain";
import { ArrowRight, BookOpenCheck, FileText, Target, Video } from "lucide-react";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";
import { ScoreRing } from "@/components/score-ring";
import { StatusChip } from "@/components/status-chip";

export const metadata: Metadata = {
  title: "Candidate Dashboard",
  description:
    "Track applications, CV readiness, AI feedback, saved jobs, and interview practice in UpNext.",
  robots: {
    index: false,
    follow: false
  }
};

export default function CandidateDashboardPage() {
  const primaryApplication = applications[0];
  const primaryJob = primaryApplication ? getApplicationJob(primaryApplication) : undefined;
  const match = primaryJob ? createMatchExplanation(primaryJob) : undefined;
  const candidateUser = demoUsers.find((user) => user.role === "candidate");

  return (
    <PageShell>
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge icon={FileText}>Candidate workspace</Badge>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <p className="text-sm font-medium text-brand-700">Welcome back</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-ink-900">
                {candidateSnapshot.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink-500">
                {candidateSnapshot.headline}. Your next best action is to strengthen testing
                evidence before applying to more frontend roles.
              </p>
              {candidateUser ? (
                <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-brand-700">
                  Signed in as {candidateUser.email}. Permissions:{" "}
                  {getPermissionsForRole(candidateUser.role).join(", ")}.
                </div>
              ) : null}
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <ActionCard
                  icon={Target}
                  title="Improve CV"
                  description="Add metrics, testing proof, and clearer project outcomes."
                />
                <ActionCard
                  icon={BookOpenCheck}
                  title="Review job fit"
                  description="Compare your CV snapshot against active jobs."
                />
                <ActionCard
                  icon={Video}
                  title="Practice interview"
                  description="Answer rubric-based React questions with AI feedback."
                />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <ScoreRing score={candidateSnapshot.cvScore} label="CV readiness score" tone="blue" />
              <div className="mt-6 space-y-3">
                {["Strong React basics", "Portfolio link present", "Testing evidence missing"].map(
                  (item) => (
                    <p
                      key={item}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-ink-600"
                    >
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                    Applications
                  </h2>
                  <p className="mt-1 text-sm text-ink-500">
                    Stable CV snapshots and transparent statuses.
                  </p>
                </div>
                <Link href="/jobs" className="text-sm font-semibold text-brand-700">
                  Find jobs
                </Link>
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
                            {job?.title ?? application.jobSlug}
                          </h3>
                          <p className="mt-1 text-sm text-ink-500">{job?.company}</p>
                        </div>
                        <StatusChip status={application.status} />
                      </div>
                      <div className="mt-4 grid gap-3 text-sm text-ink-600 md:grid-cols-3">
                        <span>Submitted {application.submittedAt}</span>
                        <span>Match {application.matchScore}%</span>
                        <span>CV snapshot locked</span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                AI coach preview
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-500">
                {match?.candidateAdvice ??
                  "Choose a job to receive targeted improvement suggestions."}
              </p>
              <div className="mt-5 space-y-3">
                {match?.suggestedInterviewQuestions.map((question) => (
                  <div
                    key={question}
                    className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-brand-700"
                  >
                    {question}
                  </div>
                ))}
              </div>
              <Link
                href="/jobs/frontend-intern-react"
                className="mt-6 inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
              >
                View matched job
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ActionCard({
  icon: Icon,
  title,
  description
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl bg-slate-50 p-5">
      <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
      <h2 className="mt-4 font-semibold text-ink-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-ink-500">{description}</p>
    </article>
  );
}
