import { Clause, Heading, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function General(): React.ReactNode {
  return (
    <Section id={ID.GENERAL}>
      <Heading>1. General</Heading>
      <TLDR>
        Our browser extension, web app and mobile app are like a paradise for developers, offering all sorts of info and
        content, including stuff made by other users. You gotta promise us two things: first, that you're at least 16
        years old (and we might check to make sure), and second, that we haven't had to shut down any of your accounts
        before for any reason.
      </TLDR>
      <Clause>
        1.1 The Company's browser extension and website application provide certain services and information to
        developers (collectively, the “Application”). As part of the use of the Application, you may view and receive,
        from time to time, various information and other content created, among other things, by third parties and other
        end-users of the Application (“Application Content”).
      </Clause>
      <Clause>
        1.2. You hereby represent and warrant that: (i) you are at least 16 years old (the Company reserves the right to
        request proof of age at any stage to verify compliance with this representation), and (ii) the Company has not
        disabled or terminated any Account (as defined below) under your name in the past for any reason.
      </Clause>
    </Section>
  );
}
