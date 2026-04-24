"use client";

import { motion } from "framer-motion";
import { FaBolt, FaShieldAlt, FaLock, FaPercentage } from "react-icons/fa";

const benefits = [
  {
    title: "Instant Loan Approval",
    desc: "Apply in minutes and get your loan approved quickly with minimal documentation.",
    icon: FaBolt,
  },
  {
    title: "Low Interest Rates",
    desc: "Enjoy competitive and transparent interest rates with no hidden charges.",
    icon: FaPercentage,
  },
  {
    title: "100% Safe Storage",
    desc: "Your gold is stored securely in insured vaults with highest safety standards.",
    icon: FaLock,
  },
  {
    title: "RBI Compliant Process",
    desc: "Fully compliant with RBI guidelines through trusted NBFC partnerships.",
    icon: FaShieldAlt,
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-[#FFF8E8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-3">
            Built-in <span className="text-yellow-500">Benefits</span>
          </h3>
          <p className="text-gray-600">
            Everything designed to give you a fast, secure and smooth loan experience.
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* BIG RECTANGLE CARDS */}
        <div className="space-y-6">

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.1)",
              }}
              className="flex items-center gap-6 p-8 md:p-10 rounded-[40px] 
              bg-gradient-to-r from-[#FFFDF5] via-[#FFF4D6] to-[#FFE8A3]
              border border-yellow-200/50"
            >

              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm">
                <item.icon className="text-yellow-500 text-2xl" />
              </div>

              {/* TEXT */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}