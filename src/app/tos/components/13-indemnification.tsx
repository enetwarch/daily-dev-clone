import { Clause, Heading, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function Indemnification(): React.ReactNode {
  return (
    <Section id={ID.INDEMNIFICATION}>
      <Heading>13. Indemnification</Heading>
      <TLDR>
        If trouble knocks at our door because of how you've used the app or due to your user content, you're agreeing to
        have our back, covering any costs or damages we might face, even those pesky attorney fees.
      </TLDR>
      <Clause>
        You hereby agree to indemnify and hold Company harmless from any and all damages, liabilities, costs, losses, or
        expenses arising out of any claim, demand, or action (“<Strong>Claim</Strong>”) by a third party (including
        reasonable attorney fees) arising from or in connection your access or use of the Application, the User Content,
        or any breach of your responsibilities or obligations, representations or warranties under this Agreement.
      </Clause>
    </Section>
  );
}
