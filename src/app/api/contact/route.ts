// import { NextRequest, NextResponse } from "next/server";

// // TODO: Wire this up to a real email service (e.g. Resend, SendGrid) or a
// // form backend (e.g. Formspree). Currently logs the submission server-side.
// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, message } = await request.json();

//     if (!email || !message) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
//     }

//     console.log("New contact form submission:", { name, email, message });

//     // Example with Resend (uncomment and configure once you have an API key):
//     //
//     // const resend = new Resend(process.env.RESEND_API_KEY);
//     // await resend.emails.send({
//     //   from: "Website <noreply@atamarinesa.com>",
//     //   to: "sales@atamarinesa.com",
//     //   subject: `New inquiry from ${name || "website visitor"}`,
//     //   text: `From: ${name} <${email}>\n\n${message}`,
//     // });

//     return NextResponse.json({ success: true });
//   } catch {
//     return NextResponse.json({ error: "Invalid request" }, { status: 400 });
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log("Resend API Key:", process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Astra Titan Arabia <noreply@atamarinesa.com>",
      to: "sales@atamarinesa.com",
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
