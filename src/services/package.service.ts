import { deliveryHistory } from "../utils/FakeDataDeliveryHistory";
import { deliveryPackages } from "../utils/FakeDataDeliveryPackages";
import { deliveryPending } from "../utils/FakeDataDeliveryPending";
import { waitRandomSeconds } from "../utils/wait";

export class PackageService {
  static async getPackageById(id: string) {
    await waitRandomSeconds();
    return { message: `the package id: ${id} has been added` };
  }

  static async getAvailablePackages() {
    await waitRandomSeconds();
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
