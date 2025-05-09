import { Clause, Heading, Link, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function Privacy(): React.ReactNode {
  return (
    <Section id={ID.PRIVACY}>
      <Heading>10. Privacy</Heading>
      <TLDR>
        Gotcha. We've got a detailed Privacy Policy (see link below). By agreeing to these terms, you're cool with that
        too. All the info you put into the app stays yours, but we get to use it to run and improve the app. We might
        also make some anonymized, aggregated data out of it for our own business reasons. You won't have any rights
        over that data or our app, and it's on you to make sure you're following all privacy laws. In short, you're in
        control of your data, and we're just using it to help run the app. You're also okay with us using anonymized
        versions of your personal data for our own purposes.
      </TLDR>
      <Clause>
        10.1. The Company's privacy policy, available at{" "}
        <Link href="https://tinyurl.com/mtav3bjy">https://daily.dev/privacy/applications-policy</Link> (the “
        <Strong>Privacy Policy</Strong>”), sets forth the information the Company collects and receives and the manner
        in which it is used. By agreeing to the terms of this Agreement, you hereby confirm that you also accept and
        agree to the Privacy Policy.
      </Clause>
      <Clause>
        10.2. You acknowledge and agree that except as described in this Agreement, any content, data, and information
        you will enter into or upload to the Application (including the User Content) or that the Company collects in
        connection with your use of the Application (collectively, “<Strong>Data</Strong>”) will be processed as
        described in the Privacy Policy. As of between the Company and you, any Data that you shall enter or upload into
        the Application is and will remain owned by you. You hereby grant the Company the right to collect, process,
        transmit, store, use, and disclose the Data to provide the Application and as otherwise set forth in the Privacy
        Policy.
      </Clause>
      <Clause>
        10.3. You acknowledge and agree that the Company may collect, create, process, transmit, store, use, and
        disclose aggregated and/or de-identified data derived from the Data or your use of the Application (“
        <Strong>Aggregated Data</Strong>”) for the Company's business purposes, including for AI Process and training,
        industry analysis, benchmarking, analytics, and improving the Company's AI models, algorithms, and systems to
        enhance the overall user experience and service offerings. All Aggregated Data will be in an aggregated and/or
        de-identified form only and will not identify you. Nothing in this Agreement gives you any rights in or to any
        part of the Application, and the services provided thereunder, or the Aggregated Data.
      </Clause>
      <Clause>
        10.4. You are solely responsible (a) for Data as entered into, supplied, accessed, or used by you, and (b) for
        complying with any privacy and data protection laws and regulations applicable to Data or your use of the
        Application.
      </Clause>
    </Section>
  );
}
