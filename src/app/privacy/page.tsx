import Image from "next/image";

export default function Privacy(): React.ReactNode {
  return (
    <section className="flex justify-center w-full py-32 px-8">
      <div className="flex flex-col max-w-[1000px] w-full gap-24">
        <div className="flex flex-col justify-center w-full items-center gap-12">
          <Image src="/lock.svg" alt="Lock Image" width={120} height={120} />
          <div className="flex flex-col items-center max-w-[800px] gap-4">
            <h1 className="font-poppins text-4xl font-semibold text-center">Your privacy stays yours.</h1>
            <p className="font-open-sans font-light text-lg text-center">
              We believe that you should own and control all your personal data. daily.dev is a secure space where you
              can privately discover the right content for you.
            </p>
          </div>
        </div>
        <article className="flex gap-8 items-center w-full flex-col lg:flex-row">
          <div className="flex flex-col lg:max-w-[250px] w-full gap-2 text-center lg:text-left">
            <h2 className="font-poppins text-3xl font-semibold">Applications</h2>
            <p className="font-open-sans font-light text-lg">Choose a Topic</p>
          </div>
          <nav>
            <ul className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Topic href="https://tinyurl.com/323avw8d">Privacy Policy</Topic>
              <Topic href="https://tinyurl.com/syypb7x7">Cookie Policy</Topic>
              <Topic href="https://tinyurl.com/mun9pc7r">Permissions Explained</Topic>
            </ul>
          </nav>
        </article>
        <article className="flex gap-8 items-center w-full flex-col lg:flex-row">
          <div className="flex flex-col lg:max-w-[250px] w-full gap-2 text-center lg:text-left">
            <h2 className="font-poppins text-3xl font-semibold">Promotional Website</h2>
            <p className="font-open-sans font-light text-lg">Choose a Topic</p>
          </div>
          <nav>
            <ul className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Topic href="https://tinyurl.com/y49r9rhr">Privacy Policy</Topic>
              <Topic href="https://tinyurl.com/vnztvkcs">Cookie Policy</Topic>
            </ul>
          </nav>
        </article>
        <article className="flex flex-col gap-2 items-center lg:items-start">
          <h2 className="font-poppins text-3xl font-semibold text-center">Need further assistance?</h2>
          <address className="font-open-sans text-lg text-center not-italic">
            <span className="opacity-70">For any inquiries, please send an email to </span>
            <a href="mailto:privacy@daily.dev" target="_blank" rel="noreferrer">
              <span className="text-blue-500 hover:underline">privacy@daily.dev</span>
            </a>
            <span className="opacity-70">.</span>
          </address>
        </article>
        <div className="flex gap-12 justify-center lg:justify-start flex-wrap">
          <figure className="h-[90px] w-[160px] md:h-[110px] md:w-[200px] relative">
            <Image src="/prighter-certificate-eu-rep.png" alt="EU Prighter Certificate" fill />
          </figure>
          <figure className="h-[90px] w-[160px] md:h-[110px] md:w-[200px] relative">
            <Image src="/prighter-certificate-uk-rep.png" alt="UK Prighter Certificate" fill />
          </figure>
        </div>
      </div>
    </section>
  );
}

type TopicProps = {
  href: string;
  children: React.ReactNode;
};

function Topic({ href, children }: TopicProps): React.ReactNode {
  return (
    <li className="list-none">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="rounded-3xl flex flex-col items-center px-4 py-6 gap-6 bg-[#16191e] h-[200px] w-[160px] 
        hover:outline hover:outline-white hover:underline  hover:decoration-blue-500 hover:bg-transparent"
      >
        <Image src="/daily-dev-logo.svg" alt="Daily Dev Logo" width={64} height={64} aria-hidden="true" />
        <p className="font-poppins font-semibold text-md text-center">{children}</p>
      </a>
    </li>
  );
}
