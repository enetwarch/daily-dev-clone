import { Clause, Heading, Link, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function UserObligationsAndRestrictions(): React.ReactNode {
  return (
    <Section id={ID.USER_OBLIGATIONS_AND_RESTRICTIONS}>
      <Heading>4. User Obligations and Restrictions</Heading>
      <TLDR>
        You've got to foot the bill for your gear to use our app, and make sure it all works together. We're all about
        good vibes here, so stick to our content rules and don't mess with the app's insides or use it for dodgy or
        money-making schemes. If you stir up trouble, we can pull the plug on your account, tell others about your
        antics, and do whatever we need to keep things chill.
      </TLDR>
      <Clause>4.1. You are solely responsible for your use of and activity on the Application.</Clause>
      <Clause>
        4.2. It is your responsibility to obtain and maintain at your expense all necessary equipment, computer
        hardware, modems, connections to the internet, and other items required to access the Application and ensure
        that such equipment is compatible with the Application.
      </Clause>
      <Clause>
        4.3. You undertake to use the Application respectfully. Without derogating from the foregoing, you hereby
        undertake and agree not to upload, distribute, publish, or submit through the Application any content,
        information, or other material (including with respect to the User Content (as defined below)) that is not in
        compliance with the Company's Content Guidelines as available at{" "}
        <Link href="https://tinyurl.com/37wd2px3">https://r.daily.dev/content-guidelines</Link> (the “
        <Strong>Content Guidelines</Strong>”). By using the Application, you agree to abide by the Content Guidelines,
        which are incorporated by reference into these Terms of Service. Users who violate these guidelines may have
        their content removed or their account suspended at the sole discretion of daily.dev.
      </Clause>
      <Clause>
        4.4. Without limiting the generality of the foregoing, you may not, may not permit or aid others, or allow any
        third party, to: (i) copy, modify, reverse engineer, decompile, or disassemble the Company's IPR (as defined
        below) or any part thereof, or create derivative works based on the Company's IPR; (ii) sell, rent, lease,
        sublicense, distribute, commercially exploit or transfer the Company's IPR or any part thereof; (iii) represent
        that you have any proprietary interest in the Application or delete or modify any attributions, legal notices or
        other proprietary designations on the Application; (iv) use the Company's IPR, either solely or in conjunction
        with any other products, for any purpose other than for the purpose hereunder, or contrary to the terms of this
        Agreement, including in any way that will or might infringe any third party's rights (including without
        limitation third party's intellectual property rights); (v) use the Application in any illegal manner or for
        unlawful purposes; (vi) create an account with the Application through unauthorized means, including but not
        limited to, by using an automated device, script, bot, spider, crawler or scraper; (vii) develop, support or use
        any means, including any automated device, script or bot, to scrape (such as access or copy in bulk, retrieve,
        harvest, or index any portion) the Application or any data of any kind available on the Application or related
        thereto, for any purpose; (viii) contest Company's Intellectual Property Rights to Company's IPR; (ix) use any
        other trademarks, service marks, trade names, designs, logos or other kind of proprietary rights, that are
        confusingly similar to any of the Company's IPR or to the look and feel of the Application; (x) interfere with
        or disrupt the integrity or performance of the Application or Company's network or the data contained therein or
        the use of other end-users of the Application; (xi) engage in “framing”, “mirroring”, or otherwise simulating
        the appearance or function of the Application; or (xii) Abuse the Application in any way.
      </Clause>
      <Clause>
        “<Strong>Abuse</Strong>” shall mean and include any prohibited activity outlined in this Section 4.4, including,
        without limitation, direct or indirect violation or bad activity in or through the Application, including
        copyright infringement, email spamming, and network scanning. The decision, whether an Abuse occurred or not,
        shall reside with Company in its sole discretion. Upon resolution by the Company that an Abuse has occurred,
        without derogating from any of the Company's rights, the Company shall notify you accordingly to cease the Abuse
        immediately.
      </Clause>
      <Clause>
        4.5. Without prejudice to any other right of the Company, upon any such forbidden uses as described in this
        Section 4, the Company shall have the right to (i) immediately terminate the License; (ii) report your behavior
        patterns on the Application to third parties; and (iii) take any other action that the Company may deem
        appropriate to protect its property and rights, as well as the rights of third parties.
      </Clause>
    </Section>
  );
}
