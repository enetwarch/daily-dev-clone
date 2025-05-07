"use client";

import Image from "next/image";
import type React from "react";

type HeroProps = {
  children?: React.ReactNode;
};

export default function Hero({ children }: HeroProps): React.ReactNode {
  return (
    <section aria-label="Hero Section" className="px-4 flex flex-col w-full items-center relative overflow-hidden">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center pt-36 pb-24">
        <div className="absolute bottom-0 h-[85%] xs:h-[95%] sm:h-[85%] lg:h-[75%] w-full pointer-events-none">
          <Image src="/stars-bg.svg" alt="Stars Background" fill className="-z-2" />
          <Image src="/space-bg.svg" alt="Space Background" fill className="-z-1" />
        </div>
        <h1 className="flex flex-col items-center font-poppins text-center lg:text-nowrap">
          <span className="text-2xl sm:text-3xl lg:text-5xl">Where developers</span>
          <strong
            className="text-3xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text
            text-transparent leading-12 sm:leading-16 lg:leading-24"
          >
            suffer together
          </strong>
        </h1>
        <p className="text-md sm:text-lg lg:text-xl font-light tracking-wide text-center max-w-[700px] font-poppins">
          We know how hard it is to be a developer. It doesn't have to be. Personalized news feed, dev communities and
          search, much better than what's out there. Maybe ;{")"}
        </p>
        <a
          href="https://tinyurl.com/4z7cmxr6"
          title="Chrome Extension"
          target="_blank"
          rel="noreferrer"
          className="p-0 lg:py-4 lg:px-6 rounded-xl bg-white hover:opacity-90 text-lg text-black"
        >
          <div className="hidden lg:flex gap-4 items-center">
            <Image src="/google-chrome.webp" alt="daily.dev on Google Chrome" width={32} height={32} />
            <p className="font-poppins">
              <strong className="font-bold">Start reading</strong>
              <span className="opacity-50"> - Free forever</span>
            </p>
          </div>
          <div className="flex lg:hidden gap-4 items-center font-open-sans">
            <Image src="/get-it-on-google-play.svg" alt="daily.dev on Google Play" width={200} height={50} />
          </div>
        </a>
      </div>
      {children}
      <div className="absolute pointer-events-none h-full w-full bg-linear-[to_bottom,transparent_70%,#711f90] bottom-0 z-1" />
    </section>
  );
}
