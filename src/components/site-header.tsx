"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const primary = [
  { href: "/shop", label: "Shop" },
  { href: "/greenhouse", label: "Greenhouse" },
  { href: "/apothecary", label: "Apothecary" },
  { href: "/about", label: "About" },
];

const rooms = [
  { href: "/shop/reflections-in-bloom", label: "Reflections in Bloom" },
  { href: "/read", label: "The Library" },
  { href: "/notes", label: "The Journal" },
  { href: "/community", label: "Community" },
  { href: "/studio", label: "The Studio" },
  { href: "/observatory", label: "The Observatory" },
];

const greenhouseRoutes = ["/greenhouse", "/read", "/notes", "/community", "/studio", "/observatory"];

function isActive(pathname: string, href: string) {
  if (href === "/greenhouse") return greenhouseRoutes.some((route) => pathname.startsWith(route));
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    menu.current?.removeAttribute("open");
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="header-bar">
        <nav className="nav-primary" aria-label="Primary">
          {primary.map((link) => (
            <Link href={link.href} key={link.href} aria-current={isActive(pathname, link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="wordmark" href="/" aria-label="Altar Curated, home">
          Altar <span>Curated</span>
        </Link>
        <nav className="nav-utility" aria-label="Utility">
          <Link href="/search" aria-current={pathname === "/search" ? "page" : undefined}>Search</Link>
          <Link href="/account" aria-current={pathname.startsWith("/account") ? "page" : undefined}>My Altar</Link>
          <Link href="/cart" aria-current={pathname === "/cart" ? "page" : undefined}>Cart <span className="cart-count">0</span></Link>
        </nav>
        <details className="menu" ref={menu}>
          <summary>
            <span className="menu-open">Menu</span>
            <span className="menu-close">Close</span>
          </summary>
          <div className="menu-panel">
            <nav aria-label="Explore Altar">
              {primary.map((link) => (
                <Link href={link.href} key={link.href}>{link.label}</Link>
              ))}
            </nav>
            <p className="kicker">Rooms of the estate</p>
            <nav className="menu-rooms" aria-label="Rooms">
              {rooms.map((link) => (
                <Link href={link.href} key={link.href}>{link.label}</Link>
              ))}
            </nav>
            <nav className="menu-utility" aria-label="Utility">
              <Link href="/search">Search</Link>
              <Link href="/account">My Altar</Link>
              <Link href="/cart">Cart (0)</Link>
            </nav>
            <Link className="btn" href="/greenhouse">Enter the Greenhouse</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
