"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);

  // Simple hardcoded credentials
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "1234";

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLoggedIn(true);

      // Fetch applications
      const res = await fetch("/api/apply");
      const data = await res.json();
      setApplications(data);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!loggedIn) {
    // Login form
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            Admin Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full text-black mb-4 p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-black mb-6 p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // Admin dashboard
return (
  <>
    <Header />

    <div className="min-h-screen bg-gray-100 p-6">
        <button
  onClick={() => setLoggedIn(false)}
  className="w-1/4 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
>
  Logout
</button>

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-300">
              <th className="border p-2">Name</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">City</th>
              <th className="border p-2">Loan Amount</th>
              <th className="border p-2">Gold Weight</th>
              <th className="border p-2">PAN</th>
              <th className="border p-2">Aadhaar</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr key={idx} className="text-center">
                <td className="border p-2">{app.name}</td>
                <td className="border p-2">{app.mobile}</td>
                <td className="border p-2">{app.email}</td>
                <td className="border p-2">{app.city}</td>
                <td className="border p-2">{app.loanAmount}</td>
                <td className="border p-2">{app.goldWeight}</td>
                <td className="border p-2">{app.pan}</td>
                <td className="border p-2">{app.aadhaar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

    <Footer />
  </>
);

}
