import type React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Section({ children, className, ...props }: SectionProps): React.ReactNode {
  return (
    <section className={["flex flex-col gap-4", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </section>
  );
}

type HeadingProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Heading({ children, className, ...props }: HeadingProps): React.ReactNode {
  return (
    <h1 className={["font-open-sans font-semibold text-4xl", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </h1>
  );
}

type TLDRProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function TLDR({ children, className, ...props }: TLDRProps): React.ReactNode {
  return (
    <p
      className={["border-l-4 border-l-purple-400 px-6 py-4 font-light font-poppins text-sm xs:text-lg", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <strong className="font-poppins font-semibold text-purple-400">TLDR</strong> {children}
    </p>
  );
}

type ClauseProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Clause({ children, className, ...props }: ClauseProps): React.ReactNode {
  return (
    <p className={["font-poppins text-blue-200 text-lg opacity-90", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  );
}

type StrongProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export function Strong({ children, className, ...props }: StrongProps): React.ReactNode {
  return (
    <strong
      className={["font-bold font-poppins text-blue-200 text-lg opacity-90", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </strong>
  );
}

type LinkProps = React.HTMLAttributes<HTMLElement> & {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children, className, ...props }: LinkProps): React.ReactNode {
  return (
    <a
      className={["hyphens-auto break-all font-normal font-open-sans text-blue-500 text-lg hover:underline", className]
        .filter(Boolean)
        .join(" ")}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
