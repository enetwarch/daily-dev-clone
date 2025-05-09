import { Clause, Heading, Link, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function Miscellaneous(): React.ReactNode {
  return (
    <Section id={ID.MISCELLANEOUS}>
      <Heading>18. Miscellaneous</Heading>
      <TLDR>
        You can choose to leave our app and delete your account whenever you fancy. But, be aware that if you're not
        playing by the rules, we have the right to suspend or axe your use of the app. If we part ways, certain sections
        of this agreement will continue to apply. This agreement represents everything we've agreed on, and if any part
        of it doesn't stand up in court, the rest of it still holds. Lastly, the laws of the State of Israel govern this
        agreement and any disputes will be dealt with in the courts of Tel-Aviv, though we can take action anywhere if
        there's a real threat of a breach.
      </TLDR>
      <Clause>
        18.1. You may terminate this Agreement at any time by deleting your Account and ceasing to use the Application.
        The Company shall have the right to suspend or terminate the License and your use of the Application
        immediately, at any time, upon your failure to comply with any of your obligations hereunder. Upon termination
        of the Agreement, the Company shall be entitled to terminate or disable the Account, and you shall cease to use
        the Application. Notwithstanding the termination or expiration of this Agreement, Sections 5 (Intellectual
        Property), 9 (Privacy), 11 (Disclaimer), 12 (Limitation of Liability), 13 (Indemnification), and 16
        (Miscellaneous) shall survive and remain in effect in perpetuity.
      </Clause>
      <Clause>
        18.2. The Company may, at its sole discretion, update, upgrade, amend, modify, or discontinue, from time to
        time, the Application and/or introduce new services therewith. The Company shall not be liable for any loss
        suffered by you resulting from any such changes made, nor your inability to use certain features of the
        Application or reduced performance associated with failure to install available updates and upgrades of the
        Application, and you shall have no claims against the Company in such regard.
      </Clause>
      <Clause>
        18.3. This Agreement contains the entire understanding of the parties with respect to the subject matter hereof
        and supersedes all prior agreements, sales orders, or other instruments between the parties. The Company may
        change and update the terms of this Agreement from time to time. By continuing to use the Application after any
        changes come into effect, you are deemed to agree to such revised terms.
      </Clause>
      <Clause>
        18.4. The parties will at all times be independent contractors with no right to bind or obligate the other in
        any manner whatsoever. The transmission of information to or from the Application does not create between the
        parties any relationship that deviates from those specified in this Agreement.
      </Clause>
      <Clause>
        18.5. You may not transfer or assign your rights or obligations under this Agreement to any third party without
        the Company's prior written approval, and any such purported assignment shall be null and void. The Company may
        assign its rights or obligations under this Agreement at any time.
      </Clause>
      <Clause>
        18.6. The failure of either party at any time to require performance by the other of any provision herein will
        not affect the right of such party to require performance at any time thereafter, nor will the failure of either
        party to take action regarding a breach of any provision hereof be taken or held to be a waiver of the provision
        itself.
      </Clause>
      <Clause>
        18.7. By agreeing to the terms of this Agreement, you hereby confirm that you further agree to be bound by the
        YouTube's terms of service, currently located at{" "}
        <Link href="https://tinyurl.com/yczxcexx">https://www.youtube.com/t/terms</Link>.
      </Clause>
      <Clause>
        18.8. Any provision of this Agreement which is determined to be prohibited or unenforceable by a court of
        competent jurisdiction will be ineffective only to the extent of such prohibition or unenforceability and will
        be severed without invalidating the remaining provisions hereof or otherwise affecting the validity or
        enforceability of such provision. The headings used herein are for the convenience of the parties only and will
        not affect the interpretation of this Agreement.
      </Clause>
      <Clause>
        18.9. Any abbreviated version of this Agreement, including by way of the 'TDLR' sections set forth herein, are
        intended strictly for convenience of the parties only and will have no force and effect with respect to the
        provisions of this Agreement, including with respect to the interpretation of it or any provision thereof.
      </Clause>
      <Clause>
        18.10. This Agreement shall be governed by the laws of the State of Israel without reference to its principles
        of conflict of laws to the extent they would require the application of the law of another jurisdiction. The
        parties each consent to the exclusive jurisdiction of the courts of Tel-Aviv, Israel, and waive any objection to
        venue in such courts. Notwithstanding the foregoing, the Company shall be entitled to seek injunctive and other
        equitable relief without the necessity of showing actual monetary damages in any jurisdiction in the event of an
        actual or threatened breach.
      </Clause>
      <Clause>{"//"} end</Clause>
    </Section>
  );
}
