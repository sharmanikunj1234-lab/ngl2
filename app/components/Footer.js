"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {

  const handleScroll = () => {
    const section = document.getElementById("gold-calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] text-gray-300 pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-4">

        {/* COLUMN 1: BRAND */}
        <div className="flex flex-col items-center text-center">

     {/* LOGO */}
  <div className="mb-4">
    <Image
      src="/logo.jpg"
      alt="National Gold Loan"
      width={70}
      height={70}
      className="squared-full object-contain mx-auto"
    />
  </div>
  {/* HEADING */}
  <h3 className="text-xl font-bold text-white mb-3">
    National Gold Loan
  </h3>

 

  {/* DESCRIPTION */}
  <p className="text-sm text-gray-400 mb-4 max-w-xs">
    Trusted gold loan services with fast approval, safe storage,
    and transparent process.
  </p>


          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-yellow-500 hover:text-black transition"
              >
                <Icon size={14} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* COLUMN 2: LOANS */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Loans</h4>

          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={handleScroll} className="hover:text-yellow-500 transition">
                Gold Loan
              </button>
            </li>

            <li>
              <Link href="/apply" className="hover:text-yellow-500 transition">
                Apply Loan
              </Link>
            </li>
          </ul>

          {/* TRUST BADGES */}
          <div className="mt-6 text-xs text-gray-500">
            <p>✔ RBI Compliant</p>
            <p>✔ NBFC Partnered</p>
            <p>✔ 100% Secure Storage</p>
          </div>
        </div>

        {/* COLUMN 3: SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Support</h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/#faqs" className="hover:text-yellow-500 transition">
                FAQs
              </Link>
            </li>

            <li>
              <Link href="/privacy" className="hover:text-yellow-500 transition">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms" className="hover:text-yellow-500 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>

          {/* APP DOWNLOAD */}
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Download App</p>
            <div className="flex gap-3">
              <div className="bg-gray-800 px-3 py-2 rounded text-xs">Play Store</div>
              <div className="bg-gray-800 px-3 py-2 rounded text-xs">App Store</div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: LEAD FORM */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">
            Contact Us
          </h4>

          {/* CONTACT */}
          <div className="mt-6 text-sm space-y-2">
            <a href="tel:01135110759" className="block hover:text-yellow-500">
              📞 01135110759
            </a>

            <a
              href="https://wa.me/919211515369"
              target="_blank"
              className="block hover:text-green-400"
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:support@nationalgoldloan.in"
              className="block hover:text-yellow-500"
            >
              ✉ support@nationalgoldloan.in
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} National Gold Loan. All rights reserved.
      </div>
    </footer>
  );
}