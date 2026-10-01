import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const buttonClasses =
  "inline-flex h-[46px] shrink-0 items-center justify-center rounded-full bg-lime px-6 text-lg whitespace-nowrap text-ink transition-colors hover:bg-lime-hover active:bg-lime-bright disabled:cursor-not-allowed disabled:opacity-70";

type ButtonAsLink = ComponentProps<typeof Link> & { href: string };
type ButtonAsButton = ComponentProps<"button"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  if (props.href !== undefined) {
    const { className, ...rest } = props;
    return <Link className={cn(buttonClasses, className)} {...rest} />;
  }

  const { className, type = "button", ...rest } = props;
  return (
    <button type={type} className={cn(buttonClasses, className)} {...rest} />
  );
}
