import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "My Altar", robots: { index: false, follow: false } };

export default function AccountPage() {
  return (
    <div className="shell page">
      <PageIntro kicker="My Altar" title="Welcome back" em="to yourself." lede="Your own corner of the estate: saved writing, orders and, one day, a personal altar." />
      <div className="split split-top">
        <form className="form" aria-label="Sign in preview">
          <p className="kicker">Enter</p>
          <label className="field">Email<input type="email" placeholder="you@example.com" disabled /></label>
          <button className="btn" disabled type="button">Continue with email</button>
          <PrototypeBanner>Sign-in is a visual preview. Please do not enter personal information.</PrototypeBanner>
        </form>
        <div className="stack-sm">
          <p className="kicker">Your altar</p>
          <IndexList compact items={[
            { mark: "I", title: "Orders", href: "/account/orders" },
            { mark: "II", title: "Saved from the Greenhouse", aside: "Soon" },
            { mark: "III", title: "Digital purchases", aside: "Soon" },
            { mark: "IV", title: "Conversations", href: "/community" },
          ]} />
        </div>
      </div>
    </div>
  );
}
