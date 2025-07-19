export interface User {
  id?: number;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  profile?: string | null;
  is_staff?: boolean;
  account_status?: 'inactive' | 'active'; // update with all possible statuses
  date_joined?: string; // ISO string format
  phone_number?: string;
}