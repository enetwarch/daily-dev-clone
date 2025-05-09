import { Clause, Heading, Section, Strong, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function GroupAdmins(): React.ReactNode {
  return (
    <Section id={ID.GROUP_ADMINS}>
      <Heading>9. Group Admins</Heading>
      <TLDR>
        Being a Group Admin on our app is like being a neighborhood watch captain. You start your own squad, the
        “Group”, and you're the boss. Here are some things to keep in mind: You gotta ensure that your squad is
        following our rulebook, including our content guidelines. You're the one in the hot seat if they goof up. If a
        rule gets broken, you need to give us a heads-up straight away. This responsibility is on you, chief! If your
        group is up to no good, like doing illegal stuff or constantly crossing the line, we might have to step in. So,
        keep it clean!
      </TLDR>
      <Clause>
        9.1. Certain features of the Application may allow registered users holding an Account to create a community
        within the Application that will include specific end-users of the Application (each, a “<Strong>Group</Strong>
        ”) and to operate such Group as its admin or a moderator (each a “<Strong>Group Admin</Strong>”). If you act as
        a Group Admin, the terms of this Section 9 shall apply to you in addition to any other terms under this
        Agreement.
      </Clause>
      <Clause>
        9.2. The Group Admin shall act as the leader and representative of its respective Group, and as such, each Admin
        is responsible for ensuring that its Group, and all end-users taking part in the Group (whether as users or
        non-users) (“<Strong>Group Members</Strong>”), comply with the terms of this Agreement, including without
        limitation, the Content Guidelines, and Admin shall promote the safety and well-being of its Group Members
        (collectively, “<Strong>Community Guidelines</Strong>”).
      </Clause>
      <Clause>
        9.3. The Group Admin is responsible for the activity of its respective Group and the Group Members. In the event
        Group Admin shall create, approve or otherwise permit to be created any content that violates the terms of this
        Agreement or the Community Guidelines (“<Strong>Violating Content</Strong>”), Group Admin must notify the
        Company immediately of any such Violating Content.
      </Clause>
      <Clause>
        9.4. You may not create any Group in order to promote illegal activities, products, or services, nor for
        purposes that violate the terms of this Agreement, the Content Guidelines, or any applicable law, statute, and
        regulation. The Company may take action, at its absolute discretion, against Groups that appear to have been
        created for purposes that violate the above-mentioned or Groups that are used to repeatedly or severely violate
        the same.
      </Clause>
      <Clause>
        9.5 Group Admins may not create a Group bearing a name that contains profanity or violates the Community
        Guidelines or rights of any third party.
      </Clause>
    </Section>
  );
}
