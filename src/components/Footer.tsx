import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span>© {new Date().getFullYear()} NITESH RANJAN SINGH</span>
        <span>Glasgow · Data engineering · LLM evaluation</span>
        <Link href="/#hero">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
