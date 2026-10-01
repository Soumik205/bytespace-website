import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/AuthCard";
import { AuthShell } from "@/components/auth/AuthShell";
import { SignupForm } from "@/components/auth/SignupForm";
import { siteName, socialMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Create an Account",
  ...socialMetadata(`Create an Account | ${siteName}`, "/signup"),
};

export default function SignupPage() {
  return (
    <AuthShell
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      reviewsClassName="text-ink-muted"
    >
      <AuthCard eyebrow="Create an Account" title="Welcome to ByteSpace">
        <SignupForm />
      </AuthCard>
    </AuthShell>
  );
}
