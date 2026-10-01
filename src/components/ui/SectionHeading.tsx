import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const sizes = {
  display: "text-[40px]/[1.2] sm:text-[56px]/[1.2] lg:text-display",
  h2: "text-[32px]/[1.2] lg:text-h2",
  h3: "text-[28px]/[1.2] lg:text-h3",
};

type SectionHeadingProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2";
  size?: keyof typeof sizes;
};

export function SectionHeading({
  as: Tag = "h2",
  size = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-[-0.01em]",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
