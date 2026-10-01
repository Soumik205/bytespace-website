import { z } from "zod";

const email = z.email("Enter a valid email address");

const password = z
  .string()
  .min(1, "Enter your password")
  .min(8, "Password must be at least 8 characters");

export const newsletterSchema = z.object({ email });

export const loginSchema = z.object({ email, password });

export const signupSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name"),
  email,
  password,
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type SignupValues = z.infer<typeof signupSchema>;
