"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700/90 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  <img src="/logo.jpeg" className="h-20" />
  <div className="flex flex-col leading-tight">
    <span className="text-2xl font-semibold text-white">
      National Gold Loan
    </span>
    <span className="text-xs text-yellow-400">
      Trusted Gold Loan Services
    </span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-xl font-medium text-gray-200">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/gold-loan" className="hover:text-yellow-400 transition">Gold Loan</Link>
            <Link href="/admin" className="hover:text-yellow-400 transition">Admin</Link>
            <Link href="/#about-us" scroll={true} className="hover:text-yellow-400 transition">About Us</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-900 border-t border-gray-700 px-6 py-6 space-y-4 text-lg">

          <Link href="/" className="block hover:text-yellow-400 transition">Home</Link>
          <Link href="/gold-loan" className="block hover:text-yellow-400 transition">Gold Loan</Link>
          <Link href="/admin" className="block hover:text-yellow-400 transition">Admin</Link>
          <Link href="/#about-us" className="block hover:text-yellow-400 transition">About Us</Link>
          <Link href="/contact" className="block hover:text-yellow-400 transition">Contact</Link>
      
        </nav>
      )}
    </header>
  );
}
