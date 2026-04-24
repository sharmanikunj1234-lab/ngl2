"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Testimonials({ sectionMotion }) {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Rohit Sharma",
      city: "Delhi",
      review: "Quick process and transparent interest rates.",
    },
    {
      name: "Sunita Verma",
      city: "Jaipur",
      review: "Very safe and professional service.",
    },
    {
      name: "Amit Patel",
      city: "Ahmedabad",
      review: "Best gold loan experience.",
    },
    {
      name: "Neha Singh",
      city: "Lucknow",
      review: "Very fast loan approval process.",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        container.scrollLeft += 0.5; // smoother
        scrollAmount += 0.5;

        if (scrollAmount >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
          scrollAmount = 0;
        }
      }, 16); // smoother animation
    };

    const stopScroll = () => clearInterval(interval);

    startScroll();

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <motion.section
      {...sectionMotion}
      className="py-24 bg-[#FFF8E8]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            What Our <span className="text-yellow-500">Customers Say</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real experiences from customers who trust us for fast and secure gold loans.
          </p>

          {/* LINE */}
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* SCROLLER */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          {[...testimonials, ...testimonials].map((user, i) => (
            <motion.div
              key={i}
              className="min-w-[320px] md:min-w-[380px] bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-yellow-100 relative overflow-hidden"

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}

              whileHover={{ scale: 1.05 }}
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>

              {/* STARS */}
              <div className="text-yellow-400 mb-3 text-lg relative z-10">
                ★★★★★
              </div>

              {/* REVIEW */}
              <p className="text-gray-600 mb-6 italic relative z-10">
                “{user.review}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {user.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {user.city}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}