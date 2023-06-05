import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full h-[60px] items-center shadow-md relative">
      <div>
        <Image
          src={"/svg/motorcycle.svg"}
          alt="Moto"
          width={20}
          height={20}
          className="w-[80px] h-[60px]"
          priority
        />
      </div>
      <div className="w-full absolute text-center">
        <p className="text-greyText">
          FAST
          <span className="text-yellowText"> DELIVERY</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
