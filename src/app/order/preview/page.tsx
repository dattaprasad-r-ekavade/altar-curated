import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Example Order", robots: { index: false, follow: false } };

export default function OrderPreviewPage() {
  return <div className="page-shell interior-page narrow-page order-page">
    <Link href="/account/orders" className="back-link">← Back to orders</Link>
    <div className="page-intro"><p className="eyebrow">Example order / AC-0001</p><h1>On its way <em>to you.</em></h1><p>A simple place to follow an order after it has been placed.</p></div>
    <PrototypeBanner>This is an example only. No order was placed and no personal details are stored.</PrototypeBanner>
    <div className="order-preview-grid">
      <div className="order-timeline">
        <p className="eyebrow">Order journey / Sample state</p>
        {["Placed", "Confirmed", "Packed", "Dispatched", "Delivered"].map((step, index) => <div className={index === 0 ? "timeline-step current" : "timeline-step"} key={step}><i /><span>{step}</span><small>{index === 0 ? "Example current status" : "Pending"}</small></div>)}
      </div>
      <div className="order-summary"><p className="eyebrow">In this example</p><h2>Reflections in Bloom</h2><p>One journal · Cash on delivery</p><hr /><div><span>Payment</span><strong>Pending collection</strong></div><div><span>Fulfillment</span><strong>Awaiting confirmation</strong></div><p className="source-note">Totals and delivery details appear only on a real authenticated order.</p></div>
    </div>
  </div>;
}
