import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.css'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EcoCrate",
  description: "Your one-stop shop for eco-friendly and sustainable products. Join us in making a positive impact on our planet.",
  keywords: "eco-friendly, sustainable, green products, environmental, sustainable living",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
