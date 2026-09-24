import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";

export const metadata: Metadata = { title: "Returns", robots: { index: false, follow: false } };
export default function ReturnsPage() {
  return <InformationPage eyebrow="The practical things / Returns" title="With care," italic="always." intro="This page will explain cancellations, returns and damaged-item support in plain language." sections={[
    { heading: "Cancellations", body: "The client will confirm when an order may be cancelled and how to request it." },
    { heading: "Returns and exchanges", body: "Eligibility, time limits and the return process will be published before sales open." },
    { heading: "Something arrived damaged?", body: "A support contact and documentation steps will be added with the final policy." },
  ]} />;
}
