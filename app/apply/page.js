"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApplyNow() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    loanAmount: "",
    goldWeight: "",
    pan: "",
    aadhaar: "",
  });

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // Input change handler with validation rules
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "city") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    if (name === "mobile" || name === "aadhaar") {
      if (!/^\d*$/.test(value)) return;
    }

    if (name === "loanAmount" || name === "goldWeight") {
      if (!/^\d*$/.test(value)) return;
    }

    if (name === "pan") {
      if (!/^[A-Z0-9]*$/.test(value.toUpperCase())) return;
    }

    setFormData({ ...formData, [name]: value.toUpperCase() });
  };

  // Step validations
  const validateStep1 = () => {
    const newErrors = {};
    if (!/^[A-Za-z ]{3,}$/.test(formData.name))
      newErrors.name = "Enter valid full name";
    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter valid email address";
    if (!formData.city) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.loanAmount || formData.loanAmount <= 0)
      newErrors.loanAmount = "Enter valid loan amount";
    if (!formData.goldWeight || formData.goldWeight <= 0)
      newErrors.goldWeight = "Enter valid gold weight";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan))
      newErrors.pan = "Invalid PAN format";
    if (!/^\d{12}$/.test(formData.aadhaar))
      newErrors.aadhaar = "Aadhaar must be 12 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      city: "",
      loanAmount: "",
      goldWeight: "",
      pan: "",
      aadhaar: "",
    });
    setErrors({});
    setSuccess(false);
    setLoading(false);
    setStep(1);
  };

  // Submit handler
  const submitApplication = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Something went wrong");

      setSuccess(true);

      setTimeout(() => {
        resetForm();
      }, 3000);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 py-10 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
          {/* STEP INDICATOR */}
          <div className="h-2 w-full bg-gray-200 rounded mb-4">
            <div
              className="h-2 bg-yellow-600 rounded transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-black mb-4">Step {step} of 4</p>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2 className="text-2xl text-black font-bold mb-6">Personal Details</h2>

              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-4 p-3 border rounded"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mb-2">{errors.name}</p>
              )}

              <input
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-4 p-3 border rounded"
              />
              {errors.mobile && (
                <p className="text-red-600 text-sm mb-2">{errors.mobile}</p>
              )}

              <input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-4 p-3 border rounded"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mb-2">{errors.email}</p>
              )}

              <input
                name="city"
                placeholder="City / Pincode"
                value={formData.city}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-6 p-3 border rounded"
              />
              {errors.city && (
                <p className="text-red-600 text-sm mb-4">{errors.city}</p>
              )}

              <button
                onClick={() => validateStep1() && setStep(2)}
                className="w-full bg-yellow-600 text-white py-3 rounded transition-all duration-200 hover:scale-[1.02] hover:bg-yellow-700 active:scale-[0.98] cursor-pointer"
              >
                Next
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2 className="text-2xl text-black font-bold mb-6">Loan Details</h2>

              <input
                name="loanAmount"
                placeholder="Loan Amount Required"
                value={formData.loanAmount}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-4 p-3 border rounded"
              />

              <input
                name="goldWeight"
                placeholder="Approx Gold Weight (grams)"
                value={formData.goldWeight}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-6 p-3 border rounded"
              />

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 text-black border py-3 rounded"
                >
                  Back
                </button>
                <button
                  onClick={() => validateStep2() && setStep(3)}
                  className="w-1/2 bg-yellow-600 text-white py-3 rounded transition-all duration-200 hover:scale-[1.02] hover:bg-yellow-700 active:scale-[0.98] cursor-pointer"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2 className="text-2xl text-black font-bold mb-6">KYC Details</h2>

              <input
                name="pan"
                placeholder="PAN Number"
                value={formData.pan}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-4 p-3 border rounded"
              />
              {errors.pan && (
                <p className="text-red-600 text-sm mb-2">{errors.pan}</p>
              )}

              <input
                name="aadhaar"
                placeholder="Aadhaar Number"
                value={formData.aadhaar}
                onChange={handleChange}
                className="w-full text-black placeholder-gray mb-6 p-3 border rounded"
              />
              {errors.aadhaar && (
                <p className="text-red-600 text-sm mb-2">{errors.aadhaar}</p>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-yellow-600 text-white py-3 rounded transition-all duration-200 hover:scale-[1.02] hover:bg-yellow-700 active:scale-[0.98] cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={() => validateStep3() && setStep(4)}
                  className="w-full bg-yellow-600 text-white py-3 rounded transition-all duration-200 hover:scale-[1.02] hover:bg-yellow-700 active:scale-[0.98] cursor-pointer"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h2 className="text-2xl text-black font-bold mb-6">Review & Submit</h2>

              {success && (
                <div className="bg-green-100 text-gray-900 p-3 rounded mb-4 text-center">
                  ✅ Application submitted successfully!
                </div>
              )}

              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                <li>
                  <b>Name:</b> {formData.name}
                </li>
                <li>
                  <b>Mobile:</b> {formData.mobile}
                </li>
                <li>
                  <b>Email:</b> {formData.email}
                </li>
                <li>
                  <b>City:</b> {formData.city}
                </li>
                <li>
                  <b>Loan Amount:</b> {formData.loanAmount}
                </li>
                <li>
                  <b>Gold Weight:</b> {formData.goldWeight}
                </li>
                <li>
                  <b>PAN:</b> {formData.pan}
                </li>
                <li>
                  <b>Aadhaar:</b>{" "}
                  {formData.aadhaar.replace(/\d{8}(\d{4})/, "XXXX-XXXX-$1")}
                </li>
              </ul>

              <button
                type="button"
                disabled={loading || success}
                onClick={submitApplication}
                className={`w-full py-3 rounded text-white ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
                }`}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
