import React from "react";
import heroImg from "../assets/hero-img.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-6 py-6 md:px-12 lg:px-6 relative z-10 text-left px-2 w-3/4">
        <h1 className="text-3xl md:text-5xl font-bold">
          Your Gateway to Global Education –<br></br>Simplified Visa Processing
          and <br></br>Scholarship Success!
        </h1>
        <p className="mt-4 text-lg md:text-xl font-semibold text-yellow-500">
          Helping thousands of students secure visas and <br></br> scholarships
          for their dream universities.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
          start your visa application
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
