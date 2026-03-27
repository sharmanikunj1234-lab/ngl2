"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ApplyNow() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const initialForm = {
    name: "",
    mobile: "",
    email: "",
    city: "",
    loanAmount: "",
    goldWeight: "",
    pan: "",
    aadhaar: "",
  };

  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const inputStyle =
    "w-full bg-yellow-50 border border-yellow-300 text-gray-900 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      ["mobile", "aadhaar", "loanAmount", "goldWeight"].includes(name) &&
      !/^\d*$/.test(value)
    )
      return;

    setFormData({
      ...formData,
      [name]: name === "pan" ? value.toUpperCase() : value,
    });
  };

  const resetForm = () => {
    setFormData(initialForm);
    setStep(1);
    setSuccess(false);
  };

  const submitApplication = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);

      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#FFF8E8] py-10 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Apply for Gold Loan
          </h1>

          {/* TRUST BADGES */}
          <div className="flex justify-center gap-4 text-xs text-gray-600 mb-6">
            <span>✔ RBI Partner</span>
            <span>✔ Safe & Secure</span>
            <span>✔ 10L+ Customers</span>
          </div>

          {/* PROGRESS BAR */}
          <div className="h-2 bg-gray-200 rounded mb-6">
            <div
              className="h-2 bg-yellow-500 rounded transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <input name="name" placeholder="Full Name" className={inputStyle} value={formData.name} onChange={handleChange} />
              <input name="mobile" placeholder="Mobile Number" className={inputStyle} value={formData.mobile} onChange={handleChange} />
              <input name="email" placeholder="Email Address" className={inputStyle} value={formData.email} onChange={handleChange} />
              <input name="city" placeholder="City / Pincode" className={inputStyle} value={formData.city} onChange={handleChange} />

              <button onClick={() => setStep(2)} className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Next
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input name="loanAmount" placeholder="Loan Amount (₹)" className={inputStyle} value={formData.loanAmount} onChange={handleChange} />
              <input name="goldWeight" placeholder="Gold Weight (grams)" className={inputStyle} value={formData.goldWeight} onChange={handleChange} />

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="w-1/2 border py-3 rounded-lg">
                  Back
                </button>
                <button onClick={() => setStep(3)} className="w-1/2 bg-yellow-500 py-3 rounded-lg font-semibold hover:bg-yellow-400">
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <input name="pan" placeholder="PAN Number" className={inputStyle} value={formData.pan} onChange={handleChange} />
              <input name="aadhaar" placeholder="Aadhaar Number" className={inputStyle} value={formData.aadhaar} onChange={handleChange} />

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="w-1/2 border py-3 rounded-lg">
                  Back
                </button>
                <button onClick={() => setStep(4)} className="w-1/2 bg-yellow-500 py-3 rounded-lg font-semibold hover:bg-yellow-400">
                  Review
                </button>
              </div>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <div className="bg-gray-800 p-5 rounded-lg text-sm mb-6">
                <p><b>Name:</b> {formData.name}</p>
                <p><b>Mobile:</b> {formData.mobile}</p>
                <p><b>Email:</b> {formData.email}</p>
                <p><b>City:</b> {formData.city}</p>
                <p><b>Loan:</b> ₹{formData.loanAmount}</p>
                <p><b>Gold:</b> {formData.goldWeight}g</p>
              </div>

              {success && (
                <div className="bg-green-600 text-white text-center p-4 rounded-lg mb-4">
                  ✅ Application Submitted Successfully
                </div>
              )}

              {!success && (
                <button
                  onClick={submitApplication}
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              )}

              {/* WHATSAPP FALLBACK */}
              <a
                href={`https://wa.me/9217900369?text=Name:${formData.name},Loan:${formData.loanAmount}`}
                target="_blank"
                className="block text-center mt-4 text-green-600"
              >
                Prefer WhatsApp? Click here
              </a>
            </>
          )}
        </div>
      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/9217900369"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </a>

      <Footer />
    </>
  );
}