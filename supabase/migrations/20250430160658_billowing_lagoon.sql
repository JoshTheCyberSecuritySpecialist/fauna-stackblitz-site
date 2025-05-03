/*
  # Fix Bookings Table RLS Policies

  1. Changes
    - Drop existing RLS policies for bookings table
    - Add new policies to:
      - Allow public users to create bookings
      - Let users view their own bookings
      - Give admins full access
  
  2. Security
    - Enable RLS
    - Add appropriate policies for CRUD operations
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Clients can view their own bookings" ON bookings;
DROP POLICY IF EXISTS "Only admin can manage all bookings" ON bookings;
DROP POLICY IF EXISTS "admin_read_bookings" ON bookings;
DROP POLICY IF EXISTS "admin_update_bookings" ON bookings;
DROP POLICY IF EXISTS "allow_admin_manage_all_bookings" ON bookings;
DROP POLICY IF EXISTS "allow_public_create_bookings" ON bookings;
DROP POLICY IF EXISTS "allow_public_read_own_bookings" ON bookings;

-- Create new policies
CREATE POLICY "Allow public to create bookings"
ON bookings
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow users to view own bookings"
ON bookings
FOR SELECT
TO public
USING (client_email = current_user);

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