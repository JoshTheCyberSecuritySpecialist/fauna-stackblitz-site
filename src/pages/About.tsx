import React from 'react';
import { Award, Check } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-primary-800 mb-4">About Fauna</h1>
          </header>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg" 
                alt="Holistic healing practitioner" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <div className="prose">
                <p className="text-lg font-medium text-primary-700 italic mb-4">
                  "Welcome to Holistic Healing with Fauna—where touch becomes medicine, and presence is the path to peace."
                </p>
                <p className="mb-4">
                  This space was created to support healing on every level—body, mind, and spirit. As a licensed Holistic Massage Therapist, Esthetician, and Reiki Practitioner, I combine therapeutic bodywork, skincare, and energy healing to ease pain, reduce stress, and help you return to a state of balance.
                </p>
                <p className="mb-4">
                  My approach is intuitive and restorative, blending Swedish massage, deep tissue, trigger point therapy, myofascial release, breathwork, and gentle stretching. Each session is personalized and guided by deep listening—to your body and its natural rhythm.
                </p>
                <p className="text-primary-700 font-medium">
                  All beings and all bodies are welcomed and honored here.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <p className="mb-6">
              When I'm not holding space for others, I enjoy practicing yoga and meditation, exploring nature, receiving bodywork, and spending time with my three incredible sons, my sweet fur babies, and a community that fills my heart.
            </p>
          </div>

          <section className="bg-primary-50 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary-600 h-6 w-6" />
              <h2 className="font-serif text-2xl text-primary-800">Certifications & Specialized Training</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h3 className="font-medium text-primary-700 mb-3">Licenses & Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Licensed Massage Therapist (Florida)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Licensed Esthetician (Florida)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Certified Reflexologist – Emotion Mapping Method</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Reiki Practitioner</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Microneedling Certification</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Advanced Chemical Peel Training</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-primary-700 mb-3">Specialized Techniques</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Medical Massage Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Prenatal Massage</span>
                  </li>
                </ul>
                
                <h3 className="font-medium text-primary-700 mt-6 mb-3">State License Numbers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Massage Establishment License: MM43599</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Massage Therapy License: MA101441</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Facial Specialist License: FS900356</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <div className="bg-accent-50 rounded-lg p-8 mb-8 text-center">
            <h3 className="font-serif text-2xl text-primary-800 mb-4">Ready to Experience Holistic Healing?</h3>
            <p className="mb-6 text-gray-700">
              Book your personalized healing session and begin your journey to wellness.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-base font-medium"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;