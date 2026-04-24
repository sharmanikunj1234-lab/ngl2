"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function ApplyNow() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [timer, setTimer] = useState(8);

  // OTP STATE
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const inputStyle =
    "w-full bg-white border border-gray-300 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500";

  // ⏱ TIMER
  useEffect(() => {
    if (step === 2 && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  // ✅ VALIDATION
  const validateStep1 = () => {
    let newErrors = {};

    if (!name || name.trim().length < 3) {
      newErrors.name = "Enter valid full name";
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!consent) {
      newErrors.consent = "Please accept terms to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // OTP HANDLER
  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpArray];
    newOtp[index] = value;
    setOtpArray(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // HANDLE PASTE (🔥 premium UX)
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d{6}$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtpArray(newOtp);

    inputsRef.current[5]?.focus();
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#FFF8E8] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-200"
        >
          {/* HEADING */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Let’s get you started
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Enter your details to continue your gold loan application
          </p>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors({ ...errors, name: "" });
                }}
                className={`${inputStyle} mb-1`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mb-3">{errors.name}</p>
              )}

              {/* MOBILE */}
              <div className="flex items-center border border-gray-300 rounded-xl mb-1 overflow-hidden">
                <span className="px-4 bg-gray-100 text-gray-700 font-medium">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={(e) => {
                    if (/^\d*$/.test(e.target.value)) {
                      setMobile(e.target.value);
                      setErrors({ ...errors, mobile: "" });
                    }
                  }}
                  className="w-full px-4 py-3 outline-none"
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-xs mb-3">{errors.mobile}</p>
              )}

              {/* CONSENT */}
              <div className="flex items-start gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={() => {
                    setConsent(!consent);
                    setErrors({ ...errors, consent: "" });
                  }}
                  className="mt-1"
                />
                <p className="text-xs text-gray-600 leading-relaxed">
                  I grant permission to Capri Loans and its representatives to
                  reach out via call, SMS, email, or WhatsApp regarding my
                  application. This overrides DNC/NDNC registration.
                </p>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-xs mb-4">{errors.consent}</p>
              )}

              {/* BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (validateStep1()) {
                    setStep(2);
                    setTimer(8);
                  }
                }}
                className="w-full bg-yellow-500 py-3 rounded-xl font-semibold hover:bg-yellow-400"
              >
                Send OTP
              </motion.button>
            </>
          )}

          {/* STEP 2: OTP */}
          {step === 2 && (
            <>
              <h2 className="text-xl text-gray-600 font-semibold mb-2">
                Verify your number
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Enter the 6-digit OTP sent to +91 {mobile}
                <button
                  onClick={() => setStep(1)}
                  className="text-blue-600 underline ml-2"
                >
                  Edit
                </button>
              </p>

              {/* OTP BOXES */}
              <div
                className="flex justify-between gap-3 mb-6"
                onPaste={handlePaste}
              >
                {otpArray.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                      handleOtpChange(e.target.value, index)
                    }
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-14 text-center text-xl border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none"
                  />
                ))}
              </div>

              {/* VERIFY BUTTON */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  const finalOtp = otpArray.join("");
                  if (finalOtp.length === 6) {
                    setStep(3);
                  } else {
                    alert("Enter complete OTP");
                  }
                }}
                className="w-full bg-yellow-500 py-3 rounded-xl font-semibold hover:bg-yellow-400"
              >
                Verify OTP
              </motion.button>

              {/* TIMER / RESEND */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                {timer > 0 ? (
                  <>
                    You will receive an OTP within{" "}
                    <span className="font-semibold">
                      00:{timer < 10 ? `0${timer}` : timer}
                    </span>{" "}
                    secs
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setTimer(8);
                      setOtpArray(["", "", "", "", "", ""]);
                    }}
                    className="text-blue-600 font-medium"
                  >
                    Resend OTP
                  </button>
                )}
              </p>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2 className="text-xl font-bold text-green-600 mb-3">
                ✅ Application Received
              </h2>

              <p className="text-gray-600 text-sm mb-6">
                Our loan expert will contact you shortly.
              </p>

              <motion.a
                href="https://wa.me/919211515369"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                className="block text-center bg-green-500 text-white py-3 rounded-xl font-semibold"
              >
                💬 Continue on WhatsApp
              </motion.a>
            </>
          )}
        </motion.div>
      </div>

      <Footer />
    </>
  );
}