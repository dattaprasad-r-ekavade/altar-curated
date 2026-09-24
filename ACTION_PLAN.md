# Altar Curated — V1 website action plan

Source: client’s **ALTAR CURATED Website Design + Development Brief** (25-page PDF, 26 numbered sections), supplied 24 September 2026. This plan uses the client's subsequent direction: **design and atmosphere lead; V1 checkout is cash on delivery (COD); a separate provider for shipping/payments is yet to be specified; sales must be kept up to date in an admin dashboard.**

## 1. Product decision

Build an **illustrated digital botanical estate that contains a shop**. The Shop, Greenhouse, and Apothecary are three connected destinations, not three disconnected catalogues. Launch with five products, with **Reflections in Bloom** as the editorial and commercial anchor.

The homepage should invite exploration through an illustrated estate map with clickable rooms/hotspots, while a conventional visible navigation and clear shop path remain available. Use layered 2D illustration, restrained CSS motion, and static fallbacks; no 3D/WebGL dependency. Mobile gets a designed editorial composition and obvious tappable destinations, not a tiny desktop map.

**Recommended implementation baseline:** a custom Shopify Online Store theme, with Shopify products/variants, cart, checkout, orders, customer accounts, and native order reporting. Use articles and/or page-capable metaobjects for structured Greenhouse content, rituals, prompts, and the links between them. This follows the platform preference in the brief and avoids writing a second commerce back office. Confirm the external shipping/payment provider's integration requirements before locking the platform. If it cannot integrate with Shopify, make a short platform decision record before building the checkout.

