"use client";
import React, { FormEvent } from "react";
import Button from "@/commons/Button";
import TextInput from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import Link from "@/commons/Link";
import useInput from "@/hooks/useInput";
import IconButton from "@/commons/IconButton";
import { TbCameraPlus } from "react-icons/tb";
import { register } from "@/redux/reducers/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/toast";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();

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
        errorMessage: "Debe tener al menos 8 caracteres, una letra y un número",
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
  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      name: name.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
      confirmpassword: passwordConfirmation.value,
      urlphoto: "http://url.com",
    };
    try {
      await dispatch(register(userData)).unwrap();
      showToast("success", "Usuario registrado correctamente");
      push("/home");
    } catch (error) {
      console.error(error);
      showToast("error", "Error al registrar usuario");
    }
  };

  return (
    <Layout className="h-screen">
      <div className="flex justify-center items-center h-[30%]">
        <div className="max-h-[6rem] max-w-[6rem] flex justify-center items-center">
          <>
            <IconButton
              className="bg-primaryBlue w-[6rem] h-[6rem] rounded-full "
              icon={<TbCameraPlus className="text-white" size={60} />}
            />
            <input
              className="bg-red-500 h-[5rem] w-[5rem] absolute rounded-full opacity-0"
              type="file"
            />
          </>
        </div>
      </div>
      <form onSubmit={handleRegister} autoComplete="off" className="pt-5 pb-5">
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
          tooltip="Debe contener @ para este campo"
          helper=""
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          {...password}
          tooltip="Contener al menos 8 caracteres, una mayúscula y un numero "
          helper=""
        />
        <TextInput
          label="Confirmación de contraseña"
          name="passwordConfirmation"
          placeholder="Confirmación"
          {...passwordConfirmation}
          tooltip="Debe coincidir con la contraseña ingresada previamente"
          helper=""
        />
        <Button type="submit" className="w-[100%] font-medium mt-5">
          Registrarse
        </Button>
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
