import General from "@/app/tos/components/01-general";
import ScopeOfServiceAndTheLicense from "@/app/tos/components/02-scope-of-service-and-the-license";
import Registration from "@/app/tos/components/03-registration";
import UserObligationsAndRestrictions from "@/app/tos/components/04-user-obligations-and-restrictions";
import IntellectualProperty from "@/app/tos/components/05-intellectual-property";
import RepresentationsAndWarranties from "@/app/tos/components/06-representations-and-warranties";
import UserContent from "@/app/tos/components/07-user-content";
import ApplicationContent from "@/app/tos/components/08-application-content";
import GroupAdmins from "@/app/tos/components/09-group-admins";
import Privacy from "@/app/tos/components/10-privacy";
import Disclaimer from "@/app/tos/components/11-disclaimer";
import LimitationOfLiability from "@/app/tos/components/12-limitation-of-liability";
import Indemnification from "@/app/tos/components/13-indemnification";
import ThirdPartyServicesOrContent from "@/app/tos/components/14-third-party-services-or-content";
import Links from "@/app/tos/components/15-links";
import SubscriptionAndPayments from "@/app/tos/components/16-subscription-and-payments";
import RefundPolicy from "@/app/tos/components/17-refund-policy";
import Miscellaneous from "@/app/tos/components/18-miscellaneous";
import Introduction from "@/app/tos/components/introduction";
import TableOfContents from "@/app/tos/components/table-of-contents";

export default function TermsOfService(): React.ReactNode {
  return (
    <>
      <div className="relative flex w-full">
        <div className="sticky top-30 left-6 hidden h-screen place-self-start lg:block">
          <TableOfContents />
        </div>
        <div className="flex w-full justify-center px-6 xs:px-16 pt-32 pb-80">
          <div className="2xl:-ml-[250px] flex max-w-[900px] flex-col gap-8">
            <Introduction />
            <General />
            <ScopeOfServiceAndTheLicense />
            <Registration />
            <UserObligationsAndRestrictions />
            <IntellectualProperty />
            <RepresentationsAndWarranties />
            <UserContent />
            <ApplicationContent />
            <GroupAdmins />
            <Privacy />
            <Disclaimer />
            <LimitationOfLiability />
            <Indemnification />
            <ThirdPartyServicesOrContent />
            <Links />
            <SubscriptionAndPayments />
            <RefundPolicy />
            <Miscellaneous />
          </div>
        </div>
      </div>
    </>
  );
}
