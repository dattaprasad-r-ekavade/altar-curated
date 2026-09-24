import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="page-shell interior-page about-page">
      <div className="page-intro">
        <p className="eyebrow">About / Altar Curated</p>
        <h1>The self as <em>an altar.</em></h1>
        <p>A home for Mehak Joshi’s writing, a gathering for the feeling heart, and a growing collection of objects chosen with intention.</p>
      </div>
      <div className="about-grid">
        <div className="about-portrait" aria-hidden="true"><span>AC</span><small>an ongoing becoming</small></div>
        <div className="about-copy">
          <p className="eyebrow">A note from the world of Altar</p>
          <h2>For the things we <em>cannot stop feeling.</em></h2>
          <p>Altar Curated begins in writing about desire, devotion, grief and the strange ordinary work of being human. It makes a place for reflection, conversation and objects that can accompany a practice.</p>
          <p>This is temporary introduction copy. Mehak’s approved story and portrait will replace it before the site launches.</p>
          <Link className="text-link" href="/read">Read the writing <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  );
}
