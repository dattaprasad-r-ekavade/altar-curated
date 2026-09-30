import type { Metadata } from "next";
import Link from "next/link";
import { JournalCover } from "@/components/journal-cover";
import { PageIntro } from "@/components/page-intro";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Checkout", robots: { index: false, follow: false } };

export default function CheckoutPage() {
  return (
    <div className="shell page">
      <Link href="/cart" className="back">← Cart</Link>
      <PageIntro kicker="Checkout · Cash on delivery" title="Almost" em="on its way." lede="A calm checkout that shows the complete amount before anything is placed.">
        <PrototypeBanner>Please do not enter personal information; no order can be placed here.</PrototypeBanner>
      </PageIntro>
      <div className="checkout-grid">
        <form className="form" aria-label="Checkout preview">
          <fieldset>
            <legend>Contact</legend>
            <div className="form-grid">
              <label className="field">Email<input type="email" placeholder="you@example.com" disabled /></label>
              <label className="field">Phone<input type="tel" placeholder="+91" disabled /></label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Delivery</legend>
            <div className="form-grid">
              <label className="field">Full name<input placeholder="Name" disabled /></label>
              <label className="field">PIN code<input placeholder="000000" disabled /></label>
              <label className="field full">Address<input placeholder="House, street, area" disabled /></label>
              <label className="field">City<input placeholder="City" disabled /></label>
              <label className="field">State<input placeholder="State" disabled /></label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            <div className="choice">
              <div>
                <strong>Cash on delivery</strong>
                <p>Pay when your order arrives. Serviceable PIN codes and any COD fee will be shown here.</p>
              </div>
            </div>
          </fieldset>
          <button className="btn" disabled type="button">Place order · Opens at launch</button>
        </form>
        <aside className="summary stack-sm" aria-label="Order summary">
          <p className="kicker">Your order</p>
          <div className="line-item">
            <JournalCover size="sm" />
            <div><strong>Reflections in Bloom</strong><small>Journal · 1</small></div>
          </div>
          <dl className="facts">
            <div><dt>Subtotal</dt><dd>To be confirmed</dd></div>
            <div><dt>Shipping</dt><dd>By region</dd></div>
            <div className="total"><dt>Total</dt><dd>Shown before placing</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
