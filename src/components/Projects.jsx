import React from 'react';

const projects = [
  {
    title: 'Retail Point-of-Sale',
    description: 'Three-page Point-of-Sale web application for a retail scenario (ice cream shop) using React and Vite. ',
    technologies: ['React', 'JavaScript (ES6+)', 'CSS'],
    imageUrl: '/pos.png',
    liveUrl: 'https://retail-pos.vercel.app/',
    repoUrl: 'https://github.com/afer226/retail-pos',
  },
  {
    title: 'Gone Phishing',
    description: 'Quiz-based serious game centered on educating employees on the dangers of phishing attacks.',
    technologies: ['Python', 'Flask', 'SQLAlchemy'],
    imageUrl: '/gone-phishing.png',
    repoUrl: 'https://github.com/afer226/gone-phishing',
  },
    {
    title: 'React Weather',
    description: 'Simple weather app built with Expo that lets users search for any city and view real-time temperature, conditions using the OpenWeatherMap API.',
    technologies: ['React Native', 'Axios', 'TypeScript'],
    imageUrl: '/weather.png',
    liveUrl: '#',
    repoUrl: '#',
  },
];

// --- Project Card ---
const ProjectCard = ({ project }) => (
  <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col">
    {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-125 hover:bg-indigo-500" />}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-orange mb-2">{project.title}</h3>
      <p className="text-white text-sm mb-4 flex-grow">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-cyan text-white text-xs px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-start space-x-3">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-orange hover:underline font-medium">Live Demo</a>}
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-orange hover:underline font-medium">GitHub Repo</a>}
      </div>
    </div>
  </div>
);

// --- Projects Section ---
const Projects = () => {
  return (
    <section id="projects" className="bg-midnight">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange mb-5 text-center">
          My Projects
        </h2>
        <div className="text-white text-lg mb-9 text-left md:text-center">
          See my most recent projects below to get an idea of my past experience.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;