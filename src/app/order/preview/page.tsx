import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Example Order", robots: { index: false, follow: false } };

const steps = ["Placed", "Confirmed", "Packed", "Dispatched", "Delivered"];

export default function OrderPreviewPage() {
  return (
    <div className="shell page">
      <Link href="/account/orders" className="back">← Orders</Link>
      <PageIntro kicker="Example order · AC-0001" title="On its way" em="to you." lede="A simple place to follow an order after it has been placed.">
        <PrototypeBanner>No order was placed and no personal details are stored.</PrototypeBanner>
      </PageIntro>
      <div className="split split-top">
        <ol className="timeline" aria-label="Order journey">
          {steps.map((step, index) => (
            <li key={step} aria-current={index === 0 ? "step" : undefined}>
              {step}<small>{index === 0 ? "Current" : "Pending"}</small>
            </li>
          ))}
        </ol>
        <div className="summary stack-sm">
          <p className="kicker">In this order</p>
          <p className="h3">Reflections in Bloom</p>
          <dl className="facts">
            <div><dt>Payment</dt><dd>Cash on delivery · pending</dd></div>
            <div><dt>Fulfilment</dt><dd>Awaiting confirmation</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}
