import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Studio — Products" };

export default function AdminProductsPage() {
  return <div className="admin-subpage">
    <div className="admin-subheading"><div><p className="eyebrow">Studio / The shop</p><h1>Objects with <em>intention.</em></h1><p>Prepare the collection, its images and its stories.</p></div><button className="button button-disabled" type="button" disabled>+ Add product</button></div>
    <div className="admin-list">
      <Link href="/shop/reflections-in-bloom" className="admin-list-row"><div className="admin-product-thumbnail">RB</div><div><strong>Reflections in Bloom</strong><small>Journal · flagship page</small></div><span className="admin-pill">Preview only</span><b>↗</b></Link>
      {["Ritual objects", "Decks & cards", "Apothecary pieces"].map((name, i) => <div className="admin-list-row" key={name}><span className="admin-list-number">0{i+2}</span><div><strong>{name}</strong><small>Catalogue slot · product not selected</small></div><span className="admin-pill">To curate</span><b>—</b></div>)}
    </div>
    <div className="admin-form-preview"><p className="eyebrow">Product editor / Layout preview</p><h2>One object, fully told.</h2><div className="admin-form-grid"><label>Name<input value="Reflections in Bloom" readOnly /></label><label>Availability<input value="Not for sale" readOnly /></label><label>Price<input placeholder="To be confirmed" disabled /></label><label>Stock<input placeholder="To be confirmed" disabled /></label><label className="full">Story<textarea value="Approved product story and care details will appear here…" readOnly rows={4} /></label></div><div className="admin-form-bottom"><span>No pricing or inventory has been supplied.</span><button className="button button-disabled" type="button" disabled>Save product</button></div></div>
  </div>;
}
