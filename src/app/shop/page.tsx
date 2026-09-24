import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Shop",
  description: "A small collection of objects for reflection and ritual.",
};

const futureCategories = [
  { number: "02", name: "Ritual objects", note: "An intentional collection, still being chosen." },
  { number: "03", name: "Decks & cards", note: "Small invitations to pause and ask." },
  { number: "04", name: "Digital products", note: "Guides and prompts, still being chosen." },
];

export default function ShopPage() {
  return (
    <div className="page-shell interior-page shop-page">
      <div className="page-intro">
        <p className="eyebrow">The shop / Things to keep close</p>
        <h1>Objects with <em>a little soul.</em></h1>
        <p>Curated companions for reflection, ritual and the ordinary sacred. The collection is taking shape.</p>
      </div>
      <div className="shop-feature-grid">
        <div className="product-art">
          <div className="product-art-ring" />
          <div className="product-book">
            <span>ALTAR CURATED</span>
            <strong>Reflections<br /><em>in Bloom</em></strong>
            <small>a journal for becoming</small>
          </div>
          <span className="product-art-number">01 / THE FIRST OFFERING</span>
        </div>
        <div className="shop-feature-copy">
          <p className="eyebrow">01 / The first offering</p>
          <h2>Reflections <em>in Bloom</em></h2>
          <p>A journal imagined as a meeting place with the self: for reflection, tenderness and all the versions of you that are still unfolding.</p>
          <p className="product-fineprint">Product images, specifications, pricing and availability will be confirmed before orders open.</p>
          <Link className="button button-light" href="/shop/reflections-in-bloom">Discover the journal <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="section-heading coming-heading">
        <div>
          <p className="eyebrow">What may find a home here</p>
          <h2>More to <em>uncover.</em></h2>
        </div>
      </div>
      <div className="future-grid">
        {futureCategories.map((category) => (
          <div key={category.number} className="future-card">
            <span>{category.number} / COMING INTO FOCUS</span>
            <div className="future-card-art" aria-hidden="true">✧</div>
            <h3>{category.name}</h3>
            <p>{category.note}</p>
          </div>
        ))}
      </div>
      <p className="source-note">This is a design preview. No product is available for purchase yet, and the future categories are placeholders.</p>
      <div className="page-outro"><p className="eyebrow">A world within the shop</p><h2>Objects with <em>meaning.</em></h2><Link href="/apothecary" className="text-link">Explore the apothecary <span aria-hidden="true">↗</span></Link></div>
    </div>
  );
}
