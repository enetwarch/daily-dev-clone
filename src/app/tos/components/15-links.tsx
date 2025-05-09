import { Clause, Heading, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function Links(): React.ReactNode {
  return (
    <Section id={ID.LINKS}>
      <Heading>15. Links</Heading>
      <TLDR>
        Our app might have links and stuff leading to other sites or software controlled by third parties. Before you
        click, make sure you know what you're getting into as we're not vouching for them with these links. They're
        simply there for your browsing pleasure.
      </TLDR>
      <Clause>
        The Application may contain links, content, advertisements, promotions, logos, and other materials to websites
        or software that are controlled or offered by third parties (the “<Strong>Links</Strong>”). The Company cautions
        you to ensure that you understand the risks involved in using such websites, software, platforms, or materials
        before retrieving, using, relying upon, or purchasing anything via these websites, platforms, or software or
        based on such materials.
      </Clause>
      <Clause>
        The inclusion of Links in the Application is not an endorsement, authorization, sponsorship, affiliation, or any
        other connection between the Company and those websites, platforms, software, or their operators. Such Links are
        provided solely for your convenience, and you agree that under no circumstances will the Company be liable for
        any loss or damage caused by the use of or reliance on any content, goods, or services available on other
        websites, platforms, or software.
      </Clause>
    </Section>
  );
}
