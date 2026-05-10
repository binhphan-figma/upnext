import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { jobs } from "@upnext/domain";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";
import { ScoreRing } from "@/components/score-ring";

export const metadata: Metadata = {
  title: "IT Jobs for Junior Developers",
  description:
    "Search junior and mid-level IT jobs with skills-based matching, transparent AI explanations, and candidate-friendly career guidance.",
  alternates: {
    canonical: "/jobs"
  },
  openGraph: {
    title: "IT Jobs for Junior Developers | UpNext",
    description:
      "Explore skills-based IT job opportunities with AI-assisted CV matching and transparent recruiter workflows."
  }
};

export default function JobsPage() {
  return (
    <PageShell>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge icon={BriefcaseBusiness}>SEO-ready job discovery</Badge>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                Find IT roles by skills, level, and evidence.
              </h1>
              <p className="mt-5 text-base leading-7 text-ink-500">
                UpNext job pages are structured for users, Google, and AI answer engines. Each role
                highlights required skills, work mode, salary, deadlines, and practical candidate
                preparation signals.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="relative block">
                  <span className="sr-only">Search jobs</span>
                  <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-ink-500" />
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    placeholder="Search React, Node.js, PostgreSQL..."
                    type="search"
                  />
                </label>
                <button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-100 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600">
                  <SlidersHorizontal className="mr-2 h-4 w-4" aria-hidden="true" />
                  Filters
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-ink-500">
                {["React", "Node.js", "Intern", "Remote", "Ho Chi Minh City"].map((filter) => (
                  <span key={filter} className="rounded-full bg-slate-100 px-3 py-1">
                    {filter}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["High-fit roles", "5"],
                  ["Verified companies", "12"],
                  ["AI explanations", "Human-reviewed"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                      {label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-ink-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-soft lg:grid-cols-[1fr_auto]"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-sm font-bold text-white">
                      {job.logo}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-ink-900">
                        <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
                      </h2>
                      <p className="mt-1 text-sm text-ink-500">{job.company}</p>
                    </div>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-6 text-ink-500">{job.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span>{job.workMode}</span>
                    <span>{job.salary}</span>
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-5 rounded-2xl bg-slate-50 p-5 lg:w-72">
                  <ScoreRing score={job.matchScore} label="Demo profile match" tone="emerald" />
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="inline-flex justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                  >
                    View job details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
