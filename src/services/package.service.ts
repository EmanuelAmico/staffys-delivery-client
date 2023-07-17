import { User } from "@/types/user.types";
import axios from "axios";

export class PackageService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;
  static async getPackageById(_id: string | string[]) {
    const foundPackage = await axios.get(
      `${this.apiUrl}/package/find-package/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      }
    );
    return foundPackage.data;
  }
  static async getAvailablePackagesByCurrentLocation(
    coordenates: {
      lat: number;
      lng: number;
    },
    user: User
  ) {
    const deliveryPackages = await axios.get(
      `${this.apiUrl}/package/by-current-location`,
      {
        params: {
          userLatitude: coordenates.lat,
          userLongitude: coordenates.lng,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return deliveryPackages;
  }
}
