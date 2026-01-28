"use client";

import { motion } from "framer-motion";
import { FaRegHandPaper, FaMoneyBillWave, FaCheckCircle, FaWallet } from "react-icons/fa";

const steps = [
  {
    step: 1,
    title: "Submit Request",
    description: "Fill in your loan details and KYC information.",
    icon: FaRegHandPaper,
  },
  {
    step: 2,
    title: "Verification",
    description: "Our team verifies your documents quickly.",
    icon: FaCheckCircle,
  },
  {
    step: 3,
    title: "Gold Valuation",
    description: "We assess your gold accurately for loan approval.",
    icon: FaWallet,
  },
  {
    step: 4,
    title: "Receive Funds",
    description: "Get your loan instantly after approval.",
    icon: FaMoneyBillWave,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-10 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-4xl font-bold text-white mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg">
            Get your loan in 4 simple steps. Quick, transparent, and hassle-free.
          </p>
        </motion.div>

        {/* Steps - Each in its own card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 mx-auto rounded-full bg-yellow-400/20 border-4 border-yellow-400 flex items-center justify-center mb-6">
                <step.icon className="w-16 h-16 text-yellow-400" />
              </div>

              {/* Step Number */}
              <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full mb-4">
                Step {step.step}
              </div>

              {/* Step Title */}
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>

              {/* Step Description */}
              <p className="text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
