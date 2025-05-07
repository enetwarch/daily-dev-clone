import Hero from "@/app/components/hero";
import Lightbox from "@/app/components/lightbox";
import Reviews from "@/app/components/reviews";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "daily.dev | Where developers suffer together",
  description:
    "daily.dev is the open-source professional network developers deserve. Get free access to unlimited amounts of quality knowledge from all over the web every day.",
};

export default function Home(): React.ReactNode {
  return (
    <>
      <div className="fixed top-0 h-4 w-full bg-background shadow-[0_0_1rem_1rem_var(--background)] z-4" />
      <Hero>
        <Lightbox />
      </Hero>
      <Reviews />
    </>
  );
}
