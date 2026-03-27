"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-[#FFF8E8] text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">
              Get Instant Gold Loan <br />
              <span className="text-yellow-500">in 30 Minutes</span>
            </h1>

            <p className="text-gray-600 mt-6 mb-8">
              Get up to ₹5 Lakhs instantly with low interest rates and secure gold storage.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
              <span>✔ RBI Partner</span>
              <span>✔ 10L+ Customers</span>
              <span>✔ 4.8⭐ Rating</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/apply">
                <button className="bg-yellow-500 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors">
                  Apply Now
                </button>
              </Link>

              <a
                href="https://wa.me/9217900369"
                target="_blank"
                className="border border-green-500 text-green-600 px-6 py-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                WhatsApp Expert
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src="/goldbrick.png" alt="Gold Loan" width={400} height={400} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12 rounded-2xl mx-5 md:mx-20">
        <div className="grid md:grid-cols-3 text-center gap-6">
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">10L+</h3>
            <p className="text-gray-500">Customers Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">₹500Cr+</h3>
            <p className="text-gray-500">Loans Disbursed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">100%</h3>
            <p className="text-gray-500">Secure Storage</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#FFF8E8]">
        <div className="bg-[#FFF8E8] p-8 text-center">
          <h4 className="text-4xl font-bold mb-12">
            Why Choose National Gold Loan
          </h4>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Low Interest Rates",
              "Safe Gold Storage",
              "Quick Disbursal",
              "Transparent Process",
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <h4 className="font-semibold text-lg mb-2">{item}</h4>
                <p className="text-sm text-gray-500">
                  Trusted gold loan services designed for your financial needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR LOAN PRODUCTS */}
<section className="py-20 bg-w[#FFF8E8]">
  <div className="max-w-2xl mx-auto px-6 text-center">
    
    <h3 className="text-4xl font-bold mb-12">
      Our <span className="text-yellow-500">Loan Products</span>
    </h3>

    <div className="grid md:grid-cols-1 gap-5">
      
      {/* GOLD LOAN */}
      <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
        <h4 className="text-xl font-semibold mb-4">Gold Loan</h4>

        <ul className="text-sm text-gray-600 mb-6 space-y-2 text-center">
          <li>✔ Instant loan approval</li>
          <li>✔ Low interest rates</li>
          <li>✔ Safe gold storage</li>
        </ul>

        <Link href="/apply">
          <button className="w-full bg-yellow-500 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
            Apply Now
          </button>
        </Link>
      </div>

      

      

    </div>
  </div>
</section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FFF8E8]">
        <h3 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h3>

        <div className="grid md:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
          {[
            "Quick process and transparent interest rates.",
            "Very safe and professional service.",
            "Best gold loan experience.",
          ].map((text, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600">“{text}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-16 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-14">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h3>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            {[
              { q: "How much loan can I get?", a: "Up to 75% of gold value." },
              { q: "Is my gold safe?", a: "Yes, stored in secure vaults." },
              { q: "How fast is disbursal?", a: "Instant after approval." },
              { q: "Do I need to sell gold?", a: "No, you retain ownership." },
              { q: "Any hidden charges?", a: "No, everything is transparent." },
              { q: "What documents required?", a: "Basic KYC documents." },
              { q: "Can I repay early?", a: "Yes, no penalties." },
            ].map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index} className="bg-white rounded-2xl shadow-md">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-6"
                  >
                    <span className="font-semibold">{faq.q}</span>
                    <span className={`text-xl ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUERIES SECTION */}
      <section className="py-20 bg-[#FFF8E8]">
        <div className="p-10 bg-white rounded-xl text-center max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">Have Any Questions?</h3>

          <p className="text-gray-700 mb-6">
            Our support team is here to help you with any queries related to gold loans.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#fff8e8] rounded-xl">
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p>+91 98765 43210</p>
            </div>

            <div className="p-6 bg-[#fff8e8] rounded-xl">
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p>support@nationalgoldloan.in</p>
            </div>

            <div className="p-6 bg-[#fff8e8] rounded-xl">
              <h4 className="font-semibold mb-2">Visit Branch</h4>
              <p>Locate nearest branch</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about-us" className="py-16 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h3 className="text-4xl font-bold mb-12">
            About <span className="text-yellow-400">National Gold Loan</span>
          </h3>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-lg">
            <p className="text-gray-700 text-lg mb-6">
              <strong>National Gold Loan</strong> is the flagship brand of
              <strong> LendingPay Technology Pvt. Ltd.</strong>, backed by NBFC partner
              <strong> Shankar Fininvest Pvt. Ltd.</strong>
            </p>

            <p className="text-gray-700">
              With RBI-compliant processes, secure insured vault storage, and instant loan disbursal,
              we help customers meet urgent financial needs without selling their gold.
            </p>
          </div>
        </div>
      </section>

      

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/9217900369"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
      >
         💬
      </a>

      <Footer />
    </main>
  );
}