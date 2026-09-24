# Altar Curated — V1 website action plan

Sources: client’s **ALTAR CURATED Website Design + Development Brief** (25-page PDF, 26 numbered sections), supplied 24 September 2026; the project owner's clarification that Altar is a **self-healing and metaphysical store and community**; and the user-provided content, themes, visual notes, and post summaries from Mehak Joshi’s [Altar Curated / Speck of Rot Substack](https://speckofrot.substack.com/). The supplied blog summary is the editorial source for this revision; the posts themselves could not be inspected through the available browser. V1 prioritizes design, COD checkout, and sales upkeep. The shipping/payment provider remains unspecified.

## 1. Product decision

Build a **self-healing and metaphysical space for reading, reflection, practice, and community**, with a curated store inside it. The editorial center comes from Mehak’s own writing: desire and devotion, grief and longing, embodiment, the tension between transcendence and ordinary contact, and the self as altar. Products belong in that world as objects for reflection and ritual, not as cures or substitutes for human connection. Launch with five products, with **Reflections in Bloom** as the editorial and commercial anchor. The botanical estate in the brief is a possible motif to test, not the identity of the brand.

The homepage should open like an intimate editorial threshold: an italic Altar Curated masthead, a short Mehak-approved line of writing, atmospheric imagery, and immediate paths to **Read, Reflect, Explore the Apothecary, Shop, and Join**. Prototype the brief's illustrated rooms/hotspots against a chapel-like, writing-led direction. The final route should be chosen from real content and product imagery. Keep navigation and purchase paths visible. If illustration wins, use layered 2D art, restrained motion, and static fallbacks; no 3D/WebGL dependency. Mobile needs its own composition rather than a reduced desktop scene.

**Recommended implementation baseline:** a custom Shopify Online Store theme, with Shopify products/variants, cart, checkout, orders, customer accounts, and native order reporting. Use articles and/or page-capable metaobjects for structured writing, practices, prompts, and the links between them. This follows the platform preference in the brief and avoids writing a second commerce back office. Confirm the external shipping/payment provider's integration requirements before locking the platform. If it cannot integrate with Shopify, make a short platform decision record before building the checkout.

