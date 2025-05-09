import { Clause, Heading, Section, TLDR } from "@/app/tos/components/ui/term";
import { ID } from "@/app/tos/constants/id";

export default function RepresentationsAndWarranties(): React.ReactNode {
  return (
    <Section id={ID.REPRESENTATIONS_AND_WARRANTIES}>
      <Heading>6. Representations And Warranties</Heading>
      <TLDR>
        We both promise that we've got the right to make this deal, and doing so doesn't break any other agreements
        we've made elsewhere. We're also both agreeing that this is a legit deal that can be enforced by law.
      </TLDR>
      <Clause>
        6.1. Each party hereby represents and warrants that: (i) it has the full corporate right, power, and authority
        to enter into this Agreement and to perform the acts required hereunder; (ii) the execution of this Agreement
        and the performance of its obligations and duties hereunder does not violate any agreement to which it is a
        party or by which it is otherwise bound; (iii) this Agreement constitutes a legal, valid and binding obligation,
        enforceable in accordance with its terms.
      </Clause>
    </Section>
  );
}
