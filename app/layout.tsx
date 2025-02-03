import type { Metadata } from "next";
import { Anta } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { siteConfig } from "@/lib/constants";

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
        className={` ${anta.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
