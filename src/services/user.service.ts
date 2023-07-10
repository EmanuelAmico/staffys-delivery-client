import { User } from "@/types/user.types";
import axios from "axios";

export class UserService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;

  static async takePackage(user: User, packageId: string) {
    const {
      data: {
        data: { user: updatedUser },
      },
    } = await axios.post(
      `${this.apiUrl}/user/take-package`,
      { userId: user._id, packageId },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return updatedUser;
  }

  // static async startDelivery(
  //   userData: StartDeliveryRequestBody,
  //   token: string
  // ) {
  //   const {
  //     data: { data },
  //   } = await axios.post(`${this.apiUrl}/user/start-delivery`, userData, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   return data;
  // }

  // static async cancelDelivery(
  //   userData: CancelDeliveryRequestBody,
  //   token: string
  // ) {
  //   const {
  //     data: { data },
  //   } = await axios.put(`${this.apiUrl}/user/cancel-delivery`, userData, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   return data;
  // }

  // static async startPackageDelivery(
  //   packageData: StartPackageDeliveryRequestBody,
  //   token: string
  // ) {
  //   const {
  //     data: { data },
  //   } = await axios.post(
  //     `${this.apiUrl}/user/start-package-delivery`,
  //     packageData,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );

  //   return data;
  // }

  // static async finishPackageDelivery(token: string) {
  //   const {
  //     data: { data },
  //   } = await axios.put(`${this.apiUrl}/user/finish-package-delivery`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   return data;
  // }
}
