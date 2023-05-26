"use client";
import React, { useState, CSSProperties } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
interface IDropdownBox {
  title: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
  titleColor?: string;
  descriptionColor?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const DropdownBox: React.FC<IDropdownBox> = ({
  title,
  description,
  children,
  titleColor,
  descriptionColor,
  className,
  style,
  onClick,
}) => {
  const [arrowButton, setArrowButton] = useState(false);
  const handleArrowButton = () => {
    setArrowButton(!arrowButton);
  };
  return (
    <div
      className={`w-[90%] rounded-lg shadow-md ${
        !arrowButton ? "h-[7rem] " : "min-h-[7rem]"
      } bg-white flex justify-start items-center ${className || ""}`}
      style={style}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick && onClick()}
    >
      <div className=" w-[100%] ml-5 mr-5 mt-2 mb-2">
        <div className="relative">
          <h1
            className={`${
              titleColor ? titleColor : "text-black"
            } text-2xl font-bold`}
          >
            {title}
          </h1>
          {!arrowButton ? (
            <IoMdArrowDropdown
              onClick={handleArrowButton}
              className="text-black absolute right-1 top-0 text-4xl"
            />
          ) : (
            <IoMdArrowDropup
              onClick={handleArrowButton}
              className="text-black absolute right-1 top-0 text-4xl"
            />
          )}
        </div>

        <div className=" mt-1 text-1xl">
          <p
            className={`${descriptionColor ? descriptionColor : "text-black"}`}
          >
            {description}
          </p>
        </div>
        {arrowButton ? <div>{children}</div> : null}
      </div>
    </div>
  );
};

export default DropdownBox;
