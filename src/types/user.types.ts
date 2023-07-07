export interface UserRegister {
  name: string;
  lastname: string;
  password: string;
  confirmpassword: string;
  email: string;
  urlphoto: string;
  is_admin?: boolean;
  loading?: boolean; // Set initial value to false
  error?: string | null;
}

export interface UserState {
  name: string;
  lastname: string;
  email: string;
  urlphoto: string;
  is_admin?: boolean;
}
