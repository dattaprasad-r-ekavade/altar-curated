import type { Metadata } from "next";
import { InformationPage } from "@/components/information-page";

export const metadata: Metadata = { title: "Shipping", robots: { index: false, follow: false } };
export default function ShippingPage() {
  return <InformationPage eyebrow="The practical things / Shipping" title="From our world" italic="to yours." intro="A clear place for delivery regions, charges and timelines once the shipping arrangement is confirmed." sections={[
    { heading: "Where we deliver", body: "Serviceable regions and PIN codes will be listed here after the shipping partner is confirmed." },
    { heading: "Delivery charges", body: "Shipping and any cash-on-delivery charge will be shown in the cart and checkout before an order is placed." },
    { heading: "After dispatch", body: "The final process for dispatch updates, tracking and delivery questions will appear here." },
  ]} />;
}
