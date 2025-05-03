/*
  # Booking System Schema

  1. New Tables
    - `services`
      - Service catalog with types, durations, prices
    - `bookings`
      - Appointment bookings with client details and service info
    - `blocked_times`
      - Owner-blocked time slots for vacations/unavailable periods
    - `add_ons`
      - Optional service add-ons like aromatherapy
    - `booking_add_ons`
      - Junction table for bookings and their add-ons

  2. Security
    - Enable RLS on all tables
    - Public can read services and add-ons
    - Only authenticated admin can manage all tables
    - Clients can only see their own bookings
*/

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  duration integer NOT NULL, -- in minutes
  price decimal(10,2) NOT NULL,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Add-ons table
CREATE TABLE IF NOT EXISTS add_ons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_email text NOT NULL,
  client_name text NOT NULL,
  client_phone text,
  service_id uuid REFERENCES services(id),
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'confirmed',
  stripe_payment_id text,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Booking add-ons junction table
CREATE TABLE IF NOT EXISTS booking_add_ons (
  booking_id uuid REFERENCES bookings(id) ON DELETE CASCADE,
  add_on_id uuid REFERENCES add_ons(id) ON DELETE CASCADE,
  PRIMARY KEY (booking_id, add_on_id)
);

-- Blocked times table
CREATE TABLE IF NOT EXISTS blocked_times (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE add_ons ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE booking_add_ons ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_times ENABLE ROW LEVEL SECURITY;

-- Policies for services
CREATE POLICY "Services are viewable by everyone" 
ON services FOR SELECT 
TO public 
USING (true);

CREATE POLICY "Only admin can manage services"
ON services FOR ALL
TO authenticated
USING (auth.role() = 'admin');

-- Policies for add-ons
CREATE POLICY "Add-ons are viewable by everyone" 
ON add_ons FOR SELECT 
TO public 
USING (true);

CREATE POLICY "Only admin can manage add-ons"
ON add_ons FOR ALL
TO authenticated
USING (auth.role() = 'admin');

-- Policies for bookings
CREATE POLICY "Clients can view their own bookings"
ON bookings FOR SELECT
TO public
USING (client_email = auth.jwt() ->> 'email');

CREATE POLICY "Clients can create bookings"
ON bookings FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Only admin can manage all bookings"
ON bookings FOR ALL
TO authenticated
USING (auth.role() = 'admin');

-- Policies for booking add-ons
CREATE POLICY "Clients can view their booking add-ons"
ON booking_add_ons FOR SELECT
TO public
USING (
  EXISTS (
    SELECT 1 FROM bookings
    WHERE bookings.id = booking_add_ons.booking_id
    AND bookings.client_email = auth.jwt() ->> 'email'
  )
);

CREATE POLICY "Only admin can manage booking add-ons"
ON booking_add_ons FOR ALL
TO authenticated
USING (auth.role() = 'admin');

-- Policies for blocked times
CREATE POLICY "Blocked times are viewable by everyone"
ON blocked_times FOR SELECT
TO public
USING (true);

CREATE POLICY "Only admin can manage blocked times"
ON blocked_times FOR ALL
TO authenticated
USING (auth.role() = 'admin');