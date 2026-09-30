import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";
import { essays } from "@/lib/content";

export const metadata: Metadata = { title: "Owner Desk — Writing" };

export default function AdminPostsPage() {
  return (
    <>
      <div className="head">
        <PageIntro kicker="Owner desk · The Greenhouse" title="Writing" em="& archive." lede="Draft, preview and arrange the Library, Journal and Rituals." />
        <button className="btn" type="button" disabled>New piece</button>
      </div>
      <div className="tabs"><span className="active">All</span><span>Drafts</span><span>Published</span><span>Journal</span></div>
      <IndexList items={essays.map((essay) => ({ mark: essay.motif, title: essay.title, text: `${essay.room} · ${essay.eyebrow}`, href: `/read/${essay.slug}`, aside: "Preview" }))} />
      <form className="panel" aria-label="Editor preview">
        <p className="kicker">Editor · Layout preview</p>
        <h2>Tell the story.</h2>
        <div className="form-grid">
          <label className="field">Title<input value="A title for the feeling heart" readOnly /></label>
          <label className="field">Shelf<input value="Library" readOnly /></label>
          <label className="field full">Opening<textarea rows={4} value="Mehak's approved writing will be edited here…" readOnly /></label>
        </div>
        <div className="form-foot">
          <p>Markdown editor, image picker and publishing controls arrive with the backend.</p>
          <button type="button" className="btn" disabled>Save draft</button>
        </div>
      </form>
    </>
  );
}
