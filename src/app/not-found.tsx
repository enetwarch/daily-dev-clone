import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found (404) | daily.dev",
};

export default function NotFound(): React.ReactNode {
  return (
    <>
      <section
        aria-label="404 Not Found"
        className="pt-36 pb-24 px-4 max-w-[800px] flex flex-col min-w-full items-center gap-4 xs:gap-6 relative
        overflow-hidden"
      >
        <div
          className="absolute top-0 z-4 h-[300px] w-[600px] sm:h-[400px] sm:w-[800px] lg:h-[500px] lg:w-[1000px] 
          -translate-y-[50%] xs:-translate-y-[60%] sm:-translate-y-[70%] lg:translate-x-[10%]"
        >
          <Image src="/space-bg.svg" alt="Space Background" fill className="-z-1" />
        </div>
        <div className="h-[100px] w-[250px] xs:h-[220px] xs:w-[400px] md:w-[580px] relative">
          <Image src="/404.svg" alt="Page not Found" fill />
        </div>
        <h1 className="font-poppins font-bold text-3xl xs:text-4xl text-center">Why are you here?</h1>
        <p className="font-poppins font-light opacity-80 text-lg xs:text-xl text-center">
          You're not supposed to be here.
        </p>
        <Link
          href="/"
          title="Home"
          className="font-open-sans text-black flex justify-center items-center rounded-xl bg-white font-bold
          text-2xl px-8 py-2 hover:opacity-70 text-center"
        >
          Go home
        </Link>
      </section>
    </>
  );
}
