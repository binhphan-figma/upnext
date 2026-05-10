import type { ApplicationStatus } from "@upnext/domain";
import { cn } from "@/lib/cn";

const statusStyles: Record<ApplicationStatus, string> = {
  submitted: "bg-slate-100 text-slate-700",
  under_review: "bg-blue-50 text-blue-700",
  shortlisted: "bg-emerald-50 text-emerald-700",
  interview_invited: "bg-indigo-50 text-indigo-700",
  rejected: "bg-rose-50 text-rose-700",
  hired: "bg-green-50 text-green-700",
  withdrawn: "bg-zinc-100 text-zinc-700"
};

export function StatusChip({ status }: { status: ApplicationStatus }) {
  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", statusStyles[status])}>
      {status.replace("_", " ")}
    </span>
  );
}
