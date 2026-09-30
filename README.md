# Altar Curated — client design prototype

A single Next.js App Router project for Altar Curated’s publication, community, shop, and owner desk. This is a **visual, deployable prototype**. It contains no database, sign-in, live discussion, active checkout, or real orders. Most pages are prerendered Server Components; only the local search and the header (active-room indicator and mobile menu) need client JavaScript. Page entry and hover transitions use CSS and respect reduced-motion preferences.

## Design direction

The interface follows the client brief (§10–16) and is kept deliberately minimal: few elements per screen, generous space, thin rules and type doing most of the work.

- **Colour** uses the brief's palette in its stated balance: Warm Paper `#F4EBDD` as the ground, Altar Brown `#3B241C` for navigation, footer and the opening threshold, Mystic Lavender `#B9A6D8` for Reflections in Bloom and digital moments, Soft Sage `#A8B29A` for secondary plates, Ink `#191513` for type, and Botanical Lime `#B7D83D` only for CTAs, hover states and navigation indicators.
- **Type**: Cormorant Garamond for world, story and emotion; DM Sans for navigation, information and commerce (loaded with `next/font`).
- **Illustration**: a small set of botanical line marks (an altar arch and sprig) in `src/components/marks.tsx`. Tinted "plates" stand in for photography until the client supplies it. No stars, moons or celestial motifs.
- **Motion**: page arrival, scroll reveals (where `animation-timeline` is supported), a slow sway on the sprig and hover details. All of it is disabled under reduced-motion preferences.

The vocabulary comes from the brief. Primary navigation is Shop, Greenhouse, Apothecary and About, with Search, My Altar and Cart as utilities. The homepage follows the brief's flow: Opening / Estate, Enter Altar, then Explore the World as an estate plan of rooms (The Greenhouse, Library, Conservatory, Journal, Apothecary, Studio, Observatory and Shop around The Altar). After that come Reflections in Bloom, a Greenhouse ritual, the Apothecary shelves (Shop → Learn → Ritual), the Library, a journal prompt and the Journal signup. *Creating a Grounding Evening Ritual* demonstrates the brief's article → objects → journal prompt → Apothecary journey.

The homepage is a horizontal **journal**: eight full-viewport openings you turn with scroll, trackpad, arrow keys or the Back/Turn controls. Interior discovery pages (Greenhouse, Library, Journal, Community, Shop) keep the same rooms and copy, presented as paper leaves you can slide through.

All styles live in `src/app/globals.css`.

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
| `/greenhouse`, `/read`, `/read/[slug]`, `/notes`, `/search` | The Greenhouse, The Library, article/ritual, The Journal and local search |
| `/community`, `/community/[slug]` | Community journal prompts and discussion previews |
| `/studio`, `/observatory` | The Studio (creative process) and The Observatory (future explorations) |
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
