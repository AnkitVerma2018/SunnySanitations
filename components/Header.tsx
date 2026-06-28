'use client'
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { href: "#the-collections", label: "The Collections" },
    { href: "#lighting-studio", label: "Curation Lab" },
    { href: "#harmony-mixer", label: "Material Mixer" },
    { href: "#sample-studio", label: "Sample Suite" },
    { href: "#virtual-tour", label: "Private Register" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-obsidian-border bg-obsidian-deep/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-10 py-5">

        {/* Logo */}
       <Link href="/" className="group flex flex-col tracking-[0.25em] hover:opacity-90 transition-opacity" > <span className="font-serif text-xl md:text-2xl font-light text-alabaster"> SUNNY SANITATIONS </span> <span className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.4em] text-brass"> THE ARCHITECTURAL DIALOGUE </span> </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.28em] text-platinum/70">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-alabaster transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <div className="hidden lg:block w-px h-5 bg-obsidian-border" />

          <Link
            href="/careers"
            className="hidden lg:inline-flex border border-brass/40 px-6 py-2 text-[10px] uppercase tracking-[0.28em] text-brass hover:bg-brass/10 transition"
          >
            Join Our Team
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center"
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-\[2px\] bg-white transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-45 translate-y-\[4px\]"
                  : ""
              }`}
            />
            <span
              className={`block w-6 h-\[2px\] bg-white mt-1 transition-all duration-300 ${
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-\[4px\]"
                  : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "max-h-\[600px\] opacity-100 border-t border-obsidian-border"
            : "max-h-0 opacity-0"
        } bg-obsidian-deep`}
      >
        <nav className="flex flex-col px-6 py-4">

          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 border-b border-obsidian-border text-xs uppercase tracking-[0.28em] text-platinum/80 hover:text-brass transition"
            >
              {item.label}
            </a>
          ))}

          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 border border-brass/40 text-center py-3 text-xs uppercase tracking-[0.28em] text-brass hover:bg-brass/10 transition"
          >
            Join Our Team
          </Link>

        </nav>
      </div>
    </header>
  );
}