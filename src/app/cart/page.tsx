import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cart Preview" };

export default function CartPage() {
  return (
    <div className="page-shell interior-page narrow-page">
      <div className="page-intro">
        <p className="eyebrow">The cart / Design preview</p>
        <h1>A little <em>space to keep.</em></h1>
        <p>Your cart is empty. Ordering is not active while the products, delivery rules and COD flow are being prepared.</p>
      </div>
      <div className="empty-state">
        <span aria-hidden="true">♡</span>
        <h2>Nothing here yet.</h2>
        <p>Come back when the first offering is ready.</p>
        <Link href="/shop" className="button button-light">Explore the shop <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
