import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell interior-page narrow-page">
      <div className="page-intro">
        <p className="eyebrow">A little lost / 404</p>
        <h1>This page has <em>moved on.</em></h1>
        <p>There is still more to find.</p>
        <Link href="/" className="button button-light">Return home <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
