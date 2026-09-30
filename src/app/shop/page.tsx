import type { Metadata } from "next";
import Link from "next/link";
import { IndexList } from "@/components/index-list";
import { JournalCover } from "@/components/journal-cover";
import { PageIntro } from "@/components/page-intro";
import { shopCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Shop",
  description: "Journals, digital products, decks, apothecary and ritual objects from Altar Curated.",
};

export default function ShopPage() {
  return (
    <div className="shell page">
      <PageIntro kicker="The Shop · Where you gather" title="Objects with" em="a little soul." lede="A small launch collection of five, each one connected to a ritual, a page or a practice." />

      <section className="split" aria-labelledby="first-offering">
        <Link href="/shop/reflections-in-bloom" className="lavender cover-stage" aria-label="Reflections in Bloom">
          <JournalCover />
        </Link>
        <div className="stack">
          <p className="kicker">I · Journals · The first offering</p>
          <h2 id="first-offering" className="display">Reflections <em>in Bloom</em></h2>
          <p className="lede">A place to return to yourself, one page at a time.</p>
          <p className="kicker">Price and availability to follow</p>
          <Link className="link" href="/shop/reflections-in-bloom">Discover the journal</Link>
        </div>
      </section>

      <section className="section reveal" aria-labelledby="categories">
        <div className="head">
          <div className="stack-sm">
            <p className="kicker">Browse</p>
            <h2 id="categories" className="h2">The collection</h2>
          </div>
          <p className="marginalia">Five pieces at launch. More as the estate grows.</p>
        </div>
        <IndexList
          items={shopCategories.map((category, index) => ({
            mark: ["I", "II", "III", "IV", "V"][index],
            title: category.name,
            text: category.note,
            href: index === 0 ? "/shop/reflections-in-bloom" : index === 3 ? "/apothecary" : undefined,
            aside: index === 0 || index === 3 ? undefined : "Soon",
          }))}
        />
      </section>
    </div>
  );
}
