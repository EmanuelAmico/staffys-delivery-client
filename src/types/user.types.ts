export interface UserState {
  name: string;
  lastname: string;
  password: string;
  confirmpassword: string;
  email: string;
  urlphoto: string;
  loading?: boolean; // Set initial value to false
  error?: string | null;
}
