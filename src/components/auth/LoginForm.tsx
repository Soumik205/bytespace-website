"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { SocialSignIn } from "@/components/auth/SocialSignIn";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { useFakeSubmit } from "@/components/auth/useFakeSubmit";
import { TextField } from "@/components/ui/TextField";
import { loginSchema, type LoginValues } from "@/lib/validation";

export function LoginForm() {
  const { submit, clear, succeeded } = useFakeSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(submit, clear)}
        noValidate
        className="mt-10 flex flex-col"
      >
        <TextField
          id="login-email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <TextField
          id="login-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
          error={errors.password?.message}
          className="mt-6"
          {...register("password")}
        />
        <SubmitButton pending={isSubmitting}>Sign In</SubmitButton>
        <p role="status" className="text-right text-sm text-primary">
          {succeeded && <span className="mt-3 block">You are signed in.</span>}
        </p>
      </form>

      <SocialSignIn className="mt-12 xl:mt-[73px]" />

      <p className="mt-12 text-center text-base text-subtle xl:mt-[73px]">
        New user?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
