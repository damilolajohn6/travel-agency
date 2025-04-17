import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu if clicked outside
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container relative mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
            <h1 className="font-bold text-white">Givaj Educational Consult</h1>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden sm:flex items-center space-x-4">
          <nav className="space-x-4 font-semibold flex">
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
          </nav>

          {/* Contact Button */}
          {/* <div className="ml-4">
            <Link to="/contact">
              <button className="bg-[#B08D79] text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-[#B08D79] border border-[#B08D79] transition duration-300">
                Contact Us
              </button>
            </Link>
          </div> */}
        </div>
        {/* Contact Button */}
        <div className="ml-4">
          <Link to="/contact">
            <button className="bg-[#B08D79] text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-[#B08D79] border border-[#B08D79] transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`sm:hidden absolute top-16 left-0 w-full bg-white text-gray-700 shadow-lg p-4 transform ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        } transition duration-300 ease-in-out`}
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
          {/* <Link to="/contact" className="block">
            <button className="w-full border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
