import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";

type SubmitButtonProps = {
  pending: boolean;
  children: ReactNode;
};

export function SubmitButton({ pending, children }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="mt-6 gap-2 self-end"
    >
      {pending && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink motion-reduce:animate-none"
        />
      )}
      {children}
    </Button>
  );
}
