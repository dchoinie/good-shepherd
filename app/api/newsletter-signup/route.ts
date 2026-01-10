import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import {
  verifyRecaptcha,
  checkSpamKeywords,
  isValidFormFillTime,
  checkRateLimit,
  getClientIP,
} from "@/lib/spam-filter";

// Initialize Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX || "us4", // Default to us1 if not provided
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, website, recaptchaToken, formStartTime } = body;

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Spam filtering checks
    const clientIP = getClientIP(request);

    // 1. Check honeypot field (must be empty)
    if (website && website.trim() !== "") {
      console.log("Spam detected: Honeypot field filled", { ip: clientIP });
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // 2. Rate limiting check
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      console.log("Spam detected: Rate limit exceeded", {
        ip: clientIP,
        resetTime: rateLimitResult.resetTime,
      });
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 3. Verify reCAPTCHA token
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success || (recaptchaResult.score !== undefined && recaptchaResult.score < 0.5)) {
        console.log("Spam detected: reCAPTCHA failed", {
          ip: clientIP,
          score: recaptchaResult.score,
          error: recaptchaResult.error,
        });
        return NextResponse.json(
          { error: "Invalid submission" },
          { status: 400 }
        );
      }
    }

    // 4. Check spam keywords
    const content = `${firstName || ""} ${lastName || ""} ${email}`;
    if (checkSpamKeywords(content)) {
      console.log("Spam detected: Spam keywords found", { ip: clientIP });
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // 5. Validate form fill time (should take at least 3 seconds)
    if (formStartTime) {
      if (!isValidFormFillTime(formStartTime)) {
        console.log("Spam detected: Form filled too quickly", {
          ip: clientIP,
          fillTime: Date.now() - formStartTime,
        });
        return NextResponse.json(
          { error: "Invalid submission" },
          { status: 400 }
        );
      }
    }

    if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
      return NextResponse.json(
        { error: "Mailchimp configuration is missing" },
        { status: 500 }
      );
    }

    // Add member to Mailchimp audience
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
        },
      }
    );

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter!",
        id: response.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Newsletter signup error:", error);

    // Handle specific Mailchimp errors
    if (error.status === 400) {
      if (error.response?.body?.title === "Member Exists") {
        return NextResponse.json(
          { error: "This email is already subscribed to our newsletter." },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe to newsletter. Please try again." },
      { status: 500 }
    );
  }
}
