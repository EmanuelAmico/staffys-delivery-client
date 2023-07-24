import { ButtonProps } from "@/commons/Button";

export interface DeliveryFakeData {
  id: string | number;
  destination: string;
  addressee: string;
  distance?: number;
  weight?: number | null;
  buttonText: string;
  trash: boolean;
  status?: "taken" | "in_progress" | "delivered" | null;
  buttonProps?: Omit<ButtonProps, "children"> &
    Partial<Pick<ButtonProps, "children">>;
}

export const deliveryPending: DeliveryFakeData[] = [
  {
    id: 7,
    destination: "Calle 1",
    addressee: "Juan Perez",
    distance: 1.5,
    buttonText: "Tomar",
    trash: true,
    status: "in_progress",
  },
  {
    id: 8,
    destination: "Calle 2",
    addressee: "Juan Perez",
    distance: 1.5,
    buttonText: "Tomar",
    trash: true,
  },
  {
    id: 9,
    destination: "Calle 3",
    addressee: "Juan Perez",
    distance: 1.5,
    buttonText: "Tomar",
    trash: true,
  },
  {
    id: 10,
    destination: "Calle 4",
    addressee: "Juan Perez",
    distance: 1.5,
    buttonText: "Tomar",
    trash: true,
  },
  {
    id: 11,
    destination: "Calle 5",
    addressee: "Juan Perez",
    distance: 1.5,
    buttonText: "Tomar",
    trash: true,
  },
  {
    id: 12,
    destination: "Calle 6",
    addressee: "Juan Perez",
    distance: 1.5,
    buttonText: "Tomar",
    trash: true,
  },
];
