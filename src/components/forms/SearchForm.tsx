"use client";

import type { FormEvent } from "react";

import { SearchIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function SearchForm({ className }: { className?: string }) {
  // There is no search page yet, so a search takes the visitor to the course list.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById("courses")?.scrollIntoView();
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn("flex items-start justify-center gap-4", className)}
    >
      <label className="flex h-[52px] w-full max-w-[461px] min-w-0 items-center gap-2 rounded-[24px] bg-white pl-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-lime">
        <SearchIcon className="size-6 shrink-0 text-muted" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="h-full w-full min-w-0 rounded-r-[24px] bg-transparent pr-4 text-lg text-ink outline-none placeholder:text-muted"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}
