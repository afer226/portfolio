import React from 'react';
// Optional: npm install react-icons
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const email = 'ash.fernandes@outlook.com';
  const linkedInUrl = 'https://linkedin.com/in/ash-fernandes';
  const githubUrl = 'https://github.com/afer226';

  return (
    <section id="contact" className="bg-midnight">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-orange mb-8">
          Contact Me
        </h2>
        <p className="text-white text-lg mb-8">
          Interested in collaborating or have any questions?
        </p>
        <a href={`mailto:${email}`} className="inline-block bg-cyan text-white text-lg px-8 py-3 rounded-md font-semibold hover:bg-orange transition duration-300 mb-8 shadow-md">
        Let's connect! 🤝
        </a>
        <div className="flex justify-center space-x-6 mt-4">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange transition duration-300 text-3xl">
            {<FaLinkedin size={30} />}
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange transition duration-300 text-3xl">
            {<FaGithub size={30} />}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;