import React, { FC } from "react";
import Image from "next/image";
import Layout from "@/commons/Layout";
import logoFastDelivery from "../../public/images/logoFastDelivery.png";
import Button, { ButtonProps } from "../commons/Button";
import Link, { LinkProps } from "@/commons/Link";

interface LoginProps {
  buttonText: string;
  linkText1: string;
  linkText2: string;
  href1?: string;
  href2?: string;
  buttonProps?: ButtonProps;
  LinkProps?: LinkProps;
}

const Login: FC<LoginProps> = ({
  linkText1,
  linkText2,
  buttonText,
  buttonProps,
  LinkProps,
  href1,
  href2,
}) => {
  return (
    <Layout className="h-screen bg-pageBackground">
      <div className="flex justify-center items-end h-[30%]">
        <Image src={logoFastDelivery} alt="Logo Fast Delivery" width="200" />
      </div>
      <form className="pt-16">
        <ul>
          <li className="flex flex-col gap-3 py-7">
            <label htmlFor="name" className="text-yellowText">
              Usuario
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-b-2 border-primaryBlue outline-none text-lg"
              placeholder="staffys@gmail.com"
            />
          </li>
          <li className="flex flex-col gap-3">
            <label htmlFor="password" className="text-yellowText">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-b-2 border-primaryBlue outline-none text-lg"
              placeholder="Contraseña"
            />
          </li>
        </ul>
      </form>
      <div className="flex flex-col items-center gap-6 pt-8">
        <Button className="w-[100%] font-medium" {...buttonProps}>
          {buttonText}
        </Button>
        <Link href={`${href1}`} className="text-lg font-medium" {...LinkProps}>
          {linkText1}
        </Link>
        <Link href={`${href2}`} className="text-lg font-bold" {...LinkProps}>
          {linkText2}
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
