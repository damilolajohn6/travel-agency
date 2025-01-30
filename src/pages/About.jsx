import React from 'react'
import ServiceHeroSection from '../components/ServicesHeroSection';
import Vission from '../components/Vission';
import HelpSection from '../components/HelpSection';
import VideoPlayer from "../components/VideoPlayer";
import Testimonial from '../components/Testimonial';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';



const About = () => {
  return (
    <div className="">
      <ServiceHeroSection />
      <Vission />
      <HelpSection />
      <div className="flex items-center justify-center bg-blue-950">
        <VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
      <Testimonial />
      <FAQSection />
      <ContactForm />
    </div>
  );
}

export default About
