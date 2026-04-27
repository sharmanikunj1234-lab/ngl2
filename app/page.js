"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { motion } from "framer-motion";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import GoldLoanCalculator from "./components/GoldLoanCalculator";
import Benefits from "./components/Benefits";
import ApplyModal from "./components/ApplyModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionMotion = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
};

  return (
    <main className="min-h-screen bg-[#FFF8E8] text-gray-800 overflow-x-hidden">
      <Navbar />
      
      {/* HERO */}
      <Hero />
      

      {/* STATS */}
     <StatsSection />

     <Benefits />

{/* WHY CHOOSE US */}
<motion.section
  {...sectionMotion}
  className="py-24 bg-[#FFF8E8]"
>
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* HEADING */}
    <div className="mb-16">
      <h2 className="text-4xl font-bold">
        Why Choose <span className="text-yellow-500">National Gold Loan</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        We combine speed, security, and trust to deliver a seamless gold loan experience.
      </p>

      {/* PREMIUM LINE */}
      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* CARDS */}
    <motion.div
      className="grid md:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {[
        {
          title: "Low Interest Rates",
          desc: "Affordable rates designed to reduce your repayment burden.",
          icon: "💰",
        },
        {
          title: "Safe Gold Storage",
          desc: "Your gold is stored in fully insured and secure vaults.",
          icon: "🔒",
        },
        {
          title: "Quick Disbursal",
          desc: "Get your loan approved and disbursed within minutes.",
          icon: "⚡",
        },
        {
          title: "Transparent Process",
          desc: "No hidden charges with complete clarity at every step.",
          icon: "📄",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}

          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-yellow-100 text-center relative overflow-hidden"
        >
          {/* GLOW EFFECT */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

          {/* ICON */}
          <div className="text-3xl mb-4 relative z-10">
            {item.icon}
          </div>

          {/* TITLE */}
          <h4 className="font-semibold text-lg mb-2 relative z-10">
            {item.title}
          </h4>

          {/* DESC */}
          <p className="text-sm text-gray-600 relative z-10">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</motion.section>

      {/* OUR LOAN PRODUCTS */}
<section className="py-24 bg-[#FFF8E8]">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADING */}
    <div className="mb-16">
      <h2 className="text-4xl font-bold">
        Our <span className="text-yellow-500">Loan Products</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Flexible and secure loan solutions designed to meet your financial needs instantly.
      </p>

      {/* LINE */}
      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* PRODUCT CARD */}
    <div className="flex justify-center">

      <div className="p-8 md:p-10 rounded-[35px] 
