# Altar Curated — V1 website action plan

Source: client’s **ALTAR CURATED Website Design + Development Brief** (25-page PDF, 26 numbered sections), supplied 24 September 2026, and the project owner's clarification: **Altar is a self-healing and metaphysical store and community.** Design and atmosphere lead; V1 checkout is cash on delivery (COD); the shipping/payment provider is still unspecified; sales require an admin dashboard. The client's original [Speck of Rot / Altar Curated Substack](https://speckofrot.substack.com/) is a key editorial source. Its publication identity is visible, but the posts were not accessible during this review, so no claims about specific essays or voice are made here. Review representative posts with the client before approving copy or art direction.

## 1. Product decision

Build a **distinctive self-healing and metaphysical world** with a curated store, original writing, practices/rituals, and a real path into community. The Shop, editorial space, and Apothecary connect through what visitors are exploring and practising. Launch with five products, with **Reflections in Bloom** as the editorial and commercial anchor. The botanical estate in the brief is a visual concept to test, not the definition of the brand.

The homepage should establish the client's point of view and offer immediate paths to read, practise, shop, and join the community. Prototype the brief's illustrated spaces/hotspots alongside a more writing-led direction; choose after reviewing the original essays and client feedback. Keep navigation and purchase paths visible. If illustration wins, use layered 2D art, restrained motion, and static fallbacks; no 3D/WebGL dependency. Mobile needs a designed composition rather than a reduced desktop scene.

**Recommended implementation baseline:** a custom Shopify Online Store theme, with Shopify products/variants, cart, checkout, orders, customer accounts, and native order reporting. Use articles and/or page-capable metaobjects for structured Greenhouse content, rituals, prompts, and the links between them. This follows the platform preference in the brief and avoids writing a second commerce back office. Confirm the external shipping/payment provider's integration requirements before locking the platform. If it cannot integrate with Shopify, make a short platform decision record before building the checkout.

Shopify documentation: [manual payment methods](https://help.shopify.com/en/manual/payments/manual-payments), [managing orders](https://help.shopify.com/en/manual/fulfillment/managing-orders), [metaobject theme templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/metaobject), [digital downloads](https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads).

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
| Community / My Altar | A visible community page with the client's writing, newsletter/approved discussion destination, and invitation to participate; lightweight order-history account if supported | Member spaces, saved writing/products, wishlist, purchase library, personalization |
| Sales upkeep | Admin order view plus a concise sales dashboard/report: order count, ordered value, pending COD, collected COD, cancellations/returns, fulfillment status, top products; filters and export | Custom analytics app only if the native admin/reporting cannot meet the agreed dashboard layout |
| Marketing | Newsletter consent capture, basic welcome email, SEO metadata/URLs, analytics events and Search Console | Segmented flows, abandoned-cart campaigns, extensive automation and reviews if no authentic review source exists |

**COD rules:** COD orders start as unpaid/pending, move through confirmed → packed → dispatched → delivered or cancelled/returned, and are marked paid only after cash collection is verified. Maintain separate payment and fulfillment status, order notes, shipping/tracking reference, collection date, and reconciliation/export. Never count placed COD value as collected revenue. Define who updates each status and how the shipping partner reports delivery, failed delivery, returns, and remittance.

**Digital-product constraint:** the brief's "purchase → payment → delivery → account" path cannot honestly be delivered with COD alone. Do not expose a purchasable paid download with instant access under COD. Revisit after the provider and payment flow are confirmed.

## 3. Design direction and references

- **Visual grammar:** Treat the brief's palette as a starting point, then test it against the voice and imagery of the client's writing. Warm Paper `#F4EBDD` as the canvas; Altar Brown `#3B241C` for anchors; Botanical Lime `#B7D83D` as a restrained action accent; Mystic Lavender `#B9A6D8` for selected editorial/digital moments; Soft Sage `#A8B29A` and Ink `#191513` as support. Use the brief's approximate 60/25/10/5 balance, then verify contrast on actual components.
- **Type:** expressive editorial serif for headings and clean sans for navigation, information, forms, and commerce. Test one pairing in real page compositions before locking fonts.
- **Art:** develop original illustration and photography around reflection, self-healing, metaphysical objects, texture, ritual, and community. Botanical linework, architecture, and maps are optional motifs from the brief, to be justified by the client's actual voice. Plan separate desktop/mobile compositions and art direction for the journal spreads. Do not use generic stock imagery or copy a reference's artwork.
- **Motion:** restrained reveals and purposeful interaction. Any hotspot must be keyboard-accessible, labelled, and usable with reduced motion. Keep navigation, cart, and checkout immediately understandable.

| Reference from brief | Study for | Application to Altar |
| --- | --- | --- |
| [Saka Essentials](https://www.sakaessentials.com/) | Sanctuary entry and commerce within a broader brand space | An inviting entry screen and world-to-shop connection |
| [Web Altar](https://web-altar.xyz/) | Participatory altar idea (per client brief; site was not accessible during this review) | Prototype a small, optional hotspot interaction without making navigation depend on it |
| [Speck of Rot / Altar Curated](https://speckofrot.substack.com/) | **Client's original publication and primary editorial source; posts require client-assisted review because they were inaccessible here** | Audit representative posts for recurring themes, language, imagery, and community rituals before writing site copy; agree what to feature/link versus republish |
| [We're Not Really Strangers](https://www.werenotreallystrangers.com/) | Product as entry to a broader story, with clear commerce and digital content navigation | Editorial product narrative with visible purchase path |
| [Princess Ri](https://princess-ri.com/) | Distinct personality in a commerce presentation | Hand-drawn details, irregularity, and authored visual character |
| [Tam Kaur journal](https://tamkaur.com/products/obsessed-with-productivity-journal) | Dedicated creator-led journal product presentation | Reflections in Bloom page with spreads and concrete usage details |
| [Buttéir](https://butteir.com/), [Starbeary Jewels](https://www.starbearyjewels.com/), [Rerunn](https://rerunn.com/), [Eossa](https://eossa.in/) | Contemporary product discovery, curated imagery, Indian commerce cues | Clear pricing, product photography, collections, and mobile buying flow |
| [Otherwise Academy](https://www.otherwise.academy/) and [Statement Gaia](https://statement-gaia-jtm7hhlrc-saransh-255.vercel.app/) | Educational/experimental ecosystems (per brief; not accessible in this review) | Future content and exploratory interaction cues, not a V1 dependency |

References are for direction, not templates. The visual system should be presented as **two distinct art-direction routes** before full production: one immersive/illustrated, one writing-led/editorial, both rooted in self-healing, metaphysical practice, and community. Test each on the homepage, a product page, a writing page, and the community invitation in mobile and desktop frames. The client's actual posts and feedback decide the route.

## 4. Information architecture and content model

**Primary navigation (working labels):** Shop · Journal/Greenhouse · Apothecary · Community · About. Utility: Search · My Altar · Cart. Reflections in Bloom gets a prominent homepage entry and its own landing route. Confirm whether “Greenhouse” fits the client's voice after reviewing the Substack; do not force botanical naming. Journal remains prominent because original writing is central.

**Core routes:**

- `/` — estate entry and editorial homepage
- `/shop`, `/collections/:slug`, `/products/:slug` — commerce
- `/reflections-in-bloom` — flagship story/product landing, with a purchase CTA connected to its actual product record
- `/journal` (or `/greenhouse` if approved), category and article routes — editorial archive, reflections, practices/rituals, prompts
- `/apothecary` — curated ritual world; linked collection/product pages
- `/community` — community invitation, latest writing, newsletter, participation path, and clearly labelled off-site destination if community lives on Substack
- `/about`, `/contact`, `/search`, `/cart`, account/order pages, shipping/returns/privacy/terms

**Structured content:** Product/variant/price/stock/media; collection; editorial entry with type, category, hero/media, author/date, SEO, status, original Substack URL and canonical/republication choice; practice/ritual and prompt; bidirectional related products and related content; community/newsletter invitation; optional downloadable free resource. Create link fields, not hard-coded lists buried in templates. The Apothecary is an editorial landing/content view over selected products, so a product remains one canonical commerce record. Make unpublished/future categories invisible until populated.

**First content pack:** five complete product records, a full Reflections in Bloom story and images/spreads, at least three approved original/adapted writing pieces, one Apothecary introduction/practice, a community invitation page, About, shipping and returns, contact, privacy and terms, signup copy and confirmation emails. Replace all placeholder prose before launch.

## 5. Ordered work packages

### P0 — Decisions and source gathering

1. Read a client-provided export or representative links/text from the original Substack (suggest 5–10 posts) and agree themes, voice, editorial rights, canonical URLs, whether to link or republish, and where community participation happens. Obtain brand assets, logo files, font rights, product list/prices/variants, journal spreads, photography, inventory, copy, packaging art, legal/policy text, contact and social destinations.
2. Identify the shipping/payment provider, its Shopify integration or API/export process, COD serviceable locations, fees, returns/RTO process, and remittance timeline. Confirm who owns fulfillment and reconciliation.
3. Agree domain, Shopify store ownership/access, email platform, analytics ownership, newsletter consent wording, and Indian tax/shipping settings with the client.
4. Freeze V1 content and commercial acceptance criteria. Record unresolved inputs in a decision log; do not invent policy, rates, or delivery promises.

**Gate:** signed-off brand positioning and source-writing audit, V1 scope, launch catalogue, community destination, provider handoff, asset checklist, and homepage/checkout flows.

### P1 — Art direction and UX prototype

1. Create two moodboards plus type/color/component samples from the approved editorial voice. Explore an original immersive concept and a writing-led alternative; make the estate/greenhouse motif optional.
2. Wireframe homepage, original-writing/article page, community invitation, Apothecary, Reflections in Bloom, standard product, cart, COD checkout handoff, and mobile navigation.
3. Produce high-fidelity mobile and desktop prototypes for those key pages, including any proposed hotspots, hover/focus, reduced-motion behavior, and the relationships between writing, practice, community, and purchase.
4. Test the flows with a few people unfamiliar with the brand: find a product, reach Reflections in Bloom, read a ritual, add to cart, and understand COD.

**Gate:** client approves one visual route and the key mobile and desktop screens before full build.

### P2 — Foundation and content system

1. Initialize this repository with the selected Shopify theme project, environment/config instructions, asset workflow, and development conventions.
2. Build design tokens, typography, header/mobile menu, buttons, cards, layouts, image treatment, and accessible illustration hotspot component.
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
2. Optimize illustrations and photography, responsive formats, lazy-loading below the fold, font loading, and Core Web Vitals; retain an accessible static estate path.
3. Check products/prices/stock, shipping availability and fees, taxes, COD policy, emails, legal pages, metadata, analytics, Search Console, domain, and order notifications.
4. Run test orders covering one item, multiple items, unavailable region, cancellation, delivery, COD collection, and return/RTO. Reconcile dashboard totals to order records.
5. Train client on product/content publishing, order status updates, COD reconciliation, exports, and the eventual provider integration handoff.

**Gate:** no blocking UX or commerce defects; client owns access/assets; launch checklist signed off; live test order handled through the full workflow.

## 6. Acceptance criteria

- Within the opening view, visitors can understand Altar's self-healing/metaphysical point of view and find writing, practices, Shop, community, and Cart without guessing how any illustration works.
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
| Shopify compatibility and store ownership | Shopify custom theme baseline | End of P0 |
| Sales dashboard layout and export columns | Native orders/report first, custom view for gaps | End of P1 |
| Paid digital launch | Deferred; free editorial resources can launch | Before product catalogue freeze |
| My Altar account depth | Native account/order history only | End of P1 |
| Newsletter/email provider and data consent | Basic signup/welcome, consent and ownership required | Before forms go live |
| Original Substack posts, voice and republication rights | Posts inaccessible during this review; client supplies export or selected pieces for audit | Before P1 visual and copy approval |
| Community destination and participation format | V1 landing/newsletter and approved Substack links; no assumed forum | Before P1 |
| Final assets, copy, licensing, policies | Client-supplied/approved | Before P3 sign-off |

**Suggested delivery order:** P0 → P1 → P2 → P3 → P4. The largest schedule dependency is access to original writing, approved art direction, photography, and copy. Build in small reviewable increments after the visual gate; preserve the design system and editable content links as the catalogue expands.
