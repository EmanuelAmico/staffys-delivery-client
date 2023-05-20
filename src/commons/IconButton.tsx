import React, { ComponentPropsWithoutRef, FC } from "react";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: JSX.Element | JSX.Element[];
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  disabled,
  className,
  ...iconButtonProps
}) => {
  return (
    <button
      className={`flex items-center justify-center h-11 w-11 rounded-full text-whiteText shadow-md transition-colors ${
        disabled
          ? "bg-disableButton cursor-default"
          : "bg-primaryBlue hover:bg-hoverBlue active:bg-activeBlue"
      } ${className || ""}`}
      {...iconButtonProps}
    >
      <div>{icon}</div>
    </button>
  );
};

export default IconButton;
