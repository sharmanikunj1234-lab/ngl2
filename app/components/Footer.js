"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* COLUMN 1: BRAND */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            National Gold Loan
          </h3>
          <p className="text-sm text-gray-400">
            Trusted gold loan services with fast approval, safe storage,
            and transparent process.
          </p>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/9217900369"
            target="_blank"
            className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* COLUMN 2: PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Loans</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/gold-loan" className="hover:text-yellow-400">
                Gold Loan
              </Link>
            </li>
            <li>
              <Link href="/apply" className="hover:text-yellow-400">
                Apply Loan
              </Link>
            </li>
            
            
          </ul>
        </div>

        {/* COLUMN 3: SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/#faqs" className="hover:text-yellow-400">
                FAQs
              </Link>
            </li>

            <li>
              <Link href="/privacy" className="hover:text-yellow-400">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms" className="hover:text-yellow-400">
                Terms & Conditions
              </Link>
            </li>

          </ul>
        </div>

        {/* COLUMN 4: CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 New Delhi, India</li>

            <li>
              <a href="tel:01135110759" className="hover:text-yellow-400">
                📞 01135110759
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/919211515369"
                target="_blank"
                className="hover:text-green-400"
              >
                💬 WhatsApp: +91 9211515369
              </a>
            </li>

            <li>
              <a
                href="mailto:support@nationalgoldloan.in"
                className="hover:text-yellow-400"
              >
                ✉ support@nationalgoldloan.in
              </a>
            </li>

            <li className="text-xs  mt-2 leading-relaxed">
              138, 2nd/3rd Floor, Gaffar Market,<br />
              Karol Bagh, New Delhi - 110005
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} National Gold Loan. All rights reserved.
      </div>
    </footer>
  );
}