import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import Link from "next/link";
import { PublicLanding } from "@/components/public-landing";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { candidateLandingFeatures } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "For Candidates",
  description:
    "UpNext helps junior IT candidates improve CVs, understand job fit, and practice interviews with transparent AI coaching.",
  alternates: { canonical: "/for-candidates" },
  openGraph: {
    title: "For Candidates | UpNext",
    description:
      "AI CV feedback, skills-based job matching, and interview coaching for junior IT candidates.",
    url: "/for-candidates"
  }
};

export default function ForCandidatesPage() {
  return (
    <>
      <PublicLanding
        badge="For junior IT candidates"
        icon={GraduationCap}
        title="Improve your CV, find better-fit jobs, and prepare with AI coaching."
        description="UpNext helps students and junior developers understand what recruiters look for, what skills are missing, and how to prepare before applying."
        primaryAction={{ href: "/candidate/cv", label: "View AI CV feedback" }}
        secondaryAction={{ href: "/jobs", label: "Browse jobs" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
          Candidate coach
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Next best action</h2>
        <div className="mt-6 space-y-3">
          {[
            "Upload CV with consent",
            "Review missing skills",
            "Practice interview",
            "Apply with confidence"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              <span className="text-sm text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </PublicLanding>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SurfaceCard>
            <SectionHeading
              eyebrow="Candidate value"
              title="Built for practical career preparation"
              description="The candidate experience should reduce anxiety and give clear, friendly next steps."
            />
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {candidateLandingFeatures.map((feature) => (
                <article key={feature.title} className="rounded-2xl bg-slate-50 p-5">
                  <h2 className="font-semibold text-ink-900">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink-500">{feature.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl bg-blue-50 p-5 sm:flex-row sm:items-center">
              <TagList
                tags={["CV feedback", "Job match", "Interview coach", "Human-friendly AI"]}
              />
              <Link
                href="/candidate"
                className="inline-flex items-center text-sm font-semibold text-brand-700"
              >
                Open candidate workspace
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </SurfaceCard>
        </div>
      </section>
    </>
  );
}
