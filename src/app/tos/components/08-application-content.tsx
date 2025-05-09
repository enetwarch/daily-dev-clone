import { Clause, Heading, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function ApplicationContent(): React.ReactNode {
  return (
    <Section id={ID.APPLICATION_CONTENT}>
      <Heading>8. Application Content</Heading>
      <TLDR>
        Okay, here's the thing about the content we provide on our app (we call this “Application Content”): we use data
        from other people and artificial intelligence technologies to make it happen. That's how we keep things fresh
        and personalized. But here's the kicker: our content is just for information and personal use. We're not trying
        to push you to do anything based on it. Bottom line is, don't rely too much on our content. We won't be able to
        tell you about every single change that happens. If you decide to use our content to make decisions, that's on
        you. You gotta be responsible for your own actions 😛
      </TLDR>
      <Clause>
        8.1. You hereby acknowledge and agree that for the purpose of providing the Application Content, the Company is
        organizing and analyzing content, data, and information of third parties, including such that are uploaded
        through the Application by other end-users, by using, inter alia, artificial intelligence technologies
        (including the AI Process) that help personalize and improve the Application.
      </Clause>
      <Clause>
        8.2. The Application Content is intended for informational purposes and personal use only. The Company is not
        soliciting any action based on the Application Content and is not endorsing any Application Content. The
        Application content may be subject to factors beyond the Company's control, such as continuous updates or
        modifications, and may reflect personal thoughts and ideas of third parties. You are hereby cautioned not to
        place reliance on any Application Content. The Company does not undertake to advise you of any changes in any of
        the Application Content. Any reliance on any portion of the Application Content or the use thereof is at your
        sole risk, and you shall bear sole responsibility for your actions and decisions made relying on the Application
        Content.
      </Clause>
    </Section>
  );
}
