import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PanelHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("font-display text-title text-ink", className)}>
      {children}
    </h2>
  );
}

export function PanelText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-6 text-base leading-[26px] text-ink-soft", className)}>
      {children}
    </p>
  );
}
