"use client";

import { useState } from "react";

export default function FastLeadForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {
    let e = {};

    if (!name.trim() || name.length < 3) {
      e.name = "Enter valid full name";
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      e.mobile = "Enter valid mobile number";
    }

    if (!consent) {
      e.consent = "Required";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      // 🔥 TELEGRAM / API CALL
      await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          mobile,
        }),
      });

      setSuccess(true);

      // 🔥 Optional: auto WhatsApp open (HIGH CONVERSION)
      window.open(
  `https://wa.me/919211515369?text=Hi, my name is ${name} and I want a gold loan. My number is ${mobile}`,
  "_blank"
);

    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md mx-auto">

      {/* SUCCESS */}
      {success ? (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-600 mb-2">
            ✅ Request Received
          </h2>
          <p className="text-gray-500">
            Our team will call you within 5 minutes
          </p>
        </div>
      ) : (
        <>
          {/* TITLE */}
          <h1 className="text-2xl font-bold mb-2">
            Let’s get you started
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Enter your details to get instant gold loan
          </p>

          {/* NAME */}
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mb-2">{errors.name}</p>
          )}

          {/* MOBILE */}
          <div className="flex border rounded-xl overflow-hidden mb-2">
            <span className="px-4 flex items-center bg-gray-100 text-gray-700">
              +91
            </span>
            <input
              value={mobile}
              maxLength={10}
              onChange={(e) =>
                setMobile(e.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter mobile number"
              className="w-full px-3 py-3 outline-none"
            />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-xs mb-2">{errors.mobile}</p>
          )}

          {/* CONSENT */}
          <label className="flex gap-2 mt-2 text-xs text-gray-600">
            <input
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
            />
            I agree to be contacted via call, SMS, WhatsApp.
          </label>
          {errors.consent && (
            <p className="text-red-500 text-xs">{errors.consent}</p>
          )}

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Get Loan in 30 mins"}
          </button>

          {/* TRUST */}
          <div className="flex justify-center gap-4 mt-5 text-xs text-gray-500">
            <span>✔ Safe</span>
            <span>✔ Fast</span>
            <span>✔ Trusted</span>
          </div>
        </>
      )}
    </div>
  );
}