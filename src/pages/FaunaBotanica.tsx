import React from 'react';
import { Leaf, Shield, Sparkles, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaunaBotanica = () => {
  const botanicalProducts = [
    {
      name: "Botanical Enzyme Cleanser",
      description: "A gentle foaming cleanser with fruit enzymes to remove impurities without stripping the skin's natural moisture.",
      icon: <Droplet className="text-primary-600 h-5 w-5" />,
    },
    {
      name: "Wild Rose Toner",
      description: "Balancing toner with wild rose extract and hyaluronic acid to hydrate and prepare skin for treatment products.",
      icon: <Sparkles className="text-accent-500 h-5 w-5" />,
    },
    {
      name: "Forest Renewal Serum",
      description: "Potent blend of peptides and botanical extracts to boost collagen production and enhance skin's natural repair process.",
      icon: <Leaf className="text-primary-500 h-5 w-5" />,
    },
    {
      name: "Protective Moisture Shield",
      description: "Lightweight but nourishing moisturizer with natural SPF from zinc oxide and antioxidants to protect against environmental damage.",
      icon: <Shield className="text-secondary-500 h-5 w-5" />,
    },
  ];
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">Fauna Botanica</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Clean, science-backed skincare infused with fruit enzymes, peptides, and botanicals
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg" 
                  alt="Fauna Botanica Products" 
                  className="rounded-lg shadow-medium w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Fauna Botanica is a clean, science-backed skincare line infused with fruit enzymes, peptides, and botanicals. Designed to restore balance and radiance for all skin types.
                </p>
                <p className="text-lg mb-6">
                  Holistic, effective, and rooted in intention—skincare that supports every stage of your skin's journey.
                </p>
                <p className="text-primary-700 font-medium mb-6">
                  All products are:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Leaf size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cruelty-free and never tested on animals</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Free from parabens, sulfates, and synthetic fragrances</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Formulated with organic ingredients whenever possible</span>
                  </li>
                  <li className="flex items-start">
                    <Leaf size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Packaged in eco-friendly, recyclable containers</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl text-primary-800 text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {botanicalProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-soft p-6 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {product.icon}
                    <h3 className="font-serif text-xl text-primary-800">{product.name}</h3>
                  </div>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl text-primary-800 mb-4">Experience Fauna Botanica</h3>
            <p className="mb-6 text-gray-700">
              Our products are available for purchase in our studio. Experience the difference natural, intentional skincare can make for your skin's health and radiance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/services" 
                className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-base font-medium w-full sm:w-auto text-center"
              >
                Book a Facial
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border border-primary-600 text-primary-700 px-6 py-3 rounded-md hover:bg-primary-50 transition-colors duration-300 text-base font-medium w-full sm:w-auto text-center"
              >
                Visit Our Studio
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FaunaBotanica;