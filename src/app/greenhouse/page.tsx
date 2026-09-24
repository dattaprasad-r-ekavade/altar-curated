import type { Metadata } from "next";
import Link from "next/link";
import { essays } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Greenhouse",
  description: "The editorial and discovery world of Altar Curated.",
};

const pathways = [
  { number: "01", title: "The Library", text: "Essays on devotion, desire, grief and becoming.", href: "/read" },
  { number: "02", title: "Journal", text: "Short notes and unfinished thoughts.", href: "/notes" },
  { number: "03", title: "The Gathering", text: "Questions and conversations to grow into.", href: "/community" },
  { number: "04", title: "The Apothecary", text: "A bridge from reading into ritual.", href: "/apothecary" },
  { number: "05", title: "The Studio", text: "Notes from the making of Altar Curated.", href: "/studio" },
];

export default function GreenhousePage() {
  return <div className="page-shell interior-page greenhouse-page">
    <div className="page-intro"><p className="eyebrow">The Greenhouse / Discover</p><h1>Come in. <em>Stay curious.</em></h1><p>An ever-growing space for writing, reflection, ritual and company.</p></div>
    <div className="minimal-room-list">{pathways.map((item) => <Link href={item.href} className="minimal-room" key={item.number}><span>{item.number}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><b aria-hidden="true">↗</b></Link>)}</div>
    <div className="minimal-greenhouse-feature"><p className="eyebrow">From the Library</p><h2>{essays[0].title}</h2><p>{essays[0].summary}</p><Link href={`/read/${essays[0].slug}`} className="minimal-underline">Read the reflection ↗</Link></div>
  </div>;
}
