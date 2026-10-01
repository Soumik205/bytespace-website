import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/AuthCard";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <AuthShell
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard eyebrow="Sign In" title="Welcome Back">
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}
