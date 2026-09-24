import Link from "next/link";
import { PrototypeBanner } from "@/components/prototype-banner";

export function InformationPage({
  eyebrow,
  title,
  italic,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return <div className="page-shell interior-page information-page">
    <div className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title} <em>{italic}</em></h1><p>{intro}</p></div>
    <PrototypeBanner>This page is a structure preview. Final business details and policies must be supplied and approved by the client before orders go live.</PrototypeBanner>
    <div className="information-grid">
      <aside><span>ALTAR CURATED</span><p>Information for visitors and future customers.</p><Link href="/contact" className="text-link">Contact us <span aria-hidden="true">↗</span></Link></aside>
      <div className="information-sections">
        {sections.map((section, index) => <section key={section.heading}><span>0{index + 1}</span><div><h2>{section.heading}</h2><p>{section.body}</p></div></section>)}
      </div>
    </div>
  </div>;
}
