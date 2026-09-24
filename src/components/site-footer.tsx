import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="eyebrow">Stay close</p>
          <h2>For those who feel <em>everything.</em></h2>
          <p>Writing, reflections and little offerings from Altar Curated.</p>
          <a
            className="button button-light"
            href="https://speckofrot.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the publication <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-symbol" aria-hidden="true">
          <span>✦</span>
          <span>AC</span>
        </div>
      </div>
      <div className="footer-bottom">
        <Link className="footer-wordmark" href="/">ALTAR CURATED</Link>
        <div className="footer-links">
          <Link href="/read">Archive</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/search">Search</Link>
          <Link href="/community">Community</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/apothecary">Apothecary</Link>
          <Link href="/account">My Altar</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/shipping">Shipping</Link>
          <Link href="/returns">Returns</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/admin">Studio preview</Link>
        </div>
        <p>© {new Date().getFullYear()} Altar Curated · Design preview</p>
      </div>
    </footer>
  );
}
