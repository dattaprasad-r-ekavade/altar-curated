import type { Metadata } from "next";
import Link from "next/link";
import { Sprig } from "@/components/marks";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <div className="shell narrow page">
      <PageIntro kicker="The Cart" title="Nothing gathered" em="yet." lede="Ordering opens once products, delivery and cash on delivery are ready." />
      <div className="empty">
        <Sprig />
        <p className="marginalia">Come back when the first offering is ready.</p>
        <Link href="/shop" className="btn">Explore the Shop</Link>
      </div>
      <div className="section stack-sm">
        <p className="kicker">See the journey ahead</p>
        <Link href="/checkout" className="link">Preview checkout</Link>
      </div>
    </div>
  );
}
