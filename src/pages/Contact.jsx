import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import ServiceHeroSection from "../components/ServicesHeroSection";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div>
      <ServiceHeroSection />
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mx-auto items-center flex flex-col">
          <h2 className="text-3xl font-bold text-center">Get In Touch With Us</h2>
          <p className="text-center font-semibold flex items-center text-gray-600 mt-2 w-2/3">
            Please leave a message if you have any question or experiencing any
            diffculty using our webs.Our team will get back to you shortly.
          </p>
          <div className="bg-red-600 my-2 h-1 w-[90px]"></div>
        </div>

        {/* FLEX CONTAINER FOR FORM & CONTACT DETAILS */}
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {/* Contact Form */}
          <div className="flex-1 p-6">
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-8 shadow-lg rounded-lg">
              <input
                type="text"
                placeholder="First Name *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Mobile Number *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
              />
              <select className="border p-3 rounded-md w-full focus:border-blue-500 outline-none">
                <option disabled selected>
                  Study Destination?
                </option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <select className="border p-3 rounded-md w-full focus:border-blue-500 outline-none">
                <option disabled selected>
                  When Do You Plan To Study?
                </option>
                <option>2024</option>
                <option>2025</option>
                <option>Later</option>
              </select>
              <select className="border p-3 rounded-md w-full focus:border-blue-500 outline-none">
                <option disabled selected>
                  Mode of Counseling
                </option>
                <option>Online</option>
                <option>In-Person</option>
              </select>
              <select className="border p-3 rounded-md w-full focus:border-blue-500 outline-none">
                <option disabled selected>
                  Fund Your Education?
                </option>
                <option>Self-funded</option>
                <option>Scholarship</option>
                <option>Loan</option>
              </select>
              <textarea
                placeholder="Your Message *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none col-span-1 lg:col-span-2 h-24 resize-none"
              />
              <button className="col-span-1 lg:col-span-2 w-1/2 justify-center items-center flex mx-auto bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-md transition">
                Let's hear from you
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/3">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <div className="mt-4 space-y-3">
                <p className="flex items-center gap-2">
                  <FiPhone className="text-xl" /> +91 9999999999
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-xl" /> hello@globalcounsel.com
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-xl" /> SCO - 252/545 Mohali,
                  Chandigarh, 160022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Map />
    </div>
  );
};

export default Contact;
