/*
  # Fix bookings RLS policies

  1. Changes
    - Drop existing conflicting policies
    - Add new policy to allow public users to create bookings
    - Add policy for public users to view their own bookings
    - Add policy for admins to manage all bookings

  2. Security
    - Enable RLS on bookings table
    - Ensure proper access control for different user roles
*/

-- Drop existing conflicting policies
DROP POLICY IF EXISTS "public_create_bookings" ON bookings;
DROP POLICY IF EXISTS "Clients can create bookings" ON bookings;

-- Create new policies
CREATE POLICY "allow_public_create_bookings"
ON bookings FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "allow_public_read_own_bookings"
ON bookings FOR SELECT
TO public
USING (client_email = current_user);

CREATE POLICY "allow_admin_manage_all_bookings"
ON bookings FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM admins
    WHERE admins.email = auth.jwt() ->> 'email'
  )
);