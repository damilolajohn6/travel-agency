import React from "react";
import Image1 from "../assets/services.png";

function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Scholarship Matching",
      description:
        "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations. With access to a global database of scholarships, our advanced algorithm finds the best options for you, simplifying your journey to secure financial aid for your studies abroad.",
      image: Image1,
    },
    {
      id: 2,
      title: "Visa Application Guidance",
      description:
        "We provide expert support to guide you through the visa application process, ensuring compliance with all requirements and improving your chances of approval.",
      image: Image1,
    },
    {
      id: 3,
      title: "Grant Application Support",
      description:
        "Our consultants help you apply for grants, ensuring you have access to financial assistance for your education abroad.",
      image: Image1,
    },
    {
      id: 4,
      title: "Document Preparation",
      description:
        "We assist with document organization and review, making sure you submit complete and accurate applications.",
      image: Image1,
    },
    {
      id: 5,
      title: "Educational Institution Selection",
      description:
        "We guide you in selecting the best educational institutions based on your academic profile and career goals.",
      image: Image1,
    },
    {
      id: 6,
      title: "Interview Preparation",
      description:
        "Our experts provide coaching and resources to help you confidently navigate university or visa interviews.",
      image: Image1,
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-6">
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h1 className="text-gray-700 text-3xl font-bold mb-4">What We Do</h1>
        <p className="text-gray-600 text-md">
          We provide end-to-end support to help students navigate visa applications, secure scholarships, and access grants.
          Our expert consultants ensure a smooth process every step of the way.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <button className="bg-blue-950 text-white py-2 px-6 rounded-md transition hover:bg-blue-700 mt-4">
                  Book a Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
