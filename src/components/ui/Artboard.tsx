import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ArtboardProps = {
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
};

// Keeps an illustration of overlapping layers at its design size so each layer can use
// its exact design coordinates. Callers shrink the whole board on small screens by
// setting --scale.
export function Artboard({
  width,
  height,
  className,
  children,
}: ArtboardProps) {
  return (
    <div
      className={cn("relative [--scale:1]", className)}
      style={{ height: `calc(${height}px * var(--scale))` }}
    >
      <div
        className="absolute top-0 left-1/2 origin-top -translate-x-1/2 scale-(--scale)"
        style={{ width, height }}
      >
        {children}
      </div>
    </div>
  );
}
