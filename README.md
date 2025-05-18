This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Setup

The contact form on this site uses Nodemailer to send emails directly to your inbox. To set up the contact form:

1. Create a `.env.local` file based on the `env.example` template
2. Configure your SMTP settings:
   - `RECIPIENT_EMAIL`: The email address where you want to receive contact form submissions
   - `SMTP_HOST`: Your email provider's SMTP server (e.g., smtp.gmail.com)
   - `SMTP_PORT`: SMTP port (typically 587 for TLS or 465 for SSL)
   - `SMTP_USER`: Your email username/address 
   - `SMTP_PASS`: Your email password or app password

### Using Gmail

If you're using Gmail, you'll need to:
1. Set up 2-factor authentication on your Google account
2. Generate an App Password specifically for your app at https://myaccount.google.com/apppasswords
3. Use this App Password in the `SMTP_PASS` environment variable

### Architecture Notes

The contact form implementation follows these principles:
- Client components send form data to a server API route
- Server-side code handles all email sending via Nodemailer
- No user authentication required - visitors can immediately send you messages
- Webpack configuration includes polyfills for Node.js modules

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
