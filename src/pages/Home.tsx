import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg')" }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-800 mb-6 leading-tight animate-fade-in">
              Welcome to Holistic Healing with Fauna
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed animate-slide-up">
              "I offer personalized massage, skincare, and energy work to help you feel your best — mind, body, and spirit."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-base font-medium w-full sm:w-auto text-center"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-primary-600 text-primary-700 px-8 py-3 rounded-md hover:bg-primary-50 transition-colors duration-300 text-base font-medium w-full sm:w-auto text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-primary-800 text-center mb-12">Our Healing Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary-50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="font-serif text-2xl text-primary-700 mb-4">Facials</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium text-primary-800">Forest Bloom Facial</h4>
                  <p className="text-gray-700 mt-1">Nourishes and clarifies with plant-based ingredients.</p>
                </li>
                <li>
                  <h4 className="font-medium text-primary-800">Quartz Glow Microdermabrasion</h4>
                  <p className="text-gray-700 mt-1">Gently exfoliates and brightens with crystal energy.</p>
                </li>
                <li>
                  <h4 className="font-medium text-primary-800">Botanical Enzyme Renewal</h4>
                  <p className="text-gray-700 mt-1">Fruit enzyme peel for glowing, sensitive skin.</p>
                </li>
              </ul>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-6 group"
              >
                View all facials <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300">
              <h3 className="font-serif text-2xl text-primary-700 mb-4">Massages</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium text-primary-800">Relaxation Massage</h4>
                  <p className="text-gray-700 mt-1">Light-medium pressure + hot stones + aromatherapy.</p>
                </li>
                <li>
                  <h4 className="font-medium text-primary-800">Therapeutic Massage</h4>
                  <p className="text-gray-700 mt-1">Deep pressure, cupping, gua sha, herbal towels.</p>
                </li>
                <li>
                  <h4 className="font-medium text-primary-800">Ground & Glow</h4>
                  <p className="text-gray-700 mt-1">Massage + reiki + facial + botanical scrub.</p>
                </li>
              </ul>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-6 group"
              >
                View all massages <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-base font-medium"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg" 
                alt="Holistic healing practitioner" 
                className="rounded-lg shadow-medium w-full h-auto object-cover max-h-[500px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl text-primary-800 mb-6">About Fauna</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Welcome to Holistic Healing with Fauna—where touch becomes medicine, and presence is the path to peace."
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                This space was created to support healing on every level—body, mind, and spirit. As a licensed Holistic Massage Therapist, Esthetician, and Reiki Practitioner, I combine therapeutic bodywork, skincare, and energy healing to ease pain, reduce stress, and help you return to a state of balance.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-transparent border border-primary-600 text-primary-700 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors duration-300 text-base font-medium"
              >
                Learn More About Fauna
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-primary-800 mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step toward balance and wellness for your mind, body, and spirit.
          </p>
          <Link
            to="/contact"
            className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-base font-medium inline-block"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;