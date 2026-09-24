import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";

export const metadata: Metadata = { title: "Privacy", robots: { index: false, follow: false } };
export default function PrivacyPage() {
  return <InformationPage eyebrow="The practical things / Privacy" title="Your trust" italic="matters." intro="A placeholder for the final privacy notice. The prototype does not collect member or customer data." sections={[
    { heading: "What the site will collect", body: "The final notice will describe account, community, order and analytics data after those features are implemented." },
    { heading: "How it will be used", body: "The client will approve the purposes, service providers, retention periods and contact method." },
    { heading: "Your choices", body: "The final notice will explain access, correction, deletion and communication preferences." },
  ]} />;
}
