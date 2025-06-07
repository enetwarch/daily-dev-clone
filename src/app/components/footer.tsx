import Image from "next/image";
import Link from "next/link";

import type React from "react";
import type { ElementType } from "react";

export default function Footer(): React.ReactNode {
  return (
    <footer className="relative z-5 flex w-full justify-center border-t border-t-purple-400 bg-background opacity-[99]">
      <div className="flex w-full max-w-[1300px] flex-col items-center justify-between px-10 sm:px-12">
        <div className="flex w-full flex-col items-center gap-16 py-16 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex max-w-[500px] flex-col gap-6">
            <div className="flex justify-start xs:justify-center lg:justify-start">
              <Link href="/" title="Home">
                <Image src="/daily-dev.svg" alt="Logo" width={150} height={75} />
              </Link>
            </div>
            <p className="text-left xs:text-center font-poppins text-lg opacity-50 lg:text-left">
              daily.dev is a professional network for developers to learn, collaborate, and grow together.
            </p>
            <nav
              aria-label="Download Navigation"
              className="max-height-50 flex items-center justify-start xs:justify-center gap-4 lg:justify-start"
            >
              <a href="https://tinyurl.com/2zpjak5c" title="App Store" target="_blank" rel="noreferrer">
                <Image src="/download-on-the-app-store.svg" alt="Download on the App Store" width={170} height={50} />
              </a>
              <a href="https://tinyurl.com/enznpasm" title="Play Store" target="_blank" rel="noreferrer">
                <Image src="/get-it-on-google-play.svg" alt="GET IT ON Google Play" width={180} height={50} />
              </a>
            </nav>
            <nav aria-label="Platform Navigation" className="pt-4">
              <ul className="flex items-center justify-start xs:justify-center gap-4 lg:justify-start">
                <PlatformLink href="https://tinyurl.com/25v9xe2u" title="daily.dev">
                  <PlatformLogo src="/daily-dev-logo.svg" alt="daily.dev logo" size={40} />
                </PlatformLink>
                <PlatformLink href="https://tinyurl.com/yc342d8w" title="daily.dev on X">
                  <PlatformLogo src="/x-logo.svg" alt="X logo" size={24} />
                </PlatformLink>
                <PlatformLink href="https://tinyurl.com/mr3c844x" title="daily.dev GitHub repository">
                  <PlatformLogo src="/github-logo.svg" alt="GitHub logo" size={32} />
                </PlatformLink>
                <PlatformLink href="https://tinyurl.com/3j3yh375" title="daily.dev on Instagram">
                  <PlatformLogo src="/instagram-logo.svg" alt="Instagram logo" size={32} />
                </PlatformLink>
                <PlatformLink href="https://tinyurl.com/27y3n7rv" title="daily.dev on TikTok">
                  <PlatformLogo src="/tiktok-logo.svg" alt="TikTok logo" size={32} />
                </PlatformLink>
              </ul>
            </nav>
          </div>
          <nav
            aria-label="Main Navigation"
            className="flex w-full xs:flex-row flex-col justify-around gap-12 lg:w-[450px] lg:justify-between"
          >
            <ul className="flex flex-col gap-2">
              <NavHeader>Product</NavHeader>
              <NavLink href="https://tinyurl.com/4z7cmxr6" blank>
                Chrome extension
              </NavLink>
              <NavLink href="https://tinyurl.com/yaawn5ws" blank>
                Edge add-on
              </NavLink>
              <NavLink href="https://tinyurl.com/2zpjak5c" blank>
                iOS App
              </NavLink>
              <NavLink href="https://tinyurl.com/enznpasm" blank>
                Android App
              </NavLink>
              <NavLink href="https://tinyurl.com/25v9xe2u" blank>
                Web version
              </NavLink>
              <NavLink href="https://tinyurl.com/9h8aumt5" blank>
                Changelog
              </NavLink>
              <NavLink href="https://tinyurl.com/ksd6uvwf">Status</NavLink>
            </ul>
            <ul className="flex flex-col gap-2">
              <NavHeader>Community</NavHeader>
              <NavLink href="https://tinyurl.com/3j5smpsx" blank>
                Docs
              </NavLink>
              <NavLink href="https://tinyurl.com/mr3c844x" blank>
                Open source
              </NavLink>
              <NavLink href="https://tinyurl.com/yr5wea5p" blank>
                Feature requests
              </NavLink>
              <NavLink href="https://tinyurl.com/y495ubzy" blank>
                Online events
              </NavLink>
              <NavLink href="https://tinyurl.com/4ysdc2bt" blank>
                Swag store
              </NavLink>
            </ul>
            <ul className="flex flex-col gap-2">
              <NavHeader>Company</NavHeader>
              <NavLink href="/careers">Careers</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="https://tinyurl.com/32syjypc" blank>
                Advertise
              </NavLink>
              <NavLink href="https://tinyurl.com/5ajbruyh" blank>
                Brand book
              </NavLink>
              <NavLink href="/about-us">About us</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          </nav>
        </div>
        <div className="flex w-full flex-col items-center gap-8 border-t border-t-neutral-800 pt-10 pb-10 sm:pb-16 lg:flex-row-reverse lg:justify-between lg:gap-0 lg:pb-10">
          <div className="flex flex-col gap-4 lg:justify-end lg:gap-2">
            <p className="text-left xs:text-center font-poppins text-sm opacity-50 lg:text-right">
              Working remotely wherever we're happiest
            </p>
            <p className="text-left xs:text-center text-3xl lg:text-right">🇮🇱 🇮🇹 🇵🇭 🇳🇱 🇬🇧 🇭🇷 🇱🇹 🇦🇺 🇵🇱 🇳🇴 🇦🇱 🇵🇹</p>
          </div>
          <nav
            aria-label="Policy Navigation"
            className="flex flex-col items-center gap-6 sm:flex-row-reverse sm:gap-0 lg:justify-end"
          >
            <ul className="flex">
              <NavLink href="/tos" className="pr-6 sm:pl-6">
                Terms
              </NavLink>
              <NavLink href="/privacy" className="border-x border-x-neutral-600 px-6">
                Privacy
              </NavLink>
              <NavLink href="https://tinyurl.com/37wd2px3" className="pl-6" blank>
                Guidelines
              </NavLink>
            </ul>
            <p className="font-open-sans text-sm opacity-50">&copy; 2025 Daily Dev Ltd.</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}

type PlatformLinkProps = {
  href: string;
  title: string;
  children: ReturnType<typeof Image>;
  blank?: boolean;
};

function PlatformLink({ href, title, children, blank = true }: PlatformLinkProps): React.ReactNode {
  return (
    <li>
      <a href={href} title={title} target={blank ? "_blank" : undefined} rel={blank ? "noreferrer" : undefined}>
        {children}
      </a>
    </li>
  );
}

type PlatformLogoProps = {
  src: string;
  alt: string;
  size: number;
};

function PlatformLogo({ src, alt, size }: PlatformLogoProps): ReturnType<typeof Image> {
  return (
    <Image src={src} alt={alt} width={size} height={size} className="opacity-40 hover:opacity-100 active:opacity-100" />
  );
}

type NavHeaderProps = {
  children: React.ReactNode;
};

function NavHeader({ children }: NavHeaderProps): React.ReactNode {
  return (
    <h1 className="bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text pb-2 font-bold font-poppins text-lg text-transparent">
      {children}
    </h1>
  );
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
  blank?: boolean;
};

function NavLink({ href, children, title, className, blank = false }: NavLinkProps): React.ReactNode {
  const Component: ElementType = blank ? "a" : Link;

  return (
    <li>
      <Component
        href={href}
        title={title ? title : typeof children === "string" ? children : undefined}
        target={blank ? "_blank" : undefined}
        rel={blank ? "noreferrer" : undefined}
        className={[
          "opacity-50 hover:decoration-solid hover:opacity-100 active:decoration-solid active:opacity-100",
          "text-sm hover:text-purple-400 hover:underline active:text-purple-400 active:underline",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </Component>
    </li>
  );
}
