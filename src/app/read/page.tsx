import type { Metadata } from "next";
import { LeafRow } from "@/components/leaf-row";
import { PageIntro } from "@/components/page-intro";
import { essays } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Library",
  description: "Writing, essays and the archive of Altar Curated.",
};

export default function LibraryPage() {
  return (
    <div className="shell page leaf-sheet">
      <PageIntro kicker="The Library · Writing, essays, archive" title="Words for the" em="feeling heart." lede="Essays and rituals from the unfinished work of being alive." note="pages kept, in no particular order" />
      <p className="kicker leaf-kicker">From the shelves</p>
      <LeafRow
        label="Library"
        items={essays.map((essay) => ({
          mark: essay.motif,
          title: essay.title,
          text: `${essay.eyebrow} — ${essay.summary}`,
          href: `/read/${essay.slug}`,
          aside: "Read",
        }))}
      />
      <section className="section stack-sm" aria-label="Original publication">
        <p className="kicker">The original publication</p>
        <p className="lede">The complete writing currently lives on Mehak&apos;s Substack. These pages are previews until republication choices are approved.</p>
        <a className="link" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Read on Substack</a>
      </section>
    </div>
  );
}
