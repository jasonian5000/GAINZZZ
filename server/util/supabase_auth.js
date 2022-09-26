import * as dotenv from 'dotenv'
dotenv.config()
import { createClient } from '@supabase/supabase-js'

export const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY
export const supabaseKey = process.env.SUPABASE_KEY
export const supabaseUrl = process.env.SUPABASE_URL
export const supabase = createClient(supabaseUrl, supabaseKey)
