"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "@/commons/Button";
import TextInput from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import Link from "@/commons/Link";
import useInput from "@/hooks/useInput";
import IconButton from "@/commons/IconButton";
import { TbCameraPlus } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { loadProfilePicture, register } from "@/redux/reducers/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/toast";
import { FileList } from "@/types/form.types";
const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState<FileList | string>("");
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
        errorMessage: "Al menos 8 caracteres, una letra y un número",
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
      urlphoto: ".",
    };
    const formData = new FormData();
    formData.append("file", profilePicture[0]);
    try {
      setLoading(true);
      const user = await dispatch(register(userData)).unwrap();
      if (profilePicture) {
        await dispatch(
          loadProfilePicture({ formData, _id: user._id })
        ).unwrap();
      }
      showToast("success", "Usuario registrado correctamente");
      setLoading(false);
      push("/home");
    } catch (error) {
      console.error(error);
      showToast("error", "Error al registrar usuario");
      setLoading(false);
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    if (files[0].type.split("/").at(0) === "image") {
      setProfilePicture(e.target.files as FileList);
      showToast("success", "Foto cargada exitosamente!");
    } else {
      showToast("error", "No se reconoció el archivo.");
    }
  };
  return (
    <Layout className="h-screen">
      <div className="flex justify-center items-center h-[30%]">
        <div className="max-h-[6rem] max-w-[6rem] flex justify-center items-center">
          {!profilePicture ? (
            <>
              <IconButton
                className="bg-primaryBlue w-[6rem] h-[6rem] rounded-full "
                icon={<TbCameraPlus className="text-white" size={60} />}
              />
              <input
                onChange={handleFileChange}
                className="bg-red-500 h-[5rem] w-[5rem] absolute rounded-full opacity-0"
                type="file"
              />
            </>
          ) : (
            <>
              <IconButton
                className="bg-greenText w-[6rem] h-[6rem] rounded-full "
                icon={
                  <BsFillCheckCircleFill className="text-white" size={60} />
                }
              />
            </>
          )}
        </div>
      </div>
      <form onSubmit={handleRegister} autoComplete="off" className="pt-4 pb-4">
        <TextInput label="Nombre" name="name" placeholder="Nombre" {...name} />
        <TextInput
          label="Apellido"
          name="lastname"
          placeholder="Apellido"
          type="text"
          {...lastName}
        />
        <TextInput
          label="Email"
          name="email"
          placeholder="staffys@gmail.com"
          {...email}
          tooltip="Debe contener @ para este campo"
          type="email"
          helper=""
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Contraseña"
          {...password}
          tooltip="Contener al menos 8 caracteres, una mayúscula y un numero "
          type={showPassword ? "text" : "password"}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          helper=""
        />
        <TextInput
          label="Confirmación de contraseña"
          name="passwordConfirmation"
          placeholder="Confirmación"
          {...passwordConfirmation}
          type={showPasswordConfirmation ? "text" : "password"}
          setShowPasswordConfirmation={setShowPasswordConfirmation}
          showPasswordConfirmation={showPasswordConfirmation}
          tooltip="Debe coincidir con la contraseña ingresada previamente"
          helper=""
        />
        <Button
          type="submit"
          className="w-[100%] font-medium mt-3"
          loading={loading}
          disabled={loading}
        >
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
