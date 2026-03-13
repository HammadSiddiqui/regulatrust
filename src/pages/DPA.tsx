import React from 'react';
import ResourceLayout from '../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const DPA: React.FC = () => {
  return (
    <ResourceLayout 
      title="Data Processing Addendum" 
      intro="This Data Processing Addendum (DPA) forms part of the agreement between Protego Sol Limited and the Customer for the provision of the RegulaTrust Services."
    >
      <p className="text-sm font-bold text-charcoal/40 mb-8">
        Last updated: 13 March 2026<br />
        Applies where: Protego Sol Limited processes personal data on behalf of a customer in connection with the RegulaTrust Services
      </p>

      <h2>1. Purpose and Scope</h2>
      <p>
        This Data Processing Addendum (the <strong>DPA</strong>) forms part of the agreement between <strong>Protego Sol Limited</strong> and the Customer for the provision of the RegulaTrust Services.
      </p>
      <p>
        This DPA applies where RegulaTrust processes <strong>Customer Personal Data</strong> on behalf of Customer as a processor or sub-processor under applicable data protection law.
      </p>

      <h2>2. Definitions</h2>
      <p>
        <strong>Customer Personal Data</strong> means personal data processed by RegulaTrust on behalf of Customer in connection with the Services.
      </p>
      <p>
        <strong>Data Protection Law</strong> means all laws and regulations applicable to the processing of personal data under the agreement, including where applicable the UK GDPR, the Data Protection Act 2018, the EU GDPR, and related national laws.
      </p>
      <p>
        <strong>Controller</strong>, <strong>Processor</strong>, <strong>Data Subject</strong>, <strong>Personal Data Breach</strong>, and <strong>Processing</strong> have the meanings given in applicable Data Protection Law.
      </p>

      <h2>3. Roles of the Parties</h2>
      <p>The parties acknowledge that:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer acts as Controller, or as Processor acting on behalf of another Controller</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>RegulaTrust acts as Processor, or where applicable as Sub-processor</span></li>
      </ul>
      <p>
        Customer is responsible for ensuring that it has a valid legal basis for the processing of Customer Personal Data and for issuing any required privacy notices.
      </p>

      <h2>4. Subject Matter and Nature of Processing</h2>
      <p>
        RegulaTrust processes Customer Personal Data for the purpose of providing the RegulaTrust Services, including hosting, storage, retrieval, workflow execution, support, security, maintenance, analytics related to service operation, and other processing necessary to deliver the Services.
      </p>
      <p>
        The duration of processing is the Subscription Term plus any period during which RegulaTrust retains Customer Personal Data in accordance with the agreement, documented instructions, or applicable law.
      </p>
      <p>Categories of Data Subjects may include:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer personnel</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer users</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer prospects, clients, vendors, or counterparties</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>other individuals whose personal data is submitted to the Services by or on behalf of Customer</span></li>
      </ul>
      <p>Categories of Personal Data may include:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>identification data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>business contact data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>account and authentication data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>communications and support data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>content contained in customer-submitted documents, records, workflows, or forms</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>technical usage data associated with service operation</span></li>
      </ul>
      <p>Customer controls the categories of personal data it chooses to submit.</p>

      <h2>5. Customer Instructions</h2>
      <p>RegulaTrust will process Customer Personal Data only:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>on documented instructions from Customer</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>as necessary to provide the Services under the agreement</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>as required by applicable law</span></li>
      </ul>
      <p>
        The agreement, including this DPA, constitutes Customer’s complete and documented instructions at the time of signature, unless the parties agree additional instructions in writing.
      </p>
      <p>
        If RegulaTrust believes an instruction infringes applicable Data Protection Law, it may inform Customer and suspend the relevant processing until the issue is resolved.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        RegulaTrust will ensure that persons authorized to process Customer Personal Data are bound by appropriate confidentiality obligations.
      </p>

      <h2>7. Security Measures</h2>
      <p>
        RegulaTrust will implement appropriate technical and organizational measures designed to protect Customer Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or unauthorized access.
      </p>
      <p>These measures may include, as appropriate:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>encryption in transit</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>encryption at rest where applicable</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>role-based access controls</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>authentication controls</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>logging and monitoring</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>secure infrastructure configuration</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>network restrictions</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>backup and recovery measures</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>environment segregation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>secure software development practices</span></li>
      </ul>
      <p>
        Customer acknowledges that security measures are evaluated in light of the state of the art, implementation cost, scope, context, and risks associated with the processing.
      </p>

      <h2>8. Assistance to Customer</h2>
      <p>
        Taking into account the nature of the processing and the information available to RegulaTrust, RegulaTrust will provide reasonable assistance to Customer with respect to:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>responding to Data Subject requests</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>conducting data protection impact assessments where required</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>consulting with regulators where required</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>demonstrating compliance with Articles 28 to 36 of the GDPR framework or equivalent provisions under applicable law</span></li>
      </ul>
      <p>
        Where such assistance requires significant time or effort beyond standard service obligations, RegulaTrust may charge reasonable fees.
      </p>

      <h2>9. Personal Data Breach Notification</h2>
      <p>
        RegulaTrust will notify Customer without undue delay after becoming aware of a confirmed Personal Data Breach affecting Customer Personal Data.
      </p>
      <p>
        The notification will include available information reasonably necessary for Customer to understand the nature of the breach and meet its own legal obligations, such as where available:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the nature of the incident</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the categories of affected data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>likely consequences</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>mitigation steps taken or proposed</span></li>
      </ul>
      <p>RegulaTrust’s notification of a Personal Data Breach is not an admission of fault or liability.</p>

      <h2>10. Sub-processors</h2>
      <p>Customer authorizes RegulaTrust to engage Sub-processors to assist in providing the Services.</p>
      <p>RegulaTrust’s current sub-processor categories and providers may include:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Supabase</strong></span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Vercel</strong></span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Render</strong></span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Stripe</strong></span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>PostHog</strong></span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Brevo</strong></span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>GoDaddy</strong></span></li>
      </ul>
      <p>
        RegulaTrust will impose data protection obligations on Sub-processors that are materially no less protective than those set out in this DPA, to the extent applicable to the services performed.
      </p>
      <p>
        RegulaTrust remains responsible for the performance of its Sub-processors to the extent required by applicable Data Protection Law.
      </p>
      <p>Customer may request reasonable information about Sub-processors relevant to the Services.</p>

      <h2>11. International Transfers</h2>
      <p>
        Customer acknowledges that Customer Personal Data may be processed in the <strong>European Union</strong> and, for certain backups or infrastructure components, the <strong>United States</strong>.
      </p>
      <p>
        Where RegulaTrust transfers Customer Personal Data internationally, RegulaTrust will implement appropriate safeguards as required by applicable Data Protection Law, including <strong>Standard Contractual Clauses (SCCs)</strong> where applicable.
      </p>
      <p>
        Where UK transfer rules apply, the parties agree that the SCCs will be read together with any required UK addendum or equivalent transfer mechanism where necessary.
      </p>

      <h2>12. Audit and Information Rights</h2>
      <p>RegulaTrust will make available information reasonably necessary to demonstrate compliance with this DPA.</p>
      <p>Where such information is not sufficient, Customer may request an audit no more than once per year, subject to the following conditions:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the audit must be reasonable, proportionate, and limited to matters relevant to Customer’s use of the Services</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer must give reasonable prior written notice</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the audit must not unreasonably interfere with RegulaTrust’s business operations or compromise other customers’ rights, security, or confidentiality</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>the audit must be conducted under appropriate confidentiality obligations</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>RegulaTrust may satisfy the request through existing audit reports, certifications, summaries, or security documentation where appropriate</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Customer must bear its own costs and reimburse RegulaTrust’s reasonable costs where the audit imposes material operational burden</span></li>
      </ul>

      <h2>13. Return and Deletion of Data</h2>
      <p>
        Upon termination or expiry of the Services, RegulaTrust will delete or return Customer Personal Data in accordance with the agreement and Customer’s documented instructions, unless retention is required by applicable law.
      </p>
      <p>
        Where the parties have not agreed a different mechanism, RegulaTrust may retain Customer Personal Data for a limited period necessary for backup integrity, dispute resolution, legal compliance, or security purposes, after which deletion will occur in the ordinary course.
      </p>

      <h2>14. Liability</h2>
      <p>
        Each party’s liability arising under this DPA is subject to the exclusions and limitations of liability set out in the main agreement, except to the extent prohibited by applicable Data Protection Law.
      </p>

      <h2>15. Order of Precedence</h2>
      <p>
        If there is any inconsistency between this DPA and the main agreement, this DPA prevails with respect to matters concerning the processing of Customer Personal Data.
      </p>

      <h2>16. Contact</h2>
      <p>Questions regarding this DPA may be sent to:</p>
      <p><a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>
    </ResourceLayout>
  );
};

export default DPA;
