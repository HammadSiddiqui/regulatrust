import React from 'react';
import ResourceLayout from '../../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <ResourceLayout 
      title="Managing Subprocessor Transparency for SaaS Companies"
      intro="Many privacy regulations and enterprise procurement teams require companies to disclose the subprocessors that handle customer data. Maintaining a clear and updated subprocessor list improves transparency and trust."
    >
      <h2>What subprocessors are</h2>
      <p>
        A subprocessor is a third-party data processor engaged by a SaaS company who has or potentially will have access to or process customer data. Common examples include cloud infrastructure providers (AWS, Google Cloud) or customer communication tools (Intercom, Zendesk).
      </p>

      <h2>Why customers ask for subprocessor lists</h2>
      <p>
        Under regulations like GDPR, customers (Data Controllers) are responsible for how their data is handled, even by third parties. They need to vet every company in your supply chain to ensure they match the required privacy and security standards.
      </p>

      <h2>Challenges of maintaining this information manually</h2>
      <ul>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Constant Change:</strong> Your tech stack changes frequently, making static PDFs or HTML tables outdated.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Regulatory Compliance:</strong> You are often legally required to notify customers of any new subprocessors added.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Data Mapping:</strong> Tracking which data goes to which subprocessor is a complex GRC task.</span></li>
      </ul>

      <h2>How Trust Centers simplify subprocessor transparency</h2>
      <p>
        A Trust Center provides a "living" directory of your subprocessors. Instead of burying this information in a legal DPA, you publish it in a readable, categorized format. You can also automate the notification process, so customers are automatically alerted whenever your subprocessor list changes, satisfying your legal obligations with zero manual effort.
      </p>

      <h2>How RegulaTrust helps publish and manage subprocessor directories</h2>
      <p>
        RegulaTrust automates subprocessor management. You can maintain your directory in a single dashboard and it syncs immediately to your public Trust Center. It turns a boring legal requirement into a demonstration of operational excellence and transparency.
      </p>

      <section className="mt-16 border-t border-grey pt-12">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-2">Do I need to list every vendor?</h4>
            <p className="text-sm text-charcoal/70">Only vendors that process "Personal Data" on behalf of your customers typically need to be listed as subprocessors.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">How do I notify customers of changes?</h4>
            <p className="text-sm text-charcoal/70">RegulaTrust includes a subscription feature where customers can sign up for "Subprocessor Alerts," automating your DPA notification requirements.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
};

export default Page;
