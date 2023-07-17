export interface Package {
  _id: string;
  title: string;
  description: string;
  address: string;
  receptorName: string;
  deliveryMan: string | null;
  weight: number | null;
  deliveredAt: Date | null;
  status: "taken" | "in_progress" | "delivered" | null;
  deadlines: Date;
  city?: string;
  coordinates?: {
    lat: number;
    lng: number;
  } | null;
  distance?: number | null;
}

export interface Coordinates {
  lat: number;
  lng: number;
}
