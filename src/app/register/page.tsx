"use client";
import React from "react";
import Button from "@/commons/Button";
import TextInput from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import Link from "@/commons/Link";
import useInput from "@/hooks/useInput";
import IconButton from "@/commons/IconButton";
import { TbCameraPlus } from "react-icons/tb";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createUser } from "@/redux/reducers/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Register = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch<AppDispatch>();
  dispatch;

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
  const handleRegister = async (event: React.MouseEvent) => {
    event.preventDefault();
    const userData = {
      name: name.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
      confirmpassword: passwordConfirmation.value,
      urlphoto: "",
    };
    try {
      userData;
      const actionResult = await dispatch(createUser(userData));
      // const result = actionResult.payload;
    } catch (error) {
      console.error(error);
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
      <form autoComplete="off" className="pt-5 pb-5">
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
          helper="Debe contener @ para este campo "
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          {...password}
          helper="Debe contener al menos 8 caracteres, una mayuscula y un numero "
          hidden
        />
        <TextInput
          label="Confirmación de contraseña"
          name="passwordConfirmation"
          placeholder="Confirmación"
          {...passwordConfirmation}
          helper="Debe coincidir con el de arriba "
          hidden
        />
        <Button onClick={handleRegister} className="w-[100%] font-medium mt-5">
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
