import { ID } from "@/app/tos/constants/id";
import Image from "next/image";

export default function TableOfContents(): React.ReactNode {
  return (
    <aside>
      <div className="flex gap-2">
        <Image src="/table-of-contents-icon.svg" alt="Table of conents icon" width={24} height={24} />
        <h1 className="font-poppins">Table of Contents</h1>
      </div>
      <nav aria-label="Table of Contents" className="py-2 w-[250px]">
        <ul className="flex flex-col gap-1 w-full">
          <Fragment href={`#${ID.GENERAL}`}>1. General</Fragment>
          <Fragment href={`#${ID.SCOPE_OF_SERVICE_AND_THE_LICENSE}`}>2. Scope of Service & The License</Fragment>
          <Fragment href={`#${ID.REGISTRATION}`}>3. Registration</Fragment>
          <Fragment href={`#${ID.USER_OBLIGATIONS_AND_RESTRICTIONS}`}>4. User Obligrations and Restrictions</Fragment>
          <Fragment href={`#${ID.INTELLECTUAL_PROPERTY}`}>5. Intellectual Property</Fragment>
          <Fragment href={`#${ID.REPRESENTATIONS_AND_WARRANTIES}`}>6. Representation and Warranties</Fragment>
          <Fragment href={`#${ID.USER_CONTENT}`}>7. User Content</Fragment>
          <Fragment href={`#${ID.APPLICATION_CONTENT}`}>8. Application Content</Fragment>
          <Fragment href={`#${ID.GROUP_ADMINS}`}>9. Group Admins</Fragment>
          <Fragment href={`#${ID.PRIVACY}`}>10. Privacy</Fragment>
          <Fragment href={`#${ID.DISCLAIMER}`}>11. Disclaimer</Fragment>
          <Fragment href={`#${ID.LIMITATION_OF_LIABILITY}`}>12. Limitation of Liability</Fragment>
          <Fragment href={`#${ID.INDEMNIFICATION}`}>13. Indemnification</Fragment>
          <Fragment href={`#${ID.THIRD_PARTY_SERVICES_OR_CONTENT}`}>14. Third party Services or Content</Fragment>
          <Fragment href={`#${ID.LINKS}`}>15. Links</Fragment>
          <Fragment href={`#${ID.SUBSCRIPTION_AND_PAYMENTS}`}>16. Subscription and Payments</Fragment>
          <Fragment href={`#${ID.REFUND_POLICY}`}>17. Refund Policy</Fragment>
          <Fragment href={`#${ID.MISCELLANEOUS}`}>18. Miscellaneous</Fragment>
        </ul>
      </nav>
    </aside>
  );
}

type FragmentProps = React.HTMLAttributes<HTMLElement> & {
  href: string;
  children: React.ReactNode;
};

function Fragment({ href, children, ...props }: FragmentProps): React.ReactNode {
  return (
    <li className="rounded-md inline hover:bg-[#0000001f] hover:underline">
      <a href={href} className="px-4 py-1 font-poppins font-semibold w-full block h-full" {...props}>
        {children}
      </a>
    </li>
  );
}
