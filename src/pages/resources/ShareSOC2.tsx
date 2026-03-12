import React from 'react';
import ResourceLayout from '../../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <ResourceLayout 
      title="How to Share SOC 2 Reports with Customers"
      intro="After completing a SOC 2 audit, many companies struggle with how to share the report securely with prospects and customers. A Trust Center allows organizations to share SOC 2 documentation in a controlled and professional way."
    >
      <h2>What customers expect after SOC 2 certification</h2>
      <p>
        Achieving SOC 2 compliance is a milestone, but the certificate alone isn't enough for most security teams. They expect to see the full Type II report to understand the specific controls you've implemented and how they been tested over time.
      </p>

      <h2>Risks of sharing reports over email</h2>
      <p>
        Sending SOC 2 reports as email attachments is risky. You lose control of the document the moment you hit "Send." There’s no easy way to track who has viewed it, no way to revoke access, and you have no legal proof that the recipient agreed to the confidentiality terms before opening the file.
      </p>

      <h2>Why controlled access matters</h2>
      <ul>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Confidentiality:</strong> SOC 2 reports contain sensitive architecture and security details that should only be shared under NDA.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Audit Trail:</strong> You need to know exactly which prospect or customer has accessed your reports.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Professionalism:</strong> A secure portal is a much better brand experience than a generic Google Drive link.</span></li>
      </ul>

      <h2>Using a Trust Center to manage SOC 2 document sharing</h2>
      <p>
        A Trust Center provides a "Request Access" workflow. When a customer wants to see your SOC 2 report, they click a button, agree to your terms, and then receive access. This automates the legal and tracking hurdles that usually slow down the sales process.
      </p>

      <h2>How RegulaTrust helps companies share SOC 2 evidence securely</h2>
      <p>
        RegulaTrust automates the entire document request flow. You can upload your SOC 2 reports, set your confidentiality terms, and track every access request in an audit log. It ensures your most sensitive compliance data is only seen by the right people, at the right time.
      </p>

      <section className="mt-16 border-t border-grey pt-12">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-2">Should I share my bridge letter too?</h4>
            <p className="text-sm text-charcoal/70">Yes. If your SOC 2 report date has passed, a bridge letter provides the necessary assurance for the intervening period. RegulaTrust allows you to bundle these documents together.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Can I automate NDA signing?</h4>
            <p className="text-sm text-charcoal/70">RegulaTrust supports click-wrap NDAs and is designed to integrate with your existing legal workflows to make document sharing frictionless.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
};

export default Page;
