import { Clause, Heading, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function ScopeOfServiceAndTheLicense(): React.ReactNode {
  return (
    <Section id={ID.SCOPE_OF_SERVICE_AND_THE_LICENSE}>
      <Heading>2. Scope of Service & The License</Heading>
      <TLDR>
        So here's the deal: We're giving you a limited, take-back-able pass to use our app, but only for your own
        personal use. Any changes or updates to the app are part of this deal, too. Just to be super clear, we keep all
        rights to the app that we don't specifically give to you. We also keep an eye on how the app's used to make sure
        everyone's playing fair.
      </TLDR>
      <Clause>
        2.1. Subject to the terms herein, the Company shall use commercially reasonable efforts to grant you a
        non-exclusive, non-transferable, non-sublicensable, revocable, limited license to access, install and use the
        Application, solely for your personal internal use, including any revisions, derivatives, enhancements, updates
        or upgrades to it (the “<Strong>License</Strong>”). For the avoidance of doubt, the Company reserves all rights
        not expressly granted under the License to the fullest extent under any applicable law, and you shall not
        acquire any rights whatsoever in and to the Application beyond the rights granted herein under the License and
        may only use the same under this Agreement. The Company will have the right to review and monitor all use of the
        Application to ensure compliance with the terms of the License and this Agreement.
      </Clause>
      <Clause>
        2.2. The Company may update the functionality, user interface, usability, and other user documentation or
        information relating to the Application and all of its features, from time to time, at its sole discretion and
        in accordance with this Agreement and the terms of this Agreement shall apply to any such subsequent updates and
        upgrades of the Application.{" "}
      </Clause>
    </Section>
  );
}
