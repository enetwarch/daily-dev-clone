import Image from "next/image";

export default function Privacy(): React.ReactNode {
  return (
    <section className="flex w-full justify-center px-8 py-32">
      <div className="flex w-full max-w-[1000px] flex-col gap-24">
        <div className="flex w-full flex-col items-center justify-center gap-12">
          <Image src="/lock.svg" alt="Lock Image" width={120} height={120} />
          <div className="flex max-w-[800px] flex-col items-center gap-4">
            <h1 className="text-center font-poppins font-semibold text-4xl">Your privacy stays yours.</h1>
            <p className="text-center font-light font-open-sans text-lg">
              We believe that you should own and control all your personal data. daily.dev is a secure space where you
              can privately discover the right content for you.
            </p>
          </div>
        </div>
        <article className="flex w-full flex-col items-center gap-8 lg:flex-row">
          <div className="flex w-full flex-col gap-2 text-center lg:max-w-[250px] lg:text-left">
            <h2 className="font-poppins font-semibold text-3xl">Applications</h2>
            <p className="font-light font-open-sans text-lg">Choose a Topic</p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Topic href="https://tinyurl.com/323avw8d">Privacy Policy</Topic>
              <Topic href="https://tinyurl.com/syypb7x7">Cookie Policy</Topic>
              <Topic href="https://tinyurl.com/mun9pc7r">Permissions Explained</Topic>
            </ul>
          </nav>
        </article>
        <article className="flex w-full flex-col items-center gap-8 lg:flex-row">
          <div className="flex w-full flex-col gap-2 text-center lg:max-w-[250px] lg:text-left">
            <h2 className="font-poppins font-semibold text-3xl">Promotional Website</h2>
            <p className="font-light font-open-sans text-lg">Choose a Topic</p>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Topic href="https://tinyurl.com/y49r9rhr">Privacy Policy</Topic>
              <Topic href="https://tinyurl.com/vnztvkcs">Cookie Policy</Topic>
            </ul>
          </nav>
        </article>
        <article className="flex flex-col items-center gap-2 lg:items-start">
          <h2 className="text-center font-poppins font-semibold text-3xl">Need further assistance?</h2>
          <address className="text-center font-open-sans text-lg not-italic">
            <span className="opacity-70">For any inquiries, please send an email to </span>
            <a href="mailto:privacy@daily.dev" target="_blank" rel="noreferrer">
              <span className="text-blue-500 hover:underline">privacy@daily.dev</span>
            </a>
            <span className="opacity-70">.</span>
          </address>
        </article>
        <div className="flex flex-wrap justify-center gap-12 lg:justify-start">
          <figure className="relative h-[90px] w-[160px] md:h-[110px] md:w-[200px]">
            <Image src="/prighter-certificate-eu-rep.png" alt="EU Prighter Certificate" fill />
          </figure>
          <figure className="relative h-[90px] w-[160px] md:h-[110px] md:w-[200px]">
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
        className="flex h-[200px] w-[160px] flex-col items-center gap-6 rounded-3xl bg-[#16191e] px-4 py-6 hover:bg-transparent hover:underline hover:decoration-blue-500 hover:outline hover:outline-white"
      >
        <Image src="/daily-dev-logo.svg" alt="Daily Dev Logo" width={64} height={64} aria-hidden="true" />
        <p className="text-center font-poppins font-semibold text-md">{children}</p>
      </a>
    </li>
  );
}
