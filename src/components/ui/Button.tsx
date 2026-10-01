import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex h-[46px] shrink-0 items-center justify-center rounded-full px-6 text-lg font-medium whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-70";

const variants = {
  primary: "bg-lime text-ink hover:bg-lime-hover active:bg-lime-bright",
  outline:
    "border border-surface/40 text-surface hover:border-surface hover:bg-surface/10",
};

type Variant = keyof typeof variants;
type ButtonAsLink = ComponentProps<typeof Link> & {
  href: string;
  variant?: Variant;
};
type ButtonAsButton = ComponentProps<"button"> & {
  href?: undefined;
  variant?: Variant;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  if (props.href !== undefined) {
    const { className, variant = "primary", ...rest } = props;
    return (
      <Link
        className={cn(baseClasses, variants[variant], className)}
        {...rest}
      />
    );
  }

  const { className, variant = "primary", type = "button", ...rest } = props;
  return (
    <button
      type={type}
      className={cn(baseClasses, variants[variant], className)}
      {...rest}
    />
  );
}
