import React, { ComponentPropsWithoutRef, FC } from "react";

interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  error?: string;
  helper?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  name,
  hidden,
  error,
  helper,
  disabled,
  className,
  ...inputProps
}) => {
  return (
    <div className={`w-full h-[4.5rem] ${className || ""} `}>
      <label
        htmlFor={name}
        className="mb-1 text-xs text-yellowText font-medium border-0"
      >
        {label}
      </label>
      <input
        {...inputProps}
        id={name}
        name={name}
        type={hidden ? "password" : "text"}
        className={`text-blackText  text-base w-full p-1 border-b-2 border-solid bg-inherit pl-0 outline-0 ${
          disabled ? "border-b-disableButton" : "border-b-primaryBlue"
        }`}
      />
      {error ? (
        <p className="text-redText">{error}</p>
      ) : helper ? (
        <p className="text-blackText">{helper}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
