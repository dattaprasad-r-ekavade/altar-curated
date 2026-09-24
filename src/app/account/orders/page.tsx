import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Your Orders", robots: { index: false, follow: false } };

export default function MemberOrdersPage() {
  return <div className="page-shell interior-page narrow-page">
    <Link href="/account" className="back-link">← My Altar</Link>
    <div className="page-intro"><p className="eyebrow">My Altar / Orders</p><h1>The things you <em>keep close.</em></h1><p>Your private order history will live here when accounts and checkout are connected.</p></div>
    <PrototypeBanner>No account or real orders exist in this preview. The example below shows the planned layout only.</PrototypeBanner>
    <Link className="member-order-preview" href="/order/preview"><span>EXAMPLE ORDER · AC-0001</span><strong>Reflections in Bloom</strong><span>Status: awaiting confirmation <b>↗</b></span></Link>
  </div>;
}
