"use client";
import React, { useState, CSSProperties, FC } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import IconButton from "./IconButton";

export interface DropdownBoxProps {
  title: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  style?: CSSProperties;
}

const DropdownBox: FC<DropdownBoxProps> = ({
  title,
  description,
  children,
  className,
  style,
}) => {
  const [arrowButton, setArrowButton] = useState(false);

  return (
    <div
      className={`bg-whiteBackground rounded-lg shadow-md flex items-center 
        ${className || ""}`}
      style={style}
    >
      <div className="flex flex-col p-4 w-full gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">{title}</h1>
          {!arrowButton ? (
            <IconButton
              icon={<IoMdArrowDropdown size={25} />}
              onClick={() => setArrowButton(!arrowButton)}
            />
          ) : (
            <IconButton
              icon={<IoMdArrowDropup size={25} />}
              onClick={() => setArrowButton(!arrowButton)}
            />
          )}
        </div>
        <p className={"text-sm pb-4"}>{description}</p>
        {arrowButton ? <div>{children}</div> : null}
      </div>
    </div>
  );
};

export default DropdownBox;
