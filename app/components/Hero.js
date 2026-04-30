"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ApplyModal from "./ApplyModal";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* ADD PROPER TOP SPACING */}
      <section className="pt-6 md:pt-10 pb-16 bg-[#FFF8E8]">
        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* HERO BOX */}
          <div className="bg-gradient-to-r from-[#FFF8E8] via-[#FFF3D6] to-[#FFE8A3] rounded-[30px] md:rounded-[50px] p-6 md:p-12 shadow-lg border border-yellow-400">

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

              {/* LEFT */}
              <div>

                <h1 className="text-3xl md:text-6xl leading-tight font-bold text-gray-900">
                  Simple, Secure{" "}
                  <span className="text-yellow-500">Gold</span> Loans,
                  <br className="hidden md:block" /> Just the Way It Should Be
                </h1>

                <p className="text-yellow-600 mt-4 md:mt-6 text-base md:text-xl">
                  Low interest rates • Quick disbursal • 100% secure vaults
                </p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 text-sm font-semibold text-gray-700">
                  <span>✔ RBI Registered Partner</span>
                  <span>✔ 100% Insured Gold</span>
                  <span>✔ 4.8⭐ Customer Rating</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                  <motion.button
                    onClick={() => setOpenModal(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-yellow-500 text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-md cursor-pointer"
                  >
                    Apply Now
                  </motion.button>

                  <motion.a
                    href="https://wa.me/919211515369?text=Hi%20I%20want%20a%20gold%20loan"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border border-green-500 text-green-700 px-6 py-3 rounded-lg font-semibold bg-white text-center"
                  >
                    💬 WhatsApp Now
                  </motion.a>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center mt-6 md:mt-0">
                <motion.img
                  src="/jwellery1.png"
                  alt="Gold Loan"
                  className="w-full max-w-[300px] md:max-w-[420px] h-auto"
                  animate={{ y: [0, -10, 0] }}
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