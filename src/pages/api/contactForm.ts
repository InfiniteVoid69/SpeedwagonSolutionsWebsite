export const prerender = false;

import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST(context: { request: Request }) {
  try {
    const { fullName, lastName, email, phone, address, service, message } = await context.request.json();

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${fullName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    await resend.emails.send({
      from: 'Speedwagon Contact <forms@speedwagonsolutions.com>',
      to: ['contact@speedwagonsolutions.com'],
      subject: 'Contact Form Submission',
      html: htmlBody,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}