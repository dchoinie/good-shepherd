import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const { amount, email, name } = await request.json();

    // Validate amount (minimum $1, maximum $10,000)
    const amountInCents = Math.round(amount * 100);
    if (amountInCents < 100 || amountInCents > 1000000) {
      return NextResponse.json(
        { error: "Invalid amount. Must be between $1 and $10,000." },
        { status: 400 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
      metadata: {
        email,
        name,
        purpose: "church_donation",
      },
      description: `Donation from ${name || email}`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
