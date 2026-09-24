import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <div className="page-shell interior-page contact-page">
    <div className="page-intro"><p className="eyebrow">A way to reach us</p><h1>Leave a little <em>light on.</em></h1><p>For questions about writing, the community or an order, there will be a simple way to get in touch.</p></div>
    <div className="contact-grid">
      <div><p className="eyebrow">For now</p><h2>Find Mehak&apos;s writing.</h2><p>The original publication is the current point of connection until an Altar Curated contact address is confirmed.</p><a className="button button-light" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Visit the publication ↗</a><Link href="/community" className="text-link">Explore the community <span aria-hidden="true">↗</span></Link></div>
      <div className="contact-form-preview"><PrototypeBanner>The contact form is not connected. Please do not enter personal information.</PrototypeBanner><label>Name<input placeholder="Your name" disabled /></label><label>Email<input type="email" placeholder="Your email" disabled /></label><label>Message<textarea rows={6} placeholder="Write a note…" disabled /></label><button className="button button-disabled" type="button" disabled>Send a note</button></div>
    </div>
  </div>;
}
