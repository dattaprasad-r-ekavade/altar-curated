import type { Metadata } from "next";
import Link from "next/link";
import { AltarArch } from "@/components/marks";

export const metadata: Metadata = {
  title: "The Observatory",
  description: "Future explorations, quizzes and discoveries in the Altar Curated estate.",
};

export default function ObservatoryPage() {
  return (
    <section className="threshold" aria-labelledby="observatory-title">
      <div className="threshold-inner">
        <AltarArch />
        <p className="kicker">VII · The Observatory</p>
        <h1 id="observatory-title">Some rooms <em>open later.</em></h1>
        <p className="lede">Explorations, quizzes and small mysteries are being prepared here. Until then, a question to keep:</p>
        <p className="statement"><em>Where do you feel most like yourself, even before you can explain why?</em></p>
        <div className="actions">
          <Link className="link" href="/greenhouse">Return to the Greenhouse</Link>
        </div>
      </div>
    </section>
  );
}
