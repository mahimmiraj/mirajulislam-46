
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack application with React and Node.js",
      image: "/project1.jpg"
    },
    {
      id: 2,
      title: "Project Two",
      description: "E-commerce platform with payment integration",
      image: "/project2.jpg"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Mobile-responsive dashboard application",
      image: "/project3.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href="#" className="text-green-400 hover:underline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
