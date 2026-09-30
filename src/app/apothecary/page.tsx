import type { Metadata } from "next";
import Link from "next/link";
import { Sprig } from "@/components/marks";
import { PageIntro } from "@/components/page-intro";
import { apothecaryShelves, featuredRitual } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Apothecary",
  description: "A curated ritual and sensory world: candles, crystals, ritual objects, botanical goods and sensory objects.",
};

const steps = [
  { name: "Shop", text: "The object: its material, its maker, how to care for it." },
  { name: "Learn", text: "Its meaning: why it belongs in the collection." },
  { name: "Ritual", text: "Its practice: a gentle way to bring it into your day." },
];

export default function ApothecaryPage() {
  return (
    <div className="shell page">
      <PageIntro kicker="The Apothecary · Where you ritualise" title="A practice" em="you can hold." lede="Not a shelf of things. Each object arrives with its story and a small ritual, so you know how and why it fits your practice." />

      <div className="columns columns-3">
        {steps.map((step, index) => (
          <div key={step.name}>
            <span className="index-mark">{["I", "II", "III"][index]}</span>
            <h3>{step.name}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <section className="section reveal" aria-labelledby="shelves-title">
        <div className="head">
          <div className="stack-sm">
            <p className="kicker">The shelves</p>
            <h2 id="shelves-title" className="h2">Being <em>curated.</em></h2>
          </div>
          <p className="marginalia">Objects appear here as Mehak chooses them.</p>
        </div>
        <div className="columns">
          {apothecaryShelves.map((shelf) => (
            <div key={shelf.name}>
              <span className="room-status soon kicker">Unfurling</span>
              <h3>{shelf.name}</h3>
              <p>{shelf.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="split reveal" aria-labelledby="ritual-title">
        <div className="stack">
          <p className="kicker">From the Greenhouse</p>
          <h2 id="ritual-title" className="h2">{featuredRitual.title}</h2>
          <p className="lede">A candle, a journal and a crystal, and a way to use them together.</p>
          <Link href={`/read/${featuredRitual.slug}`} className="link">Read the ritual</Link>
        </div>
        <figure className="plate plate-brown">
          <Sprig />
          <figcaption><span>Pl. II</span><span>Candle, page, stone</span></figcaption>
        </figure>
      </section>
    </div>
  );
}
