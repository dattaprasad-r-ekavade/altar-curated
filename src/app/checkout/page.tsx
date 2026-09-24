import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Checkout Preview", robots: { index: false, follow: false } };

export default function CheckoutPage() {
  return <div className="page-shell interior-page checkout-page">
    <Link href="/cart" className="back-link">← Back to cart</Link>
    <div className="page-intro"><p className="eyebrow">Checkout / Cash on delivery</p><h1>Almost <em>on its way.</em></h1><p>A calm, simple checkout that will show the complete amount before an order is placed.</p></div>
    <PrototypeBanner>Checkout is a design preview. Please do not enter personal information; no order can be placed here.</PrototypeBanner>
    <div className="checkout-grid">
      <div className="checkout-form">
        <section><p className="eyebrow">01 / Contact</p><h2>Who should we reach?</h2><div className="field-grid"><label>Email address<input type="email" placeholder="Email" disabled /></label><label>Phone number<input type="tel" placeholder="Phone" disabled /></label></div></section>
        <section><p className="eyebrow">02 / Delivery</p><h2>Where should it go?</h2><div className="field-grid"><label>Full name<input placeholder="Name" disabled /></label><label>PIN code<input placeholder="Postal code" disabled /></label><label className="full">Address<input placeholder="Street address" disabled /></label><label>City<input placeholder="City" disabled /></label><label>State<input placeholder="State" disabled /></label></div></section>
        <section><p className="eyebrow">03 / Payment</p><h2>Pay on delivery.</h2><div className="payment-option"><span>◉</span><div><strong>Cash on delivery</strong><p>Pay when your order arrives. Available locations and any COD fee will be shown here.</p></div></div></section>
        <button className="button button-disabled" disabled type="button">Place order · available after launch</button>
      </div>
      <aside className="checkout-summary"><p className="eyebrow">Your order / Preview</p><div className="checkout-item"><div className="checkout-item-art">RB</div><div><strong>Reflections in Bloom</strong><small>Journal · 1 item</small></div></div><div className="checkout-total"><span>Subtotal</span><span>To be confirmed</span></div><div className="checkout-total"><span>Shipping</span><span>Calculated by region</span></div><div className="checkout-total final"><strong>Total</strong><strong>Shown before placing</strong></div><p>Final pricing, serviceable locations, shipping terms and inventory are required before checkout goes live.</p></aside>
    </div>
  </div>;
}
