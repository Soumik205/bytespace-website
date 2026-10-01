"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { chipClasses } from "@/components/ui/Chip";
import { cn } from "@/lib/utils";

export function CourseTabs({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;
  const tabs = [
    { label: "About", href: base },
    { label: "Lesson", href: `${base}/lessons` },
    { label: "Reviews", href: `${base}/reviews` },
  ];

  return (
    <nav aria-label="Course sections" className={cn("flex gap-4", className)}>
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            scroll={false}
            aria-current={active ? "page" : undefined}
            className={chipClasses(active)}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
