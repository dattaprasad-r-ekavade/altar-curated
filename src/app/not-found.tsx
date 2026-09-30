import Link from "next/link";
import { AltarArch } from "@/components/marks";

export default function NotFound() {
  return (
    <section className="threshold" aria-labelledby="lost-title">
      <div className="threshold-inner">
        <AltarArch />
        <p className="kicker">A path overgrown · 404</p>
        <h1 id="lost-title">This room has <em>moved on.</em></h1>
        <p className="lede">There is still more of the estate to find.</p>
        <Link href="/" className="btn">Return to the Altar</Link>
      </div>
    </section>
  );
}
