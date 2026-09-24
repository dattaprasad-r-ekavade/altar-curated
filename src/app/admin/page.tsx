import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Owner Desk Preview",
  robots: { index: false, follow: false },
};

const sections = [
  { number: "01", title: "Writing", description: "Drafts, published essays and featured stories.", count: "04 samples", href: "/admin/posts" },
  { number: "02", title: "Community", description: "Prompts, member replies and moderation.", count: "03 prompts", href: "/admin/community" },
  { number: "03", title: "Shop", description: "Products, images and availability.", count: "01 preview", href: "/admin/products" },
  { number: "04", title: "Orders", description: "COD status, fulfillment and sales exports.", count: "Not connected", href: "/admin/orders" },
];

export default function AdminPreviewPage() {
  return (
    <div className="admin-preview interior-page">
      <div className="admin-heading">
        <div>
          <p className="eyebrow">Owner desk / Site upkeep</p>
          <h1>A room for <em>keeping things.</em></h1>
          <p>One quiet place to manage the publication, community and shop when the backend is added.</p>
        </div>
        <div className="admin-date">SITE STATUS<br /><strong>In preparation</strong></div>
      </div>
      <div className="admin-stat-grid">
        <div><span>Published writing</span><strong>—</strong><small>Connect content data</small></div>
        <div><span>Community</span><strong>—</strong><small>Enable member access</small></div>
        <div><span>Orders placed</span><strong>—</strong><small>COD checkout pending</small></div>
        <div><span>COD collected</span><strong>—</strong><small>Never count pending as paid</small></div>
      </div>
      <div className="admin-section-heading">
        <h2>Manage the world</h2>
        <span>Sections / 04</span>
      </div>
      <div className="admin-section-grid">
        {sections.map((section) => (
          <Link href={section.href} className="admin-section-card" key={section.number}>
            <div><span>{section.number}</span><span>{section.count}</span></div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <span className="admin-unavailable">Available after backend setup</span>
          </Link>
        ))}
      </div>
      <p className="source-note">Before adding real records, protect all admin routes and server actions with owner authentication and role checks.</p>
    </div>
  );
}
