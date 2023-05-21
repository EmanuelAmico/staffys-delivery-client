import React, { ComponentPropsWithoutRef, FC } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  loading,
  disabled,
  ...buttonProps
}) => {
  return (
    <button
      className={`flex justify-center items-center uppercase px-4 py-1.5 rounded text-whiteText shadow-md transition-colors ${
        disabled
          ? "bg-gray-400 cursor-default"
          : "bg-primaryBlue hover:bg-blue-600 active:bg-blue-700"
      } ${className || ""}`}
      {...buttonProps}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
