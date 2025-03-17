
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mirajul Islam. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/mirajulislam" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/mirajulislam" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">LinkedIn</a>
          <a href="https://twitter.com/mirajulislam" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
