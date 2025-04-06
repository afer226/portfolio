import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center text-sm">
        <p>
        Ash Fernandes &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
};
export default Footer;