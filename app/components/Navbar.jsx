"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path, label) => (
    <Link
      href={path}
      className={`hover:text-yellow-400 transition ${
        pathname === path ? "text-yellow-400 font-semibold" : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold text-white">
              National Gold Loan
            </span>
            <span className="text-xs text-yellow-400">
              Trusted Gold Loan Services
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-base text-gray-200">

          {navLink("/", "Home")}
          {navLink("/gold-loan", "Gold Loan")}
          {navLink("/admin", "Admin")}

          {/* SCROLL LINKS */}
          <button
            onClick={() =>
              document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-yellow-400 transition"
          >
            About Us
          </button>

          <button
            onClick={() =>
              document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-yellow-400 transition"
          >
            FAQs
          </button>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/9217900369"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900 px-6 py-6 space-y-4 text-lg">

          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link href="/gold-loan" onClick={() => setOpen(false)} className="block">
            Gold Loan
          </Link>

          <Link href="/admin" onClick={() => setOpen(false)} className="block">
            Admin
          </Link>

          {/* SCROLL */}
          <button
            onClick={() => {
              setOpen(false);
              document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block text-left w-full"
          >
            About Us
          </button>

          <button
            onClick={() => {
              setOpen(false);
              document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="block text-left w-full"
          >
            FAQs
          </button>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/9217900369"
            target="_blank"
            className="block bg-green-500 text-white px-4 py-2 rounded-lg text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}