export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#fcf2d6] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Terms & Conditions
        </h1>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>National Gold Loan</strong>. These Terms and
            Conditions govern your use of our gold loan and financial services.
            National Gold Loan is operated by <strong>LendingPay Technology Pvt. Ltd.</strong>
            and is associated with NBFC partner <strong>Shankar Fininvest Pvt. Ltd.</strong>,
            an RBI-regulated financial institution.
          </p>
          <p className="text-gray-700 mt-3">
            By accessing or using our services, you agree to be bound by these
            Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        {/* 2. Service Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. Service Description</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Gold loan services against pledged gold</li>
            <li>Gold valuation and loan eligibility assessment</li>
            <li>Transparent interest rate and repayment guidance</li>
            <li>Customer support and loan servicing assistance</li>
          </ul>
          <p className="text-gray-700 mt-3">
            <strong>Important:</strong> We do not guarantee loan approval amounts
            beyond RBI-prescribed limits. Loan approval is subject to gold purity,
            valuation, and regulatory norms.
          </p>
        </section>

        {/* 3. NBFC Association */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. NBFC Association</h2>
          <p className="text-gray-700">
            National Gold Loan is associated with <strong>Shankar Fininvest Pvt. Ltd.</strong>,
            a Non-Banking Financial Company (NBFC) registered and regulated by the
            Reserve Bank of India (RBI). This ensures:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Compliance with RBI rules and guidelines</li>
            <li>Ethical and transparent lending practices</li>
            <li>Secure and professional gold loan services</li>
          </ul>
        </section>

        {/* 4. User Obligations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. User Obligations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide accurate and complete personal and financial information</li>
            <li>Ensure lawful ownership of pledged gold</li>
            <li>Repay loan dues as per agreed terms</li>
            <li>Not misuse or attempt to manipulate services</li>
            <li>Comply with all applicable Indian laws</li>
          </ul>
        </section>

        {/* 5. Service Limitations */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            5. Service Limitations & Disclaimers
          </h2>
          <p className="text-gray-700">
            <strong>No Guaranteed Results:</strong> Loan amounts and interest rates
            depend on gold valuation, purity, and RBI norms.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>No False Promises:</strong> We do not offer illegal practices
            or false commitments.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Third-Party Decisions:</strong> Final lending decisions rest
            with the NBFC partner.
          </p>
        </section>

        {/* 6. Fees */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Fees & Payments</h2>
          <p className="text-gray-700">
            All applicable interest rates, processing fees, and charges will be
            clearly communicated before loan disbursal. Fees are subject to change
            as per regulatory guidelines.
          </p>
        </section>

        {/* 7. Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Intellectual Property</h2>
          <p className="text-gray-700">
            All content, logos, designs, and materials on this website are the
            property of National Gold Loan and its partners. Unauthorized use is prohibited.
          </p>
        </section>

        {/* 8. Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Termination</h2>
          <p className="text-gray-700">
            We reserve the right to suspend or terminate services if these Terms
            are violated or if fraudulent activity is detected.
          </p>
        </section>

        {/* 9. Liability */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
          <p className="text-gray-700">
            National Gold Loan and its partners shall not be liable for indirect or
            consequential damages. Liability shall not exceed fees paid in the
            preceding six months.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p className="text-gray-700">
            These Terms shall be governed by the laws of India. Courts in
            New Delhi shall have exclusive jurisdiction.
          </p>
        </section>

        {/* 11. Changes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">11. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms at any time. Continued use of services
            constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* 12. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Contact Information</h2>
          <p className="text-gray-700">
            <strong>National Gold Loan</strong><br />
            Associated with NBFC – Shankar Fininvest Pvt. Ltd.<br />
            Phone: +91 9211515369<br />
            Address: 138, 2nd/3rd Floor, Gaffar Market, Karol Bagh,
            New Delhi – 110005, India
          </p>
        </section>

      </div>
    </main>
  );
}
