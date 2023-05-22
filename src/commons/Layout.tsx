import React, { ComponentPropsWithoutRef, FC } from "react";

interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children, className, ...layoutProps }) => {
  return (
    <div
      className={`p-4 h-[calc(100vh-60px)] flex flex-col
      ${className || ""}`}
      {...layoutProps}
    >
      {children}
    </div>
  );
};

export default Layout;
