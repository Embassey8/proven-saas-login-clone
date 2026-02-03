import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proven SaaS - Discover High-Performing Facebook Ads",
  description:
    "Analyze the best-performing Facebook advertisements from SaaS companies. Filter by category, technology, and performance metrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
