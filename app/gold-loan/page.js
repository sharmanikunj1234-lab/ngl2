import Header from "../components/Header";
import Footer from "../components/Footer";
import GoldLoanCalculator from "../components/GoldLoanCalculator";

export default function GoldLoanPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-800 py-14 px-4">
        <h1 className="text-center text-4xl font-extrabold text-yellow-400 mb-4">
          Gold Loan
        </h1>

        <p className="text-center text-yellow-200/70 mb-10">
          Calculate your gold loan instantly
        </p>

        <GoldLoanCalculator />
      </div>

      <Footer />
    </>
  );
}
