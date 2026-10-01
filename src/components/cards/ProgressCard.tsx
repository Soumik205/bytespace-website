import { cn } from "@/lib/utils";

export function ProgressCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-[232px] rounded-2xl bg-white p-4 text-ink", className)}
    >
      <p className="text-sm leading-[1.2]">Learning Progress</p>
      <p className="mt-2 font-display text-stat">55%</p>
      <div className="mt-2 h-2 w-[200px] rounded-full bg-surface-soft">
        <div className="h-full w-[112px] rounded-full bg-lime" />
      </div>
    </div>
  );
}
