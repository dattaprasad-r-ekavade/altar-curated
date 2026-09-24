import type { Metadata } from "next";
import { EssayCard } from "@/components/essay-card";
import { essays } from "@/lib/content";

export const metadata: Metadata = {
  title: "Read",
  description: "An editorial archive of devotion, longing and becoming.",
};

export default function ReadPage() {
  return (
    <div className="page-shell interior-page">
      <div className="page-intro">
        <p className="eyebrow">The writing / An ongoing archive</p>
        <h1>Words for the <em>feeling heart.</em></h1>
        <p>Essays, reflections and notes from the unfinished work of being alive.</p>
      </div>
      <div className="archive-toolbar">
        <span>Selected writing</span>
        <span>01 — 04</span>
      </div>
      <div className="archive-grid">
        {essays.map((essay) => <EssayCard key={essay.slug} essay={essay} />)}
      </div>
      <div className="archive-note">
        <span aria-hidden="true">✧</span>
        <div>
          <h2>The original publication</h2>
          <p>The complete writing currently lives on Mehak’s Substack. These are layout previews until the text and republication choices are approved.</p>
          <a className="text-link" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Read on Substack <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  );
}
