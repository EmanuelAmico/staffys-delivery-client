import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

interface QuestionConfirmationProps {
  question: string;
  value: string;
  name: string;
  onChange: (value: string, name: string) => void;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
}

const QuestionConfirmation: FC<QuestionConfirmationProps> = ({
  question,
  name,
  value,
  onChange,
  confirmButtonProps,
  cancelButtonProps,
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold text-center text-blackText">{question}</p>

      <div className="flex items-center mt-4">
        <Button
          name={name}
          onClick={() => onChange("yes", name)}
          className={`capitalize px-11 ${
            value === "yes" ? "bg-primaryBlue" : "bg-gray-500"
          }`}
          {...confirmButtonProps}
        >
          Sí
        </Button>
        <Button
          name={name}
          onClick={() => onChange("no", name)}
          className={`ml-6 capitalize px-11 ${
            value === "no" ? "bg-primaryBlue" : "bg-gray-500"
          }`}
          {...cancelButtonProps}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default QuestionConfirmation;
