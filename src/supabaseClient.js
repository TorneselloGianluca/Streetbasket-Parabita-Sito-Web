import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rqohlfkzubhcnnhrnnme.supabase.co'
const supabaseAnonKey = 'sb_publishable_TkfSyCc_DAgNNNL9oNrPlg_uCvySM8i'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)