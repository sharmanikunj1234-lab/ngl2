import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "National Gold Loan | Instant & Secure Gold Loans",
  description:
    "Apply for instant gold loans with low interest rates, safe gold storage, and quick disbursal. RBI-compliant gold loan services across India.",

  keywords: [
    "gold loan",
    "instant gold loan",
    "gold loan near me",
    "low interest gold loan",
    "national gold loan",
  ],

  openGraph: {
    title: "National Gold Loan | Trusted Gold Loan Services",
    description:
      "Fast, secure and transparent gold loans with instant disbursal.",
    url: "https://nationalgoldloan.in",
    siteName: "National Gold Loan",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "National Gold Loan Logo",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

