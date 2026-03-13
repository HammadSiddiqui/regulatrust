import React from 'react';
import ResourceLayout from '../components/ResourceLayout';
import { CheckCircle2 } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <ResourceLayout
      title="Cookie Policy"
      intro="This Cookie Policy explains how Protego Sol Limited uses cookies and similar technologies on the RegulaTrust website."
    >
      <p className="text-sm font-bold text-charcoal/40 mb-8">
        Last updated: 13 March 2026<br />
        Applies to: RegulaTrust website and related online services
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Cookie Policy explains how <strong>Protego Sol Limited</strong> uses cookies and similar technologies on the RegulaTrust website.
      </p>
      <p>
        Protego Sol Limited<br />
        Company Number: <strong>15743777</strong><br />
        Registered Office: Cleveland Square, London, United Kingdom, W2 6DD<br />
        Contact: <a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a>
      </p>
      <p>
        This policy should be read alongside our Privacy Policy.
      </p>

      <h2>2. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, improve security, and provide information about how the site is used.
      </p>
      <p>
        Similar technologies may include pixels, tags, scripts, local storage, and SDK-based tracking tools. For simplicity, this policy refers to these technologies collectively as <strong>cookies</strong> unless stated otherwise.
      </p>

      <h2>3. Why We Use Cookies</h2>
      <p>RegulaTrust uses cookies for the following purposes:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>to ensure the website functions properly</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>to maintain security and help prevent misuse</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>to remember user preferences where applicable</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>to understand website usage and performance</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>to improve website design, content, and user experience</span></li>
      </ul>
      <p>
        We do <strong>not</strong> use cookies as an excuse to quietly build a surveillance theme park.
      </p>

      <h2>4. Types of Cookies We Use</h2>
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.1 STRICTLY NECESSARY COOKIES</h3>
      <p className="pl-6">
        These cookies are required for the website to operate properly. They may be used for:
      </p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>security</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>network management</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>session handling</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>load balancing</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>form submission integrity</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>authentication where relevant</span></li>
      </ul>
      <p className="pl-6">
        Because these cookies are necessary for the operation of the website, they do not usually require consent under applicable law.
      </p>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.2 ANALYTICS COOKIES</h3>
      <p className="pl-6">
        We use analytics technologies to understand how visitors interact with the website, such as which pages are visited, how long users stay on pages, and how users move through the site.
      </p>
      <p className="pl-6">
        This helps us improve website performance, content, navigation, and overall user experience.
      </p>
      <p className="pl-6">
        RegulaTrust currently uses:
      </p>
      <ul className="list-none mb-8 pl-6">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>PostHog</strong></span></li>
      </ul>
      <p className="pl-6">
        Analytics cookies are treated as <strong>non-essential cookies</strong> and, where required by law, will only be placed after you provide consent.
      </p>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.3 FUNCTIONAL COOKIES</h3>
      <p className="pl-6">
        We may use functional cookies to remember user choices and improve website usability.
      </p>
      <p className="pl-6">
        These may include remembering preferences such as form progress, interface settings, or similar convenience features.
      </p>
      <p className="pl-6">
        If any functional cookies are strictly necessary, they will be treated as non-essential and used only where appropriate consent has been obtained.
      </p>

      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-black/80 font-montserrat pl-6 border-l-2 border-lime/30">4.4 MARKETING OR ADVERTISING COOKIES</h3>
      <p className="pl-6">
        RegulaTrust does <strong>not currently state in this policy that it uses advertising cookies</strong>.
      </p>
      <p className="pl-6">
        If this changes in the future, this Cookie Policy and the consent mechanism will be updated before such cookies are deployed.
      </p>

      <h2>5. Legal Basis for Using Cookies</h2>
      <p>
        Where cookies are <strong>strictly necessary</strong> for the operation or security of the website, we rely on our legitimate interest in providing a secure and functional service.
      </p>
      <p>
        Where cookies are <strong>non-essential</strong>, including analytics cookies, we rely on <strong>consent</strong> where required by applicable law.
      </p>
      <p>
        You may withdraw or adjust your cookie preferences at any time through the cookie settings mechanism available on the website, if implemented, or through your browser settings.
      </p>

      <h2>6. Cookies Set by Third Parties</h2>
      <p>
        Some cookies may be set by third-party providers whose services are used on the RegulaTrust website.
      </p>
      <p>This currently includes services such as:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span><strong>PostHog</strong> for analytics</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>infrastructure and hosting providers where technically necessary for website delivery or security</span></li>
      </ul>
      <p>
        Third-party providers may process information collected through cookies in accordance with their own privacy documentation.
      </p>
      <p>
        Where required, RegulaTrust seeks to ensure that such cookies are only deployed after valid consent has been obtained.
      </p>

      <h2>7. International Data Transfers</h2>
      <p>
        Data collected through cookies or similar technologies may be processed in the <strong>European Union</strong> and, in some cases, the <strong>United States</strong>, depending on the service provider involved.
      </p>
      <p>
        Where personal data is transferred internationally, RegulaTrust implements appropriate safeguards, including <strong>Standard Contractual Clauses (SCCs)</strong> where required.
      </p>

      <h2>8. How to Manage Cookies</h2>
      <p>You can control cookies in several ways:</p>
      <ul className="list-none pl-0 mb-8">
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>by using the cookie banner or consent tool on our website, where available</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>by adjusting your browser settings to block or delete cookies</span></li>
        <li className="flex items-start gap-3 mb-4"><CheckCircle2 size={18} className="text-lime mt-1 shrink-0" /> <span>by using browser controls to prevent certain types of tracking</span></li>
      </ul>
      <p>
        Please note that disabling strictly necessary cookies may affect website functionality.
      </p>
      <p>
        Browser settings are usually available in the privacy or security section of your browser.
      </p>

      <h2>9. Cookie Categories Summary</h2>
      <p>
        The table below summarises the cookie categories currently contemplated by RegulaTrust.
      </p>
      <div className="overflow-x-auto my-8 border border-grey rounded-sm shadow-sm">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-off-white">
            <tr>
              <th className="border border-grey p-4 text-left font-black uppercase tracking-widest text-xs">Category</th>
              <th className="border border-grey p-4 text-left font-black uppercase tracking-widest text-xs">Purpose</th>
              <th className="border border-grey p-4 text-left font-black uppercase tracking-widest text-xs text-right">Essential</th>
              <th className="border border-grey p-4 text-left font-black uppercase tracking-widest text-xs text-right">Consent Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Strictly necessary cookies</td>
              <td className="border border-grey p-4 text-sm">Website operation, security, session handling, authentication</td>
              <td className="border border-grey p-4 text-sm text-right">Yes</td>
              <td className="border border-grey p-4 text-sm text-right">No</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Analytics cookies</td>
              <td className="border border-grey p-4 text-sm">Usage analysis and website improvement via PostHog</td>
              <td className="border border-grey p-4 text-sm text-right">No</td>
              <td className="border border-grey p-4 text-sm text-right">Yes</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Functional cookies</td>
              <td className="border border-grey p-4 text-sm">Remembering preferences and improving usability</td>
              <td className="border border-grey p-4 text-sm text-right">Depends</td>
              <td className="border border-grey p-4 text-sm text-right">Yes, if non-essential</td>
            </tr>
            <tr>
              <td className="border border-grey p-4 text-sm font-bold">Advertising cookies</td>
              <td className="border border-grey p-4 text-sm">Not currently used based on this policy</td>
              <td className="border border-grey p-4 text-sm text-right">No</td>
              <td className="border border-grey p-4 text-sm text-right">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>10. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in law, guidance, technology, or the way the RegulaTrust website uses cookies.
      </p>
      <p>
        When we make changes, we will update the <strong>Last updated</strong> date at the top of this policy.
      </p>

      <h2>11. Contact</h2>
      <p>If you have any questions about this Cookie Policy, contact:</p>
      <p><a href="mailto:hi@regulatrust.com" className="text-black underline font-bold">hi@regulatrust.com</a></p>
      <div className="bg-white border border-grey p-6 rounded-sm mb-8">
        <p className="font-black text-black mb-1">Protego Sol Limited</p>
        <p className="text-sm leading-relaxed text-charcoal/70">
          Company Number: <strong>15743777</strong><br />
          Cleveland Square, London, United Kingdom, W2 6DD
        </p>
      </div>
    </ResourceLayout>
  );
};

export default CookiePolicy;
