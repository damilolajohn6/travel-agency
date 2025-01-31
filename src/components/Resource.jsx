import React from 'react'
import resourceImg from "../assets/reso.png"

const Resourcess = () => {
  const resources = [
    {
      title:
        "The Ultimate Guide to Securing a Student Visa, Scholarships, and Grants – Everything You Need to Know Before Studying Abroad!",
      image: resourceImg,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. A lectus risus dolor ullamcorper ut eu. Vel a enim donec ac eget facilisi. Ullamcorper auctor augue cursus et. Magna vitae tincidunt quam eget ligula imperdiet duis.",
      date: "January 31, 2025",
    },
    {
      title:
        "The Ultimate Guide to Securing a Student Visa, Scholarships, and Grants – Everything You Need to Know Before Studying Abroad!",
      image: resourceImg,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. A lectus risus dolor ullamcorper ut eu. Vel a enim donec ac eget facilisi. Ullamcorper auctor augue cursus et. Magna vitae tincidunt quam eget ligula imperdiet duis.",
      date: "January 31, 2025",
    },
    {
      title:
        "The Ultimate Guide to Securing a Student Visa, Scholarships, and Grants – Everything You Need to Know Before Studying Abroad!",
      image: resourceImg,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. A lectus risus dolor ullamcorper ut eu. Vel a enim donec ac eget facilisi. Ullamcorper auctor augue cursus et. Magna vitae tincidunt quam eget ligula imperdiet duis.",
      date: "January 31, 2025",
    },
    {
      title:
        "The Ultimate Guide to Securing a Student Visa, Scholarships, and Grants – Everything You Need to Know Before Studying Abroad!",
      image: resourceImg,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. A lectus risus dolor ullamcorper ut eu. Vel a enim donec ac eget facilisi. Ullamcorper auctor augue cursus et. Magna vitae tincidunt quam eget ligula imperdiet duis.",
      date: "January 31, 2025",
    },
    {
      title:
        "The Ultimate Guide to Securing a Student Visa, Scholarships, and Grants – Everything You Need to Know Before Studying Abroad!",
      image: resourceImg,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. A lectus risus dolor ullamcorper ut eu. Vel a enim donec ac eget facilisi. Ullamcorper auctor augue cursus et. Magna vitae tincidunt quam eget ligula imperdiet duis.",
      date: "January 31, 2025",
    },
    {
      title:
        "The Ultimate Guide to Securing a Student Visa, Scholarships, and Grants – Everything You Need to Know Before Studying Abroad!",
      image: resourceImg,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur. A lectus risus dolor ullamcorper ut eu. Vel a enim donec ac eget facilisi. Ullamcorper auctor augue cursus et. Magna vitae tincidunt quam eget ligula imperdiet duis.",
      date: "January 31, 2025",
    },

  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-100 text-gray-950 py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-blue-900 font-serif pb-4 font-bold">
            Student Visa, Scholarship & Grant Resources
          </h1>
          <p className="mt-2 text-lg">
            At TravelAgency, we craft personalized travel and study packages for
            every student because we understand that each journey is unique. Our
            approach is centered on gaining a deep understanding of your
            individual needs, strengths, and aspirations. This allows us to
            guide you toward the best educational opportunities at top-tier
            institutions worldwide. Whether it’s securing your student visa,
            finding the right scholarship, or assisting with grants, we ensure a
            seamless process so you can focus on achieving your academic dreams.
          </p>
        </div>
      </header>

      {/* Blog Grid Section */}
      <section className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Metadata */}
              <div className="flex items-center py-3 px-6 justify-between text-md text-gray-500">
                <span>{blog.date}</span>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                {/* Read More Button */}
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resourcess
