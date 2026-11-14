"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Home", "hero"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/#hero" className="brand" onClick={() => setOpen(false)}>
          Portfolio
          <span className="availability">
            <i />
            Open to work
          </span>
        </Link>
        <div className="desktop-nav">
          {links.map(([label, id]) => (
            <Link key={id} href={`/#${id}`}>
              {label}
            </Link>
          ))}
        </div>
        <a
          className="nav-resume"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé <ArrowUpRight size={14} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="mobile-nav">
          {links.map(([label, id]) => (
            <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            View résumé
            <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </header>
  );
}
