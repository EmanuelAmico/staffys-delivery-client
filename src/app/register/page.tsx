import React, { FC } from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import TextInput from "@/commons/InputText";
import Layout from "@/commons/Layout";
import logoFastDelivery from "../../../public/images/logoFastDelivery.png";
import Link from "@/commons/Link";

const Register: FC = () => {
  return (
    <Layout className="h-screen">
      <div className="flex justify-center items-center h-[30%]">
        <Image
          src={logoFastDelivery}
          alt="Logo Fast Delivery"
          width={200}
          priority
        />
      </div>
      <form className="pt-5 pb-5">
        <TextInput label="Nombre" name="name" placeholder="Nombre" />
        <TextInput label="Apellido" name="lastname" placeholder="Apellido" />
        <TextInput label="Email" name="email" placeholder="staffys@gmail.com" />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          hidden
        />
        <TextInput
          label="Confimación Contraseña"
          name="passwordConfirmation"
          placeholder="Confimación"
          hidden
        />
        <Button className="w-[100%] font-medium mt-5">Registrarse</Button>
      </form>
      <div className="flex flex-col items-center">
        <Link href="/login" className="text-lg font-medium">
          Regresar
        </Link>
      </div>
    </Layout>
  );
};

export default Register;
