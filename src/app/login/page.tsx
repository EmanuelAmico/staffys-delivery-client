import React, { FC } from "react";
import Image from "next/image";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import Link from "@/commons/Link";
import InputText from "@/commons/InputText";
import logoFastDelivery from "../../../public/images/logoFastDelivery.png";

const Login: FC = () => {
  return (
    <Layout className="h-screen">
      <div className="flex justify-center items-end h-[30%]">
        <Image src={logoFastDelivery} alt="Logo Fast Delivery" width="200" />
      </div>
      <form className="pt-16 pb-8">
        <InputText
          label="Usuario"
          name="email"
          placeholder="staffys@gmail.com"
        />
        <InputText
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          hidden
        />
        <Button className="w-[100%] font-medium mt-8">Ingresar</Button>
      </form>
      <div className="flex flex-col items-center gap-6">
        <Link href="/forgot-password" className="text-lg font-medium">
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
