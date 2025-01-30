import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#172B4D] text-white mt-8 py-20">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between gap-12">
          <div className="w-full md:w-2/3 px-4">
            <Link to="/" className="flex items-center">
              {/* <img src={image} alt="Qwik Logo" className="" /> */}
              <h2 className="font-semibold text-lg ml-2">Travel Agency</h2>
            </Link>
            <p className="mt-2 text-sm sm:text-base">
              Helping thousands of students secure visas and <br />
              scholarships for their dream universities.
            </p>
            <div className="mt-8">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                Subscribe to our Newsletter
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <form className="w-full flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full sm:w-[500px] px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-4 rounded-md font-semibold flex justify-center items-center mt-4 sm:mt-0"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[200px] px-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
              <Link to="/resource" className="hover:text-gray-300">
                Resource
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[200px] px-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <ul className="text-white space-y-2">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-blue-500 text-white mx-auto px-6 sm:px-10 text-center py-4 flex items-center justify-between">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="/terms"
            className="text-sm text-white font-semibold hover:text-white"
          >
            Terms of Use
          </a>
          <a
            href="/privacy"
            className="text-sm text-white font-semibold hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
