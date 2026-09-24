import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "My Altar", robots: { index: false, follow: false } };

export default function AccountPage() {
  return <div className="page-shell interior-page account-page">
    <div className="page-intro"><p className="eyebrow">My Altar / A place to return</p><h1>Welcome <em>back to yourself.</em></h1><p>One day, your conversations and orders will have a home here.</p></div>
    <div className="account-grid">
      <div className="account-form-panel">
        <p className="eyebrow">Member entrance</p><h2>Come inside.</h2>
        <PrototypeBanner>Sign-in is a visual preview. Please do not enter personal information.</PrototypeBanner>
        <div className="form-stack">
          <label htmlFor="account-email">Email address</label><input id="account-email" type="email" placeholder="your@email.com" disabled />
          <button className="button button-disabled" disabled type="button">Continue with email ↗</button>
        </div>
        <p>Member accounts will unlock discussions and private order history after authentication is added.</p>
      </div>
      <div className="account-links-panel">
        <p className="eyebrow">Your space / Preview</p>
        <Link href="/account/orders"><span>01</span><strong>Your orders</strong><span>↗</span></Link>
        <Link href="/community"><span>02</span><strong>Conversations</strong><span>↗</span></Link>
        <Link href="/read"><span>03</span><strong>Writing to return to</strong><span>↗</span></Link>
      </div>
    </div>
  </div>;
}
