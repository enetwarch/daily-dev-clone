"use client";

import Image from "next/image";
import type React from "react";

type HeroProps = {
  children?: React.ReactNode;
};

export default function Hero({ children }: HeroProps): React.ReactNode {
  return (
    <section aria-label="Hero Section" className="relative flex w-full flex-col items-center overflow-hidden px-4">
      <div className="flex flex-col items-center gap-4 pt-36 pb-24 sm:gap-6 lg:gap-8">
        <div className="pointer-events-none absolute bottom-0 h-[85%] xs:h-[95%] w-full sm:h-[85%] lg:h-[75%]">
          <Image src="/stars-bg.svg" alt="Stars Background" fill className="-z-2" />
          <Image src="/space-bg.svg" alt="Space Background" fill className="-z-1" />
        </div>
        <h1 className="flex flex-col items-center text-center font-poppins lg:text-nowrap">
          <span className="text-2xl sm:text-3xl lg:text-5xl">Where developers</span>
          <strong className="bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-3xl text-transparent leading-12 sm:text-5xl sm:leading-16 lg:text-7xl lg:leading-24">
            suffer together
          </strong>
        </h1>
        <p className="max-w-[700px] text-center font-light font-poppins text-md tracking-wide sm:text-lg lg:text-xl">
          We know how hard it is to be a developer. It doesn't have to be. Personalized news feed, dev communities and
          search, much better than what's out there. Maybe ;{")"}
        </p>
        <a
          href="https://tinyurl.com/4z7cmxr6"
          title="Chrome Extension"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-white p-0 text-black text-lg hover:opacity-90 lg:px-6 lg:py-4"
        >
          <div className="hidden items-center gap-4 lg:flex">
            <Image src="/google-chrome.webp" alt="daily.dev on Google Chrome" width={32} height={32} />
            <p className="font-poppins">
              <strong className="font-bold">Start reading</strong>
              <span className="opacity-50"> - Free forever</span>
            </p>
          </div>
          <div className="flex items-center gap-4 font-open-sans lg:hidden">
            <Image src="/get-it-on-google-play.svg" alt="daily.dev on Google Play" width={200} height={50} />
          </div>
        </a>
      </div>
      {children}
      <div className="pointer-events-none absolute bottom-0 z-1 h-full w-full bg-linear-[to_bottom,transparent_70%,#711f90]" />
    </section>
  );
}
