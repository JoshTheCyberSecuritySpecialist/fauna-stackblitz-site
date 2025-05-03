export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: string
          name: string
          description: string
          duration: number
          price: number
          is_available: boolean
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description: string
          duration: number
          price: number
          is_available?: boolean
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string
          duration?: number
          price?: number
          is_available?: boolean
          created_at?: string | null
        }
      }
      bookings: {
        Row: {
          id: string
          service_id: string
          booking_date: string
          booking_time: string
          client_name: string
          client_email: string
          client_phone: string | null
          notes: string | null
          total: number
          status: string
          created_at: string | null
        }
        Insert: {
          id?: string
          service_id: string
          booking_date: string
          booking_time: string
          client_name: string
          client_email: string
          client_phone?: string | null
          notes?: string | null
          total: number
          status?: string
          created_at?: string | null
        }
        Update: {
          id?: string
          service_id?: string
          booking_date?: string
          booking_time?: string
          client_name?: string
          client_email?: string
          client_phone?: string | null
          notes?: string | null
          total?: number
          status?: string
          created_at?: string | null
        }
      }
    }
  }
}