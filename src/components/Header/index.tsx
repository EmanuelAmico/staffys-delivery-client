import React, { FC, ReactNode } from "react";
import Image from "next/image";

interface NavbarProps {
  children?: ReactNode;
}

const Header: FC<NavbarProps> = () => {
  return (
    <div className="flex w-full items-center mt-1 bg-white shadow-md">
      <div>
        <Image
          src={"/images/moto.svg"}
          alt="Example"
          width={20}
          height={20}
          className="w-[80px] h-[60px]"
        />
      </div>
      <div className="w-full absolute text-center">
        <p className="text-greyText">
          <span className="text-greyText">FAST</span>
          <span className="ml-1 text-yellowText">DELIVERY</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
