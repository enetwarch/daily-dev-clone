import Image from "next/image";
import Link from "next/link";

export default function Header(): React.ReactNode {
  return (
    <div className="w-full fixed z-5 pt-4">
      <header className="w-full sm:px-2 flex justify-center">
        <nav
          aria-label="Header Navigation"
          className="rounded-2xl bg-[rgba(0,0,0,0.1)] p-2 sm:pl-4 lg:pl-6 max-w-[1250px] w-full flex 
          justify-between items-center"
        >
          <Link href="/" title="Home">
            <Image src="/daily-dev.svg" alt="Logo" width={150} height={75} />
          </Link>
          <a
            href="https://tinyurl.com/4z7cmxr6"
            title="Download Chrome Extension"
            target="_blank"
            rel="noreferrer"
            className="border border-white bg-transparent py-3 px-6 rounded-xl font-poppins text-foreground
            hover:cursor-pointer hover:bg-[hsla(0,0%,50%,0.10)] text-[16px]"
          >
            <p className="hidden sm:inline">
              <strong className="font-bold">Start reading</strong>
              <span className="opacity-50"> - Free forever</span>
            </p>
            <p className="inline sm:hidden">
              <strong className="font-bold">Get it now</strong>
            </p>
          </a>
        </nav>
      </header>
    </div>
  );
}
