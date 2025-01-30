import React from "react";

const Vission = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row  gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2 bg-blue-950 px-6 py-10 rounded-xl">
            <h2 className="text-2xl md:text-2xl font-bold mb-4 py-6 text-white">
              Mission/Vission
            </h2>

            <p className="text-white mb-4 text-sm md:text-base lg:text-lg">
              We aim to simplify the complexities of studying abroad by
              providing tailored visa, scholarship, and grant solutions for
              students worldwide.
            </p>
            <p className="text-white mb-6 text-sm md:text-base lg:text-lg">
              We aim to simplify the complexities of studying abroad by
              providing tailored visa, scholarship, and grant solutions for
              students worldwide.
            </p>
            <p className="text-white mb-6 text-sm md:text-base lg:text-lg">
              We aim to simplify the complexities of studying abroad by
              providing tailored visa, scholarship, and grant solutions for
              students worldwide.
            </p>
            <div className="my-8">
              <h2 className="text-2xl md:text-2xl font-bold mb-4 py-6 text-white">
                Our Values
              </h2>
              <p className="text-white mb-6 text-sm md:text-base lg:text-lg">
                Expert guidance
              </p>
              <p className="text-white mb-6 text-sm md:text-base lg:text-lg">
                Success-driven approach
              </p>
              <p className="text-white mb-6 text-sm md:text-base lg:text-lg">
                Comprehensive support ecosystem
              </p>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-semibold mt-4 rounded-md transition justify-center mx-auto flex">
              Start your Visa Application
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="flex gap-8">
              <div className="bg-gray-100 h-auto w-60 rounded-lg text-gray-900 shadow-md p-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    10,000+
                  </h3>
                  <h4 className="text-gray-600 text-sm md:text-base">
                   Success Application
                  </h4>
                </div>
              </div>
              <div className="bg-gray-100 h-auto w-60 rounded-lg text-gray-900 shadow-md p-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    98%
                  </h3>
                  <h4 className="text-gray-600 text-sm md:text-base">
                    Visa Success Rate
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex my-8 gap-8">
              <div className="bg-gray-100 h-auto w-60 rounded-lg text-gray-900 shadow-md p-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    98%
                  </h3>
                  <h4 className="text-gray-600 text-sm md:text-base">
                   Visa Success Rate
                  </h4>
                </div>
              </div>
              <div className="bg-gray-100 h-auto w-60 rounded-lg text-gray-900 shadow-md p-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                    2m+
                  </h3>
                  <h4 className="text-gray-600 text-sm md:text-base">
                   Grants
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;
