import React from 'react';
import ResourceLayout from '../../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <ResourceLayout 
      title="Why SaaS Companies Need a Trust Center"
      intro="SaaS companies selling to enterprises are often asked detailed questions about security, privacy, and compliance. A Trust Center provides a central place where customers can review this information without long email exchanges."
    >
      <h2>Why enterprise buyers require security transparency</h2>
      <p>
        For enterprise buyers, your SaaS platform isn't just a tool; it's a new entry point into their technical environment. They need to ensure that your security standards match their own. Transparency isn't just about "being nice"—it's a mandatory requirement for their risk management and procurement teams.
      </p>

      <h2>Common security questions SaaS companies receive</h2>
      <ul>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Where is my data stored?</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Do you encrypt data at rest and in transit?</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>What certifications (SOC 2, ISO 27001) do you hold?</span></li>
        <li><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>How do you handle subprocessor security?</span></li>
      </ul>

      <h2>Challenges of sharing documents manually</h2>
      <p>
        The traditional method involves sending PDFs over email. This is problematic for several reasons: documents get outdated, there's no version control, you have no visibility into who has read them, and it scales poorly as your customer base grows.
      </p>

      <h2>How a Trust Center simplifies enterprise security reviews</h2>
      <p>
        A Trust Center acts as a self-service documentation hub. Enterprise security reviewers can access the information they need 24/7 without waiting for your response. It signals to the buyer that you take security seriously and have a mature compliance posture, which builds immediate credibility.
      </p>

      <h2>How RegulaTrust helps SaaS companies present their security posture</h2>
      <p>
        RegulaTrust provides a high-fidelity portal designed specifically for SaaS companies. It allows you to organize your security and privacy information into logic categories, manage sensitive document requests, and provide a seamless, premium experience for your enterprise buyers.
      </p>

      <section className="mt-16 border-t border-grey pt-12">
        <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-black mb-2">Can a Trust Center replace a security questionnaire?</h4>
            <p className="text-sm text-charcoal/70">While it may not eliminate every custom question, a well-built Trust Center can proactively answer 80%+ of standard security questions, significantly reducing the size of the final questionnaire.</p>
          </div>
          <div>
            <h4 className="font-bold text-black mb-2">Does this help with SOC 2 readiness?</h4>
            <p className="text-sm text-charcoal/70">Yes. Having a centralized place to store and track your policies and evidence is a core part of being audit-ready.</p>
          </div>
        </div>
      </section>
    </ResourceLayout>
  );
};

export default Page;
