import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import ContactHeroSection from "../components/ContactHeroSection";
import Map from "../components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    studyDestination: "",
    studyPlan: "",
    counselingMode: "",
    funding: "",
    studyLevel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className=''>
      <ContactHeroSection />
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mx-auto items-center flex flex-col">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-600 mt-2 w-full md:w-2/3">
            Please leave a message if you have any questions or are experiencing
            any difficulty using our website. Our team will get back to you
            shortly.
          </p>
          <div className="bg-red-600 my-2 h-1 w-[90px]"></div>
        </div>

        {/* FLEX CONTAINER FOR FORM & CONTACT DETAILS */}
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {/* Contact Form */}
          <div className="flex-1 p-6">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 shadow-lg rounded-lg"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number *"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <select
                name="studyDestination"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.studyDestination}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Study Destination?
                </option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <select
                name="studyPlan"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.studyPlan}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  When Do You Plan To Study?
                </option>
                <option>2024</option>
                <option>2025</option>
                <option>Later</option>
              </select>
              <select
                name="counselingMode"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.counselingMode}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Mode of Counseling
                </option>
                <option>Online</option>
                <option>In-Person</option>
              </select>
              <select
                name="funding"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none"
                value={formData.funding}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Fund Your Education?
                </option>
                <option>Self-funded</option>
                <option>Scholarship</option>
                <option>Loan</option>
              </select>
              <select
                name="studyLevel"
                className="border p-3 rounded-md w-full focus:border-blue-500 outline-none md:col-span-2"
                value={formData.studyLevel}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Preferred Study Level
                </option>
                <option>Bachelor’s</option>
                <option>Master’s</option>
                <option>PhD</option>
              </select>
              <button
                type="submit"
                className="col-span-1 md:col-span-2 w-auto font-semibold bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-md transition"
              >
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
