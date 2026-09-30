import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { PrototypeSearch } from "@/components/prototype-search";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <div className="shell narrow page">
      <PageIntro kicker="Search" title="What are you" em="looking for?" />
      <PrototypeSearch />
    </div>
  );
}
