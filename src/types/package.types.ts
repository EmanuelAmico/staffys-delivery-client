export interface Package {
  _id: string;
  title: string;
  description: string;
  address: string;
  receptorName: string | null;
  deliveryMan: string | null;
  weight: number | null;
  deliveredAt: Date | null;
  status: "taken" | "in_progress" | "delivered" | null;
  deadlines: Date;
  city?: string;
  coordinatesPackage?: {
    lat: number;
    lng: number;
  };
  coordinatesUser?: {
    lat: number;
    lng: number;
  };
  distance?: number | null;
}

export interface Coordinates {
  lat: number;
  lng: number;
}
