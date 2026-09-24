import Link from "next/link";
import { essays } from "@/lib/content";

const rooms = [
  { number: "01", title: "The Shop", text: "Objects chosen with intention.", href: "/shop" },
  { number: "02", title: "The Greenhouse", text: "Ideas, rituals, and a place to gather.", href: "/greenhouse" },
  { number: "03", title: "The Apothecary", text: "Objects, their stories, and their uses.", href: "/apothecary" },
  { number: "04", title: "The Library", text: "Writing for the feeling heart.", href: "/read" },
];

export default function HomePage() {
  return (
    <>
      <section className="minimal-hero page-shell">
        <div className="minimal-seal" aria-hidden="true"><span>A</span><span>C</span></div>
        <p className="minimal-kicker">Altar Curated · a world by Mehak Joshi</p>
        <h1>The heart that keeps <em>on breaking.</em></h1>
        <p className="minimal-hero-copy">An alchemical revision of the heart. A home for writing, reflection, ritual and objects with meaning.</p>
        <Link className="minimal-pill" href="#explore">Explore Altar <span aria-hidden="true">↗</span></Link>
        <span className="minimal-hero-bottom">A place to feel everything.</span>
      </section>

      <section id="explore" className="minimal-section page-shell">
        <div className="minimal-section-heading"><span>01 / Explore the world</span><p>There is room for every way of arriving.</p></div>
        <div className="minimal-room-list">
          {rooms.map((room) => <Link className="minimal-room" href={room.href} key={room.number}>
            <span>{room.number}</span><div><h2>{room.title}</h2><p>{room.text}</p></div><b aria-hidden="true">↗</b>
          </Link>)}
        </div>
      </section>

      <section className="minimal-feature">
        <div className="page-shell minimal-feature-inner">
          <div className="minimal-book" aria-label="Typographic preview of the Reflections in Bloom journal">
            <span>ALTAR CURATED</span><strong>Reflections<br /><em>in Bloom</em></strong><small>a journal for becoming</small>
          </div>
          <div className="minimal-feature-copy">
            <p className="minimal-kicker">02 / The Conservatory</p>
            <h2>Reflections <em>in Bloom</em></h2>
            <p>The first offering. A journal imagined as a meeting place with the self, and a beginning for the world around it.</p>
            <Link className="minimal-underline" href="/shop/reflections-in-bloom">Meet the journal <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="minimal-section page-shell minimal-writing">
        <div className="minimal-section-heading"><span>03 / The Library</span><p>Some things ask to be read slowly.</p></div>
        <h2>Words to <em>return to.</em></h2>
        <div className="minimal-room-list">
          {essays.slice(0, 3).map((essay) => <Link className="minimal-room minimal-essay" href={`/read/${essay.slug}`} key={essay.slug}>
            <span>{essay.motif}</span><div><h3>{essay.title}</h3><p>{essay.summary}</p></div><b aria-hidden="true">↗</b>
          </Link>)}
        </div>
        <Link className="minimal-underline" href="/read">Enter the Library <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="minimal-invitation">
        <div className="page-shell">
          <p className="minimal-kicker">04 / The Greenhouse</p>
          <h2>The slog is better <em>with company.</em></h2>
          <p>Questions to live with. A place to read, reflect and eventually speak back.</p>
          <Link className="minimal-pill" href="/greenhouse">Enter the Greenhouse <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </>
  );
}
