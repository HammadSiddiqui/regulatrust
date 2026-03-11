import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "How quickly can I get compliant?", a: "With RegulaTrust, you can run your first scan and deploy a basic banner and policy in under 15 minutes. Advanced configuration for enterprise sites typically takes a few days." },
  { q: "Do I need a developer?", a: "No. Our visual editor and one-click deployment make it easy for marketers and founders to manage compliance without Touching a single line of code—although developers love our clean API." },
  { q: "Can agencies manage multiple clients?", a: "Absolutely. Our Agency plan includes a multi-site dashboard, client permission levels, and white-label reporting options." },
  { q: "Does RegulaTrust generate privacy policies?", a: "Yes. Our AI-powered policy generator uses your scan results to create dynamic, legally-vetted privacy policies that update automatically when new trackers are detected." },
  { q: "Can I track consent logs?", a: "Yes. Every consent event is logged in an immutable, encrypted database, providing you with a complete audit trail for regulatory compliance requests." },
  { q: "How do DSAR workflows work?", a: "When a user submits a data request, RegulaTrust automatically maps their data across your trackers and generates a response template for your review, saving your team hours of manual work." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-grey rounded-xl overflow-hidden group">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors
                    ${openIndex === index ? 'bg-charcoal text-white' : 'bg-white hover:bg-off-white text-charcoal'}
                  `}
                >
                  <span className="font-bold tracking-tight">{faq.q}</span>
                  <div className={`p-1 rounded-full transition-transform duration-300
                    ${openIndex === index ? 'rotate-180 bg-lime text-black' : 'text-charcoal/20'}
                  `}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-8 text-sm text-charcoal/60 leading-relaxed border-t border-grey">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
