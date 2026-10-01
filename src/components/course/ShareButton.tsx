"use client";

import { useState } from "react";

import { ShareIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ShareButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  // Uses the native share sheet where there is one, otherwise copies the link.
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
      } catch {
        // The visitor closed the share sheet.
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button onClick={share} className={cn("h-10 gap-2 text-base", className)}>
      <ShareIcon className="size-6" />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </Button>
  );
}
