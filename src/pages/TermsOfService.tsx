import React from 'react';
import ResourceLayout from '../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <ResourceLayout 
      title="Terms of Service" 
      intro="These Terms of Service govern access to and use of the RegulaTrust platform and related services."
    >
      <p className="text-sm font-bold text-charcoal/40 mb-8">
        Last updated: 13 March 2026<br />
        Applies to: RegulaTrust platform, website, related services, and customer accounts
      </p>

      <h2>1. Introduction</h2>
      <p>
        These Terms of Service (the <strong>Terms</strong>) govern access to and use of the RegulaTrust platform and related services.
      </p>
      <h2>2. Definitions</h2>
      <p>In these Terms:</p>
      <p>
        <strong>Account</strong> means an account used to access the Services.<br />
        <strong>Affiliate</strong> means an entity that directly or indirectly controls, is controlled by, or is under common control with a party.<br />
        <strong>Customer Data</strong> means data, content, documents, materials, and information submitted to or processed through the Services by or on behalf of Customer.<br />
        <strong>Documentation</strong> means user guides, instructions, and technical or functional materials made available by RegulaTrust regarding the Services.<br />
        <strong>Order</strong> means an order form, subscription agreement, statement of work, proposal, or other commercial document agreed between the parties describing the Services purchased.<br />
        <strong>Services</strong> means the RegulaTrust software platform, website functionality, APIs, support, and related services made available from time to time.<br />
        <strong>Subscription Term</strong> means the period during which Customer is authorized to use the Services under an applicable Order.
      </p>

      <h2>3. The Services</h2>
      <p>
        RegulaTrust provides software and related functionality designed to support trust center management, privacy, compliance, security, governance, and related operational workflows.
      </p>
      <p>
        The Services may evolve over time. RegulaTrust may modify, improve, replace, or discontinue features provided that this does not materially reduce the core functionality purchased by Customer during the applicable Subscription Term, except where required for security, legal, or operational reasons.
      </p>
      <p>
        RegulaTrust may offer beta, pilot, preview, or early access features. Unless otherwise agreed in writing, those features are provided <strong>as is</strong>, may change at any time, and may not be subject to the same support, security, or availability commitments as general release features.
      </p>

      <h2>4. Account Registration and Access</h2>
      <p>Customer must ensure that all registration information is accurate and kept up to date.</p>
      <p>Customer is responsible for:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>maintaining the confidentiality of account credentials</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>controlling access to user accounts</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>ensuring that users access the Services only as authorized</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>promptly notifying RegulaTrust of any suspected unauthorized access or credential compromise</span></li>
      </ul>
      <p>
        Each user login is intended for the designated user and may not be shared in a way that circumvents purchased access rights.
      </p>
      <p>RegulaTrust may suspend or restrict access where reasonably necessary to:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>prevent unauthorized access or security harm</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>investigate suspected misuse</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>comply with legal obligations</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>preserve the integrity or availability of the Services</span></li>
      </ul>

      <h2>5. Customer Responsibilities</h2>
      <p>Customer is responsible for:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>ensuring that its use of the Services complies with applicable laws and regulations</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>ensuring it has all necessary rights, notices, and permissions relating to Customer Data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>configuring and using the Services appropriately for its intended purposes</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>reviewing outputs generated by the Services before relying on them for legal, regulatory, security, or business decisions</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>maintaining its own internal policies, approvals, and governance processes where required</span></li>
      </ul>
      <p>
        Customer acknowledges that RegulaTrust provides software tools and workflow support, not legal advice, regulatory advice, audit certification, or guaranteed compliance outcomes.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>Customer and its users must comply with the Acceptable Use Policy made available by RegulaTrust.</p>
      <p>Without limiting that policy, Customer must not use the Services to:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>violate applicable law or regulation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>infringe intellectual property, privacy, confidentiality, or other rights</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>upload malware or malicious code</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>probe, scan, or test the vulnerability of the Services without authorization</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>interfere with or disrupt the integrity, performance, or availability of the Services</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>attempt unauthorized access to any system, account, data, or environment</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the Services to develop or benchmark a competing product in a way that is unfair, deceptive, or abusive</span></li>
      </ul>

      <h2>7. Fees and Payment</h2>
      <p>Customer will pay the fees set out in the applicable Order.</p>
      <p>Unless otherwise stated in an Order:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>fees are quoted and payable in the specified currency</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>fees are non-refundable except where these Terms expressly state otherwise</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>subscriptions renew for successive terms equal to the initial Subscription Term unless either party gives notice of non-renewal at least 30 days before the end of the then-current term</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>overdue amounts may incur interest at the lesser of 4% per annum above the Bank of England base rate or the maximum rate permitted by law</span></li>
      </ul>
      <p>
        Customer is responsible for applicable taxes, duties, and levies, excluding taxes based on RegulaTrust’s net income.
      </p>
      <p>
        If payment is overdue, RegulaTrust may suspend access after giving reasonable notice, unless doing so would be unlawful or disproportionate in the circumstances.
      </p>

      <h2>8. Customer Data</h2>
      <p>As between the parties, Customer retains all right, title, and interest in and to Customer Data.</p>
      <p>Customer grants RegulaTrust a non-exclusive, worldwide, limited-duration right to host, copy, transmit, process, display, and otherwise use Customer Data only as necessary to:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>provide, maintain, secure, and support the Services</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>prevent or address service, fraud, or security issues</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>comply with law</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>perform obligations under the agreement between the parties</span></li>
      </ul>
      <p>RegulaTrust will not sell Customer Data.</p>
      <p>
        RegulaTrust may generate and use aggregated, anonymized, or de-identified data derived from use of the Services for internal analytics, service improvement, benchmarking, and operational purposes, provided that such data does not identify Customer or any individual.
      </p>

      <h2>9. Data Protection</h2>
      <p>
        To the extent RegulaTrust processes personal data on behalf of Customer, the Data Processing Addendum forms part of the agreement between the parties and applies to that processing.
      </p>
      <p>
        Customer is responsible for determining whether the Services are suitable for its regulatory, privacy, and compliance requirements.
      </p>

      <h2>10. Security</h2>
      <p>
        RegulaTrust will implement and maintain reasonable technical and organizational measures designed to protect Customer Data against unauthorized access, disclosure, alteration, or destruction.
      </p>
      <p>
        RegulaTrust may update security measures from time to time, provided that such updates do not materially reduce the overall security posture of the Services.
      </p>

      <h2>11. Intellectual Property</h2>
      <p>RegulaTrust and its licensors retain all right, title, and interest in and to:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the Services</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>software, APIs, interfaces, models, workflows, templates, and Documentation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>all improvements, modifications, and derivative works relating to the Services</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>associated intellectual property rights</span></li>
      </ul>
      <p>
        Except for the limited rights expressly granted under these Terms, no rights are granted to Customer by implication, estoppel, or otherwise.
      </p>
      <p>
        Customer may provide feedback regarding the Services. RegulaTrust may use that feedback without restriction or obligation.
      </p>

      <h2>12. Confidentiality</h2>
      <p>Each party may receive Confidential Information from the other party.</p>
      <p>
        <strong>Confidential Information</strong> means non-public information that should reasonably be understood as confidential given its nature or the circumstances of disclosure, including business, product, security, technical, and commercial information.
      </p>
      <p>The receiving party will:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the same degree of care to protect Confidential Information as it uses to protect its own similar information, but not less than reasonable care</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use Confidential Information only as necessary to perform its obligations or exercise its rights under the agreement</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>limit access to Confidential Information to those who need it for such purposes and are bound by confidentiality obligations</span></li>
      </ul>
      <p>These obligations do not apply to information that the receiving party can demonstrate:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>was already lawfully known without restriction</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>becomes public through no breach by the receiving party</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>is lawfully received from a third party without restriction</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>is independently developed without use of the disclosing party’s Confidential Information</span></li>
      </ul>
      <p>
        A party may disclose Confidential Information where required by law, regulation, or court order, provided it gives notice where legally permitted.
      </p>

      <h2>13. Warranties and Disclaimers</h2>
      <p>
        RegulaTrust warrants that during the Subscription Term it will provide the Services in a manner materially consistent with the applicable Documentation.
      </p>
      <p>
        Except as expressly stated in these Terms or an applicable Order, the Services are provided <strong>as is</strong> and <strong>as available</strong>.
      </p>
      <p>
        To the maximum extent permitted by law, RegulaTrust disclaims all implied warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and that the Services will be uninterrupted, error-free, or produce any guaranteed regulatory, legal, commercial, or security outcome.
      </p>
      <p>Customer acknowledges that:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>compliance outcomes depend on Customer’s own operations, controls, decisions, and data quality</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>AI-assisted or automated outputs may contain inaccuracies or omissions</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the Services are not a substitute for legal advice, independent audit, or professional judgment</span></li>
      </ul>

      <h2>14. Indemnities</h2>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">14.1 RegulaTrust IP indemnity</h3>
      <p className="pl-6">
        RegulaTrust will defend Customer against a third-party claim alleging that the Services infringe that third party’s intellectual property rights, and will pay resulting damages and costs awarded by a court or agreed in settlement, provided that Customer:
      </p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>promptly notifies RegulaTrust of the claim in writing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>grants RegulaTrust sole control of the defence and settlement of the claim</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>provides reasonable cooperation and assistance to RegulaTrust at RegulaTrust’s expense</span></li>
      </ul>
      <p className="pl-6">
        RegulaTrust will have no obligation for claims arising from Customer Data, unauthorized modifications, combinations with third-party software, or use of the Services in breach of the agreement.
      </p>
      <p className="pl-6">
        In the event of an infringement claim, RegulaTrust may at its option procure the right for Customer to continue using the Services, modify the Services to make them non-infringing, or terminate the affected part of the Services and refund unused prepaid fees.
      </p>
      <p className="pl-6">
        This section states Customer’s exclusive remedy for third-party IP infringement claims relating to the Services.
      </p>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">14.2 Customer indemnity</h3>
      <p className="pl-6">
        Customer will defend RegulaTrust against third-party claims arising from:
      </p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer Data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer’s breach of the agreement, including the Acceptable Use Policy</span></li>
      </ul>
      <p className="pl-6">
        Customer will pay damages and costs awarded by a court or agreed in settlement, provided that RegulaTrust complies with the notice, control, and cooperation requirements above.
      </p>

      <h2>15. Limitation of Liability</h2>
      <p>Nothing in these Terms limits or excludes liability for:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>death or personal injury caused by negligence</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>fraud or fraudulent misrepresentation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>breach of confidentiality obligations to the extent liability cannot be excluded by law</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>infringement of the other party’s intellectual property rights</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>amounts payable under an indemnity obligation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>any other liability that cannot lawfully be limited or excluded</span></li>
      </ul>
      <p>Subject to the above, and to the maximum extent permitted by law:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>neither party will be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, goodwill, anticipated savings, business opportunity, or data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>each party’s total aggregate liability arising out of or in connection with the agreement will not exceed the total fees paid or payable by Customer to RegulaTrust under the applicable Order during the 12 months preceding the event giving rise to the claim</span></li>
      </ul>
      <p>
        The exclusions and limitations in this section apply whether the claim arises in contract, tort, negligence, statute, or otherwise.
      </p>

      <h2>16. Term and Termination</h2>
      <p>
        These Terms start when Customer first accepts them or first uses the Services and continue until all Subscription Terms have expired or been terminated.
      </p>
      <p>Either party may terminate for material breach if the other party fails to cure that breach within 30 days after written notice.</p>
      <p>Either party may terminate immediately if the other party:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>becomes insolvent</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>enters administration, liquidation, or a similar process</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>ceases business operations</span></li>
      </ul>
      <p>RegulaTrust may suspend or terminate access immediately where necessary to address serious security risk, unlawful activity, or material misuse.</p>
      <p>Upon termination or expiry:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer’s rights to use the Services end</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>each party will return or destroy the other party’s Confidential Information, subject to legal retention obligations</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>RegulaTrust will handle Customer Data in accordance with the DPA and applicable retention provisions</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>accrued rights and obligations survive</span></li>
      </ul>

      <h2>17. Export, Sanctions, and Compliance</h2>
      <p>Customer must not use the Services in violation of applicable export control, sanctions, anti-bribery, or anti-corruption laws.</p>
      <p>Customer represents that it is not subject to sanctions that would prohibit RegulaTrust from providing the Services.</p>

      <h2>18. Publicity</h2>
      <p>
        RegulaTrust will not publicly identify Customer as a customer without Customer’s prior written consent, except where such identification is expressly permitted in an applicable Order.
      </p>

      <h2>19. Governing Law</h2>
      <p className="bg-off-white p-6 border border-grey rounded-sm font-medium">
        These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>.
      </p>
      <p>
        The parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms.
      </p>

      <h2>20. General</h2>
      <p>
        These Terms, together with the applicable Order, DPA, and any documents expressly incorporated by reference, form the entire agreement between the parties regarding the Services.
      </p>
      <p>If there is a conflict between documents, the order of precedence is:</p>
      <ol className="list-decimal pl-8 mb-8 space-y-2 text-charcoal/80 font-montserrat">
        <li>applicable Order</li>
        <li>DPA</li>
        <li>these Terms</li>
        <li>Documentation</li>
      </ol>
      <p>
        If any provision is found to be invalid or unenforceable, the remaining provisions remain in full force.
      </p>
      <p>
        Failure to enforce a right is not a waiver of that right.
      </p>
      <p>
        The agreement is personal to the parties and may only be assigned with written consent, not to be unreasonably withheld, except to an Affiliate or in connection with a merger or sale of assets.
      </p>
      <p>
        Notices under these Terms must be sent to the contact details in the applicable Order or, if no Order exists, to the most recent contact details provided by the relevant party.
      </p>

      <h2>21. Contact</h2>
      <p>Questions regarding these Terms should be sent to:</p>
      <p><a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>
    </ResourceLayout>
  );
};

export default TermsOfService;
