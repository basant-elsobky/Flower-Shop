import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gyjztdjnzuctrfangeuq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5anp0ZGpuenVjdHJmYW5nZXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzOTc2MTAsImV4cCI6MjAyNjk3MzYxMH0.FTjC5k6nZndG6Lh4qro4KFerRUq6peOKtf2CuVInSC0'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase