import React, { FC } from "react";

interface CounterProps {
  title: string;
  count: number;
  className?: string;
}

const Counter: FC<CounterProps> = ({ title, count, className }) => {
  return (
    <div className={`${className || ""}`}>
      <p className="mb-1 text-center font-bold">{title}</p>
      <p
        className={`text-center font-bold ${
          count <= 0 ? "text-redText" : "text-greenText"
        }`}
      >
        {count}
      </p>
    </div>
  );
};

export default Counter;
