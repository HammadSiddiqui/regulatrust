import React from 'react';
import ResourceLayout from '../../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <ResourceLayout 
      title="How to Respond to Security Questionnaires Faster"
      intro="Enterprise customers often require vendors to complete detailed security questionnaires during procurement. These reviews can slow down deals and consume valuable engineering time."
    >
      <h2>What security questionnaires are</h2>
      <p>
        A security questionnaire is a set of questions (often in Excel or a custom portal like Vanta or Whistic) that a buyer uses to assess your security risk. They can range from 50 to 500+ questions covering everything from data encryption to physical office security.
      </p>

      <h2>Why companies struggle with them</h2>
      <p>
        Most companies treat questionnaires as a "fire drill." When one arrives, the Sales team panics, and the Engineering or Security team has to drop everything to copy-paste answers from previous spreadsheets. This is manual, prone to error, and culturally draining for technical teams.
      </p>

      <h2>The cost of repeated security reviews</h2>
      <ul>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Delayed Revenue:</strong> Every day spent on a questionnaire is a day the contract isn't signed.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Engineer Burnout:</strong> technical staff hate answering the same questions about SSL versions repeatedly.</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>Inconsistency:</strong> Different engineers may provide slightly different answers to the same question.</span></li>
      </ul>

      <h2>How Trust Centers reduce questionnaire friction</h2>
      <p>
        A Trust Center doesn't necessarily eliminate questionnaires entirely, but it "deflects" them. By providing a comprehensive portal upfront, you answer many questions before they are even asked. Often, a buyer's security lead will review your Trust Center and decide that a custom questionnaire isn't needed, or will only ask a handful of follow-up questions.
      </p>

      <h2>How RegulaTrust helps centralize security answers</h2>
      <p>
        RegulaTrust acts as your "Single Source of Truth" for security data. By organizing your certifications, policies, and FAQs in a high-fidelity Trust Center, you empower your sales team to share the portal early in the deal cycle. RegulaTrust is designed to make the security review a competitive advantage, not a bottleneck.
      </p>

      <section className="mt-16 border-t border-grey pt-12">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-2">Can I export my Trust Center data?</h4>
            <p className="text-sm text-charcoal/70">Yes. RegulaTrust allows you to keep your answers updated in one place so you can quickly reference them when a custom questionnaire is unavoidable.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">How do Trust Centers help Sales teams?</h4>
            <p className="text-sm text-charcoal/70">It allows Sales to be proactive. Sharing a Trust Center on day one builds trust immediately and often skips the standard procurement delay.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
};

export default Page;
