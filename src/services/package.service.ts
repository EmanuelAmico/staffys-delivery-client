import { User } from "@/types/user.types";
import axios from "axios";

export class PackageService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
