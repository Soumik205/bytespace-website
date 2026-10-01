import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Registers the custom type scale so text-h2 and friends merge as font sizes, not colors.
const twMerge = extendTailwindMerge({
  extend: {
    theme: { text: ["display", "h2", "h3", "stat", "amount", "title"] },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
