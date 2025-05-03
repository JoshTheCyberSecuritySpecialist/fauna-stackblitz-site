import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Fauna Botanica', path: '/fauna-botanica' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="text-primary-600 h-7 w-7" />
          <span className="font-serif text-xl md:text-2xl font-medium text-primary-800">
            Holistic Healing with Fauna
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <a
            href="tel:3217941985"
            className="book-button bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors duration-300 text-sm font-medium flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Call to Book: 321-794-1985</span>
          </a>
        </div>
        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen shadow-medium py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors hover:text-primary-600 ${
                location.pathname === link.path
                  ? 'text-primary-600'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:3217941985"
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors duration-300 text-sm font-medium text-center flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            <span>Call to Book: 321-794-1985</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;