import { Clause, Heading, Link, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function RefundPolicy(): React.ReactNode {
  return (
    <Section id={ID.REFUND_POLICY}>
      <Heading>17. Refund Policy</Heading>
      <TLDR>
        If you change your mind about your subscription, you may be eligible for a refund based on our policy. Refunds
        are handled by Paddle.
      </TLDR>
      <Clause>
        Refund requests are subject to our <Link href="https://tinyurl.com/39m6nktz">Refund Policy</Link>, which
        outlines eligibility based on subscription type. Paddle handles refund processing, and any approved refunds will
        be issued by Paddle to your original payment method.
      </Clause>
    </Section>
  );
}
