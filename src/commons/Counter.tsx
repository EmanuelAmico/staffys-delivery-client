import React, { FC } from "react";

interface CounterProps {
  title: string;
  count: number;
}

const Counter: FC<CounterProps> = ({ title, count }) => {
  return (
    <div>
      <p className="mb-1 text-center">{title}</p>
      <p
        className={`text-center ${
          count <= 0 ? "text-red-600" : "text-greenText"
        }`}
      >
        {count}
      </p>
    </div>
  );
};

export default Counter;
