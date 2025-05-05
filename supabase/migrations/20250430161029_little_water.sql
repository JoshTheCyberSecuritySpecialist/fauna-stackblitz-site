/*
  # Fix Bookings RLS Policies

  1. Changes
    - Drop existing RLS policies for bookings table
    - Add new policies to:
      - Allow public users to create bookings
      - Allow users to view their own bookings
      - Allow admins full access to all bookings
  
  2. Security
    - Enable RLS on bookings table
    - Add policies for:
      - Public booking creation
      - User viewing own bookings
      - Admin access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow admins full access" ON bookings;
DROP POLICY IF EXISTS "Allow public to create bookings" ON bookings;
DROP POLICY IF EXISTS "Allow users to view own bookings" ON bookings;

-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow public users to create bookings
CREATE POLICY "Allow public to create bookings"
ON bookings
FOR INSERT
TO public
WITH CHECK (true);

-- Allow users to view their own bookings
CREATE POLICY "Allow users to view own bookings"
ON bookings
FOR SELECT
TO public
USING (client_email = current_user);

-- Allow admins full access
CREATE POLICY "Allow admins full access"
ON bookings
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM admins
    WHERE admins.email = auth.jwt() ->> 'email'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM admins
    WHERE admins.email = auth.jwt() ->> 'email'
  )
);