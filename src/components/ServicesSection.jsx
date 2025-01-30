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
      title: "Visa application guidance",
      description:
        "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations. With access to a global database of scholarships, our advanced algorithm finds the best options for you, simplifying your journey to secure financial aid for your studies abroad.",
      image: Image1,
    },
    {
      id: 3,
      title: "Grant application support",
      description:
        "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations. With access to a global database of scholarships, our advanced algorithm finds the best options for you, simplifying your journey to secure financial aid for your studies abroad.",
      image: Image1,
    },
    {
      id: 4,
      title: "Document preparation",
      description:
        "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations. With access to a global database of scholarships, our advanced algorithm finds the best options for you, simplifying your journey to secure financial aid for your studies abroad.",
      image: Image1,
    },
    {
      id: 5,
      title: "Educational institution selection",
      description:
        "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations. With access to a global database of scholarships, our advanced algorithm finds the best options for you, simplifying your journey to secure financial aid for your studies abroad.",
      image: Image1,
    },
    {
      id: 6,
      title: "Interview preparation",
      description:
        "Our scholarship matching service helps you discover funding opportunities tailored to your academic profile and aspirations. With access to a global database of scholarships, our advanced algorithm finds the best options for you, simplifying your journey to secure financial aid for your studies abroad.",
      image: Image1,
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="flex flex-col items-start w-full sm:w-[431px] my-6 py-6 px-6 h-[170px]">
        <h1 className="text-gray-700 text-3xl font-bold mb-2">What we do</h1>
        <p className="text-gray-700 text-md mb-2">
          We provide end-to-end support to help students navigate visa
          applications, secure scholarships, and access grants. Our expert
          consultants ensure a smooth process every step of the way.
        </p>

      </div>

      <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-blue-500 text-white py-2 px-4  mt-4 rounded-md transition justify-center mx-auto flex">
                  Book a consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
      </div>
    </section>
  );
}

export default ServicesSection;
