import type { Metadata } from "next";
import { Anta } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { siteConfig } from "@/lib/constants";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const anta = Anta({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${anta.className} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