bg-gradient-to-r from-[#FFFDF5] via-[#FFF4D6] to-[#FFE8A3]
border border-yellow-200/60 shadow-sm hover:shadow-xl transition duration-300"
>

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          {/* TITLE */}
          <h3 className="text-2xl font-semibold mb-4">
            Gold Loan
          </h3>

          {/* DESC */}
          <p className="text-gray-600 mb-6">
            Unlock the value of your gold and get instant funds with minimal documentation and complete security.
          </p>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-8">
            <span>✔ Instant approval</span>
            <span>✔ Low interest rates</span>
            <span>✔ Secure storage</span>
            <span>✔ No hidden charges</span>
            <span>✔ Flexible repayment</span>
            <span>✔ Quick disbursal</span>
          </div>

          {/* CTA */}
          <>
         <button
  onClick={() => setOpenModal(true)}
  className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
>
  Apply for Gold Loan
</button>
<ApplyModal
  open={openModal}
  onClose={() => setOpenModal(false)}
/>
</>
        </div>
      </div>

    </div>

  </div>
</section>

{/* ELIGIBILITY & DOCUMENTS */}
<motion.section
  {...sectionMotion}
  className="py-24 bg-[#FFF8E8]"
>
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADING */}
    <div className="mb-16">
      <h2 className="text-4xl font-bold">
        Eligibility & <span className="text-yellow-500">Documents Required</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Simple requirements and minimal documentation to get your gold loan approved quickly.
      </p>

      {/* LINE */}
      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* ELIGIBILITY */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-yellow-400 text-left relative overflow-hidden"
      >
        {/* GLOW */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

        <h3 className="text-2xl font-semibold mb-6 relative z-10">
          🎯 Eligibility Criteria
        </h3>

        <ul className="space-y-4 text-gray-600 relative z-10">
          <li>✔ Age must be 18 years or above</li>
          <li>✔ Must be an Indian resident</li>
          <li>✔ Gold purity between 18K – 22K</li>
          <li>✔ Valid mobile number required</li>
        </ul>
      </motion.div>

      {/* DOCUMENTS */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-yellow-400 text-left relative overflow-hidden"
      >
        {/* GLOW */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

        <h3 className="text-2xl font-semibold mb-6 relative z-10">
          📄 Required Documents
        </h3>

        <ul className="space-y-4 text-gray-600 relative z-10">
          <li>✔ Aadhaar Card</li>
          <li>✔ PAN Card</li>
          <li>✔ Address Proof</li>
          <li>✔ Passport size photo</li>
        </ul>
      </motion.div>

    </div>
  </div>
</motion.section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/*gold loan calculator*/}
      <GoldLoanCalculator />

      {/* TESTIMONIALS */}
      <Testimonials sectionMotion={sectionMotion} />

{/* HAVE ANY QUESTIONS */}
<motion.section
  {...sectionMotion}
  className="py-24 bg-[#FFF8E8]"
>
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADER */}
    <div className="mb-16">
      <h2 className="text-4xl font-bold">
        Have Any <span className="text-yellow-500">Questions?</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Our support team is always ready to assist you with quick and reliable help.
      </p>

      {/* LINE */}
      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* CARDS */}
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {[
        {
          title: "Call Us",
          value: "+91 98765 43210",
          link: "tel:+919876543210",
          icon: "📞",
        },
        {
          title: "Email Us",
          value: "support@nationalgoldloan.in",
          link: "mailto:support@nationalgoldloan.in",
          icon: "✉️",
        },
        {
          title: "Visit Branch",
          value: "Locate nearest branch",
          link: "#",
          icon: "📍",
        },
      ].map((item, i) => (
        <motion.a
          href={item.link}
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-yellow-100 text-center relative overflow-hidden cursor-pointer"
        >
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

          {/* ICON */}
          <div className="text-3xl mb-4 relative z-10">
            {item.icon}
          </div>

          {/* TITLE */}
          <h4 className="font-semibold text-lg text-gray-900 mb-2 relative z-10">
            {item.title}
          </h4>

          {/* VALUE */}
          <p className="text-gray-600 relative z-10">
            {item.value}
          </p>
        </motion.a>
      ))}
    </motion.div>

    {/* EXTRA CTA */}
    <div className="mt-12">
      <p className="text-gray-600 mb-4">
        Need instant help?
      </p>

      <a
        href="https://wa.me/919211515369"
        target="_blank"
        className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
      >
        💬 Chat on WhatsApp
      </a>
    </div>

  </div>
</motion.section>
      
{/* FAQ SECTION */}
<motion.section
  {...sectionMotion}
  id="faqs"
  className="py-24 bg-[#FFF8E8]"
