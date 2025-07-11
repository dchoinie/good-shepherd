import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { testEmail } = body;

    if (!testEmail) {
      return NextResponse.json(
        { error: "Test email address is required" },
        { status: 400 }
      );
    }

    console.log("Testing email configuration:");
    console.log("FROM_EMAIL:", FROM_EMAIL);
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("Sending test email to:", testEmail);

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: testEmail,
      subject: "Test Email from Good Shepherd Lutheran Church",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af;">Test Email</h2>
          <p>This is a test email to verify that your Resend configuration is working correctly.</p>
          <p>If you received this email, your email setup is working!</p>
          <p>Sent from: ${FROM_EMAIL}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Test email error:", error);
      return NextResponse.json(
        {
          error: "Failed to send test email",
          details: error,
          message: error.message || "Unknown error occurred",
        },
        { status: 500 }
      );
    }

    console.log("Test email sent successfully:", data?.id);
    return NextResponse.json(
      {
        success: true,
        messageId: data?.id,
        message: "Test email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Test email route error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
