import React, { ComponentPropsWithoutRef, FC } from "react";
import NextLink from "next/link";

interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  children: string;
  href: string;
}

const Link: FC<LinkProps> = ({ children, href, className, ...rest }) => {
  return (
    <NextLink
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`text-primaryBlue transform transition-all duration-500 ease-in-out hover:text-hoverBlue hover:scale-105 hover:underline ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </NextLink>
  );
};

export default Link;
