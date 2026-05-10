import { cn } from "@/lib/cn";

type ScoreRingProps = {
  score: number;
  label: string;
  tone?: "blue" | "emerald" | "amber";
};

const toneClasses = {
  blue: "from-blue-500 to-indigo-500 text-brand-700",
  emerald: "from-emerald-500 to-teal-500 text-emerald-700",
  amber: "from-amber-500 to-orange-500 text-amber-700"
};

export function ScoreRing({ score, label, tone = "blue" }: ScoreRingProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br p-1"
        style={{
          backgroundImage: `conic-gradient(var(--tw-gradient-from) ${score}%, #e2e8f0 ${score}%)`
        }}
      >
        <div className="grid h-full w-full place-items-center rounded-full bg-white">
          <span className={cn("text-xl font-semibold", toneClasses[tone])}>{score}%</span>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-ink-900">{label}</p>
        <p className="mt-1 text-xs leading-5 text-ink-500">Human review required</p>
      </div>
    </div>
  );
}
