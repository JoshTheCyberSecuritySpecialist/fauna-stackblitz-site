import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Calendar from '../../components/booking/Calendar';
import AdminAuth from '../../components/auth/AdminAuth';
import { format } from 'date-fns';
import { toast } from 'sonner';

const Dashboard = () => {
  const [session, setSession] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        checkAdminStatus(session.user.email);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        checkAdminStatus(session.user.email);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (email: string) => {
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !data) {
      await supabase.auth.signOut();
      setSession(null);
      toast.error('Unauthorized access');
    }
  };

  useEffect(() => {
    if (session) {
      fetchBookings();
    }
  }, [session]);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          services:service_id (name),
          booking_add_ons (
            add_ons:add_on_id (name)
          )
        `)
        .order('start_time', { ascending: true });

      if (error) throw error;

      const formattedBookings = data.map((booking) => ({
        id: booking.id,
        title: `${booking.services.name} - ${booking.client_name}`,
        start: booking.start_time,
        end: booking.end_time,
        extendedProps: {
          clientEmail: booking.client_email,
          clientPhone: booking.client_phone,
          status: booking.status,
          addOns: booking.booking_add_ons.map((ba) => ba.add_ons.name),
        },
      }));

      setBookings(formattedBookings);
    } catch (error) {
      toast.error('Failed to fetch bookings');
      console.error('Error fetching bookings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEventClick = (info: any) => {
    const { extendedProps } = info.event;
    toast(
      <div>
        <h3 className="font-medium">{info.event.title}</h3>
        <p>Email: {extendedProps.clientEmail}</p>
        <p>Phone: {extendedProps.clientPhone}</p>
        <p>Status: {extendedProps.status}</p>
        {extendedProps.addOns.length > 0 && (
          <p>Add-ons: {extendedProps.addOns.join(', ')}</p>
        )}
      </div>
    );
  };

  if (!session) {
    return <AdminAuth />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="font-serif text-3xl text-primary-800">Admin Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Calendar
              events={bookings}
              onDateSelect={() => {}}
              onEventClick={handleEventClick}
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-soft p-4">
              <h2 className="font-serif text-xl text-primary-800 mb-4">Today's Schedule</h2>
              <div className="space-y-3">
                {bookings
                  .filter(booking => {
                    const today = new Date();
                    const bookingDate = new Date(booking.start);
                    return (
                      bookingDate.getDate() === today.getDate() &&
                      bookingDate.getMonth() === today.getMonth() &&
                      bookingDate.getFullYear() === today.getFullYear()
                    );
                  })
                  .map(booking => (
                    <div key={booking.id} className="p-3 bg-primary-50 rounded-md">
                      <p className="font-medium">{format(new Date(booking.start), 'h:mm a')}</p>
                      <p className="text-sm text-gray-600">{booking.title}</p>
                    </div>
                  ))}
              </div>
            </div>

            <button
              onClick={() => supabase.auth.signOut()}
              className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;