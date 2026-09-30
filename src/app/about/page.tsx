import type { Metadata } from "next";
import Link from "next/link";
import { Sprig } from "@/components/marks";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "About Altar", description: "Altar Curated: a digital botanical estate that happens to contain a shop." };

const lines = [
  ["The Shop", "is where you buy."],
  ["The Greenhouse", "is where you discover."],
  ["The Apothecary", "is where you ritualise."],
  ["Reflections in Bloom", "is where you begin reflecting."],
  ["The Journal", "is where you stay connected."],
  ["My Altar", "is where you build your own relationship with the world."],
];

export default function AboutPage() {
  return (
    <>
      <div className="shell page leaf-sheet">
        <PageIntro kicker="The Altar · About" title="The self as" em="an altar." lede="A home for Mehak Joshi's writing, a gathering for the feeling heart, and a small collection of objects chosen with intention." note="written in the margin of a life" />
        <div className="split split-top">
          <figure className="plate plate-brown">
            <Sprig />
            <figcaption><span>Pl. I</span><span>Portrait to come</span></figcaption>
          </figure>
          <div className="stack">
            <p className="statement">Altar Curated begins in writing about desire, devotion, grief and the strange, ordinary work of being human.</p>
            <p className="lede">It is part independent publication, part digital apothecary, part personal spiritual library. Curated, intimate and a little strange.</p>
            <p className="preview-note"><span>Preview</span> Mehak&apos;s approved story and portrait will replace this copy.</p>
            <Link className="link" href="/read">Begin with the writing</Link>
          </div>
        </div>
      </div>
      <section className="dark" aria-labelledby="world-title">
        <div className="shell narrow section stack">
          <p className="kicker" id="world-title">A world, not a catalogue</p>
          <ul className="stack-sm">
            {lines.map(([room, line]) => (
              <li key={room} className="statement">{room} <em>{line}</em></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
