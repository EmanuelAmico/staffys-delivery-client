import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getCurrentCoordinates } from "@/utils/geoLocation";
import { PackageService } from "@/services/package.service";
import { Coordinates } from "@/types/package.types";
type Package = {
  _id: string;
  title: string;
  description: string;
  address: string;
  receptorName: string;
  deliveryMan: null | string;
  weight: null | number;
  deliveredAt: null | Date;
  status: null | "taken" | "in_progress" | "delivered";
  deadlines: Date;
  city: string;
  coordinates: { lat: number; lng: number } | null;
  distance: null | number;
};

const initialState = {
  packages: [] as Package[],
};

export const fetchPackagesByCurrentLocation = createAsyncThunk(
  "PACKAGES/FETCH_PACKAGES",
  async () => {
    const { coordenates }: { coordenates: Coordinates } =
      await getCurrentCoordinates();

    const { data } = await PackageService.getAvailablePackagesByCurrentLocation(
      coordenates
    );

    return data.data;
  }
);

const packageReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    fetchPackagesByCurrentLocation.fulfilled,
    (_state, action) => {
      return action.payload;
    }
  );
});

export default packageReducer;
