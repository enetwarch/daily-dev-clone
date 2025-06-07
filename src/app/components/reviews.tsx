import Image from "next/image";

export default function Reviews(): React.ReactNode {
  return (
    <section aria-label="Reviews Section" className="flex w-full justify-center">
      <div className="flex w-full max-w-[1300px] grow flex-col items-center gap-8 px-8 py-16 lg:flex-row lg:justify-between lg:gap-4 lg:px-12">
        <div className="lg:items-normal flex w-full max-w-[550px] flex-col items-center gap-8 lg:min-w-[300px]">
          <h2 className="text-center text-2xl sm:text-4xl lg:text-left">
            <span>The world's best developer platform for </span>
            <strong className="bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-transparent">
              knowledge and community
            </strong>
          </h2>
          <ul
            aria-label="Big tech companies that use daily.dev"
            className="flex flex-wrap items-center justify-center gap-8 lg:justify-start"
          >
            <li>
              <Image src="/apple-logo.svg" alt="Apple logo" width={27} height={25} />
            </li>
            <li>
              <Image src="/google-logo.svg" alt="Google logo" width={70} height={25} />
            </li>
            <li>
              <Image src="/aws-logo.svg" alt="AWS logo" width={50} height={25} />
            </li>
            <li>
              <Image src="/microsoft-logo.svg" alt="Microsoft logo" width={150} height={25} />
            </li>
            <li>
              <Image src="/meta-logo.svg" alt="META logo" width={100} height={25} />
            </li>
          </ul>
        </div>
        <figure className="max-w-[500px] lg:min-w-[500px]">
          <Image src="/reviews.webp" alt="Developer review statistics" width={500} height={250} />
          <figcaption className="sr-only">
            Trusted by 1,000,000+ Developers, 2,500+ reviews in Chrome Store, 18,000+ stars on GitHub, Product of the
            Year Award.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
