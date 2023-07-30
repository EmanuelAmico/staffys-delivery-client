import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getCurrentCoordinates } from "@/utils/geoLocation";
import { PackageService } from "@/services/package.service";
import { Coordinates } from "@/types/package.types";
import { RootState } from "../store";
import { resetStore } from "./user";
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
  async (_, thunkAPI) => {
    const { coordinates }: { coordinates: Coordinates } =
      await getCurrentCoordinates();
    const { user } = thunkAPI.getState() as RootState;

    const { data } = await PackageService.getAvailablePackagesByCurrentLocation(
      coordinates,
      user
    );

    return data.data;
  }
);

const packageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetStore, () => {
      return initialState;
    })
    .addCase(fetchPackagesByCurrentLocation.fulfilled, (_state, action) => {
      return action.payload;
    });
});

export default packageReducer;