Shopify documentation: [manual payment methods](https://help.shopify.com/en/manual/payments/manual-payments), [managing orders](https://help.shopify.com/en/manual/fulfillment/managing-orders), [metaobject theme templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/metaobject), [digital downloads](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads).

### Editorial and community principles

- Let readers meet a person before they meet a catalogue. Preserve the first-person, earnest, slightly strange lyric register; use direct, plain language for prices, shipping, returns, and consent.
- Design a **read → reflect → connect → explore** journey. For example, *The Slog Of It All* can lead to a companion journal prompt and community invitation; a relevant journal can appear later in the page, without implying purchase fixes isolation.
- Avoid “healing guaranteed,” diagnostic, or therapeutic claims for metaphysical goods. Describe material, provenance, symbolism, care, and how Mehak uses or interprets an object; do not turn grief or longing into a conversion trick.
- V1 community means a real, maintained path to the client's current writing/discussion space and email, plus a way to return. Do not imply an on-site forum exists. Define who moderates replies and who owns the mailing list before adding new participation features.

## Technical approach — recommended V1 stack

| Layer | Recommendation | Why |
| --- | --- | --- |
| Storefront | **Custom Shopify Online Store 2.0 theme**: Liquid, JSON templates/sections, semantic HTML, authored CSS, and small progressive-enhancement JavaScript/TypeScript | Full control over the editorial visual treatment without building core cart, checkout, orders, or accounts from scratch |
| Content | Shopify articles for essays if their editorial controls suffice; metaobjects for practices, prompts, themed pathways, and structured cross-links; product/collection metafields for contextual associations | Editable writing-to-product connections; keep the client's original Substack URL and a link/republish/canonical decision on each adapted piece |
| Commerce | Shopify products, variants, inventory, cart, native checkout with **manual COD payment**, shipping zones/rates once provided, and order notifications | A working physical-product order flow before the external provider is known; COD orders remain pending until collection is recorded |
| Admin / sales | Shopify Orders and analytics as the source of truth; saved views, order tags/metafields or notes, export, and a written COD reconciliation process. Add a small embedded admin reporting app only if the approved dashboard cannot be represented natively | Avoid a duplicate order database while meeting sales upkeep needs |
| Community / email | Start with a prominent Substack reading/subscribe/participation path, or use one client-approved email provider if list ownership and consent are settled. Do not silently create two disconnected mailing lists | Continue the existing writing community rather than treating it as a decorative signup form |
| Analytics / SEO | Shopify analytics plus GA4/Search Console if owned by the client; content/product events and consent-aware tracking; metadata, structured product data, and canonical URLs | Measure discovery → reading → purchase without double-counting placed COD orders as cash collected |
| Development / hosting | GitHub repo for the theme, Shopify CLI development preview, Shopify-hosted storefront and admin; no separate V1 server/database | Keeps maintenance and handover manageable |

**Tradeoff:** A custom Shopify theme can deliver bespoke editorial pages and 2D interactions, but the checkout and account experience has platform boundaries. Test a realistic design spike in P1. If the chosen immersive concept truly needs a custom application shell, evaluate **Shopify Hydrogen (React Router + Storefront API)** as a documented alternative before P2; it adds a separate frontend, deployment, and integration workload. Avoid introducing Next.js, a custom orders database, or a standalone dashboard solely to make five COD products look bespoke. Shopify's [theme architecture](https://shopify.dev/docs/storefronts/themes/architecture), [CLI](https://shopify.dev/docs/storefronts/themes/tools/cli), [metaobject templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/metaobject), [manual COD](https://help.shopify.com/en/manual/payments/manual-payments), and [Hydrogen options](https://shopify.dev/docs/storefronts/headless/getting-started/build-options) are the implementation references.

## 2. V1 scope and boundaries

| Area | Ship in V1 | Later / conditional |
| --- | --- | --- |
| Brand world | Bespoke self-healing/metaphysical identity; paths into writing, practices, Shop, Apothecary, community, and Reflections in Bloom; an illustrated entry only if approved | Observatory, interactive quizzes, personal altar, richer exploratory rooms |
| Shop | Five launch products, categories/collections, variants where needed, search, product stories, imagery, specifications, related content/products, cart | Complex merchandising and personalized recommendations |
| Reflections in Bloom | Dedicated long-form landing/product page with purpose, philosophy, selected spreads, contents, usage, audience, related prompts/rituals/products, newsletter, purchase CTA | Deeper interactive journaling experience |
| Editorial / Greenhouse | Writing-led destination with category/archive pages and launch content adapted from or informed by the client's approved original work: at least one ritual/practice, one journal prompt, and one reflective essay/guide; bidirectional product links | Full publishing calendar and resource archive |
| Apothecary | Curated metaphysical objects presented with context, intended use, material details, and associated practices; launch products displayed where relevant | Additional categories and larger catalogue |
| Checkout | Physical goods purchased with COD only; transparent shipping/returns and order confirmation; exact delivery charges and serviceability set before going live | Gateway and shipping-provider integration when details arrive |
| Digital | Content model and UI can describe free downloads or coming-soon digital products; collect interest if desired | **Paid digital checkout and automatic file delivery** after online payment and entitlement rules are defined |
| Community / My Altar | A visible community page with featured essays, Substack reading/subscribe link, and a clear invitation to participate where Mehak already publishes; lightweight order-history account if supported | Member spaces, on-site discussion, saved writing/products, wishlist, purchase library, personalization |
| Sales upkeep | Admin order view plus a concise sales dashboard/report: order count, ordered value, pending COD, collected COD, cancellations/returns, fulfillment status, top products; filters and export | Custom analytics app only if the native admin/reporting cannot meet the agreed dashboard layout |
| Marketing | Newsletter consent capture, basic welcome email, SEO metadata/URLs, analytics events and Search Console | Segmented flows, abandoned-cart campaigns, extensive automation and reviews if no authentic review source exists |

**COD rules:** COD orders start as unpaid/pending, move through confirmed → packed → dispatched → delivered or cancelled/returned, and are marked paid only after cash collection is verified. Maintain separate payment and fulfillment status, order notes, shipping/tracking reference, collection date, and reconciliation/export. Never count placed COD value as collected revenue. Define who updates each status and how the shipping partner reports delivery, failed delivery, returns, and remittance.

**Digital-product constraint:** the brief's "purchase → payment → delivery → account" path cannot honestly be delivered with COD alone. Do not expose a purchasable paid download with instant access under COD. Revisit after the provider and payment flow are confirmed.

## 3. Design direction and references

- **Visual grammar:** Start from the existing publication: deep wine/oxblood `#37060D`, off-white `#EDE4E5`, dusty rose/pale pink for the italic masthead, cream for buttons/tabs, and restrained warm-gold links. Sample and approve exact rose, cream, and gold tokens from brand assets. The brief's brown `#3B241C`, paper `#F4EBDD`, lime `#B7D83D`, and lavender `#B9A6D8` can inform selected product/editorial subworlds, but should not override the publication's established look by default. Preserve the dark intimacy while ensuring readable text and clear interactive states; the source's low-contrast mood is inspiration, not a reason to make long essays hard to read.
- **Type:** italic spectral/editorial serif for the centered **ALTAR CURATED** masthead and expressive headings; a legible reading face for long first-person essays; restrained sans for navigation, specifications, forms, and commerce. Design drop-cap openings and long-line rhythm deliberately, with comfortable mobile line length. Preserve stylized Unicode in titles where the client wants it, but provide sensible accessible labels, slugs, and metadata.
- **Art:** create original oval/circular portrait and object crops, painterly still lifes, tactile product/spread photography, and carefully used imagery of skin, rosary-like objects, and the everyday intimate gesture where rights and fit are clear. The direction is chapel, icon, zine, and prayer book, with room for the slightly grotesque. Botanical linework, architecture, and maps remain optional motifs from the brief. Plan separate desktop/mobile compositions. Do not use generic stock imagery or copy a reference's artwork.
- **Motion:** restrained reveals and purposeful interaction. Any hotspot must be keyboard-accessible, labelled, and usable with reduced motion. Keep navigation, cart, and checkout immediately understandable.

| Reference from brief | Study for | Application to Altar |
| --- | --- | --- |
| [Saka Essentials](https://www.sakaessentials.com/) | Sanctuary entry and commerce within a broader brand space | An inviting entry screen and world-to-shop connection |
| [Web Altar](https://web-altar.xyz/) | Participatory altar idea (per client brief; site was not accessible during this review) | Prototype a small, optional hotspot interaction without making navigation depend on it |
| [Speck of Rot / Altar Curated](https://speckofrot.substack.com/) | **Client's original publication and primary editorial/visual source; user supplied detailed post summaries and visual notes** | Carry over oxblood/rose, italic masthead, oval images, literary reading rhythm, and the earnest voice; decide which essays to feature/link versus republish and confirm exact copy with Mehak |
| [We're Not Really Strangers](https://www.werenotreallystrangers.com/) | Product as entry to a broader story, with clear commerce and digital content navigation | Editorial product narrative with visible purchase path |
| [Princess Ri](https://princess-ri.com/) | Distinct personality in a commerce presentation | Hand-drawn details, irregularity, and authored visual character |
| [Tam Kaur journal](https://tamkaur.com/products/obsessed-with-productivity-journal) | Dedicated creator-led journal product presentation | Reflections in Bloom page with spreads and concrete usage details |
| [Buttéir](https://butteir.com/), [Starbeary Jewels](https://www.starbearyjewels.com/), [Rerunn](https://rerunn.com/), [Eossa](https://eossa.in/) | Contemporary product discovery, curated imagery, Indian commerce cues | Clear pricing, product photography, collections, and mobile buying flow |
| [Otherwise Academy](https://www.otherwise.academy/) and [Statement Gaia](https://statement-gaia-jtm7hhlrc-saransh-255.vercel.app/) | Educational/experimental ecosystems (per brief; not accessible in this review) | Future content and exploratory interaction cues, not a V1 dependency |

References are for direction, not templates. Present **two art-direction routes** before full production: (A) oxblood/rose, chapel-like editorial with intimate oval imagery, rooted in the existing publication; (B) a restrained illustrated world that retains the same editorial voice and visual continuity. Test each on the homepage, product page, essay page, and community invitation in mobile and desktop frames. Route A is the default; choose B only if Mehak approves it after seeing real content. Do not imitate a generic occult storefront.

## 4. Information architecture and content model

**Primary navigation (working labels):** Read / Journal · Shop · Apothecary · Community · About. Utility: Search · My Altar · Cart. Reflections in Bloom gets a prominent homepage entry and its own landing route. The Substack's Home / Notes / Archive / About pills suggest a quiet navigation treatment. “Greenhouse” can remain a named section only if Mehak likes it after seeing the site map; original writing must be easy to find.

**Core routes:**

- `/` — brand entry and editorial homepage
- `/shop`, `/collections/:slug`, `/products/:slug` — commerce
- `/reflections-in-bloom` — flagship story/product landing, with a purchase CTA connected to its actual product record
- `/journal` (or `/greenhouse` if approved), category and article routes — editorial archive, reflections, practices/rituals, prompts
- `/apothecary` — curated ritual world; linked collection/product pages
- `/community` — community invitation, latest writing, newsletter, participation path, and clearly labelled off-site destination if community lives on Substack
- `/about`, `/contact`, `/search`, `/cart`, account/order pages, shipping/returns/privacy/terms

**Structured content:** Product/variant/price/stock/media; collection; editorial entry with type, category, hero/media, author/date, SEO, status, original Substack URL and canonical/republication choice; practice/ritual and prompt; bidirectional related products and related content; community/newsletter invitation; optional downloadable free resource. Create link fields, not hard-coded lists buried in templates. The Apothecary is an editorial landing/content view over selected products, so a product remains one canonical commerce record. Make unpublished/future categories invisible until populated.

**First content pack:** five complete product records, a full Reflections in Bloom story and images/spreads, at least three approved original/adapted writing pieces, one Apothecary introduction/practice, a community invitation page, About, shipping and returns, contact, privacy and terms, signup copy and confirmation emails. Candidate reading pathways from the supplied summaries: **desire and devotion** (*i fear what i crave*, *The Undying Force Of My Devotion*), **grief and ordinary love** (*The Dream Is That It Ends*), and **embodiment and company** (*The Slog Of It All*); *THE VEIL THAT SEEKS TO BE LIFTED* can introduce transformation. Mehak selects final excerpts and permissions. Replace all placeholder prose before launch.

## 5. Ordered work packages

### P0 — Decisions and source gathering

1. Validate the supplied Substack summary with Mehak against 5–10 complete posts, especially *i fear what i crave*, *The Dream Is That It Ends*, *The Slog Of It All*, and *The Undying Force Of My Devotion*. Agree on exact voice, excerpt approval, editorial rights, canonical URLs, link versus republication, and where readers participate. Obtain logo/fonts/rights, the final palette, product list/prices/variants, journal spreads, photography, inventory, packaging art, policies, contact and social destinations.
2. Identify the shipping/payment provider, its Shopify integration or API/export process, COD serviceable locations, fees, returns/RTO process, and remittance timeline. Confirm who owns fulfillment and reconciliation.
3. Agree domain, Shopify store ownership/access, email platform, analytics ownership, newsletter consent wording, and Indian tax/shipping settings with the client.
4. Freeze V1 content and commercial acceptance criteria. Record unresolved inputs in a decision log; do not invent policy, rates, or delivery promises.

**Gate:** signed-off brand positioning and source-writing audit, V1 scope, launch catalogue, community destination, provider handoff, asset checklist, and homepage/checkout flows.

### P1 — Art direction and UX prototype

1. Create two moodboards plus type/color/component samples from Mehak's approved writing and publication: dark chapel/editorial as default, an immersive illustrated alternative. Use real essay excerpts and product imagery in both; keep estate/greenhouse motifs optional.
2. Wireframe homepage, long-form essay with drop cap, archive/notes, community invitation, Apothecary, Reflections in Bloom, standard product, cart, COD checkout handoff, and mobile navigation.
3. Produce high-fidelity mobile and desktop prototypes for those key pages, including any proposed hotspots, hover/focus, reduced-motion behavior, and the relationships between writing, practice, community, and purchase.
4. Test the flows with a few people unfamiliar with the brand: find a product, reach Reflections in Bloom, read a ritual, add to cart, and understand COD.

**Gate:** client approves one visual route and the key mobile and desktop screens before full build.

### P2 — Foundation and content system

1. Initialize this repository with the selected Shopify theme project, environment/config instructions, asset workflow, and development conventions.
2. Build oxblood/rose/cream tokens, masthead, typography, article reading layouts, oval-media treatments, header/mobile menu, buttons, cards, and commerce layouts. Add hotspots only if the approved concept needs them.
3. Configure five products and any real collections; define editable writing/practice/prompt content types, Substack provenance/canonical fields, and relationship fields.
4. Create reusable page/section templates and SEO fields, breadcrumbs, metadata, sitemaps/schema where relevant.

**Gate:** sample pages render with real representative content and editors can update content without editing code.

### P3 — Flagship pages and commerce

1. Build approved homepage concept, Shop, editorial archive/article, community invitation, Apothecary landing, Reflections in Bloom, product, search, cart, and utility/policy pages.
2. Configure COD and physical shipping rules; show total and COD instructions before placement; test confirmation and admin order creation.
3. Establish the sales upkeep view/report and the COD/fulfillment operating procedure; provide date/status filters and CSV export. Use Shopify native order/reporting where it meets the dashboard requirements, adding a custom admin view only for a documented gap.
4. Add newsletter signup/consent and minimum analytics events: landing source, product view, add to cart, checkout started, order placed, and signup. Separate order placed from payment collected in reports.

**Gate:** real-content end-to-end mobile and desktop journey, order statuses and dashboard demonstrated with test COD orders.

### P4 — QA, launch, and handover

1. Review on common mobile widths and desktop; keyboard/screen-reader basics, focus, labels, contrast, reduced motion, broken links, empty states, checkout clarity.
2. Optimize approved illustration and photography, responsive formats, lazy-loading below the fold, font loading, and Core Web Vitals; retain a straightforward static navigation path.
3. Check products/prices/stock, shipping availability and fees, taxes, COD policy, emails, legal pages, metadata, analytics, Search Console, domain, and order notifications.
4. Run test orders covering one item, multiple items, unavailable region, cancellation, delivery, COD collection, and return/RTO. Reconcile dashboard totals to order records.
5. Train client on product/content publishing, order status updates, COD reconciliation, exports, and the eventual provider integration handoff.

**Gate:** no blocking UX or commerce defects; client owns access/assets; launch checklist signed off; live test order handled through the full workflow.

## 6. Acceptance criteria

- Within the opening view, visitors encounter Mehak's literary self-healing/metaphysical point of view and can find writing, practices, Shop, community, and Cart without guessing how any illustration works.
- If an immersive interaction is approved, it works by touch, mouse, and keyboard; its links also exist in ordinary navigation; reduced motion and static fallbacks are usable.
- All five launch products have coherent editorial detail, accurate prices and inventory, and a clear route into checkout. Reflections in Bloom has its own designed story and a working purchase path.
- Each launch editorial page contains an intentional next step: related product, prompt/practice, another article, or community/newsletter invitation. Product pages link back into the content world.
- A COD order shows the correct total and delivery terms and creates a trackable admin record; dashboard distinguishes pending COD from cash collected and supports reconciliation/export.
- Paid digital products are not purchasable until payment and entitlement/delivery are implemented and tested.
- Mobile pages are art-directed and fast enough for social traffic; search, policy, account, cart, and checkout paths are understandable and accessible.
- Client can maintain products, writing and content relationships, community invitations, order status, and newsletter content without a developer for routine changes.

## 7. Decision log / open inputs

| Decision needed | Current working assumption | Latest safe point |
| --- | --- | --- |
| Shipping/payment provider and integration | COD only, manual/admin handoff possible | Before checkout implementation |
| Market, delivery zones, rates, taxes, COD fee/threshold | Unknown; no live order promise until configured | Before commerce QA |
| Shopify compatibility and store ownership | Shopify custom Online Store theme baseline; verify provider integration and checkout constraints | End of P0 |
| Sales dashboard layout and export columns | Native orders/report first, custom view for gaps | End of P1 |
| Paid digital launch | Deferred; free editorial resources can launch | Before product catalogue freeze |
| My Altar account depth | Native account/order history only | End of P1 |
| Newsletter/email provider and data consent | Existing Substack participation path first; one agreed signup destination, consent and ownership required | Before forms go live |
| Original Substack posts, voice and republication rights | Detailed summaries supplied; client/Mehak confirms against full posts and approves exact excerpts or links | Before P1 visual and copy approval |
| Community destination and participation format | V1 landing/newsletter and approved Substack links; no assumed forum | Before P1 |
| Final assets, copy, licensing, policies | Client-supplied/approved | Before P3 sign-off |

**Suggested delivery order:** P0 → P1 → P2 → P3 → P4. The largest schedule dependency is approved excerpts/rights, art direction, photography, and product copy. Build in small reviewable increments after the visual gate; preserve the design system and editable content links as the catalogue expands.
