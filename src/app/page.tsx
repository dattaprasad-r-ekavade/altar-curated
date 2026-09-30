import Link from "next/link";
import { JournalBook, Spread } from "@/components/journal-book";
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

const openings = [
  { id: "cover", label: "Cover" },
  { id: "enter", label: "Enter" },
  { id: "estate", label: "Estate" },
  { id: "bloom", label: "Bloom" },
  { id: "greenhouse", label: "Greenhouse" },
  { id: "apothecary", label: "Apothecary" },
  { id: "library", label: "Library" },
  { id: "journal", label: "Journal" },
];

export default function HomePage() {
  return (
    <JournalBook contents={openings}>
      <Spread id="cover" label="Cover" cover>
        <div className="threshold-inner">
          <AltarArch />
          <p className="kicker">Altar Curated · by Mehak Joshi</p>
          <h1>A world you <em>can enter.</em></h1>
          <p className="lede">A digital botanical estate for writing, ritual and objects with meaning.</p>
          <p className="hand hand-note">a journal for the feeling heart</p>
          <div className="actions">
            <a className="btn" href="#estate">Open the journal</a>
            <Link className="link" href="/greenhouse">Enter the Greenhouse</Link>
          </div>
        </div>
      </Spread>

      <Spread id="enter" label="Enter Altar">
        <div className="leaf leaf-verso">
          <p className="folio-num">I</p>
          <p className="kicker">Enter Altar</p>
          <p className="statement">Part publication, part apothecary, part personal library. A quiet place where words, rituals and objects find each other.</p>
        </div>
        <div className="leaf leaf-recto">
          <p className="folio-num">II</p>
          <Sprig className="pressed" />
          <p className="hand hand-note">the heart that keeps on breaking…</p>
          <p className="marginalia">A note left in the margin, for whoever opens this next.</p>
        </div>
      </Spread>

      <Spread id="estate" label="The estate">
        <div className="leaf leaf-verso">
          <p className="folio-num">III</p>
          <p className="kicker">Explore the world</p>
          <h2 className="h2">The estate</h2>
          <p className="lede">Every room is a way in. Some are still being furnished.</p>
          <Link href="/about" className="altar-seal">
            <AltarArch />
            <span>The Altar</span>
            <small>You are here.</small>
          </Link>
        </div>
        <div className="leaf leaf-recto">
          <p className="folio-num">IV</p>
          <p className="kicker">Contents</p>
          <ul className="toc">
            {rooms.map((room) => (
              <li key={room.mark}>
                <Link href={room.href}>
                  <span>{room.mark}</span>
                  <strong>{room.title}</strong>
                  <em>{room.where}</em>
                  <b className={room.soon ? "soon" : ""}>{room.soon ? "Unfurling" : "Open"}</b>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Spread>

      <Spread id="bloom" label="Reflections in Bloom" tone="lavender">
        <div className="leaf leaf-verso cover-stage">
          <p className="folio-num">V</p>
          <JournalCover size="lg" />
        </div>
        <div className="leaf leaf-recto">
          <p className="folio-num">VI</p>
          <p className="kicker">The Conservatory · The first offering</p>
          <h2 className="display">Reflections <em>in Bloom</em></h2>
          <p className="lede">A journal imagined as a meeting place with the self, for all the versions of you still unfolding.</p>
          <p className="hand">begin on any page. there is no wrong opening.</p>
          <Link className="btn btn-ink" href="/shop/reflections-in-bloom">Meet the journal</Link>
        </div>
      </Spread>

      <Spread id="greenhouse" label="The Greenhouse">
        <div className="leaf leaf-verso">
          <p className="folio-num">VII</p>
          <p className="kicker">The Greenhouse · {featuredRitual.eyebrow.split(" / ")[0]}</p>
          <h2 className="h2">{featuredRitual.title}</h2>
          <p className="lede">{featuredRitual.summary}</p>
          <ul className="shelves" aria-label="Greenhouse shelves">
            {greenhouseShelves.map((shelf) => <li key={shelf}>{shelf}</li>)}
          </ul>
          <Link className="link" href={`/read/${featuredRitual.slug}`}>Read the ritual</Link>
        </div>
        <div className="leaf leaf-recto">
          <p className="folio-num">VIII</p>
          <figure className="plate plate-sage">
            <Sprig />
            <figcaption><span>Pl. V</span><span>An evening ritual</span></figcaption>
          </figure>
        </div>
      </Spread>

      <Spread id="apothecary" label="The Apothecary" tone="deep">
        <div className="leaf leaf-verso">
          <p className="folio-num">IX</p>
          <p className="kicker">The Apothecary</p>
          <h2 className="h2">Objects that hold <em>a practice.</em></h2>
          <p className="path" aria-label="Shop, learn, ritual"><span>Shop</span><span>Learn</span><span>Ritual</span></p>
          <Link className="link" href="/apothecary">Enter the Apothecary</Link>
        </div>
        <div className="leaf leaf-recto">
          <p className="folio-num">X</p>
          <ul className="toc">
            {apothecaryShelves.map((shelf, index) => (
              <li key={shelf.name}>
                <div className="toc-row">
                  <span>{["I", "II", "III", "IV", "V"][index]}</span>
                  <strong>{shelf.name}</strong>
                  <em>{shelf.note}</em>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Spread>

      <Spread id="library" label="The Library">
        <div className="leaf leaf-verso">
          <p className="folio-num">XI</p>
          <p className="kicker">The Library · Recent writing</p>
          <h2 className="h2">Words to <em>return to.</em></h2>
          <p className="lede">Some pages ask to be read slowly. Keep them, like pressed flowers.</p>
          <Link className="link" href="/read">All writing</Link>
        </div>
        <div className="leaf leaf-recto">
          <p className="folio-num">XII</p>
          <ul className="toc">
            {library.slice(0, 3).map((essay) => (
              <li key={essay.slug}>
                <Link href={`/read/${essay.slug}`}>
                  <span>{essay.motif}</span>
                  <strong>{essay.title}</strong>
                  <em>{essay.summary}</em>
                  <b>Read</b>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Spread>

      <Spread id="journal" label="The Journal">
        <div className="leaf leaf-verso">
          <p className="folio-num">XIII</p>
          <p className="kicker">A page left open</p>
          <p className="hand date-line">today, whenever you arrive</p>
          <blockquote className="prompt-line">{communityPrompts[2].title}</blockquote>
          <div className="ruled" aria-hidden="true" />
          <Link className="link" href={`/community/${communityPrompts[2].slug}`}>Answer in community</Link>
        </div>
        <div className="leaf leaf-recto leaf-end">
          <p className="folio-num">XIV</p>
          <Sprig />
          <p className="kicker">The Journal</p>
          <h2 className="h2">Stay close <em>to the altar.</em></h2>
          <p className="lede">Letters, reflections and new offerings, sent now and then.</p>
          <a className="btn" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Subscribe on Substack</a>
          <nav className="end-links" aria-label="Close the journal">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/notes">The Journal</Link>
          </nav>
        </div>
      </Spread>
    </JournalBook>
  );
}
