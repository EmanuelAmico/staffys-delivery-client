import React, { ComponentPropsWithoutRef, FC, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  error?: string;
  helper?: string;
  tooltip?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  name,
  error,
  helper,
  disabled,
  className,
  tooltip,
  ...inputProps
}) => {
  const [showIconTooltip, setShowIconTooltip] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleIconMouseEnter = () => {
    setShowIconTooltip(true);
  };

  const handleIconMouseLeave = () => {
    setShowIconTooltip(false);
  };
  const isPasswordInput =
    name === "password" || name === "passwordConfirmation";

  return (
    <div className={`w-full h-[5.3rem] ${className || ""} relative`}>
      <label
        htmlFor={name}
        className="mb-1 text-xs text-yellowText font-medium border-0"
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...inputProps}
          id={name}
          name={name}
          type={!showPassword && isPasswordInput ? "password" : "text"}
          className={`text-blackText text-base w-full p-1 border-b-2 border-solid bg-inherit pl-0 outline-0 ${
            disabled ? "border-b-disableButton" : "border-b-primaryBlue"
          }`}
        />
        {tooltip && showIconTooltip && (
          <div className="absolute p-1 -top-0 right-12 mr-1 bg-whiteBackground rounded-2xl border border-activeBlue shadow-md">
            <p className="text-greyText text-[10px]">{tooltip}</p>
          </div>
        )}
        {isPasswordInput && !showPassword ? (
          <IoMdEye
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-0 mt-2 mr-2"
          />
        ) : isPasswordInput && showPassword ? (
          <IoMdEyeOff
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-0 mt-2 mr-2"
          />
        ) : null}
        <div
          className="absolute right-0 top-0 mt-2 mr-8 cursor-pointer"
          onMouseEnter={handleIconMouseEnter}
          onMouseLeave={handleIconMouseLeave}
        >
          {tooltip ? (
            <AiOutlineQuestionCircle
              className={`text-gray-400 ${
                showIconTooltip
                  ? "transform transition duration-500 hover:scale-150"
                  : ""
              }`}
            />
          ) : null}
        </div>
      </div>
      {error ? (
        <p className="text-redText text-xs">{error}</p>
      ) : helper ? (
        <p className="text-blackText">{helper}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
