import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";
import { communityPrompts } from "@/lib/content";

export const metadata: Metadata = { title: "Owner Desk — Community" };

export default function AdminCommunityPage() {
  return (
    <>
      <div className="head">
        <PageIntro kicker="Owner desk · Community" title="Hold the" em="conversation." lede="Journal prompts, replies and thoughtful moderation in one place." />
        <button className="btn" type="button" disabled>New prompt</button>
      </div>
      <div className="stats stats-3">
        <div><span>Sample prompts</span><strong>3</strong></div>
        <div><span>Replies to review</span><strong>—</strong></div>
        <div><span>Reports</span><strong>—</strong></div>
      </div>
      <IndexList items={communityPrompts.map((prompt) => ({ mark: prompt.number, title: prompt.title, text: prompt.label, href: `/community/${prompt.slug}`, aside: "Preview" }))} />
      <div className="panel">
        <p className="kicker">Moderation · Future queue</p>
        <h2>A considered space.</h2>
        <p className="lede">Replies can be reviewed, hidden or approved here once member accounts are connected.</p>
        <div className="quiet-actions"><button type="button" disabled>Approve</button><button type="button" disabled>Hide</button><button type="button" disabled>Review report</button></div>
      </div>
    </>
  );
}
