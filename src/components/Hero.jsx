import React from 'react';
// import profilePic from '../assets/profile.jpg'; // If storing image in src/assets

const Hero = () => {
  return (
    <section id="hero" className="bg-midnight pt-24 md:pt-32"> {/* Adjust pt for fixed navbar height */}
      <div className="container mx-auto px-6 text-center">
        {/* Optional Profile Picture */}
        {/* <img src="/profile.jpg" alt="Your Name" className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-orange shadow-lg" /> */}

        <h1 className="text-4xl md:text-5xl lg:text-6xl text-orange mb-4">
          Ash Fernandes
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Aspiring Software Engineer 🚀 
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-gray-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange transition duration-300">
            View My Work
          </a>
          <a href="#contact" className="bg-cyan text-white px-6 py-3 rounded-md font-semibold hover:bg-orange transition duration-300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;