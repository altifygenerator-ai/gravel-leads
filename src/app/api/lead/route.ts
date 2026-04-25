import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, location, jobType, message } = body;

    if (!name || !phone || !location) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.LEAD_TO_EMAIL || "your@email.com",
      subject: `New Gravel Lead: ${location}`,
      html: `
        <h2>New Gravel Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Job Type:</strong> ${jobType || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead email error:", error);

    return NextResponse.json(
      { error: "Failed to send lead" },
      { status: 500 }
    );
  }
}