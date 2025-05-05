import React from 'react';
import { MapPin, Clock, Phone, Mail, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">Contact & Location</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Visit us for a peaceful escape and transformative healing experience.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-medium p-6 h-full">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl text-primary-800 mb-4">Our Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-800">Address</h3>
                          <p className="text-gray-700">55 McLead St, Merritt Island, FL 32953</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-800">Phone</h3>
                          <a href="tel:3217941985" className="text-primary-600 hover:text-primary-700 transition-colors">321-794-1985</a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-800">Email</h3>
                          <p className="text-gray-700">contact@holistichealingwithfauna.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-800">Business Hours</h3>
                          <div className="text-gray-700">
                            <p>Monday: 10AM – 4PM</p>
                            <p>Tuesday: 10AM – 4PM</p>
                            <p>Wednesday: 3PM – 8PM</p>
                            <p>Thursday: Closed</p>
                            <p>Friday: 10AM – 4PM</p>
                            <p>Saturday: 10AM – 4PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                          <p className="mt-1 font-medium">Appointments Only</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Facebook className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-gray-800">Social</h3>
                          <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            Follow us on Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="font-medium text-gray-800 mb-3">Book an Appointment</h3>
                    <p className="text-gray-700 mb-4">
                      To schedule your appointment, please call us directly.
                    </p>
                    <a 
                      href="tel:3217941985" 
                      className="inline-block w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-center font-medium flex items-center justify-center gap-2"
                    >
                      <Phone size={18} />
                      <span>Call to Book: 321-794-1985</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-medium p-6 h-full flex flex-col">
                <h2 className="font-serif text-2xl text-primary-800 mb-4">Our Location</h2>
                <div className="relative overflow-hidden rounded-lg flex-grow">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233130125367!2d-80.7054533!3d28.362142799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0b9cbec091d7%3A0x93d79b5ac9df2ac3!2s55%20McLead%20St%2C%20Merritt%20Island%2C%20FL%2032953!5e0!3m2!1sen!2sus!4v1667485143354!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '300px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Holistic Healing with Fauna location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl text-primary-800 mb-4">First Visit Information</h2>
            <p className="mb-6 text-gray-700 max-w-3xl mx-auto">
              Please arrive 15 minutes early for your first appointment to complete intake forms. Wear comfortable clothing and avoid heavy meals or alcohol before your session. We look forward to helping you on your healing journey.
            </p>
            <a 
              href="tel:3217941985" 
              className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-base font-medium inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>Call to Schedule: 321-794-1985</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;