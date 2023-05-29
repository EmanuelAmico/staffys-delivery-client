import React, { FC } from "react";
export interface CardProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

const Card: FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`p-4 shadow-md rounded ${className || ""}`}>
      <h1 className="font-bold text-2xl">{title}</h1>
      {children}
    </div>
  );
};

export default Card;
