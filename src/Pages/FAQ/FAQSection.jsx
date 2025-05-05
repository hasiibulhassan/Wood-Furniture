import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When does the Summer Collection become available?",
      answer: "The collection launches June 1st, with exclusive early access for newsletter subscribers beginning May 25th."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and select regional payment providers. All transactions are securely processed."
    },
    {
      question: "How long will the 20% promotion last?",
      answer: "This introductory offer is valid for 14 days following the public launch, ending promptly at 11:59 PM PST on June 14th."
    },
    {
      question: "What is your return policy for sale items?",
      answer: "All sale items including promotional purchases may be returned within 30 days in original condition with tags attached."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with duties and taxes calculated at checkout for complete transparency."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-wider text-gray-500 mb-3">SUPPORT</span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked <span className="font-bold">Questions</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gray-300"></div>
        </div>
        
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-lg transition-all duration-200 ${activeIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
              >
                <h3 className="text-lg font-normal text-gray-900 pr-4">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-500 min-w-5" />
                ) : (
                  <FiChevronDown className="text-gray-500 min-w-5" />
                )}
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Still have questions?</p>
          <button className="px-8 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;