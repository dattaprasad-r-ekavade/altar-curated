import type { Metadata } from "next";
import Link from "next/link";
import { communityPrompts } from "@/lib/content";

export const metadata: Metadata = { title: "Studio — Community" };

export default function AdminCommunityPage() {
  return <div className="admin-subpage">
    <div className="admin-subheading"><div><p className="eyebrow">Studio / In good company</p><h1>Hold the <em>conversation.</em></h1><p>Prompts, replies and thoughtful moderation in one place.</p></div><button className="button button-disabled" type="button" disabled>+ New prompt</button></div>
    <div className="admin-mini-stats"><div><span>Sample prompts</span><strong>03</strong></div><div><span>Replies to review</span><strong>—</strong></div><div><span>Reports</span><strong>—</strong></div></div>
    <div className="admin-section-heading"><h2>Prompts</h2><span>PREVIEW CONTENT</span></div>
    <div className="admin-list">{communityPrompts.map((prompt) => <Link className="admin-list-row" href={`/community/${prompt.slug}`} key={prompt.slug}><span className="admin-list-number">{prompt.number}</span><div><strong>{prompt.title}</strong><small>{prompt.label}</small></div><span className="admin-pill">Preview</span><b>↗</b></Link>)}</div>
    <div className="admin-moderation"><div><p className="eyebrow">Moderation / Future queue</p><h2>A considered space.</h2><p>Replies can be reviewed, hidden or approved here once member accounts are connected. No real member content is present.</p></div><div className="moderation-actions"><button type="button" disabled>Approve</button><button type="button" disabled>Hide</button><button type="button" disabled>Review report</button></div></div>
  </div>;
}
