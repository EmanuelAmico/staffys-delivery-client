import { StrictUnion } from "./helper.types";
import { ChangeEvent, FocusEvent } from "react";

export interface UseInputParameters {
  validators: {
    type: "email" | "password" | "notEmpty";
    errorMessage: string;
  }[];
  extraValidator?: (value: string) => StrictUnion<
    | {
        isValid: false;
        errorMessage: string;
      }
    | { isValid: true }
  >;
}

export interface UseInputReturnValues {
  value: string;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface UseInput {
  (parameters: UseInputParameters): UseInputReturnValues;
}
