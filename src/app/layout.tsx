import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://adamastechconsulting.com"),
  title: {
    default: "Adamas Tech Consulting | Enterprise IT Consultancy & Digital Transformation",
    template: "%s | Adamas Tech Consulting",
  },
  description:
    "Adamas Tech Consulting is a premier enterprise IT consultancy specializing in SAP Solutions, AWS Cloud Services, AI/ML Analytics, Oracle NetSuite, and campus management software.",
  keywords: [
    "Adamas Tech Consulting",
    "Enterprise IT Consultancy",
    "SAP Solutions",
    "AWS Cloud Services",
    "Oracle NetSuite",
    "AI ML Computer Vision",
    "Arivoo UMS",
    "Arivoo SMS",
    "Arivoo LMS",
    "TestGUARD",
    "Digital Transformation",
    "UAE E-Invoicing",
    "London IT Consulting"
  ],
  authors: [{ name: "Adamas Tech Consulting" }],
  openGraph: {
    title: "Adamas Tech Consulting | Enterprise IT Consultancy & Digital Transformation",
    description: "Driving enterprise growth through tailored SAP, Cloud, AI/ML, and campus management solutions.",
    url: "https://adamastechconsulting.com",
    siteName: "Adamas Tech Consulting",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Adamas Tech Consulting Enterprise Cloud Architecture",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adamas Tech Consulting | Enterprise IT Consultancy",
    description: "Architecting high-scale enterprise cloud, SAP, and proprietary campus management systems.",
    images: ["/images/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
