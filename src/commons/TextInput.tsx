import React, { ComponentPropsWithoutRef, FC, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

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
  const [showIconTooltip, setShowIconTooltip] = useState(false);

  const handleIconMouseEnter = () => {
    setShowIconTooltip(true);
  };

  const handleIconMouseLeave = () => {
    setShowIconTooltip(false);
  };

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
          type={hidden ? "password" : "text"}
          className={`text-blackText text-base w-full p-1 border-b-2 border-solid bg-inherit pl-0 outline-0 ${
            disabled ? "border-b-disableButton" : "border-b-primaryBlue"
          }`}
        />
        {helper && showIconTooltip && (
          <div className="absolute p-1 -top-0 right-10 bg-whiteBackground rounded-2xl border border-activeBlue shadow-md">
            <p className="text-greyText text-[10px]">{helper}</p>
          </div>
        )}
        <div
          className="absolute right-0 top-0 mt-2 mr-2 cursor-pointer"
          onMouseEnter={handleIconMouseEnter}
          onMouseLeave={handleIconMouseLeave}
        >
          <AiOutlineQuestionCircle
            className={`text-gray-400 ${
              showIconTooltip
                ? "transform transition duration-500 hover:scale-150 "
                : ""
            } `}
          />
        </div>
      </div>
      {error && <p className="text-redText text-xs mt-2">{error}</p>}
    </div>
  );
};

export default TextInput;
