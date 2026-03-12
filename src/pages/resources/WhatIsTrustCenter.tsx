import React from 'react';
import ResourceLayout from '../../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <ResourceLayout 
      title="What Is a Trust Center?"
      intro="A Trust Center is a public portal where companies share their security, privacy, and compliance posture with customers. It allows organizations to publish policies, certifications, subprocessors, and security documentation so buyers can easily understand how their data is protected."
    >
      <h2>What a Trust Center typically includes</h2>
      <ul>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Security overview:</strong> A high-level summary of your security program and philosophy.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Compliance certifications:</strong> Publicly available badges and summaries for SOC 2, ISO 27001, HIPAA, and GDPR.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Privacy documentation:</strong> Links to Privacy Policies, Data Processing Agreements (DPA), and cookie notices.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Subprocessor list:</strong> A transparent directory of third-party vendors that process customer data.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Security policies:</strong> Summaries or versions of internal policies like Access Control and Incident Response.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Document request flow:</strong> A secure way for customers to request access to sensitive audit reports under NDA.</span></li>
      </ul>

      <h2>Why companies build Trust Centers</h2>
      <p>
        In the past, security reviews were handled manually via hundreds of emails and zip files. This approach is opaque, slow, and repetitive. Companies build Trust Centers to shift from a "reactive" security model to a "proactive" one. Instead of answering the same question 50 times, you publish the answer once in a central, trusted location.
      </p>

      <h2>How Trust Centers reduce security review friction</h2>
      <p>
        When a prospect is evaluating your software, the security review is often the longest part of the sales cycle. By providing a Trust Center, you allow their security team to self-serve 80% of the information they need. This reduces the number of custom security questionnaires you receive and speeds up time-to-close for the sales team.
      </p>

      <h2>How RegulaTrust helps companies launch a Trust Center quickly</h2>
      <p>
        RegulaTrust automates the creation and maintenance of your Trust Center. You don't need to involve your engineering or marketing teams to build a custom portal. With RegulaTrust, you can connect your existing compliance evidence, manage document access requests, and publish a premium, on-brand Trust Center in minutes, not months.
      </p>

      <section className="mt-16 border-t border-grey pt-12">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-2">Is a Trust Center public or private?</h4>
            <p className="text-sm text-charcoal/70">Most Trust Centers have a public-facing landing page with high-level info, while sensitive documents (like SOC 2 reports) are protected behind an NDA-gated request flow.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Who usually manages the Trust Center?</h4>
            <p className="text-sm text-charcoal/70">It’s typically managed by the Security, Compliance, or GRC team, but utilized heavily by Sales and Customer Success teams.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
};

export default Page;
