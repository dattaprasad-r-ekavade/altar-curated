"use client";

import { useState } from "react";
import Link from "next/link";
import { essays, communityPrompts } from "@/lib/content";

const items = [
  { title: "The Greenhouse", summary: "Writing, rituals, seasonal living and discovery.", kind: "Room", href: "/greenhouse" },
  { title: "The Apothecary", summary: "Candles, crystals, ritual objects and botanical goods.", kind: "Room", href: "/apothecary" },
  { title: "The Studio", summary: "The making of Altar Curated.", kind: "Room", href: "/studio" },
  ...essays.map((essay) => ({ title: essay.title, summary: essay.summary, kind: essay.room === "Rituals" ? "Ritual" : "Library", href: `/read/${essay.slug}` })),
  ...communityPrompts.map((prompt) => ({ title: prompt.title, summary: prompt.description, kind: "Prompt", href: `/community/${prompt.slug}` })),
  { title: "Reflections in Bloom", summary: "The first Altar Curated journal.", kind: "Shop", href: "/shop/reflections-in-bloom" },
];

export function PrototypeSearch() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLocaleLowerCase();
  const filtered = items.filter(({ title, summary, kind }) => `${title} ${summary} ${kind}`.toLocaleLowerCase().includes(needle));
  return (
    <div className="search">
      <label htmlFor="site-search" className="kicker">Search the estate</label>
      <input
        id="site-search"
        type="search"
        placeholder="devotion, ritual, journal…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
      />
      <p className="kicker search-count" aria-live="polite">
        {query ? `${filtered.length} found` : `${items.length} entries`}
      </p>
      <ul className="index index-compact">
        {filtered.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="index-row">
              <span className="index-mark">{item.kind}</span>
              <span className="index-body">
                <span className="index-title">{item.title}</span>
                <span className="index-text">{item.summary}</span>
              </span>
              <span className="index-aside">Enter</span>
            </Link>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="lede">Nothing here yet. Try another word, or wander the Greenhouse.</p>}
    </div>
  );
}
