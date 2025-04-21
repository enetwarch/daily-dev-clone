"use server";

import Image from "next/image";

function Hero(): React.ReactNode {
  return (
    <section className="px-4 pt-32 flex flex-col items-center gap-4 sm:gap-6 lg:gap-8" aria-label="Hero Section">
      <h1 className="flex flex-col items-center font-poppins text-nowrap">
        <span className="text-2xl sm:text-3xl lg:text-5xl">Where developers</span>
        <strong
          className="text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300
          text-transparent bg-clip-text leading-12 sm:leading-16 lg:leading-24"
        >
          suffer together
        </strong>
      </h1>
      <p className="text-md sm:text-lg lg:text-xl font-light tracking-wide text-center max-w-[700px]">
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
    </section>
  );
}

export default Hero;
