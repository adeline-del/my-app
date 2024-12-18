import { useState } from "react";

const faqs = [
  {
    question: "What is the ideal temperature for egg incubation?",
    answer:
      "The ideal temperature for most eggs is around 37.5°C (99.5°F). Always monitor the incubator temperature closely to avoid overheating or underheating.",
  },
  {
    question: "How often should I turn the eggs during incubation?",
    answer:
      "Eggs should be turned 3-5 times daily to prevent the embryo from sticking to the shell. Automatic incubators usually handle this for you.",
  },
  {
    question: "What humidity level should be maintained during incubation?",
    answer:
      "For most eggs, maintain a humidity level of 40-50% during incubation and increase it to 65-75% during the last three days (hatching phase).",
  },
  {
    question: "How do I know if the eggs are fertile?",
    answer:
      "You can candle the eggs by shining a light through them around day 7 of incubation to check for visible veins or embryo development.",
  },
  {
    question: "What is the incubation period for chicken eggs?",
    answer:
      "The incubation period for chicken eggs is approximately 21 days under optimal conditions.",
  },
];

export function FAQS() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Educational FAQs</h2>
        <h4 className="text-2xl font-bold text-green-600 text-center mb-7">Tips and Tricks for Poultry Farmers</h4>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="text-yellow-500 font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
