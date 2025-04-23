import Hero from "@/app/components/hero";
import Lightbox from "@/app/components/lightbox";
import Reviews from "@/app/components/reviews";

export default function Home(): React.ReactNode {
  return (
    <>
      <Hero>
        <Lightbox />
      </Hero>
      <Reviews />
    </>
  );
}
