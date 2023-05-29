import React, { FC } from "react";
export interface CardProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="flex justify-center bg-white w-[90%] mt-8 rounded-lg shadow-lg h-[37rem] ">
      <div className=" h-full w-[90%] m-auto  ">
        <h1 className="text-left pt-4 font-bold text-2xl">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Card;
