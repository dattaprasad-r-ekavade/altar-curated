"use client";

import { useState } from "react";
import Link from "next/link";
import { essays, communityPrompts } from "@/lib/content";

const items = [
  { title: "The Greenhouse", summary: "Writing, ritual and discovery.", kind: "Space", href: "/greenhouse" },
  { title: "The Studio", summary: "The making of Altar Curated.", kind: "Space", href: "/studio" },
  ...essays.map((essay) => ({ title: essay.title, summary: essay.summary, kind: "Writing", href: `/read/${essay.slug}` })),
  ...communityPrompts.map((prompt) => ({ title: prompt.title, summary: prompt.description, kind: "Community", href: `/community/${prompt.slug}` })),
  { title: "Reflections in Bloom", summary: "The first Altar Curated journal.", kind: "Shop", href: "/shop/reflections-in-bloom" },
];

export function PrototypeSearch() {
  const [query, setQuery] = useState("");
  const filtered = items.filter(({ title, summary, kind }) =>
    `${title} ${summary} ${kind}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())
  );
  return (
    <div className="search-preview">
      <label htmlFor="site-search">Search the world</label>
      <div className="search-field"><span aria-hidden="true">⌕</span><input id="site-search" type="search" placeholder="Try devotion, love, journal…" value={query} onChange={(event) => setQuery(event.target.value)} autoComplete="off" /></div>
      <p className="small-label">{query ? `${filtered.length} matching preview entries` : "Explore all preview entries"}</p>
      <div className="search-results">
        {filtered.map((item) => (
          <Link href={item.href} className="search-result" key={item.href}>
            <span>{item.kind}</span><div><h2>{item.title}</h2><p>{item.summary}</p></div><b aria-hidden="true">↗</b>
          </Link>
        ))}
        {filtered.length === 0 && <p className="search-empty">Nothing here yet. Try another word or explore the archive.</p>}
      </div>
    </div>
  );
}
