import "@/app/globals.css";

import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Open_Sans, Poppins } from "next/font/google";

import type React from "react";

export const metadata: Metadata = {
  title: "Daily.dev",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

const poppins: NextFontWithVariable = Poppins({
  variable: "--font-poppins",
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

const openSans: NextFontWithVariable = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} flex min-h-screen flex-col items-center antialiased`}>
        <Header />
        <main className="flex w-full flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
