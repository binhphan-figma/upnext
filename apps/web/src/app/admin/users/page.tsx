import type { Metadata } from "next";
import { demoUsers } from "@upnext/domain";
import { ShieldCheck, UsersRound } from "lucide-react";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";

export const metadata: Metadata = {
  title: "Admin Users Prototype",
  robots: { index: false, follow: false }
};

export default function AdminUsersPage() {
  return (
    <PrototypeShell
      badge="User governance"
      icon={UsersRound}
      title="Admin user management for roles, safety, and account quality."
      description="This prototype shows how admins can understand role distribution, verification state, and potential account issues without exposing unnecessary private data."
      primaryAction={{ href: "/admin/reports", label: "Open reports" }}
      secondaryAction={{ href: "/admin/ai-logs", label: "Review AI logs" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Accounts"
          title="Role-aware user table"
          description="Enterprise admin UX should make risky states visible and routine states easy to scan."
        />
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.18em] text-ink-500">
              <tr>
                <th className="px-5 py-4">User</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Next audit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {demoUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-5 py-4">
                    <p className="font-semibold text-ink-900">{user.name}</p>
                    <p className="mt-1 text-ink-500">{user.email}</p>
                  </td>
                  <td className="px-5 py-4 capitalize text-ink-700">{user.role}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Demo verified
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink-500">Monthly role review</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <TagList tags={["RBAC", "least privilege", "audit trail", "privacy by default"]} />
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
