import type { Metadata } from "next";
import Link from "next/link";
import { communityPrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community",
  description: "A place for reflection, questions and company.",
};

export default function CommunityPage() {
  return (
    <div className="page-shell interior-page community-page">
      <div className="page-intro community-intro">
        <p className="eyebrow">A gathering / Not a performance</p>
        <h1>We make room <em>for each other.</em></h1>
        <p>A space for the questions we live with, the things we are learning, and the comfort of not being the only one.</p>
      </div>
      <div className="community-rule"><span>✦</span></div>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Start somewhere</p>
          <h2>A few open <em>questions.</em></h2>
        </div>
        <span className="small-label">Discussion preview / 03 prompts</span>
      </div>
      <div className="prompt-grid">
        {communityPrompts.map((prompt) => (
          <div className="prompt-card" key={prompt.number}>
            <div className="prompt-top"><span>{prompt.label}</span><span>{prompt.number}</span></div>
            <h3>{prompt.title}</h3>
            <p>{prompt.description}</p>
            <span className="prompt-status">Conversation opens soon ↗</span>
          </div>
        ))}
      </div>
      <div className="community-bottom">
        <div className="community-bottom-icon" aria-hidden="true">✧</div>
        <div>
          <p className="eyebrow">The doors are being prepared</p>
          <h2>Pull up a chair.</h2>
          <p>Member accounts, replies and moderation are planned for the next build. Until then, Mehak’s publication is the place to keep reading and connecting.</p>
          <a className="button button-light" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Visit the publication <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <p className="source-note">The prompts above are prototype copy; Mehak will approve the final community language.</p>
      <Link href="/read" className="back-link">← Return to the writing</Link>
    </div>
  );
}
