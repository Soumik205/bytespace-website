import type { ReactNode } from "react";

import { AuthIllustration } from "@/components/auth/AuthIllustration";

type AuthShellProps = {
  tagline: string;
  description: string;
  reviewsClassName?: string;
  children: ReactNode;
};

export function AuthShell({
  tagline,
  description,
  reviewsClassName,
  children,
}: AuthShellProps) {
  return (
    <div className="mx-auto flex max-w-[579px] flex-col gap-8 xl:max-w-none xl:flex-row xl:justify-between">
      <div className="relative text-surface xl:w-[525px] xl:pl-0.5">
        <p className="font-display text-title">{tagline}</p>
        <p className="mt-4 max-w-[480px] text-lg">{description}</p>
        <AuthIllustration
          reviewsClassName={reviewsClassName}
          className="hidden xl:absolute xl:top-[185px] xl:left-[-25px] xl:block xl:w-[552px]"
        />
      </div>
      {children}
    </div>
  );
}
