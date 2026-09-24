# Altar Curated — design skeleton

A single Next.js App Router project for Altar Curated’s publication, community, shop, and owner studio. This first push is a **visual, deployable prototype**. It contains no database, sign-in, live discussion, checkout, or real orders.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run typecheck` and `npm run build` before pushing changes.

## Deploy to Vercel

1. Import `dattaprasad-r-ekavade/altar-curated` as a new Vercel project.
2. Framework preset: **Next.js**. Root directory: repository root. Build command: `npm run build` (the defaults also work).
3. No environment variables are required for this design preview.
4. Use a plan that permits commercial client work. Vercel Hobby is limited to non-commercial personal use.

The pages should render immediately after import. The current `/admin` is **public sample UI with no data or actions**. Do not put customer information or editable controls there until authentication, server-side authorization, and storage policies are implemented. The cart and journal purchase action are explicitly inactive.

## Pages

| Route | Current state |
| --- | --- |
| `/` | Editorial homepage |
| `/read`, `/read/[slug]` | Archive and article layout previews |
| `/community` | Community landing and prompt previews |
| `/shop`, `/shop/reflections-in-bloom` | Minimal shop and flagship product story |
| `/cart` | Inactive cart preview |
| `/about` | About layout |
| `/admin` | Public owner dashboard **design preview only** |

Essay descriptions, community prompts, product art, and marketing copy are temporary design content drawn from the project brief and supplied blog summary. Complete essays, client photography, approved copy, prices, policies, and product data are not in this repo. The source PDF is in [docs](docs/ALTAR%20CURATED%20WEBSITE%20BRIEF.pdf); the staged implementation scope is in [ACTION_PLAN.md](ACTION_PLAN.md).

## Next build steps

1. Have Mehak approve the visual route, copy, essay selections, and art.
2. Add Supabase migrations, Auth, Storage, and server-side owner checks. Keep service credentials server-only.
3. Replace preview content with an admin post editor and publication data, then add moderated member discussions.
4. Add products, stock, a server-validated COD checkout, order emails, and admin order/COD reporting. Confirm shipping regions, fees, terms, and fulfillment process first.
5. Hide or protect unfinished routes before public launch; test permissions, mobile experience, and order reconciliation.

The project intentionally has no payment-provider dependency in V1. Paid digital downloads and shipping integration wait for a defined provider workflow.
