import React from 'react'
import ServiceHeroSection from '../components/ServicesHeroSection';
import Vission from '../components/Vission';
import VideoPlayer from '../components/VideoPlayer';
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm"
import CardSection from '../components/CardSection';

const Services = () => {
  return (
    <div className="">
      <ServiceHeroSection />
      <CardSection />

      <Vission />
      <div className="flex items-center justify-center bg-blue-950">
        <VideoPlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
      <Testimonial />
      <ContactForm />
    </div>
  );
}

export default Services
