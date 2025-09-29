# External Scheduler Setup for Hourly Vercel Deploys

This guide shows how to trigger hourly rebuilds (and sitemap regeneration during `prebuild`) using your Vercel Deploy Hook with common schedulers.

## Prerequisites
- Vercel project linked and deployed.
- `VERCEL_DEPLOY_HOOK` set in Vercel Production env.
- `VITE_SITE_URL` set to `https://ytvanced.pro`.

## Cloudflare Workers Cron (recommended)
1. Copy `cloudflare/wrangler.toml.example` to `wrangler.toml` and paste your actual `VERCEL_DEPLOY_HOOK`.
2. Deploy the Worker:
   - Install Wrangler: `npm i -g wrangler`
   - `wrangler deploy`
3. Cron runs hourly (`0 * * * *`) and POSTs your hook.
4. Optional manual trigger: GET `https://<your-worker-subdomain>/trigger` to POST the hook on demand.

## cron-job.org
1. Create a job.
2. URL: your `VERCEL_DEPLOY_HOOK`.
3. Method: `POST`.
4. Schedule: Every hour.

## Better Uptime
1. Create HTTP monitor.
2. URL: your `VERCEL_DEPLOY_HOOK`.
3. Method: `POST`.
4. Schedule: Every hour.

## Monitoring
- Watch Vercel dashboard for new deployments hourly.
- Verify `https://ytvanced.pro/sitemap.xml` returns a fresh `Last-Modified` and `Cache-Control: no-cache`.
- Use `scripts/monitor-sitemap-updates.sh` to check headers and freshness locally.

## Troubleshooting
- If builds don’t start, confirm the hook URL is correct and not rate-limited.
- Ensure the Vercel project’s default branch matches the hook’s branch (`main`).
- Confirm `prebuild` runs `node scripts/vercel/generate-sitemap.js`.