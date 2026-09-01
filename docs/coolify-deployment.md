# Coolify deployment notes

The repository Dockerfile is the deployment source of truth. It uses Node 20,
installs the lockfile with build dependencies, builds the Next standalone
output, and runs it as an unprivileged user on port 3000.

## Coolify settings

- Build Pack: Dockerfile
- Dockerfile location: `Dockerfile`
- Exposed port: `3000`
- Do **not** set `NODE_ENV` as a Coolify build-time variable. The runner image
  sets `NODE_ENV=production` after the build is complete.

## Variable scope

Set only the public values below as **build-time and runtime** variables when
they are needed by client code:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Set the following as **runtime only** variables. They must not be injected as
Docker build arguments or printed in build logs:

- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_RECEIVER_EMAIL`

`NEXT_PUBLIC_BACKEND_API_URL` is not secret. Set it to the production API URL;
keep it available at runtime for the résumé proxy.

## Immediate follow-up

The failed-deployment log included sensitive build-time values. Rotate the
affected Turnstile and legacy Postmark secrets in their providers, remove the
old Postmark variables after confirming Resend delivery, and keep the Resend
key runtime-only. Ensure the Resend sender domain is verified and that
Turnstile permits the production domain before redeploying.
