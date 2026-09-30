import Link from "next/link";
import { Sprig } from "@/components/marks";

const columns = [
  {
    title: "The estate",
    links: [
      { href: "/shop", label: "Shop" },
      { href: "/greenhouse", label: "Greenhouse" },
      { href: "/apothecary", label: "Apothecary" },
      { href: "/shop/reflections-in-bloom", label: "Reflections in Bloom" },
    ],
  },
  {
    title: "Read",
    links: [
      { href: "/notes", label: "Journal" },
      { href: "/read", label: "The Library" },
      { href: "/community", label: "Community" },
      { href: "/studio", label: "The Studio" },
    ],
  },
  {
    title: "Altar",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/account", label: "My Altar" },
      { href: "/search", label: "Search" },
    ],
  },
  {
    title: "Care",
    links: [
      { href: "/shipping", label: "Shipping" },
      { href: "/returns", label: "Returns" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-invite">
        <Sprig />
        <p className="kicker">The Journal</p>
        <h2>Stay close <em>to the altar.</em></h2>
        <p className="lede">Letters, reflections and new offerings, sent now and then.</p>
        <a className="btn" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">
          Subscribe on Substack
        </a>
      </div>
      <div className="shell footer-grid">
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="kicker">{column.title}</p>
            {column.links.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="shell footer-base">
        <Link className="wordmark" href="/">Altar <span>Curated</span></Link>
        <p>A world, not a catalogue.</p>
        <nav aria-label="Socials">
          <a href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Substack</a>
          <Link href="/admin">Owner desk</Link>
        </nav>
        <p>© {new Date().getFullYear()} Altar Curated · Design preview</p>
      </div>
    </footer>
  );
}
