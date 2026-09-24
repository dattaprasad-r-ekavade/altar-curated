import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";

export const metadata: Metadata = { title: "Terms", robots: { index: false, follow: false } };
export default function TermsPage() {
  return <InformationPage eyebrow="The practical things / Terms" title="A shared" italic="understanding." intro="A placeholder for site, community and purchase terms to be approved before the service goes live." sections={[
    { heading: "Using the site", body: "Final terms will set out ownership of content and permitted use." },
    { heading: "Community care", body: "Posting guidelines, moderation and account rules will be published before member participation opens." },
    { heading: "Orders", body: "Final purchase, COD, shipping and returns terms will be agreed with the client." },
  ]} />;
}
