import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceDetailsProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration?: string;
  price?: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  shortDescription,
  fullDescription,
  duration,
  price,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-soft p-6 hover:shadow-medium transition-all duration-300">
      <h3 className="font-serif text-xl text-primary-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{shortDescription}</p>
      
      {(duration || price) && (
        <div className="flex flex-wrap gap-3 mb-4">
          {duration && (
            <span className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full">
              {duration}
            </span>
          )}
          {price && (
            <span className="bg-secondary-50 text-secondary-700 text-sm px-3 py-1 rounded-full">
              {price}
            </span>
          )}
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium text-sm"
      >
        {isExpanded ? 'Read Less' : 'Read More'} 
        {isExpanded ? (
          <ChevronUp size={16} className="ml-1" />
        ) : (
          <ChevronDown size={16} className="ml-1" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-gray-700 leading-relaxed animate-fade-in">
          {fullDescription}
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;