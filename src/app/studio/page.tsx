import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "The Studio" };

export default function StudioPage() {
  return <div className="page-shell interior-page studio-page">
    <div className="page-intro"><p className="eyebrow">The Studio / In the making</p><h1>A little room <em>for process.</em></h1><p>A future home for Mehak&apos;s creative practice, behind-the-scenes notes and things still finding their shape.</p></div>
    <div className="minimal-room-list">
      <Link href="/about" className="minimal-room"><span>01</span><div><h2>About Altar</h2><p>The thinking and feeling behind this world.</p></div><b aria-hidden="true">↗</b></Link>
      <Link href="/read" className="minimal-room"><span>02</span><div><h2>The Library</h2><p>Start with the writing.</p></div><b aria-hidden="true">↗</b></Link>
    </div>
    <p className="source-note">The final Studio will grow with approved creative work and materials.</p>
  </div>;
}
