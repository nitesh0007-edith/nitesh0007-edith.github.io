import Link from "next/link";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span>© {new Date().getFullYear()} NITESH RANJAN SINGH</span>
        <span>Built with curiosity. Based in Glasgow.</span>
        <Link href="/#hero">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
