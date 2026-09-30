import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="shell page">
      <PageIntro kicker="Contact" title="Leave a little" em="light on." lede="For questions about the writing, the community or an order." />
      <div className="split split-top">
        <div className="stack-sm">
          <p className="kicker">For now</p>
          <p className="lede">The original publication is the point of connection until an Altar Curated address is confirmed.</p>
          <a className="link" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Visit the publication</a>
        </div>
        <form className="form" aria-label="Contact preview">
          <label className="field">Name<input placeholder="Your name" disabled /></label>
          <label className="field">Email<input type="email" placeholder="you@example.com" disabled /></label>
          <label className="field">Message<textarea rows={4} placeholder="Write a note…" disabled /></label>
          <div className="form-foot">
            <PrototypeBanner>The form is not connected.</PrototypeBanner>
            <button className="btn" type="button" disabled>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
