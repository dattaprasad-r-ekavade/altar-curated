# Altar Curated — V1 action plan

**Project:** one custom Next.js application for Mehak Joshi’s writing, community, minimalist store, and owner dashboard.  
**Sources:** the client’s [website brief](docs/ALTAR%20CURATED%20WEBSITE%20BRIEF.pdf), the project owner’s clarified four-part scope, and the supplied summary of [Altar Curated / Speck of Rot](https://speckofrot.substack.com/). The blog summary was supplied by the project owner; individual posts were not directly readable during this review. Exact excerpts and republication rights still need Mehak’s approval.

## 1. Product definition

Altar Curated is a self-healing and metaphysical space shaped by Mehak’s first-person writing about devotion, desire, grief, longing, embodiment, and contact. The site should feel like a dark, intimate publication that welcomes people into a community and contains a small curated shop. The brief’s botanical estate is an optional visual experiment, not the brand definition.

Build four connected surfaces in **one codebase**:

| Surface | Visitor experience | Owner controls |
| --- | --- | --- |
| **Publication** | Home, latest writing, archive, categories/tags, long-form article, About; a small Notes/short-reflections view if content exists | Create/edit drafts, preview, publish/unpublish, cover images, featured order, SEO title/description, related prompts/products |
| **Community** | A dedicated hub with Mehak’s prompts and discussions; verified members can join a thread and reply | Publish prompts, review/hide replies, pin threads, handle reports, block users |
| **Shop** | Five launch products, minimalist listing/detail, cart, COD checkout, order confirmation and status lookup/account history | Products, images, variants/stock if needed, order list, COD/payment status, fulfillment, cancellation, notes, export |
| **Dashboard** | No public access | One protected `/admin` area with overview, posts, community moderation, products, orders, and basic sales figures |

The main paths are **read → reflect → discuss → explore an object** and **discover a product → learn its story → place a COD order**. Shopping must not be presented as a cure for grief, distress, or loneliness. Keep the community invitation visible throughout the publication, without inserting a sales pitch into every essay.

## 2. V1 boundaries

### Build for launch

- Publication structure inspired by Substack: readable homepage, chronological archive, tags, author/About, featured posts, article reading view, subscribe link, share links, and optional short Notes. Implement Altar’s own visual identity; do not clone Substack’s UI.
- Import or adapt a **small, approved selection** of Mehak’s posts. Store the original URL and decide whether the on-site page is a full republished article with a canonical URL, an excerpt linking to Substack, or an original site-only piece. Keep the existing Substack as a live reading/subscription destination until a deliberate migration is agreed.
- On-site community hub with member sign-in, display name, curated discussion prompts/threads, replies, simple report action, and admin moderation. Start with text only; no member image/file uploads.
- Five physical products, including a dedicated **Reflections in Bloom** story/product page. Product cards are restrained; detail pages include photography, story, contents/materials, use, specifications, delivery/returns, and a clear price/CTA.
- Physical-product **cash on delivery only**. Customer sees shipping cost and final total before submitting. Orders enter the dashboard as pending collection; only an authorized owner action records COD received.
- Owner dashboard with today/period order counts, placed order value, collected COD, pending COD, cancellations/returns, top products, and basic CSV exports. Separate payment status from fulfillment status.
- Responsive design, readable essays, keyboard access, reduced-motion treatment, SEO metadata, sitemap, analytics basics, transactional order confirmation, and client-owned access.

### Defer

Paid digital products and automatic downloads; online payment gateway; automated shipping-provider sync; saved articles/wishlist; complex customer profiles; DMs, real-time chat, user-generated media, recommendation engine, courses, loyalty, and automated email marketing. The code can leave extension points for these; do not build empty controls for future features.

The shipping/payment partner is unspecified. For launch, the owner manages dispatch and reconciliation manually in the dashboard. Confirm delivery zones, rates, COD terms, cancellations, returns, who collects cash, and how the partner reports delivery **before accepting real orders**.

## 3. Design system and editorial direction

The existing publication is the primary visual reference. Begin with oxblood `#37060D`, off-white `#EDE4E5`, an italic spectral serif masthead, pale dusty-rose title treatment, cream buttons/tabs, warm-gold link accents, and oval/circular imagery. Sample exact rose/cream/gold tokens from approved assets. The brief’s brown/paper/lime/lavender palette can appear sparingly in product or editorial moments if Mehak approves; it does not replace the publication’s identity.

- **Writing pages:** centered masthead, generous reading rhythm, intentional drop caps, comfortable line length, beautiful handling of long sentences and stylized Unicode titles, unobtrusive metadata, and a thoughtful end-of-essay next step.
- **Imagery:** original or licensed tactile still lifes, skin, hands, rosary-like or ritual objects, painterly texture, journal spreads, and intimate everyday gestures. Avoid generic mystical stock imagery and heavy celestial motifs.
- **Navigation:** Read/Archive, Community, Shop, Apothecary, About; Search, Account, Cart as utilities. Keep mobile navigation plainly usable. The brief’s “Greenhouse” label is provisional and should only remain if it fits Mehak’s voice.
- **Motion:** subtle transitions/reveals that support atmosphere, with reduced-motion and static equivalents. Avoid heavy 3D, elaborate loading, or interaction that obstructs reading or buying.
- **Contrast:** retain the chapel-like mood but give article text, prices, forms, and focus states enough contrast to read and use.

**Design gate:** produce two small prototypes before building the entire app: (A) a writing-led oxblood/rose editorial route, recommended; (B) a restrained illustrated-world treatment using the same writing and products. Show homepage, article, community, and product page on mobile and desktop. Mehak chooses the direction from real content.

**Suggested first editorial pathways from the supplied blog summary:** *i fear what i crave* and *The Undying Force Of My Devotion* (desire/devotion); *The Dream Is That It Ends* (grief and ordinary love); *The Slog Of It All* (embodiment and company); *THE VEIL THAT SEEKS TO BE LIFTED* (transformation). Mehak approves final selections, exact wording, images, and whether to link or republish.

## 4. Recommended technical stack

| Layer | V1 choice | Reason |
| --- | --- | --- |
| Application | **Next.js App Router + TypeScript**, one repository with public routes and protected `/admin` routes | Single custom frontend and server-side application; editorial routes and small admin share components and data |
| Styling | Custom CSS/design tokens, with Tailwind CSS only if it speeds your workflow; small client-side components for cart, menus, and discussion forms | Design remains authored rather than shaped by a component kit |
| Data/auth/files | **Supabase Postgres + Auth + Storage**; migrations in this repo. Server-side Next.js access for privileged actions; row-level security for exposed data and storage | One managed place for posts, members, products, orders, images, and email sign-in without running a separate database server |
| Content editing | A simple Markdown editor with preview and image picker in `/admin`; render sanitized Markdown with custom typography | Less code and less maintenance than building a rich-text editor; Mehak can publish without committing code |
| Commerce | First-party product/cart/order tables and **server-validated COD checkout** in Next.js; prices and stock re-read on the server at placement | Five physical products do not require a separate commerce platform, while keeping order history coherent |
| Email | Existing Substack subscribe path for publication; one transactional email provider only for order and sign-in messages if the auth provider cannot cover the required messages | Avoid split newsletter lists and large email automation scope |
| Hosting | Choose a commercial-use-compatible Next.js host after a deploy spike and cost check. **Vercel Pro** is a simple managed option; a small Node VPS can lower recurring platform cost but adds updates, monitoring, and backups | Hosting choice should reflect actual budget and maintenance capacity, not an assumed free tier |

This is **one custom Next.js app**, not four services built separately. Supabase supplies managed database/auth/storage; it is not a second storefront. Use Next.js Server Components for read pages and Server Actions or Route Handlers for validated writes. Never trust client totals or client-supplied admin roles. Server-side authorization is required on every admin and order mutation; set restrictive database/storage policies and keep privileged keys out of the browser. Official references: [Next.js App Router](https://nextjs.org/docs/app), [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers), [Supabase Next.js auth](https://supabase.com/docs/guides/auth/quickstarts/nextjs), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Storage access](https://supabase.com/docs/guides/storage/security/access-control).

**Hosting budget note:** Vercel’s free Hobby plan is restricted to non-commercial personal use, so do not plan to run a client store on it. Supabase’s free projects can pause for inactivity; verify production plan, quotas, email, storage, and backup needs before launch. A low-cost VPS is a real alternative only if someone will own security updates, backups, deployment, and recovery. See [Vercel Hobby terms](https://vercel.com/docs/plans/hobby) and [Supabase project pausing](https://supabase.com/docs/guides/troubleshooting/http-status-codes).

**Future provider boundary:** keep checkout, payment method, shipping fee calculation, fulfillment events, and notification logic in separate modules. Once the provider is known, add an adapter/webhook or an admin import/export; do not scatter provider assumptions through page components.

## 5. Information architecture and minimum data

### Routes

| Public / member | Owner |
| --- | --- |
| `/` home, `/read` archive, `/read/[slug]` essay, `/notes` if supplied, `/about` | `/admin` overview |
| `/community`, `/community/[thread]`, `/account` | `/admin/posts`, `/admin/community` |
| `/shop`, `/shop/[slug]`, `/reflections-in-bloom`, `/cart`, `/checkout`, `/order/[reference]` | `/admin/products`, `/admin/orders` |
| `/contact`, `/shipping`, `/returns`, `/privacy`, `/terms` | `/admin/settings` for limited site/commerce settings |

`/order/[reference]` must require the buyer’s authenticated session or a secure verification method; knowing an order number alone must not reveal personal details.

### Core records

- `profiles` (user ID, display name, role), `posts` (body, excerpt, tags, status, publish date, source/canonical URL, SEO), `media`.
- `threads`, `replies`, `reports` (author, content, state, moderation timestamps).
- `products`, `product_variants` only if required, `inventory`, `product_media`, `related_content`.
- `orders`, `order_items` with **price/name snapshots**, shipping address/fee snapshot, total, payment method/status, fulfillment status, timestamps and audit notes.
- `site_settings` for controlled copy/links/shipping configuration; `admin_events` for material status changes.

Roles: **guest** reads public content and shops; **member** posts/replies and views their own orders; **owner/admin** manages content, products, moderation, and all orders. Begin with one owner. Verify email before community posting; add basic rate limits and spam controls. New threads or replies can start in a moderation queue until the community cadence is known.

COD state model: `placed → confirmed → packed → dispatched → delivered` or `cancelled/returned`; payment separately `pending → collected` (or failed/refunded when necessary). Creating an order must be a single server-side transaction, use a request/idempotency key to avoid duplicate submits, snapshot totals, and decrement or reserve limited stock consistently. The dashboard must never equate `placed` with `collected`.

## 6. Ordered implementation

### P0 — Scope, assets, and commercial rules

1. Agree the five products, prices, images, stock, shipping regions/rates, COD charges and collection handoff, returns/cancellation text, contact details, and owner of the domain/accounts.
2. Review representative full posts with Mehak. Decide which content stays on Substack, which excerpts link out, and which full pieces may be republished. Obtain permission for images/fonts.
3. Define the first community format: who can open threads, whether replies start pending approval, moderation owner and response cadence. Decide whether the site links to existing Substack subscription or stores consented addresses separately.
4. Confirm hosting budget and who maintains the application and backups after handover.

**Gate:** approved four-surface V1 scope, real content/assets, commercial rules, and a clear owner for community and order upkeep.

### P1 — Design first

1. Map the two key journeys and wireframe homepage, archive, essay, community, shop, product, cart/checkout, and owner dashboard.
2. Produce the two visual routes described above and test them with real writing, journal spreads, and products at mobile and desktop widths.
3. Review legibility, navigation, discussion participation, and COD clarity with Mehak. Choose one route and freeze basic design tokens/components.

**Gate:** approved mobile and desktop designs for the four surfaces.

### P2 — Foundation and publication

1. Initialize Next.js/TypeScript project, migrations, Supabase clients, roles, and protected admin layout. Add design tokens, navigation, typography, media components.
2. Build post draft/preview/publish workflow and public home/archive/article/About pages. Preserve source URLs and canonical choices.
3. Add SEO metadata, sitemap, responsive images, keyboard/focus behavior, and basic analytics.

**Gate:** Mehak can publish a real article from the dashboard and it renders correctly on mobile.

### P3 — Community and shop

1. Build member sign-in, community hub, prompts/threads/replies, reports, moderation queue, and basic rate limiting.
2. Build the five product records, listing/detail pages, cart, COD checkout, server-side totals/stock validation, order confirmation, and buyer order view.
3. Add admin product/order views, COD/payment and fulfillment updates, CSV export, order email, and simple sales figures.

**Gate:** verified member discussion works; a test COD order can be placed, fulfilled, marked collected, and reconciled without changing any status accidentally.

### P4 — Quality, launch, handover

1. Test real mobile devices/widths, article reading, keyboard use, reduced motion, moderation, form errors, search, links, image loading, and performance.
2. Test duplicate checkout submits, stock limits, invalid totals, wrong-user access, blocked members, admin permissions, cancellation/returns, and COD reports.
3. Finalize policies, shipping availability, emails, consent, domain, analytics/Search Console, backups, monitoring, and a recovery drill.
4. Give Mehak a short guide for publishing, responding/moderating, editing products, dispatching, recording COD, exporting sales, and contacting the developer.

**Gate:** no blocking public/admin issues; owner can operate all four surfaces; production test order and community post complete.

## 7. Decisions to confirm

| Item | Working assumption |
| --- | --- |
| Community participation | On-site text discussions with verified members and owner moderation; no chat/DMs |
| Newsletter | Keep existing Substack subscribe path for V1 unless Mehak wants a separately owned list |
| Content migration | Curated, approved posts and links; no wholesale copy without canonical/rights decision |
| Hosting | Paid commercial-use-compatible deployment after budget/deploy spike; no Vercel Hobby production |
| Database/auth | Supabase managed Postgres/Auth/Storage; revisit only for a concrete cost or integration reason |
| Shipping | Manual admin workflow until provider details are known |
| Payments/digital | COD for physical goods; paid digital goods remain unavailable until online payment/delivery is designed |
| Dashboard | One protected `/admin`; owner can operate publication, community, store, and sales from it |

**Success criterion:** the site reads like Mehak’s publication, hosts a small but genuine community, makes five products easy to buy by COD, and lets her manage everything from one clear admin area. Keep the build small enough that ongoing publishing and order work do not require a developer.
