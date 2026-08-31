# Kyle Simmons Portfolio

An evidence-led engineering leadership portfolio built with Next.js. It presents Kyle as a hands-on engineering leader with depth in platform engineering, SRE, backend architecture, data integrations, secure delivery, and AI-assisted engineering discipline.

## What is here

- Executive-summary homepage with sourced proof points
- Curated work index with explicit capability taxonomy (not heuristic role labels)
- Sanitized case studies for Bathroom Buddy, a financial-integration reference, an AI workflow lab, and a platform engineering lab
- Role-oriented résumé variants, contact workflow, About, Now, and Community pages
- Canonical profile and claims registry to keep positioning and metrics consistent
- Route metadata, sitemap, robots, OpenGraph/Twitter previews, JSON-LD, and security headers
- Unit tests, Playwright critical-path coverage, and automated homepage accessibility scanning

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3002`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

The pull-request workflow runs these checks on GitHub Actions.

## Content ownership

- Canonical identity and navigation: `src/lib/data/profile.ts`
- Claim registry: `src/lib/data/claims.ts`
- Homepage content: `src/lib/data/homeData.ts`
- Projects and case studies: `src/lib/data/projects.ts`
- Résumé variants: `src/lib/data/resume.ts`

Read [the refresh notes](docs/portfolio-refresh.md), [claims review](docs/claims-review.md), and [PR description](docs/pr-description.md) before making copy or claim changes.

## Environment

Copy `env.example` to `.env.local` and configure only the integrations used in your deployment:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3002
NEXT_PUBLIC_BACKEND_API_URL=https://api.example.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret_key
POSTMARK_API_TOKEN=your_postmark_server_token
POSTMARK_FROM_EMAIL=you@example.com
```

Never commit live API keys or service tokens. The resume proxy accepts only resume filenames declared in `src/lib/data/resume.ts`.
