import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/resource-img.png";


const ResourceHeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full px-4 md:px-10 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold">
            TravelAgency
          </Link>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="sm:hidden text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-300 font-semibold">
              Home
            </Link>
            <Link to="/services" className="hover:text-gray-300 font-semibold">
              Services
            </Link>
            <Link to="/resource" className="hover:text-gray-300 font-semibold">
              Resource
            </Link>
            <Link to="/about" className="hover:text-gray-300 font-semibold">
              About Us
            </Link>
            <Link to="/contact">
              <button className="ml-4 bg-blue-700 px-4 py-2 rounded-lg  text-white font-semibold hover:bg-white hover:text-[#B08D79] transition duration-300">
                Contact Us
              </button>
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`absolute left-0 w-full bg-white text-gray-800 shadow-lg transform ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          } transition-all duration-300 ease-in-out p-4 sm:hidden`}
        >
          <nav className="space-y-4">
            <Link to="/" className="block hover:text-blue-500">
              Home
            </Link>
            <Link to="/services" className="block hover:text-blue-500">
              Services
            </Link>
            <Link to="/resource" className="block hover:text-blue-500">
              Resource
            </Link>
            <Link to="/about" className="block hover:text-blue-500">
              About Us
            </Link>
            <Link to="/contact" className="block hover:text-blue-500">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 text-left w-full max-w-2xl">
        <h1 className="text-1xl md:text-3xl font-bold leading-tight">
          Resources
        </h1>
        <p className="mt-4 text-lg md:text-xl font-semibold text-yellow-500">
          Your Ultimate Guide to Student Visas, Scholarships, and Grants – All
          the Resources You Need in One Place
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
          Start Your Visa Application
        </button>
      </div>
    </div>
  );
};

export default ResourceHeroSection;
