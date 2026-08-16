# GoalPredict — Football Prediction Website MVP

A clean football-first Next.js starter designed for a 4–5 day MVP build.

## What is included
- Professional responsive landing page
- Featured match prediction cards
- Football news section
- Methodology / trust section
- Central JSON content store (`data/content.json`)
- Server-side OpenAI content updater (`scripts/update-content.mjs`)
- No exposed API key in browser code

## Run locally
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add your OpenAI API key.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Updating content
Run:
`npm run content:update`

For automatic updates every 48 hours, run that command from a secure cron/GitHub Actions/Vercel Cron workflow. The OpenAI key must stay server-side.

## Recommended phase 2
- Fixtures/results database
- League pages and team pages
- Match detail pages
- Prediction history + accuracy dashboard
- Admin dashboard
- Search
- SEO metadata / sitemap / structured data
- Google Analytics + Search Console
- Optional monetisation modules

## Important product note
Prediction confidence is presented as analysis, not a guarantee. If the site is later used in connection with wagering, review applicable advertising, gambling, consumer-protection and platform rules before launch.
