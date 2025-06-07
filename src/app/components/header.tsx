import Image from "next/image";
import Link from "next/link";

export default function Header(): React.ReactNode {
  return (
    <div className="fixed z-10 w-full">
      <div className="h-4 w-full bg-background shadow-[0_0_1rem_1rem_var(--background)]" />
      <header className="flex w-full justify-center sm:px-2">
        <nav
          aria-label="Header Navigation"
          className="flex w-full max-w-[1250px] items-center justify-between rounded-2xl bg-[rgba(0,0,0,0.1)] p-2 sm:pl-4 lg:pl-6"
        >
          <Link href="/" title="Home">
            <Image src="/daily-dev.svg" alt="Logo" width={150} height={75} />
          </Link>
          <a
            href="https://tinyurl.com/4z7cmxr6"
            title="Download Chrome Extension"
            target="_blank"
            rel="noreferrer"
            className="text-nowrap rounded-xl border border-white bg-transparent px-6 py-3 font-poppins text-[16px] text-foreground hover:cursor-pointer hover:bg-[hsla(0,0%,50%,0.10)]"
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
