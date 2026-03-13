import React from 'react';
import ResourceLayout from '../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const AcceptableUsePolicy: React.FC = () => {
  return (
    <ResourceLayout 
      title="Acceptable Use Policy" 
      intro="This Acceptable Use Policy explains the rules that apply when using RegulaTrust."
    >
      <p className="text-sm font-bold text-charcoal/40 mb-8">
        Last updated: 13 March 2026<br />
        Applies to: all users of the RegulaTrust website, platform, APIs, accounts, and related services
      </p>

      <h2>1. Purpose</h2>
      <p>
        This Acceptable Use Policy explains the rules that apply when using RegulaTrust.
      </p>
      <p>
        The purpose of this policy is to protect the security, availability, integrity, and lawful use of the Services for all customers and users.
      </p>

      <h2>2. Permitted Use</h2>
      <p>
        You may use RegulaTrust only for legitimate business purposes and only in accordance with:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>your agreement with RegulaTrust</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>applicable law and regulation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>this Acceptable Use Policy</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>any Documentation or reasonable instructions provided by RegulaTrust</span></li>
      </ul>

      <h2>3. Prohibited Conduct</h2>
      <p>You must not, and must not allow others to, use RegulaTrust to:</p>
      
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">3.1 Violate laws or rights</h3>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>break any applicable law or regulation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>infringe intellectual property rights</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>breach confidentiality obligations</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>violate privacy or data protection law</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>process data without appropriate authorization</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">3.2 Undermine security or service integrity</h3>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>gain or attempt to gain unauthorized access to any system, account, or data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>probe, scan, test, or exploit vulnerabilities without written authorization</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>disable, interfere with, or circumvent security controls</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>introduce malware, ransomware, spyware, trojans, or other malicious code</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>launch denial-of-service attacks, overload attacks, or similar disruptions</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>interfere with infrastructure, APIs, or service performance</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">3.3 Misuse the platform or data</h3>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>upload unlawful, fraudulent, deceptive, defamatory, or harmful content</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the Services to stalk, harass, threaten, abuse, or discriminate against others</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the Services to distribute spam or deceptive communications</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>scrape, harvest, or extract data from the Services in an unauthorized manner</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>attempt to access data belonging to another customer or user</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the Services to create false records, misleading trust statements, or fraudulent compliance representations</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">3.4 Abuse commercial access or product rights</h3>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>resell, sublicense, rent, lease, or timeshare the Services except as expressly authorized</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>copy, frame, mirror, or reproduce the Services except as permitted by the agreement</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>reverse engineer, decompile, or attempt to derive source code except where such restriction is prohibited by law</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the Services to build or benchmark a competing product in a deceptive, abusive, or unfair manner</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">3.5 Misuse AI or automation features</h3>
      <p className="pl-6">
        Where the Services include AI-assisted, automated, or workflow-based features, you must not:
      </p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use outputs as a substitute for required legal, regulatory, or professional review where human review is necessary</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>use the Services to generate knowingly false or misleading compliance, security, or privacy claims</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>input data where you do not have the right to process it</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>attempt to manipulate or overload AI-related features in a way that degrades service integrity</span></li>
      </ul>

      <h2>4. Customer Data Responsibility</h2>
      <p>
        You are responsible for ensuring that any data or content you upload, submit, or process through RegulaTrust:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>is lawful to collect, use, transfer, and process</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>does not violate the rights of any person or entity</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>does not contain malicious code or harmful content</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>is consistent with your own regulatory and contractual obligations</span></li>
      </ul>
      <p>
        RegulaTrust is not required to monitor all customer content, but may investigate, remove, disable, or restrict content or activity where reasonably necessary to protect the Services, other users, or legal compliance.
      </p>

      <h2>5. Security Testing and Research</h2>
      <p>
        You may not conduct penetration testing, vulnerability scanning, stress testing, or similar security testing against RegulaTrust systems without prior written authorization.
      </p>
      <p>
        If you believe you have identified a vulnerability, please report it responsibly to:
      </p>
      <p><a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>

      <h2>6. Enforcement</h2>
      <p>
        RegulaTrust may investigate suspected violations of this Acceptable Use Policy.
      </p>
      <p>
        Where RegulaTrust reasonably believes a violation has occurred, it may take action including:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>issuing a warning</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>removing or disabling access to content</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>restricting or suspending user access</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>terminating the relevant account or subscription</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>preserving evidence</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>reporting conduct to law enforcement or regulators where appropriate</span></li>
      </ul>
      <p>
        RegulaTrust may act immediately where necessary to protect the Services, customers, systems, or third parties from harm.
      </p>

      <h2>7. Reporting Violations</h2>
      <p>
        If you become aware of misuse of the Services, please report it to:
      </p>
      <p><a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>

      <h2>8. Changes to This Policy</h2>
      <p>
        RegulaTrust may update this Acceptable Use Policy from time to time.
      </p>
      <p>
        The updated version will apply from the date it is published or otherwise communicated.
      </p>

      <h2>9. Contact</h2>
      <p>
        Protego Sol Limited<br />
        Company Number: <strong>15743777</strong><br />
        Registered Office: Cleveland Square, London, United Kingdom, W2 6DD<br />
        Contact: <a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a>
      </p>
    </ResourceLayout>
  );
};

export default AcceptableUsePolicy;
