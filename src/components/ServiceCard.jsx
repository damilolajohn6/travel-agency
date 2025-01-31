import React from 'react';

const Card = ({ title }) => {
    return (
        <div className="bg-gray-100 shadow-lg h-auto rounded-xl p-6 flex flex-col items-center text-center border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-900 mt-3">{title}</h2>
        </div>
    );
};

const ServiceCard = () => {
    const cards = [
        {
            title: "Standard Package",
        },
        {
            title: "Premium Package",
        },
        {
            title: "Elite Package",
        },
    ];

    return (
        <section className=" py-10">
            <div className="container mx-auto h-auto  px-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} />
                ))}
            </div>
        </section>
    );
}

export default ServiceCard;
