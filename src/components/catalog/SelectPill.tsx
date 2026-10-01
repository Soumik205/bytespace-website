import type { ComponentType, SVGProps } from "react";

import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type SelectPillProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  className?: string;
};

// A pill that shows the current choice; a transparent native select on top
// provides the menu, so it works with keyboard, touch and screen readers.
export function SelectPill({
  icon: Icon,
  label,
  value,
  options,
  onChange,
  className,
}: SelectPillProps) {
  const current = options.find((option) => option.value === value);

  return (
    <label
      className={cn(
        "relative inline-flex h-12 items-center gap-1 rounded-full border border-line bg-white px-[15px] text-base font-medium text-ink-soft transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary hover:border-ink-soft",
        className,
      )}
    >
      <Icon className="size-6 shrink-0 text-ink" />
      <span className="whitespace-nowrap">
        {value ? current?.label : label}
      </span>
      <select
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
