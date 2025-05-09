import { Clause, Heading, Link, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function UserContent(): React.ReactNode {
  return (
    <Section id={ID.USER_CONTENT}>
      <Heading>7. User Content</Heading>
      <TLDR>
        Alright, so about the stuff you add to our app, like text, photos, code, or videos (we'll call this “User
        Content”). You gotta make sure it follows our Content Guidelines. We get the final say on whether your User
        Content gets posted and when. Plus, you're the one responsible for whatever you upload. You're also promising
        that your User Content doesn't break any laws, violate anyone's rights, or contain anything misleading,
        offensive, or harmful. If it does, we can change or remove it whenever we want, without having to tell you.
        Remember, anything you upload isn't confidential - once it's on our app, anyone can see or use it. So don't post
        anything you want to keep private. And make sure you either own whatever you're posting, or you've got
        permission to post it.
      </TLDR>
      <Clause>
        7.1. Certain features of the Application may permit you to upload, submit, suggest, post, or otherwise make
        available, directly or indirectly, content, including data, text, code, photographs, videos, events, media, and
        other types of works (“<Strong>User Content</Strong>”). All User Content must be in compliance with the Content
        Guidelines.
      </Clause>
      <Clause>
        7.2. You acknowledge and agree that the Company shall have sole discretion to determine if the User Content will
        be posted or uploaded to the Application and the timing on which the User Content will be posted or uploaded to
        the Application.
      </Clause>
      <Clause>
        7.3. You are solely responsible for the User Content (including, without limitation, in connection with its
        compliance with all applicable laws and third-party rights). The Company is under no obligation to edit, control
        or monitor the User Content and will not be in any way responsible or liable for User Content.
      </Clause>
      <Clause>
        7.4. Without derogating from the Content Guidelines, you hereby undertake that any and all User Content shall
        not (i) violate or infringe any third-party rights (including but not limited to any copyrights, moral rights,
        trademark rights, trade secret rights, patent rights, privacy rights, publicity rights or contract rights), (ii)
        violate or infringe any applicable local, state, national or international laws, rules or regulations of any
        applicable jurisdiction (including but not limited to any tax laws, consumer protection laws, or laws governing
        the export and/or import of data, software or any other property); (iii) be deceptive, misleading, fraudulent,
        defamatory, libelous, abusive, harassing, discriminatory, hateful, malicious, inciting of violence, threatening,
        sexually explicit or obscene, pornographic, invasive of personal privacy or publicity rights; (iv) promote
        racism, bigotry, hatred or physical harm of any kind against any group or individual; (v) We have a
        zero-tolerance policy toward objectionable content, harassment, abusive behavior, or any other violations of our{" "}
        <Link href="https://tinyurl.com/37wd2px3">Content Guidelines</Link>. Violations may result in immediate content
        removal and/or account suspension.
      </Clause>
      <Clause>
        7.5. Company reserves the right to cut, crop, edit, change, limit, ban, remove or refuse to publish any User
        Content, in whole or in part, without notice or liability, at any time and in its sole discretion.
      </Clause>
      <Clause>
        7.6. Any User Content will be considered non-confidential and non-proprietary. You must not post any User
        Content on or through the Application that you consider to be confidential or proprietary. When you submit or
        post User Content through the Application, you agree and represent that (a) the User Content will become public
        information, and may be published or transmitted by other end-users through any platform or application, either
        now known or hereinafter invented; (b) you own that User Content or you have received all necessary permissions,
        clearances from, or are authorized by, the owner of any part of the User Content, to submit it to the
        Application.
      </Clause>
      <Clause>
        7.7. To the fullest extent permitted by law, Company is not responsible for the use of any User Content or
        results of processing User Content by users or non-users of the Application or any third parties.
      </Clause>
      <Clause>
        7.8. The company shall have the right to collect and analyze data and other information relating to the
        provision, use, and performance of various aspects of the Application and related systems and technologies (“
        <Strong>Usage Data</Strong>”). The Application may be implemented using machine learning and artificial
        intelligence systems with features and implementations designed to generate statistics, calibrate data models,
        and improve algorithms in the course of processing User Content and Usage Data (“<Strong>AI Process</Strong>”).
        The Company has the right to use such AI Process for testing, tuning, optimizing, validating, or otherwise
        enhancing the analytics, models, or algorithms underlying the Application. You shall not have any rights in or
        to any part of the Application or the AI Process generated by the Company or the AI Process generated in the
        course of providing the Application.
      </Clause>
    </Section>
  );
}
