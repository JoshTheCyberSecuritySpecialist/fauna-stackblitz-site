import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '../../lib/supabase';

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetchServices();
    }
  }, [isOpen]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_available', true)
        .order('name');

      if (error) {
        throw error;
      }

      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to load services. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-2xl text-primary-800">Book an Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="text-center py-8">
          <p className="text-lg mb-6">To schedule your appointment, please call us directly:</p>
          <a 
            href="tel:321-794-1985" 
            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-300 text-lg font-medium w-full"
          >
            <Phone size={20} />
            <span>Call: 321-794-1985</span>
          </a>
          <p className="mt-6 text-gray-600">
            Hours of Operation:<br />
            Monday: 10AM – 4PM<br />
            Tuesday: 10AM – 4PM<br />
            Wednesday: 3PM – 8PM<br />
            Thursday: Closed<br />
            Friday: 10AM – 4PM<br />
            Saturday: 10AM – 4PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;