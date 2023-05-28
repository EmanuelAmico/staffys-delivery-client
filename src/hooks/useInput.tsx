import { StrictUnion } from "@/types/helper.types";
import { ChangeEvent, FocusEvent, useCallback, useState } from "react";

interface UseInputParameters {
  validation: {
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

interface UseInputReturnValues {
  value: string;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
}

interface UseInput {
  (parameters: UseInputParameters): UseInputReturnValues;
}

const useInput: UseInput = function useInput({ validation, extraValidator }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  );

  const onBlur = useCallback(() => {
    for (const { type, errorMessage } of validation) {
      switch (type) {
        case "email":
          if (!/\S+@\S+\.\S+/.test(value)) setError(errorMessage);
          break;
        case "password":
          if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value))
            setError(errorMessage);
          break;
        case "notEmpty":
          if (value.length === 0) setError(errorMessage);
          break;
      }
    }

    if (extraValidator) {
      const { isValid, errorMessage } = extraValidator(value);
      if (!isValid) setError(errorMessage);
    }
  }, [validation, extraValidator, value]);

  const onFocus = useCallback(() => setError(""), []);

  return { value, error, onChange, onBlur, onFocus };
};

export default useInput;
