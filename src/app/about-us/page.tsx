import type { Metadata } from "next";
import Image from "next/image";

import type React from "react";

export const metadata: Metadata = {
  title: "About us",
  description:
    "daily.dev is a thriving professional network for developers. We're empowering developers with the tools, knowledge, and community to shape the future. daily.dev is a hub for growth, innovation, and creativity in the evolving world of development",
};

export default function AboutUs(): React.ReactNode {
  return (
    <section className="w-full flex justify-center relative overflow-hidden">
      <div
        className="fixed right-0 -z-10 translate-y-full lg:translate-y-1/3 lg:translate-x-1/2 2xl:translate-x-1/6 
        xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[420px] lg:h-[340px] 2xl:w-[500px] 2xl:h-[400px]"
      >
        <Image src="/hand-holding-a-u-key.svg" alt={`hand holding a "u" key`} fill className="hidden lg:block" />
        <Image src="/hand-with-a-u-key.svg" alt={`hand with a "u" key`} fill className="block lg:hidden" />
      </div>
      <div
        className="pt-36 pb-12 px-4 lg:pb-24 w-full flex flex-col gap-8 relative items-center max-w-[300px] xs:max-w-[400px] 
        md:max-w-[600px] lg:max-w-[800px] overflow-hidden"
      >
        <h1
          className="font-poppins font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 
          to-pink-400 text-2xl xs:text-4xl lg:text-5xl leading-8 xs:leading-12 lg:leading-16"
        >
          Building the future for those who build the future
        </h1>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          At daily.dev, we believe that developers are the architects of tomorrow. As the world evolves, so do the
          demands and expectations placed upon those who shape the digital landscape. We exist to empower developers
          with the tools, knowledge, and community they need to stay ahead of the curve and build the future.
        </p>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          We are living in an extraordinary time. The future of development is being reshaped by forces that will change
          the way we think about coding, creativity, and problem-solving. As AI lowers the barriers to entry, we are
          seeing an unprecedented influx of new developers from all corners of the world. These new creators will not be
          defined by traditional technical skills alone. Instead, impact, creativity, and knowledge will take center
          stage.
        </p>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          daily.dev is more than just a platform; it's a community where developers from diverse backgrounds come
          together to share, grow, and push the boundaries of what's possible. We offer a complete experience that
          combines cutting-edge content, meaningful connections, and opportunities for personal and professional growth.
        </p>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          The developer of tomorrow will need more than just technical know-how. As the landscape evolves, they will
          need guidance, support, and a thriving community to help them navigate their careers. At daily.dev, we are
          building the future with that vision in mind—a place where developers can shape their identities, expand their
          influence, and find the opportunities that align with their goals.
        </p>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          We understand that today's developers need more than fragmented solutions. That's why we've created a platform
          that brings everything together under one roof. By offering an ecosystem where knowledge, community, and
          opportunity converge, we are empowering developers to lead the charge into the future.
        </p>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          What drives us is the belief that every developer should have the chance to reach their full potential. We are
          motivated by the vision of a world where their work has a lasting impact and where they are recognized for the
          real value they bring.
        </p>
        <p className="font-poppins text-md md:text-lg lg:text-xl font-extralight text-left w-full">
          This is our mission: to build the future for those who are building the future.
        </p>
        <h2 className="inline font-poppins text-2xl xs:text-3xl md:text-4xl lg:text-5xl">
          Building the future for those who build the{" "}
          <span className="inline-block align-middle relative w-[280px] xs:w-[340px] lg:w-[380px] h-[50px] xs:h-[70px]">
            <Image src="/futere.svg" alt={`keys spelled "futere"`} fill className="hidden xs:block" />
            <Image src="/future.svg" alt={`keys spelled "future"`} fill className="block xs:hidden" />
          </span>
        </h2>
        <p className="font-poppins italic font-extralight text-left w-full text-md md:text-lg lg:text-xl">
          {"//"} or something like that. We think. Maybe. Want in?
        </p>
      </div>
      <div className="absolute bottom-0 h-[600px] w-[1200px] translate-y-1/2 pointer-events-none">
        <Image src="/space-bg.svg" alt="space background" fill />
      </div>
    </section>
  );
}
