import { Clause, Heading, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function IntellectualProperty(): React.ReactNode {
  return (
    <Section id={ID.INTELLECTUAL_PROPERTY}>
      <Heading>5. Intellectual Property</Heading>
      <TLDR>
        Here's the thing: all the stuff you see in our app, like text, images, logos, data, designs, and all the
        behind-the-scenes intellectual property stuff, that's all ours. Except for the license to use our app, we're not
        giving you any other rights to our stuff. When we say “Intellectual Property Rights”, we're talking about a huge
        range of stuff, like patents, copyrights, trade secrets, trademarks, and a bunch more. Basically, any legal
        rights related to stuff we've created.
      </TLDR>
      <Clause>
        5.1. Notwithstanding anything to the contrary herein, the Application and any content of the Company that is
        embodied in the Application, including materials, text, photos, logos, any graphical display of data, designs,
        sound, figures, analysis, statistics, and any other content, and all Intellectual Property Rights therein and
        any Feedback (as defined below), and any derivatives thereof and modifications or enhancements to it
        (collectively, “<Strong>Company's IPR</Strong>”), are exclusively owned by Company and/or its licensors. Except
        for the License, and as expressly provided herein, no other rights or licenses, expressed or implied, are
        granted to you by Company with respect to the Application or Company's IPR.
      </Clause>
      <Clause>
        “<Strong>Intellectual Property Rights</Strong>” means any and all worldwide intellectual property rights,
        whether registered or not, including, but not limited to: (a) patents, patent applications and patent rights,
        know how, inventions, research and development activities and discoveries; (b) rights associated with works of
        authorship, including copyrights, copyrights applications, copyrights restrictions, mask work rights, mask work
        applications and mask work registrations; (c) rights relating to the protection of trade secrets and
        confidential information, including but not limited to confidential and proprietary information concerning the
        business and financial activities of Company, and any information concerning its service providers, employees,
        customers, suppliers, and partners; (d) trademarks, trade names, service marks, logos, trade dress, goodwill and
        domains; (e) rights analogous to those set forth herein and any other proprietary rights relating to intangible
        property; and (f) divisions, continuations, renewals, reissues and extensions of the foregoing (as applicable)
        now existing or hereafter filed, issued, or acquired.
      </Clause>
      <Clause>
        5.2. Any feedback provided by you to Company regarding the Application or any suggested improvements,
        enhancements, or derivatives thereto (“<Strong>Feedback</Strong>”) is welcome by the Company. You are not
        required to provide Feedback. However, to the extent that you shall do so, such Feedback shall be solely owned
        by the Company and shall not, under any circumstance, constitute your confidential information. You hereby
        acknowledge that the Company may use such Feedback in any manner Company sees fit with no restrictions, without
        payment of royalty or any other consideration.
      </Clause>
    </Section>
  );
}
