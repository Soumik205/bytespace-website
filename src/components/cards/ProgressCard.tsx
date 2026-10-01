import { cn } from "@/lib/utils";

type ProgressCardProps = {
  className?: string;
  // The hero copy of this card sets its label tighter than the one in the growth section.
  tight?: boolean;
};

export function ProgressCard({ className, tight = false }: ProgressCardProps) {
  return (
    <div
      className={cn("w-[232px] rounded-2xl bg-white p-4 text-ink", className)}
    >
      <p
        className={cn(
          "text-sm font-medium",
          tight ? "leading-[1.2]" : "leading-6",
        )}
      >
        Learning Progress
      </p>
      <p className="mt-2 font-display text-stat">55%</p>
      <div className="mt-2 h-2 w-[200px] rounded-full bg-surface-soft">
        <div className="h-full w-[112px] rounded-full bg-lime" />
      </div>
    </div>
  );
}
