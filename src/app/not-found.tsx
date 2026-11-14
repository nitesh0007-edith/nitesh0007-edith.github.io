import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 / A SMALL DETOUR</span>
      <h1>
        LOST IN THE
        <br />
        <span>PIPELINE?</span>
      </h1>
      <p>
        This page isn’t here. There’s plenty to explore back at the portfolio.
      </p>
      <Link className="sketch-button orange" href="/">
        <ArrowLeft size={17} />
        Back to the portfolio
      </Link>
    </section>
  );
}
