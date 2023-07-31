import axios from "axios";
import { UserRegister, UserLogin } from "@/types/user.types";

export class AuthService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;

  static async register(userData: UserRegister) {
    const { name, lastname, password, confirmpassword, email } = userData;

    const user = await axios.post(`${this.apiUrl}/auth/register`, {
      name,
      lastname,
      password,
      confirmpassword,
      email,
      urlphoto: "http://url.com",
      is_admin: false,
    });

    return user.data;
  }

  static async login(userData: UserLogin) {
    const { password, email } = userData;

    const user = await axios.post(`${this.apiUrl}/auth/login`, {
      password,
      email,
    });

    return user.data;
  }

  static async me(token: string) {
    const {
      data: { data },
    } = await axios.get(`${this.apiUrl}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  static async initResetPassword(email: string) {
    return await axios.post(`${this.apiUrl}/auth/init-reset-password`, {
      email,
    });
  }

  static async resetPassword(
    email: string,
    code: number,
    password: string,
    confirmPassword: string
  ) {
    return await axios.put(`${this.apiUrl}/auth/reset-password`, {
      email,
      code,
      password,
      confirmPassword,
    });
  }
  static async loadProfilePicture(formData: FormData, _id: string) {
    return await axios.post(
      `${this.apiUrl}/user/load-profile-picture/${_id}`,
      formData
    );
  }
}
