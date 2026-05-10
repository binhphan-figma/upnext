import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  GraduationCap,
  LockKeyhole,
  Search,
  Sparkles,
  UsersRound
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { FeatureCard } from "@/components/feature-card";
import { MetricCard } from "@/components/metric-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const productModules = [
  {
    icon: FileSearch,
    title: "AI CV analysis",
    description:
      "Parse CVs into structured skills, experience, projects, strengths, gaps, and candidate-friendly feedback."
  },
  {
    icon: Search,
    title: "Skills-based matching",
    description:
      "Compare CV snapshots with job requirements using rule-based scoring plus human-readable AI explanations."
  },
  {
    icon: Bot,
    title: "Interview coach",
    description:
      "Practice text interviews by role, level, and stack with rubric-based feedback and improved sample answers."
  },
  {
    icon: ClipboardCheck,
    title: "Recruiter workflow",
    description:
      "Review applicant fit, shortlist manually, add internal notes, invite interviews, and track status history."
  }
];

const workflowSteps = [
  "Candidate uploads CV and gives AI consent",
  "System parses CV into structured profile data",
  "Candidate receives improvement suggestions",
  "Recruiter publishes a skills-based JD",
  "AI explains candidate-job fit with evidence",
  "Recruiter makes the final hiring decision"
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge icon={Sparkles}>Graduation-ready AI recruitment platform</Badge>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
                AI-powered IT hiring for junior and mid-level talent.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-500">
                UpNext helps candidates improve their CVs and interview skills while giving
                recruiters transparent, evidence-based decision support. AI explains and recommends;
                humans decide.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/prototype"
                  className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                >
                  Explore UI prototype
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/candidate/cv"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-100 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                >
                  View AI CV flow
                </Link>
              </div>
              <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                <MetricCard label="Core roles" value="3" />
                <MetricCard label="MVP modules" value="15" />
                <MetricCard label="Auto-reject" value="0" />
              </dl>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-sm font-semibold text-ink-900">Prototype-first direction</p>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  The current build emphasizes polished enterprise UI screens and defense-ready
                  product storytelling before deeper backend implementation.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-blue-200">
                      Recruiter copilot
                    </p>
                    <h2 className="mt-1 text-xl font-semibold">Frontend Intern applicant fit</h2>
                  </div>
                  <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Human review required
                  </div>
                </div>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Overall match</span>
                      <span className="text-2xl font-semibold">82%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-blue-400 to-emerald-300" />
                    </div>
                    <p className="mt-3 text-xs leading-5 text-slate-300">
                      Strong React/Tailwind projects, missing basic testing evidence. Confidence:
                      medium.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["React", "TypeScript", "Portfolio", "GitHub evidence"].map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-2xl bg-white/10 p-3"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                        <span className="text-sm text-slate-100">{skill}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                    <p className="text-sm font-medium text-amber-100">Suggested interview focus</p>
                    <p className="mt-2 text-xs leading-5 text-amber-50/80">
                      Ask about state management trade-offs, API error handling, and how the
                      candidate would test a form-heavy application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mvp" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <Badge icon={BriefcaseBusiness}>MVP modules</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                Build a product workflow, not isolated CRUD screens.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-500">
                The first version should prove the full loop: profile → job → application → AI
                analysis → recruiter review → interview preparation.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {productModules.map((module) => (
                <FeatureCard key={module.title} {...module} />
              ))}
            </div>
          </div>
        </section>

        <section id="ai-workflow" className="px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <Badge icon={LockKeyhole}>Ethical AI</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">
                Transparent by design.
              </h2>
              <p className="mt-4 text-sm leading-6 text-ink-500">
                Every AI result should include evidence, missing data, confidence, limitations, and
                a clear reminder that recruiters make the final decision.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden="true" />
                  No automatic rejection.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden="true" />
                  No sensitive-attribute inference.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden="true" />
                  Schema-validated structured outputs.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
              <ol className="grid gap-4 md:grid-cols-2">
                {workflowSteps.map((step, index) => (
                  <li key={step} className="rounded-2xl bg-slate-50 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="mt-4 text-sm font-medium leading-6 text-ink-900">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            <FeatureCard
              icon={GraduationCap}
              title="Candidate dashboard"
              description="CV score, application status, saved jobs, interview practice history, and next-best actions."
            />
            <FeatureCard
              icon={UsersRound}
              title="Recruiter dashboard"
              description="Applicant pipeline, AI summaries, status distribution, and interview invitation workflow."
            />
            <FeatureCard
              icon={BarChart3}
              title="Admin dashboard"
              description="Users, companies, jobs, AI logs, content quality, reports, and skill taxonomy management."
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
