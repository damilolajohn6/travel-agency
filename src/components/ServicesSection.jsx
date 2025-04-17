import React from "react";
import Image1 from "../assets/services.png";
import { Link } from "react-router-dom";


function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Educational Institution Selection ",
      description:
        "We work closely with students to assess their academic background, career goals, and preferred study destinations, helping them choose the best-fit institutions—whether universities, colleges, or specialized programs.",
      image: Image1,
    },
    {
      id: 2,
      title: "University Applications",
      description:
        "Our team provides step-by-step support in preparing and submitting strong university applications, ensuring all requirements are met and timelines are followed to maximize admission success.",
      image: Image1,
    },
    {
      id: 3,
      title: "Document Review",
      description:
        "We offer thorough reviews of academic transcripts, personal statements, recommendation letters, and supporting documents to ensure they align with the expectations of international institutions.",
      image: Image1,
    },
    {
      id: 4,
      title: "Scholarship Matching",
      description:
        "We identify and match students with the most suitable scholarships based on merit, financial need, field of study, and eligibility criteria, giving them a competitive edge in funding their education.",
      image: Image1,
    },
    {
      id: 5,
      title: "Grant Application Support",
      description:
        "We help students locate and apply for educational grants that can supplement scholarships and reduce overall study costs, providing assistance with forms, essays, and submission strategies.",
      image: Image1,
    },
    {
      id: 6,
      title: "Student Loan Signpost",
      description:
        "We provide direction to reliable student loan providers and help students understand their options so they can make informed financial decisions.",
      image: Image1,
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-6">
      {/* Intro Section */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h1 className="text-gray-700 text-3xl font-bold mb-4">What We Do</h1>
        <p className="text-gray-600 text-md">
          At Givaj Educational Consult, we provide end-to-end support for
          students pursuing international education. Our services are designed
          to simplify the journey and maximize success at every stage.
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <Link to="/contact">
                <button className="bg-blue-950 text-white py-2 px-6 rounded-md transition hover:bg-blue-700 mt-4">
                  Book a Consultation
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
