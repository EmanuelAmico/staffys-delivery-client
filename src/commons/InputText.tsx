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
    <div className={`w-full h-[4.5rem] relative ${className || ""} `}>
      <label
        htmlFor={name}
        className=" mb-1 text-xs text-yellowText font-medium border-0"
      >
        {label}
      </label>
      <input
        {...inputProps}
        id={name}
        name={name}
        type={hidden ? "password" : "text"}
        className={`text-blackText  text-base w-full p-2.5 border-solid bg-inherit ${
          disabled ? "border-b-disableButton" : "border-b-primaryBlue"
        }
         p-2.5 border-b-2 pb-1 pl-0 ring-0 outline-0  `}
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
