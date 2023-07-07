import { waitRandomSeconds } from "@/utils/wait";
import axios from "axios";
import { UserState } from "@/types/user.types";
export class UserService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;
  static async createUser(userData: UserState) {
    const { name, lastname, password, confirmpassword, email, urlphoto } =
      userData;

    const user = await axios.post(`${UserService.apiUrl}/auth/create`, {
      name,
      lastname,
      password,
      confirmpassword,
      email,
      urlphoto,
    });
    return user;
  }
  static async deleteUser(id: string) {
    await waitRandomSeconds();
    return { message: `User with id: ${id} has been deleted` };
  }
  static async editUser(
    name: string,
    lastname: string,
    email: string,
    password: string,
    photo: string
  ) {
    await waitRandomSeconds();
    return { name, lastname, email, password, photo };
  }
  static async LogUser(email: string, password: string) {
    await waitRandomSeconds();
    return { email, password };
  }
  static async startDelivery(id: string) {
    await waitRandomSeconds();
    return { message: `the delivery of id: ${id} has started` };
  }

  static async finishDelivery(id: string) {
    await waitRandomSeconds();

    return { message: `the delivery of id: ${id} has finished` };
  }

  static async cancelDelivery(id: string) {
    await waitRandomSeconds();
    return { message: `the delivery of id: ${id} has been cancelled` };
  }
}
