export const prerender = false;
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const timestamp = new Date().toLocaleString();

export async function POST(context: { request: Request }) {
  try {
    const formData = await context.request.json();

    let htmlBody = `<h2>New Form Submission: ${timestamp} </h2>`;
    for (const [key, value] of Object.entries(formData)) {
      htmlBody += `<p><strong>${key.replace(/([A-Z])/g, " $1")}:</strong> ${value}</p>`;
    }

    await resend.emails.send({
      from: "Speedwagon Contact <forms@speedwagonsolutions.com>",
      to: ["contact@speedwagonsolutions.com"],
      subject: "Form Submission",
      html: htmlBody,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
