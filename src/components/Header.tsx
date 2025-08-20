
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary-dark py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-background hover:text-accent transition">
          Md. Mirajul Islam
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-background hover:text-accent transition">Home</Link></li>
            <li><a href="#about" className="text-background hover:text-accent transition">About</a></li>
            <li><a href="#projects" className="text-background hover:text-accent transition">Projects</a></li>
            <li><a href="#contact" className="text-background hover:text-accent transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
