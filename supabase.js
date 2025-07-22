import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://yqwxahmtmkqjmppsvyxg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxd3hhaG10bWtxam1wcHN2eXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwOTY3ODIsImV4cCI6MjA2ODY3Mjc4Mn0.4C5uF9HLTk0qvJncFAuQR_9eu0K_vCssNn6kbqHLEVI';

export const supabase = createClient(supabaseUrl, supabaseKey);