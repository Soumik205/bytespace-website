import Link from "next/link";

import { LogoMark } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn("inline-flex items-start gap-2", className)}
    >
      <LogoMark className="h-[31.5px] w-[28.875px] shrink-0 text-lime" />
      <span className="mt-2.5 font-brand text-2xl leading-none font-bold">
        ByteSpace
      </span>
    </Link>
  );
}
