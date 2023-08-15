"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "@/commons/Button";
import TextInput from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import Link from "@/commons/Link";
import useInput from "@/hooks/useInput";
import IconButton from "@/commons/IconButton";
import { TbCameraPlus } from "react-icons/tb";
import { BiSolidPencil } from "react-icons/bi";
import { loadProfilePicture, register } from "@/redux/reducers/user";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/toast";
import { FileList } from "@/types/form.types";
import ImageCropDialog from "@/components/ImageCropDialog";
import { croppedImageI } from "@/types/image.types";
import Image from "next/image";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [profilePictureFile, setProfilePictureFile] = useState<
    FileList | string
  >("");
  const [successfulImageUpload, setSuccessfulImageUpload] = useState(false);
  const [selectImage, setSelectImage] = useState<boolean>(false);
  const [profilePictureLocalUrl, setProfilePictureLocalUrl] =
    useState<croppedImageI>({
      aspect: { value: null, text: null },
      crop: { x: null, y: null },
      croppedImageUrl: "",
      zoom: null,
    });

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
    formData.append("file", profilePictureFile as string);
    try {
      setLoading(true);
      const user = await dispatch(register(userData)).unwrap();
      if (profilePictureFile) {
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
    try {
      const files = e.target.files as FileList;
      if (!(files.length > 0 && files[0].type.split("/").at(0) === "image")) {
        throw new Error("No se reconoció el tipo de archivo");
      }
      if (files[0].size > 2000000) {
        throw new Error("El archivo no puede pesar más de 2mb");
      }
      setProfilePictureFile(e.target.files as FileList);
      setSelectImage(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureLocalUrl((prevState) => {
          return { ...prevState, croppedImageUrl: reader.result as string };
        });
      };
      reader.readAsDataURL(files[0]);
    } catch (error) {
      const { message } = error as Error;
      showToast("error", message);
      console.error(message);
    }
  };

  const setCroppedImageFor = (props: croppedImageI, file: FileList) => {
    const newCar = {
      ...profilePictureLocalUrl,
      croppedImageUrl: props?.croppedImageUrl,
      crop: props?.crop,
      zoom: props?.zoom,
      aspect: props?.aspect,
    };
    setProfilePictureLocalUrl(newCar);
    setProfilePictureFile(file);
    setSelectImage(false);
    showToast("success", "Foto cargada exitosamente!");
    setSuccessfulImageUpload(true);
  };

  const onCancel = () => {
    setSelectImage(false);
  };
  return (
    <Layout className="h-screen">
      <div className="flex justify-center items-center h-[30%]">
        <div className="max-h-[6rem] max-w-[6rem] flex justify-center items-center">
          {selectImage ? (
            <ImageCropDialog
              imageUrl={profilePictureLocalUrl.croppedImageUrl}
              onCancel={onCancel}
              setCroppedImageFor={setCroppedImageFor}
            />
          ) : null}
          {!successfulImageUpload ? (
            <>
              <IconButton
                className="bg-primaryBlue w-[6rem] h-[6rem] rounded-full "
                icon={<TbCameraPlus className="text-white" size={60} />}
              />
              <input
                onChange={handleFileChange}
                className="bg-red-500 h-[6rem] w-[6rem] absolute rounded-full opacity-0"
                type={"file"}
              />
            </>
          ) : (
            <div className="relative">
              <Image
                alt="profile picture"
                src={profilePictureLocalUrl.croppedImageUrl as string}
                className="rounded-full"
                height={100}
                width={100}
              />
              <IconButton
                className="text-white absolute w-[2.2rem] h-[2.2rem] bg-primaryBlue rounded-full bottom-2 right-0"
                icon={<BiSolidPencil />}
              />
              <input
                onChange={handleFileChange}
                className="bg-red-500 w-[2.2rem] h-[2.2rem] absolute rounded-full opacity-0 bottom-2 right-0"
                type={"file"}
              />
            </div>
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
