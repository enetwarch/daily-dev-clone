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
        className="relative flex min-w-full max-w-[800px] flex-col items-center gap-4 xs:gap-6 overflow-hidden px-4 pt-36 pb-24"
      >
        <div className="-translate-y-[50%] xs:-translate-y-[60%] sm:-translate-y-[70%] absolute top-0 z-4 h-[300px] w-[600px] sm:h-[400px] sm:w-[800px] lg:h-[500px] lg:w-[1000px] lg:translate-x-[10%]">
          <Image src="/space-bg.svg" alt="Space Background" fill className="-z-1" />
        </div>
        <div className="relative h-[100px] xs:h-[220px] w-[250px] xs:w-[400px] md:w-[580px]">
          <Image src="/404.svg" alt="Page not Found" fill />
        </div>
        <h1 className="text-center font-bold font-poppins text-3xl xs:text-4xl">Why are you here?</h1>
        <p className="text-center font-light font-poppins text-lg xs:text-xl opacity-80">
          You're not supposed to be here.
        </p>
        <Link
          href="/"
          title="Home"
          className="flex items-center justify-center rounded-xl bg-white px-8 py-2 text-center font-bold font-open-sans text-2xl text-black hover:opacity-70"
        >
          Go home
        </Link>
      </section>
    </>
  );
}
