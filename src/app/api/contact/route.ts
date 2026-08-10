import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where the form lands, and who it appears to come from.
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? "shashank200801@gmail.com";
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    // Honeypot: real users never fill a hidden field, bots usually do.
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      // Pretend it worked so the bot doesn't retry.
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "That email address looks invalid." }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — contact form cannot send mail.");
      return NextResponse.json(
        { error: "Email isn't configured on the server right now. Please email me directly." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.6;color:#0e1120">
          <h2 style="margin:0 0 4px">New message from your portfolio</h2>
          <p style="margin:0 0 16px;color:#565f80">
            <strong>${escapeHtml(name)}</strong>
            &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;
          </p>
          <div style="white-space:pre-wrap;padding:16px;border:1px solid #e5e7f0;border-radius:12px;background:#f7f8fc">
            ${escapeHtml(message)}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return NextResponse.json(
        { error: "Couldn't send the message. Please email me directly." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent — I'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
