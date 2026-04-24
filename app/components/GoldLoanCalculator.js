"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GoldLoanCalculator() {
  const [goldWeight, setGoldWeight] = useState(20); // grams
  const [goldRate, setGoldRate] = useState(6000); // per gram
  const [ltv, setLtv] = useState(75); // %

  // calculation
  const goldValue = goldWeight * goldRate;
  const loanAmount = (goldValue * ltv) / 100;

  return (
    <section id="gold-calculator" className="py-20 bg-[#FFF8EA]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Gold Loan <span className="text-yellow-500">Calculator</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Calculate how much loan you can get instantly against your gold
          </p>
          {/* LINE */}
      <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>
         
    

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-yellow-200/40"
        >
          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT - INPUTS */}
            <div className="space-y-8">

              {/* GOLD WEIGHT */}
              <div>
                <label className="font-semibold text-gray-800">
                  Gold Weight (grams)
                </label>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(e.target.value)}
                  className="w-full mt-3 accent-yellow-500"
                />
                <p className="mt-1 text-yellow-600 font-semibold">
                  {goldWeight} grams
                </p>
              </div>

              {/* GOLD RATE */}
              <div>
                <label className="font-semibold text-gray-800">
                  Gold Rate (₹/gram)
                </label>
                <input
                  type="range"
                  min="8000"
                  max="20000"
                  step="100"
                  value={goldRate}
                  onChange={(e) => setGoldRate(e.target.value)}
                  className="w-full mt-3 accent-yellow-500"
                />
                <p className="mt-1 text-yellow-600 font-semibold">
                  ₹{goldRate}
                </p>
              </div>

              {/* LTV */}
              <div>
                <label className="font-semibold text-gray-800">
                  Loan to Value (%)
                </label>
                <input
                  type="range"
                  min="50"
                  max="75"
                  value={ltv}
                  onChange={(e) => setLtv(e.target.value)}
                  className="w-full mt-3 accent-yellow-500"
                />
                <p className="mt-1 text-yellow-600 font-semibold">
                  {ltv}%
                </p>
              </div>

            </div>

            {/* RIGHT - OUTPUT */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 text-black shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6">
                Your Loan Estimate
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Gold Value</span>
                  <span className="font-semibold">
                    ₹{goldValue.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Eligible Loan</span>
                  <span className="font-bold text-2xl">
                    ₹{loanAmount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="text-sm opacity-80 mt-4">
                  *Final loan amount may vary based on purity & verification
                </div>

              </div>

              {/* CTA */}
              <button className="mt-8 w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Apply Now
              </button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}