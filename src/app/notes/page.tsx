import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/lib/content";

export const metadata: Metadata = { title: "Notes", description: "Small thoughts from the Altar Curated world." };

export default function NotesPage() {
  return (
    <div className="page-shell interior-page notes-page">
      <div className="page-intro">
        <p className="eyebrow">Notes / Things before they become essays</p>
        <h1>A few things <em>left open.</em></h1>
        <p>Small observations, questions and fragments. A quieter shelf beside the longer writing.</p>
      </div>
      <div className="editorial-tabs" aria-label="Publication sections">
        <Link href="/read">Essays</Link>
        <span aria-current="page">Notes</span>
        <Link href="/about">About the publication</Link>
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <article className="note-card" key={note.number}>
            <div className="note-card-top"><span>{note.theme}</span><span>{note.number} / 03</span></div>
            <p>{note.text}</p>
            <span className="note-mark" aria-hidden="true">✧</span>
          </article>
        ))}
      </div>
      <p className="source-note">These are prototype notes written for the layout. Mehak&apos;s approved notes will replace them.</p>
      <div className="page-outro">
        <p className="eyebrow">A longer place to stay</p>
        <h2>When a thought needs <em>more room.</em></h2>
        <Link href="/read" className="text-link">Visit the essay archive <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
