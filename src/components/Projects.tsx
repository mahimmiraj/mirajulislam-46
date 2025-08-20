
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hydrover - Environmental Solution",
      description: "Revolutionary system designed to reduce plastic and microplastic pollution. Winner of multiple innovation awards.",
      image: "/project1.jpg",
      category: "Environmental Tech",
      achievements: "Award-winning solution"
    },
    {
      id: 2,
      title: "Robotics & AI Integration",
      description: "Advanced robotics projects combining microcontrollers, sensors, and machine learning for real-world applications.",
      image: "/project2.jpg",
      category: "Robotics & AI",
      achievements: "Technical expertise showcase"
    },
    {
      id: 3,
      title: "Climate Change Initiatives",
      description: "Environmental projects and climate adaptation initiatives developed during Red Crescent Society volunteering.",
      image: "/project3.jpg",
      category: "Climate Action",
      achievements: "Community impact focus"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-background">Innovation Portfolio</h2>
        <p className="text-xl text-center text-accent mb-12 max-w-3xl mx-auto">
          Transforming ideas into impactful solutions that address real-world challenges in technology and environmental sustainability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="text-6xl text-background opacity-50">🚀</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-3 py-1 bg-accent/20 text-accent-dark rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted">⭐ {project.achievements}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>
                <a href="#contact" className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium">
                  Learn More <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">🎯 Current Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-semibold text-primary">Environmental Tech</h4>
                <p className="text-sm text-muted mt-1">Sustainable solutions for climate challenges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-semibold text-primary">AI & Robotics</h4>
                <p className="text-sm text-muted mt-1">Intelligent systems for automation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <h4 className="font-semibold text-primary">Education Innovation</h4>
                <p className="text-sm text-muted mt-1">Technology-enhanced learning experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
