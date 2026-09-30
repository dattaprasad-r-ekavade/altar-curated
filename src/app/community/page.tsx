import type { Metadata } from "next";
import { LeafRow } from "@/components/leaf-row";
import { PageIntro } from "@/components/page-intro";
import { communityPrompts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community",
  description: "Journal prompts and conversations in the Altar Curated Greenhouse.",
};

export default function CommunityPage() {
  return (
    <div className="shell page">
      <PageIntro kicker="The Greenhouse · Community" title="The slog is better" em="with company." lede="Journal prompts to live with, and a place to answer them alongside others." />
      <div className="leaf-row-notes">
        <LeafRow
          label="Journal prompts"
          items={communityPrompts.map((prompt) => ({
            mark: prompt.number,
            title: prompt.label,
            text: prompt.title,
            href: `/community/${prompt.slug}`,
            aside: "Reflect",
          }))}
        />
      </div>
      <section className="section stack-sm" aria-label="Membership">
        <p className="kicker">The doors are being prepared</p>
        <p className="lede">Member accounts, replies and gentle moderation arrive in the next build. Until then, the conversation continues on Substack.</p>
        <a className="link" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Visit the publication</a>
      </section>
    </div>
  );
}
