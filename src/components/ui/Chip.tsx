import { cn } from "@/lib/utils";

// Pill style shared by the topic filter, the course tabs and the rating filters.
export function chipClasses(active: boolean) {
  return cn(
    "inline-flex h-[43px] shrink-0 items-center gap-1 rounded-full px-4 text-base font-medium whitespace-nowrap transition-colors",
    active ? "bg-lime text-ink" : "bg-surface text-ink-soft hover:bg-line/60",
  );
}
