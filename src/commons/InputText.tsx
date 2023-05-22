import React, { ComponentPropsWithoutRef, FC, CSSProperties } from "react";

interface IinputText extends ComponentPropsWithoutRef<"input"> {
  name: string;
  id?: string;
  label?: string;
  style?: CSSProperties;
  placeHolder?: string;
  error?: string;
  hidden?: boolean;
  helper?: string;
}

const InputText: FC<IinputText> = ({
  label,
  name,
  id,
  hidden,
  error,
  helper,
  disabled,
  type,
  ...inputProps
}) => {
  return (
    <div className={" w-full h-[4.5rem] relative "}>
      <div>
        <label
          htmlFor={name}
          className=" mb-1   text-xs text-yellowText font-medium border-0"
        >
          {label}
        </label>
      </div>

      <input
        {...inputProps}
        disabled={disabled}
        id={id}
        name={name}
        type={hidden ? "password" : type ? type : "text"}
        className={`text-black  text-base w-full p-2.5 border-solid bg-inherit ${
          error
            ? "border-b-red-600"
            : disabled
            ? "border-b-disableButton"
            : "border-b-blue-500"
        }
         p-2.5 border-b-2 pb-1 pl-0 ring-0 outline-0  `}
      />
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : helper ? (
        <p className="text-black">{helper}</p>
      ) : null}
    </div>
  );
};

export default InputText;
