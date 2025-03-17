
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Mirajul Islam</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400 transition">About</Link></li>
            <li><Link to="/projects" className="hover:text-green-400 transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
