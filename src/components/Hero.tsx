
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 flex items-center min-h-[80vh] bg-primary text-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Md. Mirajul Islam Mahim</h1>
          <p className="text-xl md:text-2xl mb-4 text-accent">
            Technology Enthusiast • Environmental Advocate • Innovation Driver
          </p>
          <p className="text-lg mb-8 opacity-90">
            President of Govt. Tolaram College Science Club | Champion in National Science Olympiads | 
            Passionate about creating sustainable tech solutions for real-world challenges.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-accent text-primary-dark px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition">
              View My Projects
            </a>
            <a href="#contact" className="border-2 border-background px-6 py-3 rounded-lg font-medium hover:bg-background hover:text-primary transition">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/28001e27-5fdd-4c9d-a242-f9cb17d5d8cf.png" 
            alt="Md. Mirajul Islam Mahim - Technology Enthusiast and Environmental Advocate" 
            className="rounded-xl shadow-2xl mx-auto border-4 border-accent" 
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
