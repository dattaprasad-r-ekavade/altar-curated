import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sprig } from "@/components/marks";
import { PrototypeBanner } from "@/components/prototype-banner";
import { communityPrompts } from "@/lib/content";

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
    <div className="shell page leaf-sheet">
      <Link href="/community" className="back">← Community</Link>
      <header className="article-head">
        <p className="kicker">{prompt.label} · A journal prompt</p>
        <h1><em>{prompt.title}</em></h1>
        <p className="lede">{prompt.description}</p>
        <Sprig />
      </header>
      <div className="prose stack">
        <p>There is no right way into this conversation. Begin with a memory, a question, or a sentence you have been carrying.</p>
        <div className="rule" />
        <p className="marginalia">Replies from members will gather here.</p>
        <form className="form" aria-label="Add your reflection">
          <label className="field">Your reflection<textarea rows={4} placeholder="A thought, however unfinished…" disabled /></label>
          <div className="form-foot">
            <PrototypeBanner>Discussion is not connected yet. Members will reply after sign-in.</PrototypeBanner>
            <button type="button" className="btn" disabled>Share</button>
          </div>
        </form>
      </div>
    </div>
  );
}
