import React, { FC } from "react";
import Image from "next/image";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import Link from "@/commons/Link";
import TextInput from "@/commons/TextInput";
import logoFastDelivery from "../../../public/images/logoFastDelivery.png";

const Login: FC = () => {
  return (
    <Layout className="h-screen">
      <div className="flex justify-center items-end h-[30%]">
        <Image
          src={logoFastDelivery}
          alt="Logo Fast Delivery"
          width="200"
          priority
        />
      </div>
      <form className="pt-16 pb-5">
        <TextInput
          label="Usuario"
          name="email"
          placeholder="staffys@gmail.com"
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          hidden
        />
        <Button className="w-[100%] font-medium mt-5">Ingresar</Button>
      </form>
      <div className="flex flex-col items-center gap-4">
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
