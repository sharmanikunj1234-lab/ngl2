"use client";

import { motion } from "framer-motion";
import {
  FaRegHandPaper,
  FaMoneyBillWave,
  FaCheckCircle,
  FaWallet,
} from "react-icons/fa";

const steps = [
  {
    step: 1,
    title: "Submit Request",
    description: "Fill in your loan details and basic KYC information.",
    icon: FaRegHandPaper,
  },
  {
    step: 2,
    title: "Verification",
    description: "Our team verifies your documents quickly and securely.",
    icon: FaCheckCircle,
  },
  {
    step: 3,
    title: "Gold Valuation",
    description: "We assess your gold accurately for maximum value.",
    icon: FaWallet,
  },
  {
    step: 4,
    title: "Receive Funds",
    description: "Get your loan instantly in your bank account.",
    icon: FaMoneyBillWave,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#FFF8E8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Get Your Gold Loan in <span className="text-yellow-500">4 Simple Steps</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From application to cash in hand — it's faster than you think.
          </p>

          {/* LINE */}
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* STEPS */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CONNECTING LINE (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-[2px] bg-yellow-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-yellow-100 text-center z-10"
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

              {/* STEP NUMBER BADGE */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-full shadow-md">
                Step {step.step}
              </div>

              {/* ICON */}
              <div className="w-16 h-16 mx-auto rounded-xl bg-yellow-100 flex items-center justify-center mb-6 mt-4">
                <step.icon className="w-7 h-7 text-yellow-600" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}