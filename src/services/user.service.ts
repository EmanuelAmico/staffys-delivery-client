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

  static async startDelivery(user: User) {
    const {
      data: {
        data: { user: updatedUser },
      },
    } = await axios.post(
      `${this.apiUrl}/user/start-delivery`,
      {
        userId: user._id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return updatedUser;
  }

  static async startPackageDelivery(user: User, packageId: string) {
    const {
      data: {
        data: { user: updatedUser },
      },
    } = await axios.post(
      `${this.apiUrl}/user/start-package-delivery`,
      {
        userId: user._id,
        packageId,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return updatedUser;
  }

  static async finishPackageDelivery(user: User) {
    const {
      data: {
        data: { user: updatedUser },
      },
    } = await axios.put(
      `${this.apiUrl}/user/finish-package-delivery`,
      {
        userId: user._id,
        packageId: user.currentPackage?._id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return updatedUser;
  }

  static async editUser(user: User, fields: Partial<Omit<User, "token">>) {
    const {
      data: {
        data: { findUser: updatedUser },
      },
    } = await axios.put(
      `${this.apiUrl}/user/update`,
      { _id: user._id, ...fields },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return updatedUser;
  }
}
