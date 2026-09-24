# Altar Curated — client design prototype

A single Next.js App Router project for Altar Curated’s publication, community, shop, and owner desk. This is a **visual, deployable prototype**. It contains no database, sign-in, live discussion, active checkout, or real orders. Most pages are prerendered Server Components; only the small local search interface needs client JavaScript. Page entry and hover transitions use CSS and respect reduced-motion preferences.

The visual direction combines the existing Substack oxblood, rose and paper palette with the quiet spacing and restrained entry experience of the client's Saka Essentials reference. Main navigation follows the brief's language: Shop, The Greenhouse, The Apothecary, About, with Search, My Altar and Cart as utilities. The Greenhouse leads to The Library, Journal notes, The Gathering and The Studio; Reflections in Bloom sits in The Conservatory on the homepage. The public Studio is for creative process; the owner desk is a separate sample dashboard.

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

The pages should render immediately after import. The current `/admin` is **public sample UI with no data or actions**. Do not put customer information or editable controls there until authentication, server-side authorization, and storage policies are implemented. Checkout, member access, and contact forms are visibly disabled. No personal information should be entered into the preview.

## Pages

| Route | Current state |
| --- | --- |
| `/` | Editorial homepage |
| `/greenhouse`, `/read`, `/read/[slug]`, `/notes`, `/search` | Discovery, Library, article, Journal note and local search layouts |
| `/community`, `/community/[slug]` | The Gathering and individual discussion previews |
| `/studio` | Public creative process room |
| `/shop`, `/shop/reflections-in-bloom`, `/apothecary` | Minimal shop, journal story and curation concept |
| `/cart`, `/checkout`, `/order/preview` | Cart, COD checkout and example order journey; no transaction |
| `/account`, `/account/orders` | Member entrance and example order history |
| `/about`, `/contact` | Story and contact preview |
| `/shipping`, `/returns`, `/privacy`, `/terms` | Clearly marked policy placeholders for client review |
| `/admin` and `/admin/{posts,community,products,orders,settings}` | Public owner desk **design preview only** |

Essay descriptions, community prompts, product art, and marketing copy are temporary design content drawn from the project brief and supplied blog summary. Complete essays, client photography, approved copy, prices, policies, and product data are not in this repo. Search filters sample content in the browser. Example orders and dashboard rows are static, and disabled fields do not save. The source PDF is in [docs](docs/ALTAR%20CURATED%20WEBSITE%20BRIEF.pdf); the staged implementation scope is in [ACTION_PLAN.md](ACTION_PLAN.md).

## Next build steps

1. Have Mehak approve the visual route, copy, essay selections, and art.
2. Add Supabase migrations, Auth, Storage, and server-side owner checks. Keep service credentials server-only.
3. Replace preview content with an admin post editor and publication data, then add moderated member discussions.
4. Add products, stock, a server-validated COD checkout, order emails, and admin order/COD reporting. Confirm shipping regions, fees, terms, and fulfillment process first.
5. Hide or protect unfinished routes before public launch; test permissions, mobile experience, and order reconciliation.

The project intentionally has no payment-provider dependency in V1. Paid digital downloads and shipping integration wait for a defined provider workflow.
