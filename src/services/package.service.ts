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
    const usercoordenates = {
      userLatitude: coordenates.lat,
      userLongitude: coordenates.lng,
    };

    const deliveryPackages = await axios.post(
      `${this.apiUrl}/package/by-current-location`,
      usercoordenates,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return deliveryPackages;
  }
}
