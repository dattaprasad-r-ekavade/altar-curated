import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Owner Desk", robots: { index: false, follow: false } };

const sections = [
  { mark: "I", title: "Writing", text: "Drafts, published essays, rituals and featured stories.", href: "/admin/posts", aside: "4 samples" },
  { mark: "II", title: "Community", text: "Journal prompts, member replies and moderation.", href: "/admin/community", aside: "3 prompts" },
  { mark: "III", title: "Products", text: "The collection, its images and its stories.", href: "/admin/products", aside: "1 preview" },
  { mark: "IV", title: "Orders", text: "COD status, fulfilment and sales exports.", href: "/admin/orders", aside: "Not connected" },
];

export default function AdminOverviewPage() {
  return (
    <>
      <PageIntro kicker="Owner desk · Site upkeep" title="A room for" em="keeping things." lede="One quiet place to tend the publication, community and shop once the backend is added." />
      <div className="stats">
        <div><span>Published writing</span><strong>—</strong><small>Connect content data</small></div>
        <div><span>Community</span><strong>—</strong><small>Enable member access</small></div>
        <div><span>Orders placed</span><strong>—</strong><small>COD checkout pending</small></div>
        <div><span>COD collected</span><strong>—</strong><small>Never count pending as paid</small></div>
      </div>
      <IndexList items={sections} />
      <p className="preview-note"><span>Before launch</span> Protect every admin route and server action with owner authentication and role checks.</p>
    </>
  );
}
