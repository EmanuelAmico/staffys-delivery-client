import React, { FC } from "react";
import Image from "next/image";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import Link from "@/commons/Link";
import logoFastDelivery from "../../../public/images/logoFastDelivery.png";

const Login: FC = () => {
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
              className="border-b-2 border-primaryBlue outline-none text-lg bg-pageBackground"
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
              className="border-b-2 border-primaryBlue outline-none text-lg bg-pageBackground"
              placeholder="Contraseña"
            />
          </li>
        </ul>
      </form>
      <div className="flex flex-col items-center gap-6 pt-8">
        <Button className="w-[100%] font-medium">Ingresar</Button>
        <Link href="#" className="text-lg font-medium">
          Recuperar Contraseña
        </Link>
        <Link href="/register" className="text-lg font-bold">
          Registrarse
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
