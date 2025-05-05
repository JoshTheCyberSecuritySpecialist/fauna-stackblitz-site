import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Holistic Healing with Fauna</h3>
            <p className="text-primary-100 text-sm">
              Where touch becomes medicine, and presence is the path to peace.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:contact@holistichealingwithfauna.com" 
                className="text-white hover:text-accent-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-primary-100 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/services" className="text-primary-100 hover:text-white transition-colors text-sm">Services</Link>
              <Link to="/about" className="text-primary-100 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/fauna-botanica" className="text-primary-100 hover:text-white transition-colors text-sm">Fauna Botanica</Link>
              <Link to="/contact" className="text-primary-100 hover:text-white transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-100">55 McLead St, Merritt Island, FL 32953</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <a href="tel:3217941985" className="text-sm text-primary-100 hover:text-white transition-colors">321-794-1985</a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-primary-100">
                  <p className="font-medium mb-1">Hours of Operation:</p>
                  <p>Monday: 10AM – 4PM</p>
                  <p>Tuesday: 10AM – 4PM</p>
                  <p>Wednesday: 3PM – 8PM</p>
                  <p>Thursday: Closed</p>
                  <p>Friday: 10AM – 4PM</p>
                  <p>Saturday: 10AM – 4PM</p>
                  <p>Sunday: Closed</p>
                  <p className="mt-1 font-medium">Appointments Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-800 text-center">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Holistic Healing with Fauna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;