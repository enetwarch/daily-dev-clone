import { Clause, Heading, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function LimitationOfLiability(): React.ReactNode {
  return (
    <Section id={ID.LIMITATION_OF_LIABILITY}>
      <Heading>12. Limitation of Liability</Heading>
      <TLDR>
        In the unlikely event that something goes south, we're keeping it fair and simple: our liability caps at 100
        bucks, no matter the scenario, which we think is pretty reasonable given the lay of the land.
      </TLDR>
      <Clause>
        12.1. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL THEORY (TORT,
        CONTRACT, OR OTHERWISE), INCLUDING NEGLIGENCE AND STRICT LIABILITY, SHALL THE COMPANY OR ITS LICENSORS BE LIABLE
        TO YOU OR ANY OTHER THIRD PARTY FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY TYPE
        INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER FAILURE OR
        MALFUNCTION, LOSS OF PROFITS, LOSS OF DATA OR BUSINESS INFORMATION, LOSS OF USE, COST OF PROCUREMENT OF
        SUBSTITUTE GOODS OR SERVICES, OR ANY AND ALL OTHER COMMERCIAL DAMAGES OR LOSSES, WHETHER OR NOT THE COMPANY HAS
        BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN ANY
        EVENT, THE COMPANY'S MAXIMUM AGGREGATE LIABILITY UNDER OR ARISING OUT OF OR RELATING TO THIS AGREEMENT SHALL NOT
        EXCEED AN AGGREGATE AMOUNT OF US$100.
      </Clause>
      <Clause>
        12.2. The limitations contained in this Section 12 are considered reasonable by the parties having regard to the
        circumstances which are known to or in the contemplation of the parties at the date of this Agreement and the
        availability of insurance to the parties.
      </Clause>
    </Section>
  );
}
