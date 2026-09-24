import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reflections in Bloom",
  description: "Meet the first Altar Curated journal.",
};

export default function JournalPage() {
  return (
    <div className="journal-page">
      <section className="journal-product-hero page-shell">
        <div className="journal-product-art">
          <div className="journal-cover journal-cover-large">
            <span>ALTAR CURATED</span>
            <strong>Reflections<br /><em>in Bloom</em></strong>
            <small>a journal for becoming</small>
          </div>
        </div>
        <div className="journal-product-copy">
          <Link className="back-link" href="/shop">← Back to the shop</Link>
          <p className="eyebrow">The first offering / A journal</p>
          <h1>Reflections <em>in Bloom</em></h1>
          <p className="article-deck">A place to return to yourself, one page at a time.</p>
          <div className="product-detail-rule" />
          <p>This page is ready for Mehak’s story, journal spreads, materials, dimensions, guidance and final photography.</p>
          <div className="availability-box">
            <span className="availability-dot" />
            <span>Preview only · Pricing and availability to follow</span>
          </div>
          <button className="button button-disabled" type="button" disabled>Ordering opens after launch details are confirmed</button>
          <p className="product-fineprint">COD checkout and delivery details are not active in this design preview.</p>
        </div>
      </section>
      <section className="journal-story">
        <div className="page-shell journal-story-inner">
          <p className="eyebrow">The story behind the object</p>
          <h2>Some things need <em>a page to land on.</em></h2>
          <p>The final editorial story will connect the journal to Altar’s writing and practices without turning reflection into a promise of transformation.</p>
        </div>
      </section>
      <section className="section page-shell journal-details">
        <div>
          <p className="eyebrow">Inside / To be revealed</p>
          <h2>Made to be <em>lived with.</em></h2>
        </div>
        <div className="detail-list">
          <div><span>01</span><strong>The philosophy</strong><p>Why this journal exists and the thought behind it.</p></div>
          <div><span>02</span><strong>The pages</strong><p>Selected spreads and a clear look at what is inside.</p></div>
          <div><span>03</span><strong>The practice</strong><p>Ways to use the journal at your own pace.</p></div>
        </div>
      </section>
      <section className="page-shell journal-end">
        <span aria-hidden="true">✦</span>
        <h2>Begin with the writing.</h2>
        <Link href="/read" className="text-link">Explore the archive <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
