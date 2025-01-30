import React from 'react'
import HeroSection from '../components/HeroSection';
import CardSection from '../components/CardSection';
import ServicesSection from '../components/ServicesSection';
import HelpSection from '../components/HelpSection';
import Vission from '../components/Vission';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import Testimonial from '../components/Testimonial';
import VideoPlayer from '../components/VideoPlayer';


const Homepage = () => {
  return (
    // <div className="container mx-auto py-6 px-6 md:px-12 lg:px-6">
    <div className="">
      <HeroSection />
      <CardSection />
      <Vission />
      <HelpSection />
      <ServicesSection />
      <div className="flex items-center justify-center bg-blue-950">
        <VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
      <Testimonial />
      <FAQSection />
      <ContactForm />
    </div>
  );
}

export default Homepage
