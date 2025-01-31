import React from "react";
import Image1 from "../assets/services.png";

const services = [
  {
    title: "Scholarship matching",
    description:
      "End-to-end scholarship search and application assistance for ambitious students.",
    details:
      "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations.",
    offer: [
      "Scholarship Search",
      "Global scholarship database access",
      "Eligibility matching",
      "Deadline tracking",
      "Award amount comparison",
    ],
    support: [
      "Essay writing guidance",
      "Recommendation letter coordination",
      "Portfolio development",
      "Application review",
    ],
    button: "Book a Consultation",
    image: Image1,
  },
  {
    title: "Grant application support",
    description:
      "End-to-end scholarship search and application assistance for ambitious students.",
    details:
      "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations.",
    offer: [
      "Grant Identification",
      "Research grants",
      "Merit-based grants",
      "Need-based grants",
      "Project-specific funding",
    ],
    support: [
      "Essay writing guidance",
      "Recommendation letter coordination",
      "Portfolio development",
      "Application review",
    ],
    button: "Apply for a Grant",
    image: Image1,
  },
  {
    title: "Document preparation",
    description:
      "Comprehensive visa application support for international students pursuing education abroad.",
    details:
      "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations.",
    offer: [
      "Documentation Review & Preparation",
      "Passport and identity verification",
      "Academic transcripts organization",
      "Financial documents assessment",
      "Letter of acceptance verification",
    ],
    support: [
      "Country-specific requirements analysis",
      "Timeline planning and management",
      "Form filing assistance",
      "Document translation services",
    ],
    button: "Book a Consultation",
    image: Image1,
  },
  {
    title: "Visa application guidance",
    description:
      "Comprehensive visa application support for international students pursuing education abroad.",
    details:
      "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations.",
    offer: [
      "Documentation Review & Preparation",
      "Passport and identity verification",
      "Academic transcripts organization",
      "Financial documents assessment",
      "Letter of acceptance verification",
    ],
    support: [
      "Country-specific requirements analysis",
      "Timeline planning and management",
      "Form filing assistance",
      "Document translation services",
    ],
    button: "Start Your Visa Process",
    image: Image1,
  },
];

export default function ServiceSection() {
  return (
    <section className="py-12 px-4 lg:px-20">
      <h2 className="text-3xl font-serif font-bold text-blue-900 mb-4">What we Do</h2>
      <p className="text-gray-600 font-semibold mb-8 w-1/3">
        We provide end-to-end support to help students navigate visa
        applications, secure scholarships, and access grants.
      </p>
      <div className="grid gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="md:w-1/3 h-48 bg-gray-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-2 font-bold">
                {service.description}
              </p>
              <p className="text-gray-600 mb-4">{service.details}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {service.offer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold text-gray-800 mb-2">
                Application Support
              </h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {service.support.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
