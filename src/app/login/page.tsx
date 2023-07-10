"use client";
import React, { FormEvent } from "react";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import Link from "@/commons/Link";
import TextInput from "@/commons/TextInput";
import Image from "next/image";
import logoFastDelivery from "../../../public/images/logoFastDelivery.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import useInput from "@/hooks/useInput";
import { loginUser } from "@/redux/reducers/user";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
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
        errorMessage: "Debe tener al menos 8 caracteres, una letra y un número",
      },
    ],
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      email: email.value,
      password: password.value,
    };
    try {
      await dispatch(loginUser(userData));
    } catch (error) {
      console.error(error);
    }
  };

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
      <form autoComplete="off" className="pt-16 pb-5" onSubmit={handleSubmit}>
        <TextInput
          label="Usuario"
          name="email"
          placeholder="staffys@gmail.com"
          {...email}
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          hidden
          {...password}
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
