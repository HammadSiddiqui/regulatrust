import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is RegulaTrust?",
    answer: "RegulaTrust is a Trust Center and Compliance Workspace designed to help organizations prove their security, privacy, and compliance posture to win enterprise deals."
  },
  {
    question: "How is RegulaTrust different from GRC tools like Vanta or Drata?",
    answer: "Most GRC tools focus on 'Internal GRC'—getting you audit-ready for SOC 2 or ISO 27001. RegulaTrust focuses on 'External Trust Operations'—the process of centralizing evidence and managing customer due diligence reviews."
  },
  {
    question: "Do I need an existing certification (like SOC 2) to use this?",
    answer: "No. RegulaTrust helps you arrive at 'audit-readiness' by providing the infrastructure to manage your policies and evidence from day one, whether you're pursuing a certification now or later."
  },
  {
    question: "How does the Trust Center work?",
    answer: "Your Trust Center can be public or password-protected. it allows you to showcase your security overview, subprocessor lists, and policies in a professional, live portal that buyers can trust."
  },
  {
    question: "Does RegulaTrust replace my security questionnaire responses?",
    answer: "RegulaTrust provides a 'Due Diligence Hub' where you can centralize pre-approved evidence and share 'Trust Packs' with buyers, reducing the repetitive work of answering identical procurement questions."
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
