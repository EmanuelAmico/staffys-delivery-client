import React, { ComponentPropsWithoutRef, FC } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  loading,
  ...buttonProps
}) => {
  return (
    <button
      className={`flex items-center uppercase px-4 py-1.5 rounded text-whiteText
       bg-primaryBlue shadow-md transition-colors hover:bg-blue-600 active:bg-blue-700 ${className || ""}`}
      {...buttonProps}
    >
      {loading && (
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
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
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
