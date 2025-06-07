import type { Metadata } from "next";
import Image from "next/image";

import type React from "react";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact our team · Customer support daily.dev platforms",
};

export default function Contact(): React.ReactNode {
  return (
    <section className="relative flex w-full max-w-[1400px] flex-col items-center gap-20 overflow-hidden pt-36 pb-12 lg:pb-24">
      <div className="-translate-y-[50%] xs:-translate-y-[60%] sm:-translate-y-[70%] absolute top-0 z-4 hidden h-[300px] w-[600px] sm:h-[400px] sm:w-[800px] md:block lg:h-[500px] lg:w-[1000px] lg:translate-x-[10%]">
        <Image src="/space-bg.svg" alt="Space Background" fill className="-z-1" />
      </div>
      <div className="flex flex-col items-center gap-4 xs:gap-6 px-8">
        <h1 className="font-poppins font-semibold text-4xl">Contact us</h1>
        <p className="text-center font-light font-poppins text-md xs:text-lg sm:text-xl">
          Have any questions? Need to say hi? We'd love to hear from you.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 px-16 md:flex-row md:px-24 lg:gap-24">
        <article className="flex max-w-[350px] flex-1 flex-col items-center gap-4 border-b border-b-teal-400 pb-8 md:min-h-[300px] md:pb-0">
          <span className="text-6xl leading-20">✉️</span>
          <h2 className="text-center font-bold font-poppins text-xl">Email us</h2>
          <address className="text-center font-poppins">
            <span className="text-blue-200 opacity-50">Shoot us an email at </span>
            <a href="mailto:hi@daily.dev?subject=Hello%20daily.dev!" className="font-open-sans underline opacity-70">
              hi@daily.dev
            </a>
            <span className="text-blue-200 opacity-50"> and we'll get right back to you.</span>
          </address>
        </article>
        <article className="flex max-w-[350px] flex-1 flex-col items-center gap-4 border-b border-b-yellow-400 pb-8 md:min-h-[300px] md:pb-0">
          <span className="text-6xl leading-20">✏️</span>
          <h2 className="text-center font-bold font-poppins text-xl">Give us feedback</h2>
          <address className="text-center font-poppins">
            <span className="text-blue-200 opacity-50">Send us your feedback on our </span>
            <a
              href="https://daily.dev/feedback"
              target="_blank"
              rel="noreferrer"
              className="font-open-sans underline opacity-70"
            >
              feedback center
            </a>
          </address>
        </article>
        <article className="flex w-full max-w-[350px] flex-1 flex-col items-center gap-4 border-b border-b-purple-400 pb-8 md:min-h-[300px] md:pb-0">
          <span className="text-6xl leading-20">✉️</span>
          <h2 className="text-center font-bold font-poppins text-xl">Post address</h2>
          <address className="text-center font-poppins text-blue-200 opacity-50">
            Daily Dev Ltd.
            <br />9 Derech Hatikva Street,
            <br />
            Ganei Tikva, Israel 5591252
            <br />
          </address>
          <p className="text-center font-poppins text-blue-200 opacity-50">📞 +1 (323) 524 2318</p>
        </article>
      </div>
    </section>
  );
}