>
  <div className="max-w-5xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">
        Frequently Asked <span className="text-yellow-500">Questions</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Everything you need to know about our gold loan services.
      </p>

      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* FAQ LIST */}
    <div className="space-y-4">
      {[
        {
          q: "How much loan can I get against my gold?",
          a: "You can get up to 75% of the gold value depending on purity and weight as per RBI guidelines.",
        },
        {
          q: "Is my gold safe?",
          a: "Yes, your gold is stored in highly secure and insured vaults.",
        },
        {
          q: "How fast is the loan disbursal?",
          a: "Loan is disbursed within 30 minutes after verification.",
        },
        {
          q: "Do I need to sell my gold?",
          a: "No, you retain ownership and get your gold back after repayment.",
        },
      ].map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div
            key={index}
            onClick={() => setOpenFaq(isOpen ? null : index)}
            className="group relative rounded-2xl border border-yellow-200 overflow-hidden cursor-pointer"
          >
            {/* BACKGROUND FILL (ONLY DESKTOP) */}
            <div className="hidden md:block absolute inset-0 bg-yellow-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

            {/* CONTENT */}
            <div className="relative z-10 p-6">

              {/* QUESTION */}
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-900 
                  md:group-hover:text-black transition">
                  {faq.q}
                </h4>

                <span
                  className="text-yellow-500 md:group-hover:text-black text-2xl font-bold transition"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              <div
  className={`
    overflow-hidden transition-all duration-500 ease-in-out

    ${isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}

    md:group-hover:max-h-[500px]
    md:group-hover:opacity-100
    md:group-hover:mt-4
  `}
>
                <p className="text-gray-700 md:group-hover:text-black">
                  {faq.a}
                </p>
              </div>

            </div>
          </div>
        );
      })}
    </div>

  </div>
</motion.section>
{/* ABOUT US */}
<motion.section
  {...sectionMotion}
  id="about-us"
  className="py-24 bg-[#FFF8E8]"
>
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* HEADER */}
    <div className="mb-16">
      <h2 className="text-4xl font-bold">
        About <span className="text-yellow-500">National Gold Loan</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        A trusted platform providing fast, secure, and transparent gold loan services across India.
      </p>

      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
    </div>

    {/* MAIN CARD */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-yellow-100 overflow-hidden"
    >
      {/* GLOW */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

      <p className="text-gray-700 text-lg mb-6 relative z-10">
        <strong>National Gold Loan</strong> is the flagship brand of NBFC
        <strong> Shankar Fininvest Pvt. Ltd.</strong>, delivering fast and reliable
        financial solutions backed by strong compliance and security standards.
      </p>

      <p className="text-gray-700 relative z-10">
        With RBI-compliant processes, fully insured vault storage, and instant loan disbursal,
        we help customers meet urgent financial needs without selling their gold.
      </p>

      {/* TRUST BADGES */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 relative z-10">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-yellow-100">
          <p className="text-yellow-500 font-bold text-lg">RBI Compliant</p>
          <p className="text-sm text-gray-500">100% legal & regulated process</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-yellow-100">
          <p className="text-yellow-500 font-bold text-lg">Secure Vaults</p>
          <p className="text-sm text-gray-500">Fully insured gold storage</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-yellow-100">
          <p className="text-yellow-500 font-bold text-lg">Instant Disbursal</p>
          <p className="text-sm text-gray-500">Loan within 30 minutes</p>
        </div>
      </div>
    </motion.div>

  </div>
</motion.section>

      

      {/* FLOATING WHATSAPP */}
<motion.a
  href="https://wa.me/919211515369?text=Hi%20I%20want%20a%20gold%20loan"
  target="_blank"
  rel="noopener noreferrer"

  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}

  animate={{
    y: [0, -8, 0],
    boxShadow: [
      "0px 0px 0px rgba(255, 215, 0, 0.3)",
      "0px 0px 25px rgba(255, 215, 0, 0.8)",
      "0px 0px 0px rgba(255, 215, 0, 0.3)",
    ],
  }}

  transition={{
    y: { duration: 2.5, repeat: Infinity },
    boxShadow: { duration: 1.5, repeat: Infinity },
  }}

  className="fixed bottom-6 right-6 flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-3 rounded-full font-semibold shadow-xl z-50 border border-yellow-300"
>
  {/* ICON */}
  <span className="bg-white text-green-600 rounded-full w-9 h-9 flex items-center justify-center text-lg shadow-md">
    💬
  </span>

  {/* TEXT */}
  <span className="text-sm md:text-base">
    Get Loan in 30 mins
  </span>

  {/* PULSE DOT */}
  <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
</motion.a>

      <Footer />
    </main>
  );
}