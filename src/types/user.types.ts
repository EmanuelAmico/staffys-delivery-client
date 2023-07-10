export interface UserRegister {
  name: string;
  lastname: string;
  password: string;
  confirmpassword: string;
  email: string;
  urlphoto: string;
  is_admin?: boolean;
}
export interface User {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  is_admin: boolean;
  is_active: boolean;
  urlphoto: string;
  is_deleted: boolean;
  resetToken?: string;
  pendingPackages: string[];
  currentPackage: string | null;
  historyPackages: string[];
  token: string;
}
export interface UserLogin {
  email: string;
  password: string;
}
