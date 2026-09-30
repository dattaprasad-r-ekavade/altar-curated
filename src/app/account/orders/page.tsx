import type { Metadata } from "next";
import Link from "next/link";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Your Orders", robots: { index: false, follow: false } };

export default function MemberOrdersPage() {
  return (
    <div className="shell narrow page">
      <Link href="/account" className="back">← My Altar</Link>
      <PageIntro kicker="My Altar · Orders" title="The things you" em="keep close.">
        <PrototypeBanner>No account or real orders exist. The row below shows the planned layout.</PrototypeBanner>
      </PageIntro>
      <IndexList items={[{ mark: "I", title: "Reflections in Bloom", text: "AC-0001 · Example · awaiting confirmation", href: "/order/preview", aside: "View" }]} />
    </div>
  );
}
