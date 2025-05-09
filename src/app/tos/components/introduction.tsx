import { Clause, Section, Strong, TLDR } from "@/app/tos/components/ui/term";

export default function Introduction(): React.ReactNode {
  return (
    <Section>
      <div className="flex flex-col gap-8 pb-2">
        <h1 className="font-poppins font-bold text-3xl xs:text-4xl">DAILY DEV LTD - TERMS OF SERVICE</h1>
        <p className="font-poppins italic opacity-60">Last Updated: 11 February 2025</p>
      </div>
      <TLDR>
        Look, our lawyers were nagging us about this super long legal jargon and asked us to publish it. As a favor to
        you (and to keep them happy), we've created this simple version. It's a bit like a TLDR for each chunk of the
        legal speak. If you're not a fan of legalese or you want the quick scoop, this is for you. However, the 'simple
        version' is strictly for convenience and does not replace in any way your obligations under this Agreement and
        the requirement to review it thoroughly.
      </TLDR>
      <Clause>
        By using the Application (as defined below), adding it to your browser, or clicking the 'I Accept' button or
        similar button as part of accessing, adding, downloading, installing, registering, or using the Application, you
        hereby agree to these terms of services, as may be amended from time to time (the “<Strong>Agreement</Strong>”)
        with Daily Dev Ltd. (the “<Strong>Company</Strong>”).
      </Clause>
      <Clause>
        You hereby further acknowledge that you have read the terms of this Agreement carefully in their entirety and
        that you agree to be bound by them. Please note that this Agreement constitutes the legally binding agreement
        between you (either an individual or an entity) and the Company, and if you do not agree to all terms of this
        Agreement, you must cease any use of the Application in any manner whatsoever, and exit and delete the
        Application.
      </Clause>
    </Section>
  );
}
