"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ApplyModal from "./ApplyModal"; // import this

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <section className="py-20 bg-[#FFF8E8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* ROUNDED HERO BOX */}
        <div className="bg-gradient-to-r from-[#FFF8E8] via-[#FFF3D6] to-[#FFE8A3] rounded-[50px] p-10 md:p-16 shadow-lg border border-yellow-400">
            
          

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Turn Your <span className="text-yellow-500">Gold</span> Into Cash  
                <br /> in Just 30 Minutes
              </h1>

              <p className="text-yellow-500 mt-6 text-xl">
                Get up to ₹10 Lakhs instantly • No credit check • 100% secure gold storage
              </p>

              {/* TRUST BADGES */}
              <div className="flex flex-wrap gap-4 mt-8 text-sm font-semibold text-gray-700">
                <span>✔ RBI Registered Partner</span>
                <span>✔ 100% Insured Gold</span>
                <span>✔ 4.8⭐ Customer Rating</span>
              </div>

              {/* CTA */}
              <div className="flex gap-4 mt-12 flex-wrap">

                <motion.button
                  onClick={() => setOpenModal(true)} // 🔥 THIS IS THE CHANGE

                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}

                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(255, 215, 0, 0.4)",
                      "0px 0px 12px rgba(255, 215, 0, 0.5)",
                      "0px 0px 0px rgba(255, 215, 0, 0.4)",
                    ],
                  }}

                  transition={{ duration: 1.5, repeat: Infinity }}

                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold"
                >
                  Apply Now
                </motion.button>

                <motion.a
                  href="https://wa.me/919211515369?text=Hi%20I%20want%20a%20gold%20loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(255, 215, 0, 0.4)",
                      "0px 0px 12px rgba(255, 215, 0, 0.5)",
                      "0px 0px 0px rgba(255, 215, 0, 0.4)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="border border-green-500 text-green-700 px-6 py-4 rounded-lg font-semibold bg-white"
                >
                  💬 WhatsApp Now
                </motion.a>
              </div>

              {/* URGENCY */}
              <p className="text-red-500 mt-8 font-medium">
                🔥 Limited Time: 0 Processing Fee Today
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <motion.img
                src="/jwellery1.png"
                alt="Gold Loan"
                className="w-[420px]"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
      <ApplyModal
  open={openModal}
  onClose={() => setOpenModal(false)}
/>
</>
  );
}