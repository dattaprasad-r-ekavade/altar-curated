import Link from "next/link";
import { IndexList } from "@/components/index-list";
import { JournalCover } from "@/components/journal-cover";
import { AltarArch, Sprig } from "@/components/marks";
import { apothecaryShelves, communityPrompts, featuredRitual, greenhouseShelves, library } from "@/lib/content";

const rooms = [
  { mark: "I", title: "The Greenhouse", where: "Where you discover.", href: "/greenhouse" },
  { mark: "II", title: "The Library", where: "Where you read slowly.", href: "/read" },
  { mark: "III", title: "The Conservatory", where: "Where you begin reflecting.", href: "/shop/reflections-in-bloom" },
  { mark: "IV", title: "The Journal", where: "Where you stay connected.", href: "/notes" },
  { mark: "V", title: "The Apothecary", where: "Where you ritualise.", href: "/apothecary" },
  { mark: "VI", title: "The Studio", where: "Where the making happens.", href: "/studio", soon: true },
  { mark: "VII", title: "The Observatory", where: "Where mysteries are kept.", href: "/observatory", soon: true },
  { mark: "VIII", title: "The Shop", where: "Where you gather what you need.", href: "/shop" },
];

export default function HomePage() {
  return (
    <>
      <section className="threshold" aria-labelledby="threshold-title">
        <div className="threshold-inner">
          <AltarArch />
          <p className="kicker">Altar Curated · by Mehak Joshi</p>
          <h1 id="threshold-title">A world you <em>can enter.</em></h1>
          <p className="lede">A digital botanical estate for writing, ritual and objects with meaning.</p>
          <div className="actions">
            <Link className="btn" href="#estate">Explore Altar</Link>
            <Link className="link" href="/greenhouse">Enter the Greenhouse</Link>
          </div>
          <p className="marginalia">the heart that keeps on breaking…</p>
        </div>
      </section>

      <section className="section shell center reveal" aria-label="Enter Altar">
        <div className="stack center-items">
          <p className="kicker">Enter Altar</p>
          <p className="statement">Part publication, part apothecary, part personal library. A quiet place where words, rituals and objects find each other.</p>
        </div>
      </section>

      <section id="estate" className="section shell reveal" aria-labelledby="estate-title">
        <div className="head">
          <div className="stack-sm">
            <p className="kicker">Explore the world</p>
            <h2 id="estate-title" className="h2">The estate</h2>
          </div>
          <p className="marginalia">Every room is a way in. Some are still being furnished.</p>
        </div>
        <div className="estate">
          {rooms.slice(0, 4).map((room) => <Room key={room.mark} {...room} />)}
          <Link href="/about" className="room room-altar">
            <AltarArch />
            <h3>The Altar</h3>
            <p>You are here.</p>
          </Link>
          {rooms.slice(4).map((room) => <Room key={room.mark} {...room} />)}
        </div>
      </section>

      <section className="lavender reveal" aria-labelledby="bloom-title">
        <div className="shell split section">
          <div className="cover-stage"><JournalCover size="lg" /></div>
          <div className="stack">
            <p className="kicker">The Conservatory · The first offering</p>
            <h2 id="bloom-title" className="display">Reflections <em>in Bloom</em></h2>
            <p className="lede">A journal imagined as a meeting place with the self, for all the versions of you still unfolding.</p>
            <div className="actions">
              <Link className="btn btn-ink" href="/shop/reflections-in-bloom">Meet the journal</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell reveal" aria-labelledby="greenhouse-title">
        <div className="split">
          <div className="stack">
            <p className="kicker">The Greenhouse · {featuredRitual.eyebrow.split(" / ")[0]}</p>
            <h2 id="greenhouse-title" className="h2">{featuredRitual.title}</h2>
            <p className="lede">{featuredRitual.summary}</p>
            <ul className="shelves" aria-label="Greenhouse shelves">
              {greenhouseShelves.map((shelf) => <li key={shelf}>{shelf}</li>)}
            </ul>
            <Link className="link" href={`/read/${featuredRitual.slug}`}>Read the ritual</Link>
          </div>
          <figure className="plate plate-sage">
            <Sprig />
            <figcaption><span>Pl. V</span><span>An evening ritual</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section deep reveal" aria-labelledby="apothecary-title">
        <div className="shell stack">
          <div className="head">
            <div className="stack-sm">
              <p className="kicker">The Apothecary</p>
              <h2 id="apothecary-title" className="h2">Objects that hold <em>a practice.</em></h2>
            </div>
            <p className="path" aria-label="Shop, learn, ritual"><span>Shop</span><span>Learn</span><span>Ritual</span></p>
          </div>
          <div className="columns">
            {apothecaryShelves.map((shelf, index) => (
              <div key={shelf.name}>
                <span className="index-mark">{["I", "II", "III", "IV", "V"][index]}</span>
                <h3>{shelf.name}</h3>
                <p>{shelf.note}</p>
              </div>
            ))}
          </div>
          <Link className="link" href="/apothecary">Enter the Apothecary</Link>
        </div>
      </section>

      <section className="section shell reveal" aria-labelledby="library-title">
        <div className="stack">
          <div className="head">
            <div className="stack-sm">
              <p className="kicker">The Library · Recent writing</p>
              <h2 id="library-title" className="h2">Words to <em>return to.</em></h2>
            </div>
            <Link className="link" href="/read">All writing</Link>
          </div>
          <IndexList items={library.slice(0, 3).map((essay) => ({ mark: essay.motif, title: essay.title, text: essay.summary, href: `/read/${essay.slug}`, aside: "Read" }))} />
        </div>
      </section>

      <section className="section shell rule reveal" aria-labelledby="prompt-title">
        <div className="prompt">
          <p className="kicker" id="prompt-title">A journal prompt to sit with</p>
          <blockquote>{communityPrompts[2].title}</blockquote>
          <Link className="link" href={`/community/${communityPrompts[2].slug}`}>Answer in community</Link>
        </div>
      </section>
    </>
  );
}

function Room({ mark, title, where, href, soon }: { mark: string; title: string; where: string; href: string; soon?: boolean }) {
  return (
    <Link href={href} className="room">
      <span className="room-mark">
        <span>{mark}</span>
        <span className={`room-status${soon ? " soon" : ""}`}>{soon ? "Unfurling" : "Open"}</span>
      </span>
      <div className="stack-sm">
        <h3>{title}</h3>
        <p>{where}</p>
      </div>
    </Link>
  );
}
