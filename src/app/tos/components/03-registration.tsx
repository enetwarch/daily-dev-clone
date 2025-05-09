import { Clause, Heading, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function Registration(): React.ReactNode {
  return (
    <Section id={ID.REGISTRATION}>
      <Heading>3. Registration</Heading>
      <TLDR>
        Here's how it goes: You can use our app as a guest or sign up for an account. When you sign up, we'll ask for
        some info (which you gotta keep accurate and up-to-date), and you'll choose a username and password. You're the
        keeper of your account info and login details. Don't let anyone else use your account, and do your best to keep
        it from getting hacked. If you spill your login details and something bad happens, it's not on us.
      </TLDR>
      <Clause>
        3.1. Under the License, you may use the Application as a guest or as a registered user. If you wish to register
        to the Application, the Company shall provide you with credentials to open an account as an end user for the use
        and access to the Application (the “<Strong>Account</Strong>”).
      </Clause>
      <Clause>
        3.2. As part of your registration to the Application, you shall be required to provide certain information to
        the Company, including as further detailed in the Privacy Policy (as defined below). You hereby undertake that
        all such information shall be accurate and complete and to keep all such information up-to-date.
      </Clause>
      <Clause>
        3.3. As part of creating the Account, you will be asked to choose a password and user name, which, together with
        your email address associated with the Account (the “<Strong>Access Information</Strong>”), will constitute your
        identification information to log into your Account.
      </Clause>
      <Clause>
        3.4. You are solely responsible for maintaining the confidentiality of your Account information and Access
        Information, and you shall remain solely responsible for any activity on your Account and any activity that
        occurs as part of your access to the Application. You may not allow any other third party to use or access your
        Account and agree to use reasonable efforts to prevent unauthorized access to the Application and any device
        that you use to access the Application. If you share your Access Information with anyone, the Company will not
        be held liable for any loss that may occur as a result thereof.
      </Clause>
      <Clause>
        3.5. You will contact the Company promptly if (i) you discover that any Account information or Access
        Information is lost, stolen, or disclosed to an unauthorized person; (ii) you reasonably believe that the
        Account has been compromised, including any unauthorized access, use, or disclosure of Account information or
        Access Information; or (iii) you discover any other breach of security in relation to the Account information or
        Access Information, or the Application, that may have occurred or is reasonably likely to occur.
      </Clause>
    </Section>
  );
}
