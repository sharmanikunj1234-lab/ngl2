"use client";

import { useState, useEffect } from "react";

export default function GoldLoanCalculator() {
  const GOLD_RATE = 5000; // fixed gold rate per gram

  const [mode, setMode] = useState("amount");
  const [loanAmount, setLoanAmount] = useState(100000);
  const [goldWeight, setGoldWeight] = useState(20);
  const [particles, setParticles] = useState([]);

  // Floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  const goldRequired = (loanAmount / GOLD_RATE).toFixed(2);
  const loanEligible = (goldWeight * GOLD_RATE).toLocaleString();

  return (
    <div className="relative max-w-xl mx-auto p-4">

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-yellow-400 animate-float"
            style={{
              left: `${p.x}%`,
              bottom: '-10px',
              width: `${p.size}px`,
              height: `${p.size}px`,
              '--duration': `${p.duration}s`,
              '--delay': `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Motion Border */}
      <div className="relative rounded-3xl p-1">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 blur-lg animate-borderGlow opacity-90"></div>

        {/* Card */}
        <div className="relative bg-gray-800 rounded-3xl border-2 border-yellow-400 p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-shimmer-text bg-clip-text text-black">
              Gold Loan Calculator
            </h2>
          </div>

          {/* Mode Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-yellow-50 p-2 rounded-xl flex gap-2 shadow-inner relative">
              <div
                className="absolute top-2 bottom-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg transition-colors duration-200 transition-colors duration-300 ease-out shadow-lg"
                style={{ left: mode === "amount" ? "8px" : "50%", right: mode === "amount" ? "50%" : "8px" }}
              />
              {["amount","gold"].map(type => (
                <button
                  key={type}
                  onClick={() => setMode(type)}
                  className={`relative z-10 px-6 py-2.5 rounded-lg font-bold transition-colors duration-200 ${
                    mode === type ? "text-gray-900" : "text-yellow-700 hover:text-yellow-900"
                  }`}
                >
                  {type === "amount" ? "By Loan Amount" : "By Gold Weight"}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="space-y-8">
            {mode === "amount" ? (
              <div className="relative">
                <label className="block font-bold text-yellow-400 mb-3 text-sm uppercase tracking-wider">
                  Enter Loan Amount
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-2xl font-bold text-yellow-500 z-10">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={e => setLoanAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-6 py-4 bg-gray-900/90 text-white text-xl font-bold rounded-xl focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-colors duration-200"
                  />
                </div>
              </div>
            ) : (
              <div className="relative">
                <label className="block font-bold text-yellow-400 mb-3 text-sm uppercase tracking-wider">
                  Enter Gold Weight
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    value={goldWeight}
                    onChange={e => setGoldWeight(Number(e.target.value))}
                    className="w-full px-6 py-4 bg-gray-900/90 text-white text-xl font-bold rounded-xl focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-colors duration-200"
                  />
                  <span className="absolute right-4 text-sm font-bold text-yellow-500 uppercase">grams</span>
                </div>
              </div>
            )}

            {/* Result */}
            <div className="relative group mt-8">
              <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 rounded-2xl p-8 text-center shadow-xl">
                <p className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-2 opacity-90">
                  {mode === "amount" ? "Gold Required" : "Eligible Loan Amount"}
                </p>
                <h3 className="text-5xl md:text-6xl font-black text-gray-900">
                  {mode === "amount" ? (
                    <>
                      {goldRequired}<span className="text-3xl ml-2">grams</span>
                    </>
                  ) : (
                    <>₹ {loanEligible}</>
                  )}
                </h3>
              </div>
            </div>

            {/* Gold Rate Info */}
            <div className="text-center pt-4">
              <p className="text-yellow-200/70 text-sm">
                Gold Rate: <span className="text-yellow-400 font-bold">₹{GOLD_RATE.toLocaleString()}/gram</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,100% { transform: translateY(0); opacity:0; }
          10%,90% { opacity:1; }
          100% { transform: translateY(-120vh) translateX(15px); opacity:0; }
        }

        @keyframes shimmerText { to { background-position: 200% center; } }

        @keyframes borderGlow {
          0% { filter: drop-shadow(0 0 5px #facc15) drop-shadow(0 0 10px #f59e0b); }
          50% { filter: drop-shadow(0 0 15px #facc15) drop-shadow(0 0 25px #f59e0b); }
          100% { filter: drop-shadow(0 0 5px #facc15) drop-shadow(0 0 10px #f59e0b); }
        }

        .animate-float { animation: float var(--duration) ease-in-out var(--delay) infinite; }
        .bg-shimmer-text { background: linear-gradient(90deg, #b45309,#facc15,#fde68a,#facc15,#b45309); background-size:200% auto; animation: shimmerText 3s linear infinite; }
        .animate-borderGlow { animation: borderGlow 2s infinite; }
      `}</style>
    </div>
  );
}
