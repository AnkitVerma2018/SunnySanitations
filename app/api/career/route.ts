import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    console.log("========== CAREER API ==========");

    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

    await transporter.verify();
    console.log("✅ SMTP Connected Successfully");

    const { name, email, phone, position, message } = await req.json();

    console.log("Received Form:");
    console.log({
      name,
      email,
      phone,
      position,
      message,
    });

    // ==========================
    // Admin Email
    // ==========================
    const adminMail = await transporter.sendMail({
      from: `"Career Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Career Application - ${name}`,
      html: `
        <h2>New Career Application</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ Admin Mail Sent");
    console.log(adminMail);

    // ==========================
    // User Email
    // ==========================
    const userMail = await transporter.sendMail({
  from: `"Sunny Sanitations" <${process.env.SMTP_USER}>`,
  to: email,
  cc: process.env.ADMIN_EMAIL,
  subject: "Application Received - Sunny Sanitations",

  html: `
    <h2>Hello ${name},</h2>

    <p>Thank you for your interest in <strong>Sunny Sanitations</strong>.</p>

    <p>We have successfully received your application.</p>

    <h3>Application Details</h3>

    <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
      <tr>
        <td><strong>Name</strong></td>
        <td>${name}</td>
      </tr>

      <tr>
        <td><strong>Email</strong></td>
        <td>${email}</td>
      </tr>

      <tr>
        <td><strong>Phone</strong></td>
        <td>${phone}</td>
      </tr>

      <tr>
        <td><strong>Position</strong></td>
        <td>${position}</td>
      </tr>

      <tr>
        <td><strong>Message</strong></td>
        <td>${message}</td>
      </tr>
    </table>

    <br/>

    <p>Our recruitment team will review your application and contact you if your profile matches our requirements.</p>

    <br/>

    <p>Regards,<br/>
    <strong>Sunny Sanitations</strong></p>
  `,
});

    console.log("✅ User Mail Sent");
    console.log(userMail);

    console.log("========== SUCCESS ==========");

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("❌ SMTP ERROR");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown SMTP Error",
      },
      { status: 500 }
    );
  }
}