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
    <div className={" min-w-[12rem] h-[4.5rem] relative "}>
      <div>
        <label className=" text-yellowText">{label}</label>
      </div>

      <input
        {...inputProps}
        disabled={disabled}
        id={id}
        name={name}
        type={hidden ? "password" : "text"}
        className={`text-black w-full h-[3rem] border-b-2 ${
          error
            ? "border-b-red-600"
            : disabled
            ? "border-b-disableButton"
            : "border-b-blue-500"
        } absolute bottom-0 ring-0 outline-0`}
      />
      <div className="h-[3rem]"></div>
      {error ? <h1 className="text-red-600">{error}</h1> : null}
      {helper ? <h1 className="text-black">{helper}</h1> : null}
    </div>
  );
};

export default InputText;
