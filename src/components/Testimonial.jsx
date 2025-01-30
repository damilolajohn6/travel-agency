import React, { useRef } from "react";
import Slider from "react-slick";
import Avatar from "../assets/avatar.jpg";

const testimonials = [
  {
    id: 1,
    name: "Christopher Peterson, University of New York",
    text: "Thanks to Travel Agency, I was able to secure my student visa and a full scholarship to my dream university in Canada. Their team guided me every step of the way, from finding the right program to submitting my application on time. I couldn’t have done it without them!",
    image: Avatar,
  },
  {
    id: 2,
    name: "Donna Smith, Oxford University",
    text: "Travel Agency helped me find the perfect scholarship opportunity. Their support was invaluable, and I’m now studying at my dream university with full financial aid!",
    image: Avatar,
  },
  {
    id: 3,
    name: "Mary John, Toronto University",
    text: "Their visa assistance service was seamless. The team ensured my documents were in order, and I received my visa on time without any stress!",
    image: Avatar,
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-6">
        What Our Clients Are Saying
      </h1>
      <p className="text-center mb-6 text-gray-900">
        Hear from our satisfied clients who’ve achieved their dreams with our
        expert guidance. From securing visas to landing scholarships, their
        success stories showcase the impact we’ve made in transforming
        aspirations into reality.
      </p>

      {/* Testimonial Slider */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center justify-center text-center space-y-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
            />
            <p className="text-lg italic text-gray-600 mb-4 px-4 sm:px-8">
              "{testimonial.text}"
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="p-4 bg-white border border-blue-800 rounded-lg shadow hover:bg-gray-200 hover:text-white transition"
        >
          ←
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="p-4 bg-white border border-blue-800 rounded-lg shadow hover:bg-gray-200 hover:text-white transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
