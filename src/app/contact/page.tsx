import type { Metadata } from "next";
import Image from "next/image";

import type React from "react";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact our team · Customer support daily.dev platforms",
};

export default function Contact(): React.ReactNode {
  return (
    <section className="pt-36 pb-12 lg:pb-24 max-w-[1200px] w-full flex flex-col items-center gap-20 relative overflow-hidden">
      <div
        className="absolute top-0 z-4 h-[300px] w-[600px] sm:h-[400px] sm:w-[800px] lg:h-[500px] lg:w-[1000px] 
        -translate-y-[50%] xs:-translate-y-[60%] sm:-translate-y-[70%] lg:translate-x-[10%] hidden md:block"
      >
        <Image src="/space-bg.svg" alt="Space Background" fill className="-z-1" />
      </div>
      <div className="flex flex-col items-center gap-4 xs:gap-6 px-8">
        <h1 className="font-poppins font-semibold text-4xl">Contact us</h1>
        <p className="font-poppins text-md xs:text-lg sm:text-xl font-light text-center">
          Have any questions? Need to say hi? We'd love to hear from you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 lg:gap-24 px-16 md:px-24">
        <article
          className="flex flex-col items-center flex-1 max-w-[350px] md:min-h-[300px] pb-8 md:pb-0 
          gap-4 border-b border-b-teal-400"
        >
          <span className="text-6xl leading-20">✉️</span>
          <h2 className="font-poppins font-bold text-xl text-center">Email us</h2>
          <p className="font-poppins text-center">
            <span className="opacity-50">Shoot us an email at </span>
            <a href="mailto:hi@daily.dev?subject=Hello%20daily.dev!" className="font-open-sans underline opacity-70">
              hi@daily.dev
            </a>
            <span className="opacity-50"> and we'll get right back to you.</span>
          </p>
        </article>
        <article
          className="flex flex-col items-center flex-1 max-w-[350px] md:min-h-[300px] pb-8 md:pb-0 
          gap-4 border-b border-b-yellow-400"
        >
          <span className="text-6xl leading-20">✏️</span>
          <h2 className="font-poppins font-bold text-xl text-center">Give us feedback</h2>
          <p className="font-poppins text-center">
            <span className="opacity-50">Send us your feedback on our </span>
            <a
              href="https://daily.dev/feedback"
              target="_blank"
              rel="noreferrer"
              className="font-open-sans underline opacity-70"
            >
              feedback center
            </a>
          </p>
        </article>
        <article
          className="flex flex-col items-center flex-1 max-w-[350px] md:min-h-[300px] pb-8 md:pb-0 
          gap-4 border-b border-b-purple-400 w-full"
        >
          <span className="text-6xl leading-20">✉️</span>
          <h2 className="font-poppins font-bold text-xl text-center">Post address</h2>
          <p className="font-poppins text-center opacity-50">
            Daily Dev Ltd.
            <br />9 Derech Hatikva Street,
            <br />
            Ganei Tikva, Israel 5591252
            <br />
          </p>
          <p className="font-poppins text-center opacity-50">📞 +1 (323) 524 2318</p>
        </article>
      </div>
    </section>
  );
}
