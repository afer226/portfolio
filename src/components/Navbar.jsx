import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-midnight w-full z-10 top-0">
      <div className="container mx-auto px-6 py-3 md:flex justify-center">

        {/* Menu */}
        <div className={`md:flex items-center`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="my-1 text-medium text-white px-4 py-1.5 text-center rounded-md hover:bg-orange transition duration-300 md:mx-4 md:my-0"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;