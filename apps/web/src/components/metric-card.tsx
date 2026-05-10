type MetricCardProps = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">{value}</dd>
    </div>
  );
}
