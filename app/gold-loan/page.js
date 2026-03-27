import Navbar from "../components/Navbar";
import GoldLoanCalculator from "../components/GoldLoanCalculator";
import Link from "next/link";
import Footer from "../components/Footer";

export default function GoldLoanPage() {
  return (
    <>
      <Navbar />

      <div className="bg-[#FFF8E8] min-h-screen py-20 text-center px-6">
        <h1 className="text-4xl text-black font-bold mb-6">
          Gold Loan Calculator
        </h1>

        <p className="text-gray-600 mb-10">
          Calculate your loan instantly & apply in minutes
        </p>

        <GoldLoanCalculator />

        <div className="mt-10">
          <Link href="/apply">
            <button className="bg-yellow-500 px-6 py-3 rounded-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}