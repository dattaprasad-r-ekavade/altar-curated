import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./prototype.css";

export const metadata: Metadata = {
  title: {
    default: "Altar Curated — a world for the feeling heart",
    template: "%s | Altar Curated",
  },
  description:
    "A design preview for Altar Curated: writing, reflection, community and a curated apothecary.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
