import { waitRandomSeconds } from "@/utils/wait";
import axios from "axios";
import { UserRegister } from "@/types/user.types";
// import https from "https";
export class UserService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // agent = new https.Agent({
  //   rejectUnauthorized: false,
  // });

  static async createUser(userData: UserRegister) {
    const { name, lastname, password, confirmpassword, email } = userData;

    const user = await axios.post(
      "https://staffys-api.fi7qj5ura3dd4.us-east-1.cs.amazonlightsail.com/auth/register",
      {
        name,
        lastname,
        password,
        confirmpassword,
        email,
        urlphoto: "holaa",
        is_admin: false,
      }
    );
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
