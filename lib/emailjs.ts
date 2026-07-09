// EmailJS configuration, read from NEXT_PUBLIC_* env vars at build time.
// These IDs/keys are NOT secret — the EmailJS public key is designed to be
// exposed in the browser — but keeping them in env vars means you can change
// them without touching code, and your local .env.local stays out of git.
//
// See SETUP-EMAILJS.md for how to obtain each value.
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  // Optional: a second template that emails the guest a confirmation (auto-reply).
  autoReplyTemplateId: process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

// When the three required values are present the form sends via EmailJS;
// otherwise it falls back to opening the guest's mail client (mailto:).
export const emailjsEnabled = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey
);
