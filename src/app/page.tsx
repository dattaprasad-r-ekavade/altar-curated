import Link from "next/link";
import { EssayCard } from "@/components/essay-card";
import { essays } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-star">✦</span> The heart that keeps on breaking</p>
          <h1>To feel deeply is <em>to be alive.</em></h1>
          <p className="hero-description">
            A place for devotion, longing, change and the quiet art of beginning again.
            Come as you are. Stay a while.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/read">
              Enter the writing <span aria-hidden="true">↗</span>
            </Link>
            <Link className="underlined-link" href="/about">Meet Altar Curated</Link>
          </div>
          <p className="hero-footnote">writing · reflection · ritual · community</p>
        </div>
        <div className="hero-art" aria-label="Abstract oval altar illustration">
          <div className="art-caption art-caption-top">an offering to the unfinished self</div>
          <div className="art-arch">
            <div className="art-arch-inner">
              <div className="art-halo" />
              <div className="art-heart">♡</div>
              <p>the heart<br />is an altar</p>
            </div>
          </div>
          <div className="art-caption art-caption-bottom">est. in the act of becoming <span>✧</span></div>
        </div>
      </section>

      <div className="marquee-line" aria-hidden="true">
        <span>DEVOTION</span><i>✦</i><span>DESIRE</span><i>✦</i><span>THE ORDINARY DIVINE</span><i>✦</i><span>BECOMING</span>
      </div>

      <section className="section page-shell writing-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / From the archive</p>
            <h2>For all that <em>moves through us.</em></h2>
          </div>
          <Link className="text-link" href="/read">View the archive <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="featured-essays">
          <EssayCard essay={essays[0]} large />
          <div className="essay-stack">
            <EssayCard essay={essays[1]} />
            <EssayCard essay={essays[2]} />
          </div>
        </div>
        <p className="source-note">Editorial previews based on the client brief. Full essays will appear here after Mehak approves the selections and text.</p>
      </section>

      <section className="manifesto-section">
        <div className="page-shell manifesto-grid">
          <div className="manifesto-seal" aria-hidden="true"><span>✦</span><span>A C</span><span>✦</span></div>
          <div>
            <p className="eyebrow">A small declaration</p>
            <h2>There is nothing wrong with <em>wanting more</em> from being alive.</h2>
            <p>
              Altar Curated makes room for the tender, difficult, unpolished parts of becoming.
              Through writing, shared reflection and objects chosen with intention.
            </p>
            <Link className="text-link" href="/about">The story behind Altar <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section page-shell two-worlds">
        <div className="world-panel community-panel">
          <p className="eyebrow">02 / In good company</p>
          <div className="world-art world-art-community" aria-hidden="true"><span>◌</span><span>✶</span></div>
          <h2>The slog is better <em>together.</em></h2>
          <p>A gathering place for questions, small discoveries and honest conversations.</p>
          <Link className="button button-outline" href="/community">Enter the community <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="world-panel shop-panel">
          <p className="eyebrow">03 / Objects with intention</p>
          <div className="world-art world-art-shop" aria-hidden="true"><div className="mini-book">R<br />B</div></div>
          <h2>Objects to live <em>alongside.</em></h2>
          <p>A quiet collection for reflection, ritual and the everyday sacred.</p>
          <Link className="button button-dark" href="/shop">Explore the shop <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="section page-shell journal-feature">
        <div className="journal-visual" aria-hidden="true">
          <div className="journal-cover">
            <span>ALTAR CURATED</span>
            <strong>Reflections<br /><em>in Bloom</em></strong>
            <small>a journal for becoming</small>
          </div>
          <span className="journal-side-note">a place to meet yourself on the page</span>
        </div>
        <div className="journal-copy">
          <p className="eyebrow">The first offering / Reflections in Bloom</p>
          <h2>What if the page could <em>hold it all?</em></h2>
          <p>
            A dedicated home for Altar Curated’s launch journal. The final story, spreads,
            details and ordering information will be added with the client’s approved assets.
          </p>
          <Link className="text-link" href="/shop/reflections-in-bloom">Meet the journal <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
