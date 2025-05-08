import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xruohsdtjgbsepzhjmyv.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhydW9oc2R0amdic2VwemhqbXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MTY1OTQsImV4cCI6MjA1MDA5MjU5NH0.PE1gPtXnzLN8kkrU1ockfs2v9wnuw_ic1SYUCZoqcTY';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
export default supabase;
