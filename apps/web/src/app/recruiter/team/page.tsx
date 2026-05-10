import type { Metadata } from "next";
import { ShieldCheck, UsersRound } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { recruiterPermissionMatrix, recruiterTeamMembers } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Recruiter Team Prototype",
  description:
    "Recruiter team management UI for role-based permissions, interviewer access, and least-privilege governance.",
  robots: { index: false, follow: false }
};

export default function RecruiterTeamPage() {
  return (
    <PrototypeShell
      badge="Team governance"
      icon={UsersRound}
      title="Recruiter team access built around least privilege."
      description="Enterprise hiring teams need clear ownership: recruiters manage jobs, interviewers add evidence, coordinators schedule, and admins audit sensitive decisions."
      primaryAction={{ href: "/recruiter/company", label: "Company profile" }}
      secondaryAction={{ href: "/recruiter/analytics", label: "View analytics" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Members"
            title="Hiring team access"
            description="Every member has a role, scope, and status so responsibility is visible before sensitive candidate data is shared."
          />
          <div className="mt-6 space-y-4">
            {recruiterTeamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-ink-900">{member.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-brand-700">{member.role}</p>
                    <p className="mt-3 text-sm leading-6 text-ink-500">{member.scope}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm">
                      {member.access}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {member.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <ShieldCheck className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Permissions" title="Role matrix" />
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.16em] text-ink-500">
                  <tr>
                    <th className="px-4 py-3">Permission</th>
                    <th className="px-4 py-3">Admin</th>
                    <th className="px-4 py-3">Int.</th>
                    <th className="px-4 py-3">Coord.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {recruiterPermissionMatrix.map((row) => (
                    <tr key={row.permission}>
                      <td className="px-4 py-3 font-medium text-ink-800">{row.permission}</td>
                      <td className="px-4 py-3">{row.admin ? "Yes" : "No"}</td>
                      <td className="px-4 py-3">{row.interviewer ? "Yes" : "No"}</td>
                      <td className="px-4 py-3">{row.coordinator ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Access principle"
            description="Only users who need candidate data for a hiring task should see it, and sensitive status changes require accountable reasons."
            tone="blue"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
