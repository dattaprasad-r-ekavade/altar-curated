import Link from "next/link";
import type { Essay } from "@/lib/content";

export function EssayCard({
  essay,
  large = false,
}: {
  essay: Essay;
  large?: boolean;
}) {
  return (
    <Link href={`/read/${essay.slug}`} className={`essay-card ${large ? "essay-card-large" : ""}`}>
      <div className="essay-card-top">
        <span>{essay.eyebrow}</span>
        <span>{essay.motif} / 04</span>
      </div>
      <div>
        <h3>{essay.title}</h3>
        <p>{essay.summary}</p>
      </div>
      <span className="text-link">Enter the essay <span aria-hidden="true">↗</span></span>
    </Link>
  );
}
