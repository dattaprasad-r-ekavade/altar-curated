import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Studio — Orders" };

export default function AdminOrdersPage() {
  return <div className="admin-subpage">
    <div className="admin-subheading"><div><p className="eyebrow">Studio / Sales upkeep</p><h1>Every order, <em>clearly kept.</em></h1><p>COD collection and fulfillment will have separate statuses.</p></div><button type="button" className="button button-disabled" disabled>Export CSV</button></div>
    <div className="admin-mini-stats"><div><span>Orders placed</span><strong>—</strong></div><div><span>COD pending</span><strong>—</strong></div><div><span>COD collected</span><strong>—</strong></div></div>
    <div className="admin-tabs"><span className="active">All orders</span><span>Awaiting confirmation</span><span>In transit</span><span>Completed</span></div>
    <div className="admin-list"><Link href="/order/preview" className="admin-list-row"><span className="admin-list-number">AC-0001</span><div><strong>Example order</strong><small>Reflections in Bloom · no customer data</small></div><span className="admin-pill">COD pending</span><b>↗</b></Link></div>
    <div className="admin-moderation"><div><p className="eyebrow">A clear handoff</p><h2>Placed isn&apos;t paid.</h2><p>The eventual dashboard will track confirmed, packed, dispatched and delivered separately from cash collected. This row is sample UI only.</p></div><div className="moderation-actions"><button disabled type="button">Confirm order</button><button disabled type="button">Mark dispatched</button><button disabled type="button">Record COD received</button></div></div>
  </div>;
}
