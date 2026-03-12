import React from 'react';
import { Plus, Minus } from 'lucide-react';

const fags = [
  {
    question: "Who is RegulaTrust built for?",
    answer: "RegulaTrust is designed specifically for B2B SaaS companies, AI startups, and trust-sensitive platforms that are selling into enterprise buyers or regulated markets."
  },
  {
    question: "Is this a replacement for enterprise GRC tools like Vanta or Drata?",
    answer: "No, we complement GRC tools. While GRC tools focus on internal compliance and SOC2 readiness, RegulaTrust focuses on 'External Trust Operations'—helping you manage evidence and respond to actual buyer due diligence faster."
  },
  {
    question: "Can we still manage cookie consent and privacy basics?",
    answer: "Absolutely. RegulaTrust includes premium 'Privacy Essentials' like cookie banners, policy generation, and DSAR workflows, but positions them as part of your broader trust readiness strategy."
  },
  {
    question: "How does RegulaTrust help with buyer questionnaires?",
    answer: "Our Questionnaire Copilot allows you to centralize approved evidence and responses, enabling your team to collaborate on and deliver comprehensive privacy and security reviews in hours."
  },
  {
    question: "Is this suitable for AI companies facing governance questions?",
    answer: "Yes. We include specific features for AI Governance disclosures, helping you communicate how your models work and how you handle data to satisfy sophisticated enterprise buyers."
  },
  {
    question: "Do I need a dedicated compliance team to use this?",
    answer: "No. RegulaTrust is built for lean teams. It provides the structure and operational templates you need to look enterprise-ready without hiring a full-time Privacy Officer."
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
            {fags.map((faq, index) => (
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
