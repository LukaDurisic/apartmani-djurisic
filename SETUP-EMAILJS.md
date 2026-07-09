# Setting up the enquiry form with EmailJS

The contact form sends enquiries straight to your inbox using **EmailJS** — a
free service that sends email from the browser, so no server is needed. The free
plan allows **200 emails/month**, which is plenty for this site.

Until you complete these steps the form still works: it falls back to opening the
visitor's own email app with the enquiry pre-filled. Once configured, it sends
automatically and (optionally) emails the guest a confirmation.

---

## 1. Create a free EmailJS account

1. Go to **https://www.emailjs.com/** and click **Sign Up** (free).
2. Verify your email and log in to the dashboard.

## 2. Connect your email (Email Service)

1. In the dashboard, open **Email Services → Add New Service**.
2. Choose **Gmail** (your `apartmanidurisic@gmail.com` account) and click
   **Connect Account**, then allow access.
3. After it's added, copy the **Service ID** (looks like `service_xxxxxxx`).

## 3. Create the owner notification template

This is the email **you** receive when someone submits the form.

1. Open **Email Templates → Create New Template**.
2. Set the fields like this (the `{{...}}` are placeholders filled from the form):

   - **To Email:** `{{to_email}}`  *(or just type `apartmanidurisic@gmail.com`)*
   - **From Name:** `Apartmani Đurišić website`
   - **Reply To:** `{{reply_to}}`  ← so hitting “Reply” answers the guest
   - **Subject:** `{{title}}`
   - **Content (body):**

     ```
     New booking enquiry from the website:

     Name: {{name}}
     Email: {{email}}
     Dates: {{dates}}
     Apartment: {{apartment}}

     Message:
     {{message}}
     ```

3. Click **Save** and copy the **Template ID** (looks like `template_xxxxxxx`).

## 4. (Optional) Create the auto-reply template

This is the confirmation email the **guest** receives automatically.

1. **Email Templates → Create New Template** again.
2. Set the fields:

   - **To Email:** `{{email}}`  ← the guest's address
   - **From Name:** `Apartmani Đurišić`
   - **Reply To:** `apartmanidurisic@gmail.com`
   - **Subject:** `We received your enquiry — Apartmani Đurišić`
   - **Content (body):**

     ```
     Dear {{name}},

     Thank you for your enquiry about Apartmani Đurišić. We have received your
     message and will get back to you as soon as possible.

     Your request:
     Dates: {{dates}}
     Apartment: {{apartment}}
     Message: {{message}}

     Warm regards,
     Apartmani Đurišić
     Posušje, Bosnia & Herzegovina
     +387 63 592 672
     ```

3. **Save** and copy this second **Template ID**.

## 5. Get your Public Key

1. Open **Account → General** (or **API Keys**).
2. Copy the **Public Key** (looks like a short random string).

## 6. Put the values into the project

1. In the project folder, copy `.env.local.example` to a new file named
   **`.env.local`**.
2. Fill in the values you collected:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_yyyyyyy
   ```

   *(Leave the last line blank if you don't want the auto-reply.)*

3. Save the file.

## 7. Rebuild and redeploy

From the project folder:

```bash
npm run build
netlify deploy --dir=out --prod
```

That's it — submit a test enquiry and you should receive it at
`apartmanidurisic@gmail.com` (and, if you added template #4, the test address
gets an instant confirmation).

---

### Notes
- The Public Key / IDs are safe to expose — they only allow sending through your
  templates, not reading your account.
- To avoid spam, EmailJS lets you turn on reCAPTCHA and set an allowed-domains
  list in **Account → Security** once you're live.
- Free plan limit: 200 emails/month. With the auto-reply on, each enquiry uses 2.
