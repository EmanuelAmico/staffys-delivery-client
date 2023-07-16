import React from "react";
import Image from "next/image";
import { SlLogout } from "react-icons/sl";
import IconButton from "@/commons/IconButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logout } from "@/redux/reducers/user";

const Header = () => {
  const { push } = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    push("/login");
  };

  return (
    <header className="flex justify-between items-center w-full h-[60px] shadow-md relative">
      <IconButton
        icon={
          <Image
            src={"/svg/motorcycle.svg"}
            alt="Moto"
            width={20}
            height={20}
            className="w-[80px] h-[60px]"
            priority
          />
        }
        onClick={() => push("/home")}
      />
      <p className="w-full absolute text-center text-greyText -z-10">
        FAST
        <span className="text-yellowText"> DELIVERY</span>
      </p>
      <IconButton
        onClick={handleLogout}
        icon={<SlLogout size={24} />}
        className="mx-4"
      />
    </header>
  );
};

export default Header;
