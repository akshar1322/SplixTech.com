// components/FAQSection.tsx
import { FC, useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How many services do you provide?",
    answer: "We offer a wide range of services to meet your needs. Currently, we provide services in: Web Development, UI/UX Design, Software Development, Graphic Design, and Website Maintenance.",
  },
  {
    question: "What is included in your pricing?",
    answer: "Our pricing includes a comprehensive package tailored to your needs. Each service package covers Initial Consultation, Project Planning and Management, Implementation and Development, Quality Assurance and Testing, and Post-Launch Support.",
  },
  {
    question: "Can I customize my service package?",
    answer: "Yes, we offer customization options for all our service packages. Contact us to discuss your specific requirements and we’ll tailor a package that suits your needs.",
  },
];

const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F1F0EB] rounded-t-2xl font-semibold text-black p-8 overflow-hidden  shadow-lg max-w-fitxl mx-auto ">
      <h2 className="text-5xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between py-4 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-xl font-medium">{item.question}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 py-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
