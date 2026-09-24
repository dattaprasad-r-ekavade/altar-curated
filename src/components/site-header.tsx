import Link from "next/link";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/greenhouse", label: "Greenhouse" },
  { href: "/apothecary", label: "Apothecary" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Altar Curated home">
          Altar <em>Curated</em>
        </Link>
        <nav className="main-nav" aria-label="Explore Altar">
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
        <Link href="/read">Library</Link>
        <Link href="/community">Gathering</Link>
        <Link href="/search">Search</Link>
        <Link href="/account">My Altar</Link>
      </nav>
    </header>
  );
}
