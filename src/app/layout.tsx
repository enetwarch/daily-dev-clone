import "@/app/globals.css";

import Header from "@/app/components/header";

import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Open_Sans, Poppins } from "next/font/google";

import type React from "react";

const metadata: Metadata = {
  title: "daily.dev | Where developers suffer together",
  description:
    "daily.dev is the open-source professional network developers deserve. Get free access to unlimited amounts of quality knowledge from all over the web every day.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

const openSans: NextFontWithVariable = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400"],
  subsets: ["latin"],
});

const poppins: NextFontWithVariable = Poppins({
  variable: "--font-poppins",
  weight: ["400"],
  subsets: ["latin"],
});

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: RootLayoutProps): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${poppins.variable} antialiased min-h-screen flex flex-col items-center`}>
        <Header />
        <main className="grow flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
