import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { notes } from "@/lib/content";

export const metadata: Metadata = { title: "The Journal", description: "Reflections, small rituals and journal prompts from Altar Curated." };

export default function JournalPage() {
  return (
    <div className="shell page">
      <PageIntro kicker="The Journal · Where you stay connected" title="A few things" em="left open." lede="Reflections, small rituals and journal prompts. A quieter shelf beside the Library." />
      <ul className="index">
        {notes.map((note) => (
          <li key={note.number}>
            <div className="index-row">
              <span className="index-mark">{note.number}</span>
              <span className="index-body">
                <span className="kicker">{note.theme}</span>
                <span className="statement">{note.text}</span>
              </span>
              <span className="index-aside" />
            </div>
          </li>
        ))}
      </ul>
      <p className="preview-note pad-top"><span>Preview</span> Layout notes; Mehak&apos;s approved entries will replace them.</p>
      <section className="section stack-sm" aria-label="The Library">
        <p className="kicker">When a thought needs more room</p>
        <Link href="/read" className="link">Enter the Library</Link>
      </section>
    </div>
  );
}
