import type { Metadata } from "next";
import { PrototypeSearch } from "@/components/prototype-search";

export const metadata: Metadata = { title: "Search" };

export default function SearchPage() {
  return <div className="page-shell interior-page search-page">
    <div className="page-intro"><p className="eyebrow">Find a way in</p><h1>What are you <em>looking for?</em></h1><p>Search the sample writing, questions and objects in this design preview.</p></div>
    <PrototypeSearch />
  </div>;
}
