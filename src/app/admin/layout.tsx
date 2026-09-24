import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const sections = [
  { href: "/admin", label: "Overview", number: "00" },
  { href: "/admin/posts", label: "Writing", number: "01" },
  { href: "/admin/community", label: "Community", number: "02" },
  { href: "/admin/products", label: "Products", number: "03" },
  { href: "/admin/orders", label: "Orders", number: "04" },
  { href: "/admin/settings", label: "Settings", number: "05" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-shell page-shell">
    <aside className="admin-sidebar">
      <Link href="/admin" className="admin-sidebar-brand">ALTAR <em>OWNER DESK</em></Link>
      <p>Owner workspace · design preview</p>
      <nav aria-label="Studio sections">{sections.map((item) => <Link href={item.href} key={item.href}><span>{item.number}</span>{item.label}<b aria-hidden="true">↗</b></Link>)}</nav>
      <Link href="/" className="back-link">← View the public site</Link>
    </aside>
    <div className="admin-main">
      <PrototypeBanner>The owner desk is public sample UI. No authentication, edits, real customer records or orders are connected.</PrototypeBanner>
      {children}
    </div>
  </div>;
}
