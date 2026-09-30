import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const sections = [
  { href: "/admin", label: "Overview", mark: "—" },
  { href: "/admin/posts", label: "Writing", mark: "I" },
  { href: "/admin/community", label: "Community", mark: "II" },
  { href: "/admin/products", label: "Products", mark: "III" },
  { href: "/admin/orders", label: "Orders", mark: "IV" },
  { href: "/admin/settings", label: "Settings", mark: "V" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell desk">
      <aside className="desk-side">
        <Link href="/admin" className="wordmark">Owner <span>desk</span></Link>
        <nav aria-label="Owner desk sections">
          {sections.map((item) => <Link href={item.href} key={item.href}><span>{item.mark}</span>{item.label}</Link>)}
        </nav>
        <Link href="/" className="back">← The public estate</Link>
      </aside>
      <div className="desk-main">
        <PrototypeBanner>Public sample UI. No authentication, edits, customer records or orders are connected.</PrototypeBanner>
        {children}
      </div>
    </div>
  );
}
