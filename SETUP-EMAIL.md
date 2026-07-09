# Enquiry form — email setup (self-hosted via Gmail)

The contact form posts to your own **Netlify serverless function**
(`netlify/functions/send-enquiry.mjs`), which emails the enquiry to your inbox
using **your Gmail account** and sends the guest an automatic confirmation.
No third-party form service is involved.

You need to do two things once: create a **Google App Password**, and add a few
**environment variables** in Netlify.

---

## 1. Create a Google App Password

An App Password lets the function send mail through your Gmail without using your
real password. It requires 2-Step Verification.

1. Go to **https://myaccount.google.com/security** (signed in as
   `apartmanidurisic@gmail.com`).
2. Turn on **2-Step Verification** if it isn't already.
3. Open **https://myaccount.google.com/apppasswords**.
4. Enter an app name like `Apartmani website` and click **Create**.
5. Google shows a **16-character password** (e.g. `abcd efgh ijkl mnop`).
   Copy it — you'll paste it in the next step. (Remove the spaces.)

## 2. Add the environment variables in Netlify

1. Go to your site in Netlify → **Site configuration → Environment variables**
   (https://app.netlify.com/projects/apartmani-djurisic/settings/env).
2. Add these variables:

   | Key | Value |
   |---|---|
   | `GMAIL_USER` | `apartmanidurisic@gmail.com` |
   | `GMAIL_APP_PASSWORD` | the 16-char app password (no spaces) |

   Optional:
   | `OWNER_EMAIL` | where enquiries land (defaults to `GMAIL_USER`) |
   | `AUTO_REPLY` | set to `false` to turn off the guest confirmation |

3. Save.

## 3. Deploy

From the project folder:

```bash
npm run build
netlify deploy --dir=out --prod
```

The function is deployed automatically alongside the static site.

## 4. Test

Open the live site, submit the form with a **real email you can check**. You
should receive the enquiry at your inbox, and the test address should get an
instant confirmation (unless you set `AUTO_REPLY=false`).

---

## How it works

- The form sends a JSON POST to `/.netlify/functions/send-enquiry`.
- The function validates input, rejects bots (hidden honeypot field), then:
  1. emails **you** the enquiry (Reply-To is the guest, so you just hit Reply);
  2. emails the **guest** a confirmation in their language (EN/HR).
- Credentials live only in Netlify's server-side env vars — never in the browser
  or the repo.

## Testing locally (optional)

To run the function on your machine, create a `.env` file in the project root:

```
GMAIL_USER=apartmanidurisic@gmail.com
GMAIL_APP_PASSWORD=your16charpassword
```

Then run `netlify dev` and open the local URL it prints. (`.env` is git-ignored.)

## Notes & limits

- Gmail allows ~500 emails/day — far more than you'll need.
- If confirmations occasionally land in the guest's spam, that's normal for
  Gmail-sent mail to some providers; it doesn't affect the enquiry reaching you.
- To change the wording of either email, edit `netlify/functions/send-enquiry.mjs`.
