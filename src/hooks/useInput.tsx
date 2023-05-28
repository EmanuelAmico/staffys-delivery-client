import { UseInput } from "@/types/useInput.types";
import { ChangeEvent, useCallback, useState } from "react";

const useInput: UseInput = function useInput({ validators, extraValidator }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    []
  );

  const onBlur = useCallback(() => {
    for (const { type, errorMessage } of validators) {
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
  }, [validators, extraValidator, value]);

  const onFocus = useCallback(() => setError(""), []);

  return { value, error, onChange, onBlur, onFocus };
};

export default useInput;
