import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  className?: string;
};

const arrowClasses =
  "grid h-12 w-14 place-items-center rounded-full border border-line transition-colors hover:border-ink-soft disabled:cursor-not-allowed disabled:hover:border-line";

export function Pagination({
  page,
  pageCount,
  onChange,
  className,
}: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-6", className)}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={cn(arrowClasses, "text-ink-soft")}
      >
        <ChevronLeftIcon className="size-8" />
      </button>
      {pages.map((number) => (
        <button
          key={number}
          type="button"
          aria-label={`Page ${number}`}
          aria-current={number === page ? "page" : undefined}
          onClick={() => onChange(number)}
          className={cn(
            "-mx-2 h-12 px-2 font-display text-title transition-colors",
            number === page ? "text-line" : "text-ink hover:text-primary",
          )}
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
        className={cn(arrowClasses, "text-ink")}
      >
        <ChevronRightIcon className="size-8" />
      </button>
    </nav>
  );
}
