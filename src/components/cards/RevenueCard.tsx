import { cn } from "@/lib/utils";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  change: string;
  // "wide" puts the change next to the amount and adds a progress bar.
  variant?: "wide" | "compact";
  className?: string;
};

export function RevenueCard({
  title,
  period,
  amount,
  change,
  variant = "wide",
  className,
}: RevenueCardProps) {
  const isWide = variant === "wide";

  return (
    <div
      className={cn(
        "rounded-2xl bg-primary p-4 text-surface",
        isWide ? "w-[232px]" : "w-[134px]",
        className,
      )}
    >
      <p className="text-base leading-[1.2] font-medium">{title}</p>
      <p className="text-2xs leading-[1.2]">{period}</p>
      <div
        className={cn(
          "mt-2.5 flex",
          isWide ? "items-center justify-between" : "flex-col gap-2.5",
        )}
      >
        <p className="font-display text-amount whitespace-nowrap">{amount}</p>
        <p className="w-fit rounded-full bg-lime-bright px-2 text-2xs leading-6 text-ink">
          {change}
        </p>
      </div>
      {isWide && (
        <div className="mt-2.5 h-2 w-[200px] rounded-full bg-white">
          <div className="h-full w-[112px] rounded-full bg-lime" />
        </div>
      )}
    </div>
  );
}
