import React from 'react'
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import ServicesSection from '../components/ServicesSection';
import HelpSection from '../components/HelpSection';
import Vission from '../components/Vission';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import Testimonial from '../components/Testimonial';


const Homepage = () => {
  return (
    // <div className="container mx-auto py-6 px-6 md:px-12 lg:px-6">
    <div className="">
      <HeroSection />
      <CardSection />
      <Vission />
      <HelpSection />
      <ServicesSection />

      <Testimonial />

      <FAQSection />
      <ContactForm />
    </div>

  );
}

export default Homepage
