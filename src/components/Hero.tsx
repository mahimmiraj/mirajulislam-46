
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 flex items-center min-h-[80vh]" style={{ backgroundColor: '#3F4F44' }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">I'm Mirajul Islam</h1>
          <p className="text-xl md:text-2xl mb-8">
            A passionate developer focused on creating innovative solutions to real-world problems.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/mirajul-profile.jpg" 
            alt="Mirajul Islam" 
            className="rounded-lg shadow-xl mx-auto" 
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
