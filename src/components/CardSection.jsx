import React from "react";
import { FaGlobe } from "react-icons/fa";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
      <FaGlobe size={32} className="text-blue-900" />
      <h2 className="text-xl font-semibold text-blue-900 mt-3">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const CardSection = () => {
  const cards = [
    {
      title: "Visa Processing",
      description:
        "Comprehensive guidance for smooth visa application across multiple countries",
    },
    {
      title: "Scholarship Matching",
      description:
        "Personalized scholarship opportunities tailored to your profile ambitious",
    },
    {
      title: "Grant Application",
      description:
        "Expert support in identifying and securing educational funding resources",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-6 grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardSection;
