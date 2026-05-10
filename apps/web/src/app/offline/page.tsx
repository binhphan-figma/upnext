import Link from "next/link";
import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-600">
          <WifiOff aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-ink-900">You are offline</h1>
        <p className="mt-3 text-sm leading-6 text-ink-500">
          UpNext can keep lightweight public pages available later, but private dashboard data
          should not be cached without careful security rules.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
