import { Clause, Heading, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function ThirdPartyServicesOrContent(): React.ReactNode {
  return (
    <Section id={ID.THIRD_PARTY_SERVICES_OR_CONTENT}>
      <Heading>14. Third Party Services or Content</Heading>
      <TLDR>
        Our app might show content or services from others, including ads and user stuff, but just so you know, we don't
        make, control, or endorse that stuff, and it might not always be spot-on, so double-check anything you plan to
        act on.
      </TLDR>
      <Clause>
        While using the Application, you may view content or services provided by third parties, including
        advertisements and User Content published by other end-users. It is emphasized that all content provided by
        third parties is not provided by the Company or by anyone on its behalf, and the Company does not control,
        endorse or adopt any such content or services, and such may not always be accurate or current.
      </Clause>
      <Clause>
        Accordingly, the Company recommends you independently verify all information before relying on it, and any
        decisions or actions taken based upon such information are your sole responsibility.
      </Clause>
    </Section>
  );
}
