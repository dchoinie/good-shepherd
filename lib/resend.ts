import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined in environment variables");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// Use a verified domain or Resend's default domain
export const FROM_EMAIL =
  process.env.FROM_EMAIL ||
  "Good Shepherd Lutheran Church <onboarding@resend.dev>";
