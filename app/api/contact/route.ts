import { NextRequest, NextResponse } from "next/server";
import { resend, FROM_EMAIL } from "@/lib/resend";
import { z } from "zod";

// Contact form schema for validation
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    console.log("Attempting to send email to:", validatedData.email);
    console.log("Using FROM_EMAIL:", FROM_EMAIL);

    // Create confirmation email HTML
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; margin-bottom: 20px;">Thank You for Contacting Good Shepherd Lutheran Church</h2>
        
        <p>Dear ${validatedData.firstName} ${validatedData.lastName},</p>
        
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Your Message Details:</h3>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 10px; border-radius: 4px; border-left: 4px solid #1e40af;">
            ${validatedData.message}
          </p>
        </div>
        
        <p>If you have any urgent questions, please don't hesitate to call us directly.</p>
        
        <p>Blessings,<br>
        <strong>Good Shepherd Lutheran Church</strong></p>
      </div>
    `;

    // Send confirmation email to the user
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: validatedData.email,
      subject: "Thank you for contacting Good Shepherd Lutheran Church",
      html: confirmationHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: "Failed to send confirmation email",
          details: error,
          message: error.message || "Unknown error occurred",
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data?.id);
    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

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
