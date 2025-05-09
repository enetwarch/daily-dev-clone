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
    <h1 className={["font-open-sans text-4xl font-semibold", className].filter(Boolean).join(" ")} {...props}>
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
      className={["font-poppins text-sm xs:text-lg font-light py-4 px-6 border-l-4 border-l-purple-400", className]
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
    <p className={["font-poppins text-lg opacity-90 text-blue-200", className].filter(Boolean).join(" ")} {...props}>
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
      className={["font-poppins text-lg opacity-90 text-blue-200 font-bold", className].filter(Boolean).join(" ")}
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
      className={["!font-open-sans text-lg text-blue-500 break-all hyphens-auto hover:underline font-light", className]
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
