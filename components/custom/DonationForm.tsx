"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useToast } from "../../hooks/use-toast";
import { Loader2, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

// Initialize Stripe
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

// Stripe Elements configuration
const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

interface DonationFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

// Wrapper component to provide Stripe Elements
export default function DonationForm(props: DonationFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <DonationFormContent {...props} />
    </Elements>
  );
}

// Main form component that uses Stripe hooks
function DonationFormContent({ onSuccess, onCancel }: DonationFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || !name || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountNum,
          email,
          name,
        }),
      });

      const { clientSecret, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      if (!stripe || !elements) {
        throw new Error("Stripe has not loaded yet. Please try again.");
      }

      // Confirm the payment with Stripe
      const { error: stripeError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name,
              email,
            },
          },
        }
      );

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      toast({
        title: "Thank You!",
        description: `Your donation of $${amount} has been received. God bless you!`,
      });

      // Redirect to success page
      router.push("/donate/success");
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment Failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Heart className="w-6 h-6 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>
          Support our ministry and help us continue serving our community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Selection */}
          <div className="space-y-3">
            <Label htmlFor="amount">Donation Amount</Label>
            <div className="grid grid-cols-3 gap-2">
              {predefinedAmounts.map((predefinedAmount) => (
                <Button
                  key={predefinedAmount}
                  type="button"
                  variant={
                    amount === predefinedAmount.toString()
                      ? "default"
                      : "outline"
                  }
                  onClick={() => handleAmountSelect(predefinedAmount)}
                  className="h-12"
                >
                  ${predefinedAmount}
                </Button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-8"
                min="1"
                step="0.01"
                required
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Payment Method */}
          <div className="space-y-2">
            <Label>Credit Card Information</Label>
            <div className="p-4 border rounded-md bg-white">
              <CardElement options={cardElementOptions} />
              <p className="text-xs text-gray-500 mt-2">
                For testing, use card number: 4242 4242 4242 4242, any future
                expiry date, and any CVC.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              `Donate $${amount || "0"}`
            )}
          </Button>

          {onCancel && (
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={onCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
