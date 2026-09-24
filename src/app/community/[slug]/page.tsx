import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { communityPrompts } from "@/lib/content";
import { PrototypeBanner } from "@/components/prototype-banner";

export function generateStaticParams() {
  return communityPrompts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const prompt = communityPrompts.find((item) => item.slug === slug);
  return { title: prompt?.title ?? "Community" };
}

export default async function ThreadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prompt = communityPrompts.find((item) => item.slug === slug);
  if (!prompt) notFound();

  return (
    <div className="page-shell interior-page thread-page">
      <Link href="/community" className="back-link">← Back to the gathering</Link>
      <div className="thread-heading">
        <p className="eyebrow">{prompt.label} / An open question</p>
        <h1>{prompt.title}</h1>
        <p>{prompt.description}</p>
      </div>
      <div className="thread-column">
        <div className="thread-introduction">
          <div className="thread-avatar" aria-hidden="true">AC</div>
          <div>
            <span className="thread-byline">A prompt from Altar Curated · preview</span>
            <p>There is no right way into this conversation. Begin with a memory, a question, or a sentence you have been carrying.</p>
          </div>
        </div>
        <div className="thread-replies">
          <span className="eyebrow">The conversation / To come</span>
          <p>Member replies will live here once accounts and moderation are connected.</p>
        </div>
        <PrototypeBanner>Discussion is not connected yet. This page demonstrates the member reading and reply layout.</PrototypeBanner>
        <div className="reply-preview">
          <label htmlFor="reply">Add your reflection</label>
          <textarea id="reply" rows={5} placeholder="A thought, however unfinished…" disabled />
          <div><span>Members will be able to reply after sign-in.</span><button type="button" className="button button-disabled" disabled>Post reflection</button></div>
        </div>
      </div>
    </div>
  );
}
