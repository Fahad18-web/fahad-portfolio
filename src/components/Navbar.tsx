"use client";

import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./Icons";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-[#F5F5F5] hover:text-[#2DD4BF] transition-colors"
        >
          Fahad<span className="text-[var(--accent)]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#2DD4BF] px-5 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-[#14B8A6] transition-colors"
          >
            Let&apos;s Work Together
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            className="p-2 text-[#F5F5F5]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden fixed inset-0 top-[57px] bg-[#0A0A0A] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg text-[#F5F5F5] hover:text-[#2DD4BF] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-medium text-[#0A0A0A]"
            >
              Let&apos;s Work Together
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}