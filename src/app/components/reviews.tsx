"use server";

import Image from "next/image";

function Reviews(): React.ReactNode {
  return (
    <section aria-label="Reviews Section" className="w-full flex justify-center gap-4 py-8 sm:py-12 lg:py-16">
      <div
        className="max-w-[1200px] w-full flex grow flex-col items-center px-8 lg:px-12 gap-8 lg:gap-4 
        lg:justify-between lg:flex-row"
      >
        <div className="w-full lg:min-w-[300px] max-w-[550px] flex flex-col items-center lg:items-normal gap-8 pt-8">
          <h2 className="text-2xl sm:text-4xl text-center lg:text-left">
            <span>The world's best developer platform for </span>
            <strong className="bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 text-transparent bg-clip-text">
              knowledge and community
            </strong>
          </h2>
          <ul
            aria-label="Big tech companies that use daily.dev"
            className="flex flex-wrap gap-8 items-center justify-center lg:justify-start"
          >
            <li>
              <Image src="/apple-logo.svg" alt="Apple" width="27" height="25" />
            </li>
            <li>
              <Image src="/google-logo.svg" alt="Google" width="70" height="25" />
            </li>
            <li>
              <Image src="/aws-logo.svg" alt="Amazon Web Services (AWS)" width="50" height="25" />
            </li>
            <li>
              <Image src="/microsoft-logo.svg" alt="Microsoft" width="150" height="25" />
            </li>
            <li>
              <Image src="/meta-logo.svg" alt="META" width="100" height="25" />
            </li>
          </ul>
        </div>
        <figure className="lg:min-w-[500px] max-w-[500px]">
          <Image src="/reviews.webp" alt="Developer review summary" width="500" height="250" className="object-fill" />
          <figcaption className="sr-only">
            Trusted by 1,000,000+ Developers, 2,500+ reviews in Chrome Store, 18,000+ stars on GitHub, Product of the
            Year Award
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Reviews;
