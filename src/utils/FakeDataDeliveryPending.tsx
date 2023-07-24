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
