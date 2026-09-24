import Link from "next/link";

const links = [
  { href: "/read", label: "Read" },
  { href: "/notes", label: "Notes" },
  { href: "/community", label: "Community" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="top-note">
        <span>an alchemical revision of the heart</span>
        <span className="top-note-right">a world by Mehak Joshi</span>
      </div>
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Altar Curated home">
          Altar <em>Curated</em>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/search" className="utility-link">Search</Link>
          <Link href="/account" className="utility-link">My Altar</Link>
          <Link href="/cart" aria-label="Cart preview" className="cart-link">
            Cart <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        <Link href="/search">Search</Link>
        <Link href="/account">My Altar</Link>
      </nav>
    </header>
  );
}
