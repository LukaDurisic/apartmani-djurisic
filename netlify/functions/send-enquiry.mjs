import nodemailer from "nodemailer";

// Serverless endpoint for the enquiry form.
// Sends an owner notification (to your inbox) and an optional guest auto-reply,
// both through your own Gmail via an App Password. No third-party form service.
//
// Required Netlify environment variables (Site → Settings → Environment):
//   GMAIL_USER          e.g. apartmanidurisic@gmail.com
//   GMAIL_APP_PASSWORD  the 16-char Google App Password (NOT your login password)
// Optional:
//   OWNER_EMAIL         where enquiries land (defaults to GMAIL_USER)
//   AUTO_REPLY          "false" to disable the guest confirmation (default: on)

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export default async (req) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });

  let data;
  try {
    data = await req.json();
  } catch {
    return json(400, { error: "Invalid request body" });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const dates = String(data.dates ?? "").trim() || "—";
  const apartment = String(data.apartment ?? "").trim() || "Apartmani Đurišić";
  const message = String(data.message ?? "").trim() || "—";
  const lang = data.lang === "hr" ? "hr" : "en";
  const honeypot = String(data.company ?? "").trim(); // bots fill this; humans don't

  // Silently succeed for bots so they don't retry.
  if (honeypot) return json(200, { ok: true });

  // Basic validation.
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk) {
    return json(400, { error: "Please provide a name and a valid email." });
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error("Missing GMAIL_USER / GMAIL_APP_PASSWORD env vars");
    return json(500, { error: "Email is not configured on the server yet." });
  }
  const ownerEmail = process.env.OWNER_EMAIL || GMAIL_USER;
  const autoReplyOn = process.env.AUTO_REPLY !== "false";

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  // 1) Notify the owner.
  const ownerHtml = `
    <h2 style="font-family:Georgia,serif;color:#33291f;margin:0 0 12px">New booking enquiry</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#33291f;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;color:#8a7c68">Name</td><td>${esc(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#8a7c68">Email</td><td>${esc(email)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#8a7c68">Dates</td><td>${esc(dates)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#8a7c68">Apartment</td><td>${esc(apartment)}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#33291f;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Apartmani Đurišić website" <${GMAIL_USER}>`,
      to: ownerEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New booking enquiry — ${apartment}`,
      text: `New booking enquiry\n\nName: ${name}\nEmail: ${email}\nDates: ${dates}\nApartment: ${apartment}\n\nMessage:\n${message}`,
      html: ownerHtml,
    });
  } catch (err) {
    console.error("Owner email failed:", err);
    return json(502, { error: "Could not send your enquiry. Please try again." });
  }

  // 2) Optional guest auto-reply (best-effort — never fails the request).
  if (autoReplyOn) {
    const reply = {
      en: {
        subject: "We received your enquiry — Apartmani Đurišić",
        body:
          `Dear ${name},\n\n` +
          "Thank you for your enquiry about Apartmani Đurišić. We have received your message and will get back to you as soon as possible.\n\n" +
          `Your request:\nDates: ${dates}\nApartment: ${apartment}\nMessage: ${message}\n\n` +
          "Warm regards,\nApartmani Đurišić\nPosušje, Bosnia & Herzegovina\n+387 63 592 672",
      },
      hr: {
        subject: "Zaprimili smo vaš upit — Apartmani Đurišić",
        body:
          `Poštovani/a ${name},\n\n` +
          "Hvala na upitu za Apartmane Đurišić. Zaprimili smo vašu poruku i javit ćemo vam se u najkraćem mogućem roku.\n\n" +
          `Vaš upit:\nDatumi: ${dates}\nApartman: ${apartment}\nPoruka: ${message}\n\n` +
          "Srdačan pozdrav,\nApartmani Đurišić\nPosušje, Bosna i Hercegovina\n+387 63 592 672",
      },
    }[lang];

    try {
      await transporter.sendMail({
        from: `"Apartmani Đurišić" <${GMAIL_USER}>`,
        to: email,
        replyTo: ownerEmail,
        subject: reply.subject,
        text: reply.body,
      });
    } catch (err) {
      console.error("Auto-reply failed (non-fatal):", err);
    }
  }

  return json(200, { ok: true });
};
