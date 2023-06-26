import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

interface QuestionConfirmationProps {
  question: string;
  value: string;
  name: string;
  onChange: (value: string, name: string) => void;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  className?: string;
}

const QuestionConfirmation: FC<QuestionConfirmationProps> = ({
  question,
  name,
  value,
  onChange,
  confirmButtonProps,
  cancelButtonProps,
  className,
}) => {
  return (
    <div className={`flex flex-col items-center ${className || ""}`}>
      <p className="text-lg font-bold text-center text-blackText">{question}</p>

      <div className="flex items-center mt-4">
        <Button
          name={name}
          onClick={() => onChange("yes", name)}
          className="capitalize !px-11"
          customBg={value === "yes" ? "bg-primaryBlue" : "bg-disableButton"}
          {...confirmButtonProps}
        >
          Sí
        </Button>
        <Button
          name={name}
          onClick={() => onChange("no", name)}
          className="ml-6 capitalize !px-11"
          customBg={value === "no" ? "bg-primaryBlue" : "bg-disableButton"}
          {...cancelButtonProps}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default QuestionConfirmation;
