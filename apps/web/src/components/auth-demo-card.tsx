import type { DemoUser } from "@upnext/domain";
import Link from "next/link";

export function AuthDemoCard({ user }: { user: DemoUser }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-sm font-bold text-white">
          {user.avatarInitials}
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-ink-900">{user.name}</h2>
          <p className="mt-1 text-sm text-ink-500">{user.email}</p>
          <span className="mt-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-brand-700">
            {user.role}
          </span>
        </div>
      </div>
      <dl className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-500">Demo password</dt>
          <dd className="font-semibold text-ink-900">{user.passwordHint}</dd>
        </div>
      </dl>
      <ul className="mt-5 space-y-2">
        {user.onboardingTasks.map((task) => (
          <li key={task} className="text-sm leading-6 text-ink-600">
            • {task}
          </li>
        ))}
      </ul>
      <Link
        href={user.dashboardPath}
        className="mt-6 inline-flex w-full justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
      >
        Open {user.role} dashboard
      </Link>
    </article>
  );
}
