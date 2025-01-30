import React from "react";

const Vission = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2 bg-blue-950 px-6 py-10 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Mission/Vision
            </h2>

            <p className="text-white text-sm md:text-base lg:text-lg mb-4">
              We aim to simplify the complexities of studying abroad by
              providing tailored visa, scholarship, and grant solutions for
              students worldwide.
            </p>
            <p className="text-white text-sm md:text-base lg:text-lg mb-4">
              We offer expert guidance to ensure students successfully navigate
              the visa process and secure the best scholarship opportunities.
            </p>
            <p className="text-white text-sm md:text-base lg:text-lg mb-6">
              Our goal is to create a comprehensive support ecosystem that
              empowers students to achieve their academic dreams abroad.
            </p>

            <div className="my-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Our Values
              </h2>
              <ul className="text-white space-y-3 text-sm md:text-base lg:text-lg">
                <li>✅ Expert guidance</li>
                <li>✅ Success-driven approach</li>
                <li>✅ Comprehensive support ecosystem</li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 font-semibold rounded-md transition transform hover:scale-105">
                Start Your Visa Application
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCard number="10,000+" text="Success Applications" />
              <StatCard number="98%" text="Visa Success Rate" />
              <StatCard number="98%" text="Visa Success Rate" />
              <StatCard number="2M+" text="Grants Awarded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Statistic Card Component
const StatCard = ({ number, text }) => {
  return (
    <div className="bg-gray-100 h-auto rounded-lg text-gray-900 shadow-md p-6 text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-blue-600">{number}</h3>
      <h4 className="text-gray-600 text-sm md:text-base mt-2">{text}</h4>
    </div>
  );
};

export default Vission;
