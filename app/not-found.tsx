import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="container inner-page">
      <span className="eyebrow">A little off route</span>
      <h1>
        Let’s get you
        <br />
        back on your way.
      </h1>
      <p>We couldn’t find that page.</p>
      <Link className="button" href="/">
        Back to home
      </Link>
    </main>
  );
}
