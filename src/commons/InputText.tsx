import React, { ComponentPropsWithoutRef, FC } from "react";
import { CSSProperties } from "react";
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
  ...inputProps
}) => {
  return (
    <div className={" w-11/12 h-[4.5rem] relative "}>
      <div>
        <label
          htmlFor={name}
          className=" mb-1  ml-2 text-xs text-yellowText font-medium border-0"
        >
          {label}
        </label>
      </div>

      <input
        {...inputProps}
        disabled={disabled}
        id={id}
        name={name}
        type={hidden ? "password" : "text"}
        className={`text-black ml-2 text-base w-11/12 p-2.5 border-solid bg-inherit

          ${
            error
              ? "border-b-red-600"
              : disabled
              ? "border-b-disableButton"
              : "border-b-blue-500"
          }

         p-2.5 border-b-2 pb-1 pl-0 ring-0 outline-0  mb-6`}
      />
      <div className="h-[3rem]"></div>
      {error ? <h1 className="text-red-600">{error}</h1> : null}
      {helper ? <h1 className="text-black">{helper}</h1> : null}
    </div>
  );
};

export default InputText;
