"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { newsletterSchema, type NewsletterValues } from "@/lib/validation";

export function NewsletterForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    mode: "onTouched",
  });

  // Nothing is sent anywhere: a valid address just shows the confirmation.
  const onSubmit = () => reset(undefined, { keepIsSubmitSuccessful: true });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={className}>
      <div className="flex items-start gap-3 sm:gap-6">
        <div className="w-full max-w-[376px] min-w-0">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "newsletter-error" : undefined}
            className={cn(
              "h-[52px] w-full rounded-full border bg-white px-6 text-base text-ink outline-none placeholder:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              errors.email ? "border-danger" : "border-line",
            )}
            {...register("email")}
          />
          {errors.email && (
            <p id="newsletter-error" className="mt-2 px-6 text-xs text-danger">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit">Search</Button>
      </div>
      <p role="status" className="mt-2 px-6 text-xs text-primary empty:hidden">
        {isSubmitSuccessful && !errors.email
          ? "Thanks for subscribing. We will keep you posted."
          : null}
      </p>
    </form>
  );
}
