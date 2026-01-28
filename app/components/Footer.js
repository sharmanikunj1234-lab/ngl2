
"use client";
import { useRouter } from "next/navigation";
export default function Footer() {
   const router = useRouter();
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
        </div>

        {/* COLUMN 2: PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Loans</h4>
          <ul className="space-y-2 text-sm">
            <li>Gold Loan</li>
            <li>National Gold Loan</li>
            <li>Short Term Loan</li>
            <li>Business Loan</li>
          </ul>
        </div>

        {/* COLUMN 3: SUPPORT */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <button
            onClick={() => router.push("/#faqs")}
           className="hover:text-yellow-400 transition"
            >
             FAQs
            </button>

            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            
          </ul>
        </div>

        {/* COLUMN 4: CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 India</li>
            <li>📞 01135110759</li>
            <li> Whatsapp: +91 9211515369</li>
            <li>✉ support@nationalgoldloan.in</li>
             <li>138, 2nd/3rd Floor
                 Gaffar Market, Karol Bagh,
                 New Delhi - 110005
                 Delhi, India</li>
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
