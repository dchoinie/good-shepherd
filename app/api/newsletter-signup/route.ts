import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";

// Initialize Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX || "us4", // Default to us1 if not provided
});

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
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
