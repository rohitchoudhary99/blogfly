"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Topics", href: "/topics" },
  { label: "Trending", href: "/trending" },
  { label: "About", href: "/about" },
];

const topics = [
  "Strategy",
  "Storytelling",
  "Product",
  "Food",
  "Analytics",
  "Lifestyle",
];

const socialLinks = [
  { label: "Twitter", icon: "𝕏", href: "#" },
  { label: "Facebook", icon: "f", href: "#" },
  { label: "Instagram", icon: "📷", href: "#" },
  { label: "LinkedIn", icon: "in", href: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[var(--card)] px-4 py-4 shadow-md shadow-black/10 backdrop-blur lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold uppercase tracking-[0.3em] text-[var(--foreground)] lg:text-2xl"
        >
          Blogfly
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-4 lg:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Burger */}
        <button
          aria-label="Open menu"
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--foreground)] transition hover:bg-[var(--accent)] lg:hidden"
        >
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 flex h-screen w-full flex-col items-center justify-center bg-emerald-600 text-white">
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="space-y-10 text-center">
            {/* Menu Links */}
            <nav className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.6em] text-white/60">
                Menu
              </h2>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-semibold uppercase tracking-[0.3em] text-white transition hover:text-emerald-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Topics */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.6em] text-white/60">
                Topics
              </h2>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li
                    key={topic}
                    className="text-lg font-medium uppercase tracking-[0.2em] text-white/90"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-lg font-semibold text-white transition hover:bg-white/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}