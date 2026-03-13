import React from 'react';
import ResourceLayout from '../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <ResourceLayout 
      title="Privacy Policy" 
      intro="RegulaTrust is committed to protecting personal data and handling it responsibly, lawfully, and transparently."
    >
      <p className="text-sm font-bold text-charcoal/40 mb-8">
        Last updated: 13 March 2026<br />
        Applies to: RegulaTrust website, platform, communications, demos, and related services
      </p>

      <h2>1. Introduction</h2>
      <p>
        RegulaTrust is committed to protecting personal data and handling it responsibly, lawfully, and transparently.
        This Privacy Policy explains how RegulaTrust collects, uses, stores, shares, and protects personal data when you:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>visit our website</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>request a demo, join a waitlist, or contact us</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>sign up for or use the RegulaTrust platform</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>communicate with us as a prospect, customer, partner, supplier, or website visitor</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>otherwise interact with RegulaTrust in the course of our business</span></li>
      </ul>
      <p>
        This policy is intended for business users, customer representatives, website visitors, and other individuals whose personal data we process in connection with RegulaTrust.
      </p>

      <h2>2. Who We Are</h2>
      <p>RegulaTrust is operated by:</p>
      <p>
        Protego Sol Limited<br />
        Company Number: <strong>15743777</strong><br />
        Registered Office: Cleveland Square, London, United Kingdom, W2 6DD<br />
        Contact: <a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a>
      </p>
      <p>
        Protego Sol Limited operates the RegulaTrust platform and related services.
        Depending on context, Protego Sol Limited may act as:
      </p>
      <p>
        <strong>Data Controller</strong><br />
        When we determine how and why personal data is processed for business purposes such as:
      </p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>operating our website</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>managing accounts</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>responding to inquiries</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>conducting sales and marketing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>managing contracts</span></li>
      </ul>
      <p>
        <strong>Data Processor</strong><br />
        When we process personal data on behalf of customers using the RegulaTrust platform.
      </p>

      <h2>3. Scope of This Policy</h2>
      <p>
        This Privacy Policy applies to personal data processed by RegulaTrust <strong>as a data controller</strong>.
        When RegulaTrust processes personal data on behalf of customers as a <strong>data processor</strong>, that processing is governed by the customer agreement and Data Processing Addendum.
        Customers remain responsible for providing privacy notices to their own users where required.
      </p>

      <h2>4. Personal Data We Collect</h2>
      <p>The types of personal data we collect depend on how you interact with our services.</p>
      
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.1 Information You Provide</h3>
      <p className="pl-6">We may collect personal data including:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>name</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>work email address</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>phone number</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>job title</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>company name</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>country or region</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>account credentials</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>billing information</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>information submitted through forms or demos</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>onboarding and support communications</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>any other information you choose to provide</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.2 Automatically Collected Data</h3>
      <p className="pl-6">When you access our website or platform we may collect:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>IP address</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>browser type</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>operating system</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>device information</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>usage activity</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>timestamps</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>approximate geographic location</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>system logs and diagnostics</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>cookie data</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.3 Information From Third Parties</h3>
      <p className="pl-6">We may receive data from:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>analytics providers</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>CRM and sales platforms</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>payment processors</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>authentication providers</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>publicly available business sources</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>our customers</span></li>
      </ul>

      <h2>5. How We Use Personal Data</h2>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">5.1 Service Delivery</h3>
      <p className="pl-6">We process data to:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>create and manage accounts</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>authenticate users</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>deliver platform features</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>provide customer support</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>manage subscriptions and billing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>maintain platform performance</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">5.2 Business Operations</h3>
      <p className="pl-6">We use data to:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>respond to inquiries</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>schedule demos</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>manage commercial relationships</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>send operational communications</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>administer contracts</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">5.3 Platform Security and Improvement</h3>
      <p className="pl-6">We use data to:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>monitor performance</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>troubleshoot issues</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>prevent fraud or misuse</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>investigate incidents</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>improve product features</span></li>
      </ul>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">5.4 Sales and Marketing</h3>
      <p className="pl-6">We may process business contact information to:</p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>provide product updates</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>share information about RegulaTrust</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>manage waitlists and onboarding</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>conduct B2B outreach including cold email where permitted by law</span></li>
      </ul>
      <p>Where required by law, we rely on consent. Otherwise we rely on legitimate interest for proportionate B2B communication.</p>

      <h2>6. Lawful Bases for Processing</h2>
      <p>Where applicable under data protection law we rely on:</p>
      <p><strong>Contractual necessity</strong><br />To provide services requested by customers.</p>
      <p><strong>Legitimate interests</strong><br />Including:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>operating the RegulaTrust platform</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>securing infrastructure</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>business development and B2B marketing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>preventing fraud</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>improving services</span></li>
      </ul>
      <p><strong>Legal obligations</strong><br />Where required by law.</p>
      <p><strong>Consent</strong><br />Where required, including for certain cookies.</p>

      <h2>7. Special Categories of Data</h2>
      <p>RegulaTrust does not intentionally collect special category personal data for its own business purposes. Customers should not upload sensitive personal data unless necessary and permitted under applicable law.</p>

      <h2>8. AI and Automated Processing</h2>
      <p>RegulaTrust may use AI-assisted features for tasks such as:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>document analysis</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>regulatory intelligence</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>workflow automation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>compliance support</span></li>
      </ul>
      <p>These tools assist users but <strong>do not replace human decision making</strong>. Customer data <strong>is not used to train public foundation models without authorization</strong>. AI-generated outputs may contain errors and should be reviewed before reliance.</p>

      <h2>9. Cookies</h2>
      <p>RegulaTrust uses cookies and similar technologies to operate the website and improve user experience. Cookies may support:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>authentication</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>analytics</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>system security</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>performance monitoring</span></li>
      </ul>
      <p>Users can manage cookie preferences through browser settings. Further details are provided in our Cookie Policy.</p>

      <h2>10. Data Sharing</h2>
      <p>We may share personal data with the following service providers:</p>
      <p><strong>Infrastructure and Hosting</strong></p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Supabase</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Vercel</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Render</span></li>
      </ul>
      <p><strong>Analytics</strong></p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>PostHog</span></li>
      </ul>
      <p><strong>Email Providers</strong></p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Brevo</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>GoDaddy</span></li>
      </ul>
      <p><strong>Payments</strong></p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Stripe</span></li>
      </ul>
      <p><strong>Authentication</strong></p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Supabase</span></li>
      </ul>
      <p><strong>Monitoring / Logging</strong></p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>Render</span></li>
      </ul>
      <p>We may also share data with:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>professional advisers</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>regulators and authorities where legally required</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>investors or acquirers during corporate transactions</span></li>
      </ul>
      <p>RegulaTrust <strong>does not sell personal data</strong>.</p>

      <h2>11. International Transfers</h2>
      <p>Primary hosting infrastructure is located in the <strong>European Union</strong>. Certain backups may be stored in the <strong>United States</strong>. Where international transfers occur, we implement safeguards including: <strong>Standard Contractual Clauses (SCCs)</strong>.</p>

      <h2>12. Data Retention</h2>
      <p>We retain personal data only as long as necessary.</p>
      <div className="overflow-x-auto my-8 border border-grey rounded-sm shadow-sm">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-off-white">
            <tr>
              <th className="border border-grey p-4 text-left font-black uppercase tracking-widest text-xs">Data Type</th>
              <th className="border border-grey p-4 text-left font-black uppercase tracking-widest text-xs">Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Account data</td>
              <td className="border border-grey p-4 text-sm">Duration of account + 90 days</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Customer platform data</td>
              <td className="border border-grey p-4 text-sm">Duration of service + contract terms</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">CRM / sales leads</td>
              <td className="border border-grey p-4 text-sm">24 months</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Support tickets</td>
              <td className="border border-grey p-4 text-sm">24 months</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Financial records</td>
              <td className="border border-grey p-4 text-sm">6 years (UK tax requirements)</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Logs and diagnostics</td>
              <td className="border border-grey p-4 text-sm">30 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>13. Security Measures</h2>
      <p>RegulaTrust implements security safeguards including:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>encryption in transit</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>role-based access controls</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>secure authentication</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>infrastructure monitoring</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>environment isolation</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>system logging</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>backup and recovery systems</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>secure development practices</span></li>
      </ul>
      <p>While no system can guarantee absolute security, RegulaTrust works to maintain appropriate technical and organisational safeguards.</p>

      <h2>14. Your Rights</h2>
      <p>Subject to applicable law, individuals may have the right to:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>access personal data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>correct inaccurate data</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>request deletion</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>restrict processing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>object to processing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>request data portability</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>withdraw consent</span></li>
      </ul>
      <p>Requests may be submitted to: <a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>

      <h2>15. Marketing Preferences</h2>
      <p>You may unsubscribe from marketing communications at any time. Service-related communications may still be sent where necessary for account administration.</p>

      <h2>16. Third-Party Services</h2>
      <p>Our website or services may link to third-party platforms. RegulaTrust is not responsible for the privacy practices of external services.</p>

      <h2>17. Children</h2>
      <p>RegulaTrust services are intended for professional and business use. We do not knowingly collect personal data from children.</p>

      <h2>18. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. When we do, the <strong>last updated date</strong> will be revised.</p>

      <h2>19. Contact</h2>
      <p>Privacy inquiries: <a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>
      <p>Privacy inquiries: <a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>
      <p>
        Protego Sol Limited<br />
        Company Number: <strong>15743777</strong><br />
        Registered Office: Cleveland Square, London, United Kingdom, W2 6DD
      </p>
      <p className="text-black/80 text-base">If you have concerns about how we handle personal data, please contact us first. You may also lodge a complaint with the UK supervisory authority:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span className="text-black/80 text-base"><strong>Information Commissioner's Office (ICO)</strong></span></li>
      </ul>
    </ResourceLayout>
  );
};

export default PrivacyPolicy;
