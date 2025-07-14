import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-06-30.basil",
  typescript: true,
});

export const getStripe = async () => {
  if (typeof window !== "undefined") {
    const { loadStripe } = await import("@stripe/stripe-js");
    return loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);
  }
  return null;
};
