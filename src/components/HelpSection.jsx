import React from "react";
import teamImage from "../assets/help.png";
import { Link } from "react-router-dom";

function HelpSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={teamImage}
              alt="Team working"
              className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full h-auto object-cover"
            />
          </div>

          {/* Right Section (Text & Buttons) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              We Understand Your Dream to Study Abroad, and We’re Here to Make
              It Possible With:
            </h2>
            <div className="flex flex-col gap-4">
              <button className="bg-blue-950 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition text-sm md:text-base">
                Personalized Visa Guidance
              </button>
              <button className="bg-blue-950 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition text-sm md:text-base">
                Access to Exclusive Scholarships
              </button>
              <button className="bg-blue-950 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition text-sm md:text-base">
                Fast and Secure Processes
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <Link to="/contact">
            <button className="bg-blue-700  text-white py-3 px-6 rounded-md hover:bg-blue-950 transition text-sm md:text-base">
              Start Your Visa Application
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HelpSection;
