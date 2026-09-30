import type { Metadata } from "next";
import Link from "next/link";
import { IndexList } from "@/components/index-list";
import { JournalCover } from "@/components/journal-cover";
import { Sprig } from "@/components/marks";
import { PrototypeBanner } from "@/components/prototype-banner";
import { featuredRitual, notes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reflections in Bloom",
  description: "Reflections in Bloom, the first Altar Curated journal. Where you begin reflecting.",
};

const inside = [
  { mark: "I", title: "What it is", text: "A guided journal for reflection, tenderness and becoming." },
  { mark: "II", title: "Why it exists", text: "Some things need a page to land on before they can be understood." },
  { mark: "III", title: "How to use it", text: "At your own pace: one page in the morning, one at night, or none for a while." },
  { mark: "IV", title: "Who it is for", text: "Anyone in the middle of something, with no finished version of themselves required." },
];

const details = [
  ["Format", "To be confirmed"],
  ["Pages", "To be confirmed"],
  ["Paper", "To be confirmed"],
  ["Delivery", "Across India · Cash on delivery"],
];

export default function ReflectionsInBloomPage() {
  return (
    <>
      <section className="shell page split split-top">
        <div className="lavender cover-stage"><JournalCover size="lg" /></div>
        <div className="stack">
          <Link className="back" href="/shop">← The Shop</Link>
          <p className="kicker">The Conservatory · Journals</p>
          <h1 className="display">Reflections <em>in Bloom</em></h1>
          <p className="lede">A place to return to yourself, one page at a time.</p>
          <p className="hand hand-note">begin on any page.</p>
          <dl className="facts">
            {details.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}
          </dl>
          <button className="btn" type="button" disabled>Add to cart · Opens at launch</button>
          <PrototypeBanner>Photography, spreads, price and specifications will be added once confirmed.</PrototypeBanner>
        </div>
      </section>

      <section className="dark reveal" aria-labelledby="philosophy">
        <div className="shell narrow section center stack center-items">
          <Sprig />
          <p className="kicker">Its philosophy</p>
          <h2 id="philosophy" className="statement">Reflection is not a promise of transformation. It is a way of <em>keeping company with yourself.</em></h2>
        </div>
      </section>

      <section className="shell section reveal" aria-labelledby="inside">
        <div className="head">
          <div className="stack-sm">
            <p className="kicker">What is inside</p>
            <h2 id="inside" className="h2">Made to be <em>lived with.</em></h2>
          </div>
        </div>
        <IndexList items={inside} />
      </section>

      <section className="shell reveal" aria-label="Selected spreads">
        <div className="split">
          <figure className="plate"><Sprig /><figcaption><span>Spread I</span><span>Morning pages</span></figcaption></figure>
          <figure className="plate plate-lavender"><Sprig /><figcaption><span>Spread II</span><span>Evening pages</span></figcaption></figure>
        </div>
      </section>

      <section className="shell section reveal" aria-labelledby="begin">
        <div className="split split-top">
          <div className="stack">
            <p className="kicker">A journal prompt to begin</p>
            <h2 id="begin" className="h2"><em>{notes[2].text}</em></h2>
          </div>
          <div className="stack">
            <p className="kicker">Related in the estate</p>
            <IndexList compact items={[
              { mark: "Ritual", title: featuredRitual.title, href: `/read/${featuredRitual.slug}` },
              { mark: "Room", title: "The Apothecary", href: "/apothecary" },
              { mark: "Read", title: "The Library", href: "/read" },
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
