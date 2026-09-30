import type { Metadata } from "next";
import Link from "next/link";
import { LeafRow } from "@/components/leaf-row";
import { PageIntro } from "@/components/page-intro";
import { notes } from "@/lib/content";

export const metadata: Metadata = { title: "The Journal", description: "Reflections, small rituals and journal prompts from Altar Curated." };

export default function JournalPage() {
  return (
    <div className="shell page leaf-sheet">
      <PageIntro kicker="The Journal · Where you stay connected" title="A few things" em="left open." lede="Reflections, small rituals and journal prompts. A quieter shelf beside the Library." note="write in the margins, if you need to" />
      <div className="leaf-row-notes">
        <LeafRow
          label="Journal notes"
          items={notes.map((note) => ({
            mark: note.number,
            title: note.theme,
            text: note.text,
          }))}
        />
      </div>
      <p className="preview-note pad-top"><span>Preview</span> Layout notes; Mehak&apos;s approved entries will replace them.</p>
      <section className="section stack-sm" aria-label="The Library">
        <p className="kicker">When a thought needs more room</p>
        <Link href="/read" className="link">Enter the Library</Link>
      </section>
    </div>
  );
}
