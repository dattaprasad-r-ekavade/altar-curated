import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "The Apothecary" };
export default function ApothecaryPage() {
  return <div className="page-shell interior-page apothecary-page">
    <div className="page-intro"><p className="eyebrow">The apothecary / Objects and their stories</p><h1>A practice <em>you can hold.</em></h1><p>Objects find meaning in the ways we live with them. This space will pair each carefully chosen item with context, care and a small ritual.</p></div>
    <div className="apothecary-display"><div className="apothecary-object" aria-hidden="true"><span>✧</span></div><div><p className="eyebrow">Shop → Learn → Ritual</p><h2>More than <em>a shelf.</em></h2><p>The finished apothecary will connect physical pieces to writing and reflective practices, without making promises about outcomes.</p><Link href="/shop" className="button button-light">Explore the shop ↗</Link></div></div>
    <div className="section-heading coming-heading"><div><p className="eyebrow">How this world unfolds</p><h2>An object. A story. <em>A way in.</em></h2></div></div>
    <div className="apothecary-steps">{["The object", "The meaning", "The practice"].map((name, i) => <div key={name}><span>0{i+1}</span><h3>{name}</h3><p>{["Material, origin and care.","Why it belongs in this collection.","A gentle invitation to use it."][i]}</p></div>)}</div>
    <p className="source-note">Categories and products remain placeholders until Mehak curates the launch catalogue.</p>
  </div>;
}
