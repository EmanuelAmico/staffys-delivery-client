import React from "react";
import { CSSProperties } from "react";
/*
title: string;
description: string;
children?: JSX.Element | JSX.Element[];
dropdownIcon: SVG | PNG | JPG | url a la imagen;
titleColor?: string; (Sacado de los globales de tailwind)
descriptionColor?: string; (Sacado de los globales de tailwind)
className: string;
style: CSSProperties;
onClick: () => void;


*/

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
}) => {
  return (
    <div className="w-[90%] rounded-lg shadow-md min-h-[7rem] bg-white flex justify-start items-center">
      <div className=" w-[100%] ml-5 mr-5 mt-2 mb-2">
        <div className=" ">
          <h1 className="text-black text-2xl font-bold">{title}</h1>
        </div>

        <div className=" mt-1 text-1xl">
          <p className="text-black">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DropdownBox;
