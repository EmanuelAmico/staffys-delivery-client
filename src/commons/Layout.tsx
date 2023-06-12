import React, { FC } from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
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
