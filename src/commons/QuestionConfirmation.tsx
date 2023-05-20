import React, { FC } from "react";
import Button from "./Button";

interface QuestionConfirmationProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
}

const QuestionConfirmation: FC<QuestionConfirmationProps> = ({
  question,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold text-center text-blackText">{question}</p>

      <div className="flex items-center mt-4">
        <Button
          onClick={() => onChange("yes")}
          className={`capitalize px-11 ${
            value === "yes" ? "bg-primaryBlue" : "bg-gray-500"
          }`}
        >
          Sí
        </Button>
        <Button
          onClick={() => onChange("no")}
          className={`ml-6 capitalize px-11 ${
            value === "no" ? "bg-primaryBlue" : "bg-gray-500"
          }`}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default QuestionConfirmation;
