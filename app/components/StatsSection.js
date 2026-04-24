"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection({ sectionMotion }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      {...sectionMotion}
      className="py-20 bg-[#FFF8E8]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">
            Trusted by <span className="text-yellow-500">Thousands</span>
          </h3>
          <p className="text-gray-600 mt-4">
            Fast, secure and reliable gold loan services you can trust.
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
    

        {/* STATS CONTAINER */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6 mt-4"
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

          {/* CARD 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-yellow-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

            <h4 className="text-4xl font-bold text-yellow-500 relative z-10">
              <Counter end={1000000} suffix="+" start={isInView} />
            </h4>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Customers Served
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-yellow-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

            <h4 className="text-4xl font-bold text-yellow-500 relative z-10">
              ₹<Counter end={500} suffix="Cr+" start={isInView} />
            </h4>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Loans Disbursed
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-yellow-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

            <h4 className="text-4xl font-bold text-yellow-500 relative z-10">
              <Counter end={100} suffix="%" start={isInView} />
            </h4>
            <p className="text-sm text-gray-600 mt-2 relative z-10">
              Secure Storage
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}