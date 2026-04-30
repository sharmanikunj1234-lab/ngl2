"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ApplyModal from "./ApplyModal";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path, label) => (
    <Link
      href={path}
      className={`transition duration-300 ${
        pathname === path
          ? "text-yellow-600 font-semibold"
          : "text-gray-700 hover:text-yellow-500"
      }`}
    >
      {label}
    </Link>
  );

  const handleScroll = () => {
    const section = document.getElementById("gold-calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 h-[70px] bg-[#FFFDF5]/90 backdrop-blur-md border-b border-yellow-300">
        
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[45px] h-[45px] shrink-0">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                sizes="45px"
                className="rounded-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-gray-900">
                National Gold Loan
              </span>
              <span className="text-xs text-yellow-600">
                Trusted Gold Loan Services
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">

            <nav className="flex items-center gap-8 text-[15px] font-medium text-gray-700">
              {navLink("/", "Home")}

              <button
                onClick={handleScroll}
                className="hover:text-yellow-500 cursor-pointer"
              >
                Gold Loan
              </button>

              <Link href="/#about-us" className="hover:text-yellow-500">
                About Us
              </Link>

              <Link href="/#faqs" className="hover:text-yellow-500">
                FAQs
              </Link>
            </nav>

            {/* CTA */}
            <motion.button
              onClick={() => setOpenModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold shadow-sm cursor-pointer"
            >
              Apply Now
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-900 text-3xl p-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FFFDF5] text-gray-900 px-6 py-6 space-y-5 text-lg border-t border-yellow-200"
          >
            <Link href="/" onClick={() => setOpen(false)} className="block">
              Home
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                handleScroll();
              }}
              className="block text-left w-full"
            >
              Gold Loan
            </button>

            <Link href="/#about-us" onClick={() => setOpen(false)} className="block">
              About Us
            </Link>

            <Link href="/#faqs" onClick={() => setOpen(false)} className="block">
              FAQs
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                setOpenModal(true);
              }}
              className="block bg-yellow-500 text-black px-4 py-3 rounded-full text-center font-semibold"
            >
              Apply Now
            </button>
          </motion.div>
        )}
      </header>

      {/* MODAL */}
      <ApplyModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}