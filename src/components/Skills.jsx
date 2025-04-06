import React from 'react';

// --- Skills Data (Replace with yours) ---
const skillsData = {
  'Languages': ['JavaScript', 'Python', 'Java', 'HTML', 'CSS'],
  'Frameworks': ['React', 'Node.js', 'Flask', 'Tailwind CSS', 'Spring Boot'],
  'Tools': ['Git', 'Docker', 'Postman', 'Jira'],
  'Databases': ['PostgreSQL'],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-midnight">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange mb-12 text-center">
          Technical Skills
        </h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillsData).map(([category, skillsList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 text-center md:text-left">{category}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {skillsList.map((skill) => (
                   <span key={skill} className="bg-cyan text-white hover:bg-orange transition duration-300 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                     {skill}
                   </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;