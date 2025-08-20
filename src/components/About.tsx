
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/8c7d2788-699a-4a13-b979-3bcc63a426d2.png" 
              alt="Mirajul Islam Mahim - Innovation and Creativity" 
              className="rounded-xl shadow-xl mx-auto border-4 border-primary" 
              style={{ maxWidth: '400px' }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6 text-accent">Innovation & Leadership</h3>
            <p className="text-lg mb-6 text-muted">
              I'm Mahim from Narayanganj, Bangladesh, with a strong passion for technology, innovation, and environmental sustainability. 
              As President of the Govt. Tolaram College Science Club, I've gained valuable experience in leadership, teamwork, and event management.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-accent">Achievements</h3>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">🏆 National Science Olympiads</h4>
                <ul className="text-sm text-muted space-y-1">
                  <li>• National Winner - 45th & 46th NSTW</li>
                  <li>• District Champion - Wildlife & Earth Olympiad</li>
                  <li>• Champion at UIU ICT Olympiad</li>
                </ul>
              </div>
              
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-accent-dark">🚀 Technical Expertise</h4>
                <ul className="text-sm text-muted space-y-1">
                  <li>• Robotics & Microcontrollers</li>
                  <li>• Machine Learning & AI</li>
                  <li>• Environmental Project Development</li>
                  <li>• Team Management & Leadership</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-background p-6 rounded-lg">
              <h4 className="font-semibold mb-2">💡 Mission</h4>
              <p className="text-sm">
                Constantly seeking new ways to innovate and create positive change through technology, 
                particularly in environmental sustainability and education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
