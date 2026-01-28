"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HowItWorks } from "./components/HowItWorks";

/* Reusable motion for all sections */
const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};


export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      {/* HERO */}
      <motion.section
        {...sectionMotion}
        className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 py-24"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h2 className="text-6xl font-bold text-white">
              Instant Gold Loans <br />
              <span className="text-yellow-400">You Can Trust</span>
            </h2>

            <p className="text-gray-300 mb-8">
              Fast, secure and transparent gold loans with quick disbursal.
            </p>

            <div className="flex gap-8 text-sm text-gray-300 mt-6">
              <span className="text-yellow-400">✔ RBI Compliant</span>
              <span className="text-yellow-400">✔ Safe Gold Storage</span>
              <span className="text-yellow-400">✔ Instant Disbursal</span>
            </div>

            <div className="flex gap-8 mt-6">
              <Link href="/apply">
                <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold shadow hover:bg-yellow-700 transition">
                  Apply Now
                </button>
              </Link>

              
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/logo.jpeg" alt="Gold Loan" className="w-100" />
          </div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.div
        {...sectionMotion}
        className="grid md:grid-cols-3 gap-6 mb-12 text-center mt-10"
      >
        <div>
          <h4 className="text-4xl font-bold text-yellow-600">10L+</h4>
          <p className="text-sm text-gray-400">Customers Served</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-yellow-600">₹500Cr+</h4>
          <p className="text-sm text-gray-400">Loans Disbursed</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-yellow-600">100%</h4>
          <p className="text-sm text-gray-400">Secure Storage</p>
        </div>
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.section {...sectionMotion} className="bg-gray-700">
        <div className="bg-gray-900 p-8 border-gray-700 text-center">
          <h4 className="text-4xl font-bold text-center mb-12">
            Why Choose National Gold Loan
          </h4>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Low Interest Rates",
              "Safe Gold Storage",
              "Quick Disbursal",
              "Transparent Process",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition text-center"
              >
                <h4 className="font-semibold text-lg text-black mb-2">
                  {item}
                </h4>
                <p className="text-sm text-gray-400">
                  Trusted gold loan services designed for your financial needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* OUR LOAN PRODUCTS */}
      <motion.section {...sectionMotion} className="bg-gray-900 py-20">
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl border border-gray-700">
          <h3 className="text-4xl font-bold text-center mb-12">
            Our Loan Products
          </h3>

          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">
            <h4 className="text-xl text-black font-semibold mb-4">
              Gold Loan
            </h4>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              <li>✔ Competitive interest rates</li>
              <li>✔ Flexible repayment options</li>
              <li>✔ Secure gold vaults</li>
            </ul>
            <Link href="/apply">
            <button className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-400 transition">
              Apply for Gold Loan
            </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.div {...sectionMotion}>
        <HowItWorks />
      </motion.div>

      {/* WHAT OUR CUSTOMERS SAY */}
      <motion.section {...sectionMotion} className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">
            What Our Customers Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rohit Sharma",
                city: "Delhi",
                review:
                  "Quick process and transparent interest rates. Got my loan within 30 minutes.",
              },
              {
                name: "Sunita Verma",
                city: "Jaipur",
                review:
                  "Very safe and professional. Staff explained everything clearly.",
              },
              {
                name: "Amit Patel",
                city: "Ahmedabad",
                review:
                  "Best gold loan experience. Easy repayment options and great service.",
              },
            ].map((user, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow text-left"
              >
                <p className="text-gray-600 mb-4">“{user.review}”</p>
                <h4 className="text-black font-semibold">{user.name}</h4>
                <span className="text-sm text-gray-500">{user.city}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* FAQ SECTION */}
<motion.section
  {...sectionMotion}
  className="py-15 bg-gray-900"
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-4xl md:text-4xl font-bold mb-14">
      Frequently Asked <span className="text-yellow-400">Questions</span>
    </h3>

    <div className="max-w-4xl mx-auto space-y-6 text-left">
      {[
        {
          q: "How much loan can I get against my gold?",
          a: "You can get up to 75% of the current market value of your gold depending on purity and weight, as per RBI guidelines.",
        },
        {
          q: "Is my gold safe with National Gold Loan?",
          a: "Yes. Your gold is stored in highly secure, insured vaults with strict safety and compliance standards.",
        },
        {
          q: "How fast is the loan disbursal?",
          a: "Loan disbursal is instant once gold valuation and documentation are completed.",
        },
        {
          q: "Do I need to sell my gold?",
          a: "No. You retain full ownership of your gold and get it back after successful repayment.",
        },
        {
          q: "Are there any hidden charges?",
          a: "No hidden charges. All interest rates and fees are clearly explained before loan approval.",
        },
      ].map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className="text-lg font-semibold text-gray-900">
                {faq.q}
              </span>

              <span
                className={`text-yellow-500 text-3xl font-bold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <motion.div
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="px-6"
            >
              <p className="pb-6 text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  </div>
</motion.section>


      {/* QUERIES / HELP */}
      <motion.section {...sectionMotion} className="py-20 bg-gray-900">
        <div className="p-6 bg-gray-900 rounded-xl  text-center">
          <h3 className="text-4xl font-bold mb-6">
            Have Any Questions?
          </h3>

          <p className="text-gray-400 mb-4">
            Our support team is here to help you with any queries related to gold loans.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-400 mb-2">Call Us</h4>
              <p className="text-sm text-gray-400">+91 98765 43210</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-400 mb-2">Email Us</h4>
              <p className="text-sm text-gray-400">
                support@nationalgoldloan.in
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-400 mb-2">Visit Branch</h4>
              <p className="text-sm text-gray-400">
                Locate nearest branch
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      {/* ABOUT US */}
<motion.section
  {...sectionMotion}
  id="about-us"
  className="py-28 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
>
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Heading */}
    <h3 className="text-4xl md:text-4xl font-bold text-white mb-14">
      About <span className="text-yellow-400">National Gold Loan</span>
    </h3>

    {/* Content Box */}
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-14 shadow-2xl">

      <p className="text-gray-700 text-2xl leading-relaxed mb-6">
        <strong>National Gold Loan</strong> is the flagship brand of
        <strong> LendingPay Technology Pvt. Ltd.</strong>, a fintech company
        backed by NBFC partner <strong>Shankar Fininvest Pvt. Ltd.</strong>
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        With RBI-compliant processes, secure insured vault storage, and
        instant loan disbursal, we help customers meet urgent financial
        needs without selling their gold — ensuring complete transparency
        and peace of mind.
      </p>

      

    </div>
  </div>
</motion.section>



      <Footer />
    </main>
  );
}
