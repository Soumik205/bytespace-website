import type { ComponentProps } from "react";

import { SearchIcon } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

type SearchFieldProps = ComponentProps<"input"> & {
  label: string;
};

export function SearchField({ label, className, ...props }: SearchFieldProps) {
  return (
    <label
      className={cn(
        "flex h-[52px] w-full max-w-[461px] min-w-0 items-center gap-2 rounded-[24px] bg-white pl-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-lime",
        className,
      )}
    >
      <SearchIcon className="size-6 shrink-0 text-muted" />
      <span className="sr-only">{label}</span>
      <input
        type="search"
        className="h-full w-full min-w-0 rounded-r-[24px] bg-transparent pr-4 text-lg text-ink outline-none placeholder:text-muted"
        {...props}
      />
    </label>
  );
}
