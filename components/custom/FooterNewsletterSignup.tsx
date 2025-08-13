"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail, CheckCircle, AlertCircle } from "lucide-react";

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function FooterNewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: "Footer",
          lastName: "Subscriber",
          email: data.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Successfully subscribed!",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to subscribe. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-lcms-gold" />
        <h3 className="font-bold text-lg text-white">Stay Connected</h3>
      </div>
      
      <p className="text-sm text-gray-300">
        Subscribe to our newsletter for church updates and events.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={`bg-white/10 border-gray-600 text-white placeholder-gray-400 focus:border-lcms-gold focus:ring-lcms-gold ${
              errors.email ? "border-red-400" : ""
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-300">{errors.email.message}</p>
          )}
        </div>

        {submitStatus.type && (
          <Alert
            className={
              submitStatus.type === "success"
                ? "border-green-400/30 bg-green-400/10"
                : "border-red-400/30 bg-red-400/10"
            }
          >
            {submitStatus.type === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-300" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-300" />
            )}
            <AlertDescription
              className={
                submitStatus.type === "success"
                  ? "text-green-300"
                  : "text-red-300"
              }
            >
              {submitStatus.message}
            </AlertDescription>
          </Alert>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lcms-gold hover:bg-lcms-gold/80 text-stone-800 font-medium"
          size="sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    </div>
  );
}
