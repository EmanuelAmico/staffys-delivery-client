import { deliveryHistory } from "../utils/FakeDataDeliveryHistory";
import { deliveryPackages } from "../utils/FakeDataDeliveryPackages";
import { deliveryPending } from "../utils/FakeDataDeliveryPending";
import { waitRandomSeconds } from "../utils/wait";
import axios from "axios";

export class PackageService {
  static apiUrl = process.env.NEXT_PUBLIC_API_URL;
  static async getPackageById(id: string) {
    await waitRandomSeconds();
    return { message: `the package id: ${id} has been added` };
  }

  static async getAvailablePackages() {
    await waitRandomSeconds();
    return deliveryPackages;
  }
  static async getAvailablePackagesByCurrentLocation(coordenates: {
    lat: number;
    lng: number;
  }) {
    const usercoordenates = {
      userLatitude: coordenates.lat,
      userLongitude: coordenates.lng,
    };

    const deliveryPackages = await axios.post(
      `${this.apiUrl}/package/by-current-location`,
      usercoordenates,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0YWI1ZDY2ZWNhYjQ5ODY2OTdhODY1YyIsImlzX2FkbWluIjpmYWxzZX0sImlhdCI6MTY4ODk1MjE2NiwiZXhwIjoxNjkwNjgwMTY2fQ.h-XXXVWybMC5f9qQyIjNAPkT100CDAa5KfXD5WO3M9c",
        },
      }
    );

    return deliveryPackages;
  }

  static async getHistoryPackagesById() {
    await waitRandomSeconds();
    return deliveryHistory;
  }
  static async getPendingPackagesById() {
    await waitRandomSeconds();
    return deliveryPending;
  }

  static async takePackage(id: string) {
    await waitRandomSeconds();
    return { message: `the package id: ${id} has been taken` };
  }
  static async deletePackage(id: string) {
    await waitRandomSeconds();
    return { message: `the package id:${id} has been deleted` };
  }
}
