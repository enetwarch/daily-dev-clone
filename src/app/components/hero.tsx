"use server";

import Image from "next/image";

function Hero(): React.ReactNode {
  return (
    <section aria-label="Hero Section" className="px-4 pt-32 flex flex-col w-full items-center relative">
      <div className="flex flex-col z-1 gap-4 sm:gap-6 lg:gap-8 items-center">
        <h1 className="flex flex-col items-center font-poppins text-nowrap">
          <span className="text-2xl sm:text-3xl lg:text-5xl">Where developers</span>
          <strong
            className="text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300
            text-transparent bg-clip-text leading-12 sm:leading-16 lg:leading-24"
          >
            suffer together
          </strong>
        </h1>
        <p className="text-md sm:text-lg lg:text-xl font-light tracking-wide text-center max-w-[700px] font-poppins">
          We know how hard it is to be a developer. It doesn't have to be. Personalized news feed, dev communities and
          search, much better than what's out there. Maybe ;{")"}
        </p>
        <a
          href="https://chromewebstore.google.com/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied"
          title="Chrome Extension"
          target="_blank"
          rel="noreferrer"
          className="p-0 lg:py-4 lg:px-6 rounded-xl bg-white hover:opacity-90 text-lg text-black"
        >
          <div className="hidden lg:flex gap-4 items-center">
            <Image src="/google-chrome.webp" alt="daily.dev on Google Chrome" width="32" height="32" />
            <p className="font-poppins">
              <strong className="font-bold">Start reading</strong>
              <span className="opacity-50"> - Free forever</span>
            </p>
          </div>
          <div className="flex lg:hidden gap-4 items-center font-open-sans">
            <Image src="/get-it-on-google-play.svg" alt="daily.dev on Google Play" width="200" height="50" />
          </div>
        </a>
      </div>
      <figure className="px-4 pt-24">
        <div className="rounded-t-xl shadow-[0_0_1rem_1rem_#2e389f]">
          <Image
            src="/hero-desktop-view.webp"
            alt="daily.dev on Desktop View"
            width="1000"
            height="500"
            className="rounded-t-xl hidden lg:inline-block"
          />
          <Image
            src="/hero-tablet-view.webp"
            alt="daily.dev on Tablet View"
            width="750"
            height="572"
            className="rounded-t-xl hidden sm:inline-block lg:hidden"
          />
          <Image
            src="/hero-mobile-view.webp"
            alt="daily.dev on Mobile View"
            width="400"
            height="400"
            className="rounded-t-xl inline-block sm:hidden"
          />
        </div>
      </figure>
      <div className="bg-linear-[to_bottom,transparent_70%,#711f90] absolute bottom-0 h-full w-full" />
    </section>
  );
}

export default Hero;
