import React, { ComponentPropsWithoutRef, FC } from "react";

export interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: JSX.Element | JSX.Element[];
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  className,
  ...iconButtonProps
}) => {
  return (
    <button
      className={`flex items-center justify-center transition-colors ${
        className || ""
      }`}
      {...iconButtonProps}
    >
      {icon}
    </button>
  );
};

export default IconButton;
