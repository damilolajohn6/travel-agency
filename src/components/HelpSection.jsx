import React from "react";
import teamImage from "../assets/help.png";

function HelpSection() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row  gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <img
              src={teamImage}
              alt="Team working"
              className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto lg:max-w-full"
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 text-gray-800">
              We Understand Your dream to study abroad and we’re here to make it
              possible With
            </h2>
            <button className="bg-blue-950 text-white w-full my-4 py-2 px-4 rounded-md hover:bg-blue-700 transition text-sm md:text-base">
              Personalized Visa Guidance.
            </button>
            <button className="bg-blue-950 text-white w-full my-4 py-2 px-4 rounded-md hover:bg-blue-700 transition text-sm md:text-base">
              Access to Exclusive Scholarships.
            </button>
            <button className="bg-blue-950 text-white w-full my-4 py-2 px-4 rounded-md hover:bg-blue-700 transition text-sm md:text-base">
              Fast and Secure Processes.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
