import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndexList } from "@/components/index-list";
import { Sprig } from "@/components/marks";
import { essays } from "@/lib/content";

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);
  return { title: essay?.title ?? "Writing", description: essay?.summary };
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = essays.find((item) => item.slug === slug);
  if (!essay) notFound();
  const next = essays[(essays.indexOf(essay) + 1) % essays.length];

  return (
    <article className="shell page journal-entry">
      <Link href={essay.ritual ? "/greenhouse" : "/read"} className="back">← {essay.ritual ? "The Greenhouse" : "The Library"}</Link>
      <p className="hand date-line">an entry, kept in {essay.ritual ? "the Greenhouse" : "the Library"}</p>
      <header className="article-head">
        <p className="kicker">{essay.eyebrow} · by Mehak Joshi</p>
        <h1>{essay.title}</h1>
        <p className="lede">{essay.summary}</p>
        <Sprig />
      </header>

      <div className="prose margin-rule">
        <p className="dropcap">A place for the complete {essay.ritual ? "ritual" : "essay"} is being prepared. The opening, images and full text will be added once Mehak approves what should live on Altar Curated and what should remain on Substack.</p>
        <p>This preview shows the reading rhythm: space for a long thought, an intimate margin, and a pause between one feeling and the next.</p>
        <blockquote>the heart that keeps on breaking…</blockquote>
        {!essay.ritual && <p><a className="link" href="https://speckofrot.substack.com/" target="_blank" rel="noreferrer">Read in full on Substack</a></p>}
      </div>

      {essay.ritual && (
        <section className="prose stack" aria-labelledby="ritual-kit">
          <p className="kicker" id="ritual-kit">To accompany this ritual</p>
          <IndexList compact items={essay.ritual.objects.map((object, index) => ({
            mark: ["I", "II", "III"][index],
            title: object.name,
            text: object.note,
            href: object.name === "Reflections in Bloom" ? "/shop/reflections-in-bloom" : "/apothecary",
          }))} />
          <p className="kicker">A journal prompt</p>
          <p className="statement"><em>{essay.ritual.prompt}</em></p>
        </section>
      )}

      <footer className="prose rule stack-sm pad-top">
        <p className="kicker">Wander on</p>
        <IndexList compact items={[
          { mark: next.motif, title: next.title, href: `/read/${next.slug}`, aside: "Next" },
          { mark: "—", title: "Stay with the conversation", href: "/community", aside: "Community" },
        ]} />
      </footer>
    </article>
  );
}
