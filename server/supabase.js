//file ini untuk integrate BE ke DB Supabase

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uwbnntwopmvavbgiewjh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3Ym5udHdvcG12YXZiZ2lld2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NzAxMDgsImV4cCI6MjAwOTE0NjEwOH0.H1ulAhzySyq6GgWywlRO7xt_qFaeFWQixstkVcTGYXk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;