Shopify documentation: [manual payment methods](https://help.shopify.com/en/manual/payments/manual-payments), [managing orders](https://help.shopify.com/en/manual/fulfillment/managing-orders), [metaobject theme templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/metaobject), [digital downloads](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads).

## 2. V1 scope and boundaries

| Area | Ship in V1 | Later / conditional |
| --- | --- | --- |
| Brand world | Bespoke visual system; illustrated estate entry; Shop, Greenhouse, Apothecary, Reflections in Bloom pathways; responsive motion and static fallback | Observatory, interactive quizzes, personal altar, richer exploratory rooms |
| Shop | Five launch products, categories/collections, variants where needed, search, product stories, imagery, specifications, related content/products, cart | Complex merchandising and personalized recommendations |
| Reflections in Bloom | Dedicated long-form landing/product page with purpose, philosophy, selected spreads, contents, usage, audience, related prompts/rituals/products, newsletter, purchase CTA | Deeper interactive journaling experience |
| Greenhouse | Real editorial destination with category/archive pages and launch content: at least one ritual, one journal prompt, one guide/seasonal or botanical article; bidirectional product links | Full publishing calendar, community features, extensive resource archive |
| Apothecary | Curated landing page that pairs objects with their use and associated rituals; launch products displayed only where relevant | Additional categories and larger catalogue |
| Checkout | Physical goods purchased with COD only; transparent shipping/returns and order confirmation; exact delivery charges and serviceability set before going live | Gateway and shipping-provider integration when details arrive |
| Digital | Content model and UI can describe free downloads or coming-soon digital products; collect interest if desired | **Paid digital checkout and automatic file delivery** after online payment and entitlement rules are defined |
| My Altar | Lightweight account entry and order history if the chosen customer-account setup supports it; no custom profile system | Saved articles/products, wishlist, purchase library, personalization |
| Sales upkeep | Admin order view plus a concise sales dashboard/report: order count, ordered value, pending COD, collected COD, cancellations/returns, fulfillment status, top products; filters and export | Custom analytics app only if the native admin/reporting cannot meet the agreed dashboard layout |
| Marketing | Newsletter consent capture, basic welcome email, SEO metadata/URLs, analytics events and Search Console | Segmented flows, abandoned-cart campaigns, extensive automation and reviews if no authentic review source exists |

**COD rules:** COD orders start as unpaid/pending, move through confirmed → packed → dispatched → delivered or cancelled/returned, and are marked paid only after cash collection is verified. Maintain separate payment and fulfillment status, order notes, shipping/tracking reference, collection date, and reconciliation/export. Never count placed COD value as collected revenue. Define who updates each status and how the shipping partner reports delivery, failed delivery, returns, and remittance.

**Digital-product constraint:** the brief's "purchase → payment → delivery → account" path cannot honestly be delivered with COD alone. Do not expose a purchasable paid download with instant access under COD. Revisit after the provider and payment flow are confirmed.

## 3. Design direction and references

- **Visual grammar:** Warm Paper `#F4EBDD` as the canvas; Altar Brown `#3B241C` for anchors; Botanical Lime `#B7D83D` as a restrained action accent; Mystic Lavender `#B9A6D8` for selected editorial/digital moments; Soft Sage `#A8B29A` and Ink `#191513` as support. Use the brief's approximate 60/25/10/5 balance, then verify contrast on actual components.
- **Type:** expressive editorial serif for headings and clean sans for navigation, information, forms, and commerce. Test one pairing in real page compositions before locking fonts.
- **Art:** commission or produce an original estate illustration, botanical linework, maps, room details, marginalia, product textures, and naturally lit close-up photography. Plan separate desktop and mobile compositions and art direction for the journal spreads. Do not substitute generic stock imagery or copy a reference's artwork.
- **Motion:** hover/focus reveals and gentle botanical movement. Every hotspot must be keyboard-accessible, labelled, and usable with reduced motion. Keep navigation, cart, and checkout immediately understandable.

| Reference from brief | Study for | Application to Altar |
| --- | --- | --- |
| [Saka Essentials](https://www.sakaessentials.com/) | Sanctuary entry and commerce within a broader brand space | An inviting entry screen and world-to-shop connection |
| [Web Altar](https://web-altar.xyz/) | Participatory altar idea (per client brief; site was not accessible during this review) | Prototype a small, optional hotspot interaction without making navigation depend on it |
| [Speck of Rot](https://speckofrot.substack.com/) and [House of Heaven](https://houseofheaven.substack.com/) | Writing-led identity and mystical editorial tone (per brief; page content was not fully inspectable) | Long-form Greenhouse layouts and an expressive publishing voice |
| [We're Not Really Strangers](https://www.werenotreallystrangers.com/) | Product as entry to a broader story, with clear commerce and digital content navigation | Editorial product narrative with visible purchase path |
| [Princess Ri](https://princess-ri.com/) | Distinct personality in a commerce presentation | Hand-drawn details, irregularity, and authored visual character |
| [Tam Kaur journal](https://tamkaur.com/products/obsessed-with-productivity-journal) | Dedicated creator-led journal product presentation | Reflections in Bloom page with spreads and concrete usage details |
| [Buttéir](https://butteir.com/), [Starbeary Jewels](https://www.starbearyjewels.com/), [Rerunn](https://rerunn.com/), [Eossa](https://eossa.in/) | Contemporary product discovery, curated imagery, Indian commerce cues | Clear pricing, product photography, collections, and mobile buying flow |
| [Otherwise Academy](https://www.otherwise.academy/) and [Statement Gaia](https://statement-gaia-jtm7hhlrc-saransh-255.vercel.app/) | Educational/experimental ecosystems (per brief; not accessible in this review) | Future content and exploratory interaction cues, not a V1 dependency |

References are for direction, not templates. The visual system should be presented as **two distinct art-direction routes** before committing to full production: one more illustrated/architectural, one more typographic/editorial. Test each route on the homepage, a product detail, and a Greenhouse article in mobile and desktop frames.

## 4. Information architecture and content model

**Primary navigation:** Shop · Greenhouse · Apothecary · About. Utility: Search · My Altar · Cart. Reflections in Bloom gets a prominent homepage entry and its own landing route; Journal can be an editorial taxonomy within Greenhouse until there is enough content to justify a separate top-level destination.

**Core routes:**

- `/` — estate entry and editorial homepage
- `/shop`, `/collections/:slug`, `/products/:slug` — commerce
- `/reflections-in-bloom` — flagship story/product landing, with a purchase CTA connected to its actual product record
- `/greenhouse`, `/greenhouse/:category`, `/greenhouse/:slug` — editorial archive, categories, articles, rituals, prompts
- `/apothecary` — curated ritual world; linked collection/product pages
- `/about`, `/contact`, `/search`, `/cart`, account/order pages, shipping/returns/privacy/terms

**Structured content:** Product/variant/price/stock/media; collection; editorial entry with type, category, hero/media, author/date, SEO, and status; ritual and prompt; bidirectional related products and related content; optional downloadable free resource and newsletter signup. Create link fields, not hard-coded lists buried in templates. The Apothecary is an editorial landing/content view over selected products, so a product remains one canonical commerce record. Make unpublished/future categories invisible until populated.

**First content pack:** five complete product records, a full Reflections in Bloom story and images/spreads, at least three meaningful Greenhouse pieces, one Apothecary introduction/ritual, About, shipping and returns, contact, privacy and terms, signup copy and confirmation emails. Replace all placeholder prose before launch.

## 5. Ordered work packages

### P0 — Decisions and source gathering

1. Obtain brand assets, logo files, font rights, product list/prices/variants, journal spreads, product photography, inventory, copy, packaging art, legal/policy text, contact and social destinations.
2. Identify the shipping/payment provider, its Shopify integration or API/export process, COD serviceable locations, fees, returns/RTO process, and remittance timeline. Confirm who owns fulfillment and reconciliation.
3. Agree domain, Shopify store ownership/access, email platform, analytics ownership, newsletter consent wording, and Indian tax/shipping settings with the client.
4. Freeze V1 content and commercial acceptance criteria. Record unresolved inputs in a decision log; do not invent policy, rates, or delivery promises.

**Gate:** signed-off V1 scope, launch catalogue, provider handoff, asset checklist, and homepage/checkout flows.

### P1 — Art direction and UX prototype

1. Create two moodboards plus type/color/component samples and the original estate illustration concept.
2. Wireframe homepage, Greenhouse article, Apothecary, Reflections in Bloom, standard product, cart, COD checkout handoff, and mobile navigation.
3. Produce high-fidelity mobile and desktop prototypes for those key pages, including hotspots, hover/focus, reduced-motion behavior, and the relationship between story and purchase.
4. Test the flows with a few people unfamiliar with the brand: find a product, reach Reflections in Bloom, read a ritual, add to cart, and understand COD.

**Gate:** client approves one visual route and the key mobile and desktop screens before full build.

### P2 — Foundation and content system

1. Initialize this repository with the selected Shopify theme project, environment/config instructions, asset workflow, and development conventions.
2. Build design tokens, typography, header/mobile menu, buttons, cards, layouts, image treatment, and accessible illustration hotspot component.
3. Configure five products and any real collections; define editable Greenhouse/ritual/prompt content types and relationship fields.
4. Create reusable page/section templates and SEO fields, breadcrumbs, metadata, sitemaps/schema where relevant.

**Gate:** sample pages render with real representative content and editors can update content without editing code.

### P3 — Flagship pages and commerce

1. Build estate homepage, Shop, Greenhouse archive/article, Apothecary landing, Reflections in Bloom, product, search, cart, and utility/policy pages.
2. Configure COD and physical shipping rules; show total and COD instructions before placement; test confirmation and admin order creation.
3. Establish the sales upkeep view/report and the COD/fulfillment operating procedure; provide date/status filters and CSV export. Use Shopify native order/reporting where it meets the dashboard requirements, adding a custom admin view only for a documented gap.
4. Add newsletter signup/consent and minimum analytics events: landing source, product view, add to cart, checkout started, order placed, and signup. Separate order placed from payment collected in reports.

**Gate:** real-content end-to-end mobile and desktop journey, order statuses and dashboard demonstrated with test COD orders.

### P4 — QA, launch, and handover

1. Review on common mobile widths and desktop; keyboard/screen-reader basics, focus, labels, contrast, reduced motion, broken links, empty states, checkout clarity.
2. Optimize illustrations and photography, responsive formats, lazy-loading below the fold, font loading, and Core Web Vitals; retain an accessible static estate path.
3. Check products/prices/stock, shipping availability and fees, taxes, COD policy, emails, legal pages, metadata, analytics, Search Console, domain, and order notifications.
4. Run test orders covering one item, multiple items, unavailable region, cancellation, delivery, COD collection, and return/RTO. Reconcile dashboard totals to order records.
5. Train client on product/content publishing, order status updates, COD reconciliation, exports, and the eventual provider integration handoff.

**Gate:** no blocking UX or commerce defects; client owns access/assets; launch checklist signed off; live test order handled through the full workflow.

## 6. Acceptance criteria

- Within the opening view, visitors can understand Altar's atmosphere and find Shop, Greenhouse, Apothecary, and Cart without guessing how the illustrated map works.
- The estate interaction works by touch, mouse, and keyboard; its links also exist in ordinary navigation; reduced motion and no-JavaScript fallbacks are usable.
- All five launch products have coherent editorial detail, accurate prices and inventory, and a clear route into checkout. Reflections in Bloom has its own designed story and a working purchase path.
- Each launch editorial page contains an intentional next step: related product, prompt/ritual, another article, or newsletter. Product pages link back into the content world.
- A COD order shows the correct total and delivery terms and creates a trackable admin record; dashboard distinguishes pending COD from cash collected and supports reconciliation/export.
- Paid digital products are not purchasable until payment and entitlement/delivery are implemented and tested.
- Mobile pages are art-directed and fast enough for social traffic; search, policy, account, cart, and checkout paths are understandable and accessible.
- Client can maintain products, content relationships, order status, and newsletter content without a developer for routine changes.

## 7. Decision log / open inputs

| Decision needed | Current working assumption | Latest safe point |
| --- | --- | --- |
| Shipping/payment provider and integration | COD only, manual/admin handoff possible | Before checkout implementation |
| Market, delivery zones, rates, taxes, COD fee/threshold | Unknown; no live order promise until configured | Before commerce QA |
| Shopify compatibility and store ownership | Shopify custom theme baseline | End of P0 |
| Sales dashboard layout and export columns | Native orders/report first, custom view for gaps | End of P1 |
| Paid digital launch | Deferred; free editorial resources can launch | Before product catalogue freeze |
| My Altar account depth | Native account/order history only | End of P1 |
| Newsletter/email provider and data consent | Basic signup/welcome, consent and ownership required | Before forms go live |
| Final assets, copy, licensing, policies | Client-supplied/approved | Before P3 sign-off |

**Suggested delivery order:** P0 → P1 → P2 → P3 → P4. The largest schedule dependency is original illustration, photography, and approved copy. Build in small reviewable increments after the visual gate; preserve the design system and editable content links as the catalogue expands.
