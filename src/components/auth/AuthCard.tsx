import type { ReactNode } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function AuthCard({ eyebrow, title, children }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className="flex w-full max-w-[579px] flex-col rounded-card bg-white px-6 pt-10 pb-10 sm:px-[63px] xl:min-h-[784px] xl:w-[579px] xl:shrink-0 xl:pt-[61px]"
    >
      <p className="text-lg text-primary">{eyebrow}</p>
      <SectionHeading as="h1" id="auth-title" className="text-ink">
        {title}
      </SectionHeading>
      {children}
    </section>
  );
}
