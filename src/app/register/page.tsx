"use client";
import React, { FC } from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import TextInput from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import logoFastDelivery from "../../../public/images/logoFastDelivery.png";
import Link from "@/commons/Link";
import useInput from "@/hooks/useInput";

const Register: FC = () => {
  const name = useInput({
    validators: [
      {
        type: "notEmpty",
        errorMessage: "El nombre es requerido",
      },
    ],
  });
  const lastName = useInput({
    validators: [
      {
        type: "notEmpty",
        errorMessage: "El apellido es requerido",
      },
    ],
  });
  const email = useInput({
    validators: [
      {
        type: "notEmpty",
        errorMessage: "El email es requerido",
      },
      {
        type: "email",
        errorMessage: "El email tiene un formato incorrecto",
      },
    ],
  });
  const password = useInput({
    validators: [
      {
        type: "notEmpty",
        errorMessage: "La contraseña es requerida",
      },
      {
        type: "password",
        errorMessage:
          "La contraseña debe tener al menos 8 caracteres, una letra y un número",
      },
    ],
  });
  const passwordConfirmation = useInput({
    validators: [
      {
        type: "notEmpty",
        errorMessage: "La confirmación de contraseña es requerida",
      },
    ],
    extraValidator: (value) => {
      if (value !== password.value)
        return {
          isValid: false,
          errorMessage: "Las contraseñas no coinciden",
        };
      return {
        isValid: true,
      };
    },
  });

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
        <TextInput label="Nombre" name="name" placeholder="Nombre" {...name} />
        <TextInput
          label="Apellido"
          name="lastname"
          placeholder="Apellido"
          {...lastName}
        />
        <TextInput
          label="Email"
          name="email"
          placeholder="staffys@gmail.com"
          {...email}
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          {...password}
          hidden
        />
        <TextInput
          label="Confirmación de contraseña"
          name="passwordConfirmation"
          placeholder="Confirmación"
          {...passwordConfirmation}
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
