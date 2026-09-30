import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
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
  return (
    <div className="shell narrow page">
      <PageIntro kicker={eyebrow} title={title} em={italic} lede={intro} />
      <PrototypeBanner>Final business details and policies must be supplied and approved before orders go live.</PrototypeBanner>
      <div className="clauses">
        {sections.map((section, index) => (
          <section key={section.heading}>
            <span className="index-mark">{["I", "II", "III", "IV", "V"][index]}</span>
            <div>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}
      </div>
      <Link href="/contact" className="link">Write to us</Link>
    </div>
  );
}
