import type { Metadata } from "next";
import Link from "next/link";
import { LeafRow } from "@/components/leaf-row";
import { Sprig } from "@/components/marks";
import { PageIntro } from "@/components/page-intro";
import { featuredRitual, greenhouseShelves } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Greenhouse",
  description: "The editorial and discovery world of Altar Curated: journal, rituals, seasonal living, botanical world and guides.",
};

const pathways = [
  { mark: "I", title: "The Library", text: "Essays on devotion, desire, grief and becoming.", href: "/read" },
  { mark: "II", title: "The Journal", text: "Reflections and journal prompts, before they become essays.", href: "/notes" },
  { mark: "III", title: "Rituals", text: "Small practices for mornings, evenings and seasons.", href: `/read/${featuredRitual.slug}` },
  { mark: "IV", title: "Community", text: "Questions to live with, in good company.", href: "/community" },
  { mark: "V", title: "The Studio", text: "Notes from the making of Altar Curated.", href: "/studio" },
];

export default function GreenhousePage() {
  return (
    <div className="shell page leaf-sheet">
      <PageIntro kicker="The Greenhouse · Discover" title="An ever-growing" em="digital garden." lede="Writing, rituals, seasonal living and company. Read, reflect, and wander somewhere new." note="a garden, pressed between pages">
        <ul className="shelves" aria-label="Greenhouse shelves">
          {greenhouseShelves.map((shelf) => <li key={shelf}>{shelf}</li>)}
        </ul>
      </PageIntro>

      <p className="kicker leaf-kicker">Turn through the shelves</p>
      <LeafRow label="Greenhouse shelves" items={pathways} />

      <section className="section split reveal" aria-labelledby="in-season">
        <figure className="plate plate-sage">
          <Sprig />
          <figcaption><span>Pl. V</span><span>In season</span></figcaption>
        </figure>
        <div className="stack">
          <p className="kicker">In season · {featuredRitual.eyebrow}</p>
          <h2 id="in-season" className="h2">{featuredRitual.title}</h2>
          <p className="lede">{featuredRitual.summary}</p>
          <p className="path"><span>Read</span><span>Reflect</span><span>Ritual</span></p>
          <Link href={`/read/${featuredRitual.slug}`} className="link">Begin the ritual</Link>
        </div>
      </section>
    </div>
  );
}
