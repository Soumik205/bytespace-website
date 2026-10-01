import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type TextFieldProps = ComponentProps<"input"> & {
  id: string;
  label: string;
  error?: string;
};

export function TextField({
  id,
  label,
  error,
  className,
  ...props
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm leading-[1.2] text-ink">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "h-[52px] w-full rounded-xl border bg-white px-[23px] text-lg text-ink transition-colors outline-none placeholder:text-muted focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          error ? "border-danger" : "border-mist",
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
