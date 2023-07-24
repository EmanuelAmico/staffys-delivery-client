import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { PackageService } from "@/services/package.service";
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
  deadline: Date | null;
  city: string;
  coordinatesPackage: { lat: number; lng: number };
  coordinatesUser: { lat: number; lng: number };
  distance: null | number;
};

const initialState: Package = {
  _id: "",
  title: "",
  description: "",
  address: "",
  receptorName: "",
  deliveryMan: "",
  weight: null,
  deliveredAt: null,
  status: null,
  deadline: null,
  city: "",
  coordinatesPackage: { lat: 0, lng: 0 },
  coordinatesUser: { lat: 0, lng: 0 },
  distance: null,
};

export const fetchPackageById = createAsyncThunk(
  "PACKAGE/FETCH_PACKAGE_BY_ID",
  async (_id: string | string[]) => {
    const response = await PackageService.getPackageById(_id);
    return response.data.packages;
  }
);

const selectedPackageReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPackageById.fulfilled, (_state, action) => {
    return action.payload;
  });
});

export default selectedPackageReducer;
