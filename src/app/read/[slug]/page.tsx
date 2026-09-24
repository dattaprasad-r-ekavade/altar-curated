import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { essays } from "@/lib/content";

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);
  return { title: essay?.title ?? "Writing", description: essay?.summary };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);
  if (!essay) notFound();

  return (
    <article className="article-page">
      <div className="article-heading page-shell">
        <Link href="/read" className="back-link">← Back to the archive</Link>
        <p className="eyebrow">{essay.eyebrow} · by Mehak Joshi</p>
        <h1>{essay.title}</h1>
        <p className="article-deck">{essay.summary}</p>
        <div className="article-rule"><span>✦</span></div>
      </div>
      <div className="article-body">
        <p className="dropcap">A place for the complete essay is being prepared. The opening, images and full text will be added here once Mehak approves what should live on Altar Curated and what should remain on Substack.</p>
        <p>This preview shows the reading rhythm: space for a long thought, an intimate margin, and a pause between one feeling and the next.</p>
        <blockquote>“The heart that keeps on breaking…”</blockquote>
        <p>For now, visit the original publication to read Mehak’s work in full.</p>
        <a className="button button-light" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Visit the original publication <span aria-hidden="true">↗</span></a>
      </div>
      <div className="article-end page-shell">
        <span>✧</span>
        <p>Stay with the conversation.</p>
        <Link className="text-link" href="/community">Enter the community <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
