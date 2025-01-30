import React, { useState } from "react";
import faqImage from "../assets/help.png";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer:
        "The duration varies by country and visa type, but typically ranges from a few weeks to several months.",
    },
    {
      question: "What are the eligibility criteria for scholarships?",
      answer:
        "Eligibility depends on academic performance, extracurricular activities, and specific program requirements.",
    },
    {
      question: "How do I apply for grants?",
      answer:
        "You can apply through institutions offering grants by submitting the required documents and meeting their criteria.",
    },
    {
      question: "How do I apply for grants?",
      answer:
        "You can apply through institutions offering grants by submitting the required documents and meeting their criteria.",
    },
    {
      question: "How do I apply for grants?",
      answer:
        "You can apply through institutions offering grants by submitting the required documents and meeting their criteria.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image section */}
        <div className="md:w-1/2">
          <img
            src={faqImage}
            alt="FAQ"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-blue-950 p-4 rounded-lg shadow cursor-pointer hover:bg-blue-800 transition"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg text-white flex justify-between items-center">
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </h3>
                {openIndex === index && (
                  <p className="text-white mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
