import type { Metadata } from "next";
import Link from "next/link";
import { essays } from "@/lib/content";

export const metadata: Metadata = { title: "Studio — Writing" };

export default function AdminPostsPage() {
  return <div className="admin-subpage">
    <div className="admin-subheading"><div><p className="eyebrow">Studio / The publication</p><h1>Writing <em>& archive.</em></h1><p>Draft, preview and arrange the world of Altar Curated.</p></div><button className="button button-disabled" type="button" disabled>+ New piece</button></div>
    <div className="admin-tabs"><span className="active">All pieces</span><span>Drafts</span><span>Published</span><span>Notes</span></div>
    <div className="admin-list">{essays.map((essay, i) => <Link href={`/read/${essay.slug}`} key={essay.slug} className="admin-list-row"><span className="admin-list-number">0{i+1}</span><div><strong>{essay.title}</strong><small>{essay.eyebrow}</small></div><span className="admin-pill">Preview content</span><b>↗</b></Link>)}</div>
    <div className="admin-form-preview"><p className="eyebrow">Editor / Layout preview</p><h2>Tell the story.</h2><div className="admin-form-grid"><label>Title<input value="A title for the feeling heart" readOnly /></label><label>Section<input value="Essay" readOnly /></label><label className="full">Opening / body<textarea rows={5} value="Mehak’s approved writing will be edited here…" readOnly /></label></div><div className="admin-form-bottom"><span>Markdown editor, image picker and publishing controls will arrive with the backend.</span><button type="button" className="button button-disabled" disabled>Save draft</button></div></div>
  </div>;
}
