import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is RegulaTrust?",
    answer: "RegulaTrust is an internal readiness and external trust platform. It helps organizations manage ISO 27001 and GDPR readiness internally and publish approved trust signals to a buyer-facing Trust Center."
  },
  {
    question: "How is it different from GRC tools like Vanta or Drata?",
    answer: "RegulaTrust is focused on the evidence, readiness, and trust-publishing workflow rather than sprawling all-in-one automation. We bridge the gap between internal compliance operations and the external buyer experience, providing a lighter but more structured path for companies handling frequent security reviews."
  },
  {
    question: "Do I need an existing certification to use it?",
    answer: "No. You can start using RegulaTrust from day one to keep your policies and evidence organized. It helps you build a solid foundation of 'audit readiness' whether you are pursuing a formal certification now or in the future."
  },
  {
    question: "Does RegulaTrust make my company GDPR compliant?",
    answer: "No. RegulaTrust supports readiness tracking, evidence organization, and trust publishing. Achieving compliance requires internal policies, processes, and legal oversight. We help you showcase evidence of your existing compliance posture so customers and partners can review it professionally."
  },
  {
    question: "What does the Readiness workspace include?",
    answer: "The Readiness workspace is a private dashboard where teams track ISO 27001:2022 and GDPR requirements. It includes evidence mapping tools, gap assessments, and internal review workflows to ensure only buyer-safe information is published externally."
  },
  {
    question: "How does the Trust Center work?",
    answer: "Your Trust Center is the external 'surface' of your readiness workspace. Once evidence is approved internally, you can push it to your Trust Center (public or gated) to share policies, FAQs, subprocessors, and security proofs with buyers professionally."
  },
  {
    question: "Does it replace security questionnaires?",
    answer: "By centralizing approved evidence and sharing a professional 'Trust Pack' via your portal, you can reduce the repetitive manual work of answering identical security questionnaire requests and shorten procurement cycles."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Common questions about <span className="bg-charcoal text-white px-3 py-1 rounded-lg inline-block transform -rotate-1">trust readiness</span></h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all overflow-hidden ${openIndex === index ? 'border-lime bg-off-white shadow-sm' : 'border-grey hover:border-charcoal/20'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex justify-between items-center text-left transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-lime' : 'text-charcoal/20'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-charcoal/60 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
