"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { SubmitButton } from "@/components/auth/SubmitButton";
import { useFakeSubmit } from "@/components/auth/useFakeSubmit";
import { TextField } from "@/components/ui/TextField";
import { signupSchema, type SignupValues } from "@/lib/validation";

export function SignupForm() {
  const { submit, succeeded } = useFakeSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    mode: "onTouched",
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        noValidate
        className="mt-10 flex flex-col"
      >
        <TextField
          id="signup-name"
          label="Full Name"
          autoComplete="name"
          placeholder="Jamie Davis"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <TextField
          id="signup-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          error={errors.email?.message}
          className="mt-6"
          {...register("email")}
        />
        <TextField
          id="signup-password"
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="********"
          error={errors.password?.message}
          className="mt-6"
          {...register("password")}
        />
        <SubmitButton pending={isSubmitting}>Continue</SubmitButton>
        <p role="status" className="text-right text-sm text-primary">
          {succeeded && (
            <span className="mt-3 block">Your account has been created.</span>
          )}
        </p>
      </form>

      <p className="mt-12 text-center text-base text-ink-soft xl:mt-[122px]">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
