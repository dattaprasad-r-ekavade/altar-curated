import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";
import { shopCategories } from "@/lib/content";

export const metadata: Metadata = { title: "Owner Desk — Products" };

export default function AdminProductsPage() {
  return (
    <>
      <div className="head">
        <PageIntro kicker="Owner desk · The Shop" title="Objects with" em="intention." lede="Prepare the collection, its images and its stories." />
        <button className="btn" type="button" disabled>Add product</button>
      </div>
      <IndexList items={shopCategories.map((category, index) => ({
        mark: ["I", "II", "III", "IV", "V"][index],
        title: index === 0 ? "Reflections in Bloom" : category.name,
        text: index === 0 ? "Journals · flagship page" : "Catalogue slot · product not selected",
        href: index === 0 ? "/shop/reflections-in-bloom" : undefined,
        aside: index === 0 ? "Preview" : "To curate",
      }))} />
      <form className="panel" aria-label="Product editor preview">
        <p className="kicker">Product editor · Layout preview</p>
        <h2>One object, fully told.</h2>
        <div className="form-grid">
          <label className="field">Name<input value="Reflections in Bloom" readOnly /></label>
          <label className="field">Availability<input value="Not for sale" readOnly /></label>
          <label className="field">Price<input placeholder="To be confirmed" disabled /></label>
          <label className="field">Stock<input placeholder="To be confirmed" disabled /></label>
          <label className="field full">Story<textarea rows={3} value="Approved product story, ritual and care details will appear here…" readOnly /></label>
        </div>
        <div className="form-foot">
          <p>No pricing or inventory has been supplied.</p>
          <button className="btn" type="button" disabled>Save product</button>
        </div>
      </form>
    </>
  );
}
