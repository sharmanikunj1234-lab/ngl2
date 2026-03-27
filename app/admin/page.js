"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "1234";

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLoggedIn(true);

      const res = await fetch("/api/apply");
      const data = await res.json();
      setApplications(data);
    } else {
      alert("Invalid credentials");
    }
  };

  const filtered = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.mobile.includes(search)
  );

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF8E8] p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-black text-center">
            Admin Login
          </h2>

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 p-3 text-black border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 text-black border rounded"
          />

          <button className="w-full bg-yellow-500 py-3 rounded font-semibold">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#FFF8E8] p-6">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl text-black font-bold">Admin Dashboard</h1>

          <button
            onClick={() => setLoggedIn(false)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* SEARCH */}
        <input
          placeholder="Search by name or mobile"
          className="mb-6 p-3 border text-black rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* TABLE */}
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm">
            <thead className="bg-yellow-500 text-black">
              <tr>
                <th className="p-3">Name</th>
                <th>Mobile</th>
                <th>Loan</th>
                <th>City</th>
                <th>Gold</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((app, i) => (
                <tr key={i} className="border-t text-black text-center">
                  <td className="p-3">{app.name}</td>
                  <td>{app.mobile}</td>
                  <td>₹{app.loanAmount}</td>
                  <td>{app.city}</td>
                  <td>{app.goldWeight}g</td>

                  {/* ACTIONS */}
                  <td className="flex gap-2 justify-center p-2">

                    {/* CALL */}
                    <a
                      href={`tel:${app.mobile}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Call
                    </a>

                    {/* WHATSAPP */}
                    <a
                      href={`https://wa.me/91${app.mobile}?text=Hi ${app.name}, regarding your gold loan application`}
                      target="_blank"
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      WhatsApp
                    </a>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <p className="text-center mt-6 text-gray-500">
            No applications found
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}