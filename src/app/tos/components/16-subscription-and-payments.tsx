import { Clause, Heading, Link, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function SubscriptionAndPayments(): React.ReactNode {
  return (
    <Section id={ID.SUBSCRIPTION_AND_PAYMENTS}>
      <Heading>16. Subscription and Payments</Heading>
      <TLDR>
        We're launching a premium subscription plan! Payments are handled by Paddle, so all payment terms apply to you.
        Just a heads-up: our premium subscription service will auto-renew unless you decide to cancel, and we have a
        refund policy you should check out before signing up.
      </TLDR>
      <Clause>
        Our premium experience, Daily Dev Plus, is available through a paid subscription. By subscribing, you agree to
        pay the fees specified for the subscription term chosen at the time of purchase, as outlined in our{" "}
        <Link href="https://tinyurl.com/39m6nktz">Refund Policy</Link>.
      </Clause>
      <Clause>
        Payments for Daily Dev Plus are processed by Paddle, our Merchant of Record. By purchasing a subscription, you
        also agree to Paddle's Terms of Service, available <Link href="https://tinyurl.com/2wp64vbc">here</Link>. Paddle
        will handle all invoicing, payment, and refund processing for your subscription.
      </Clause>
      <Clause>
        The subscription renews automatically at the end of each billing period unless canceled. You may cancel your
        subscription at any time, effective at the end of the current billing cycle, through your account settings or by
        contacting support at <Link href="https://tinyurl.com/4wcs4u62">support@daily.dev</Link>.
      </Clause>
    </Section>
  );
}
