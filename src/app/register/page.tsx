import React, { FC } from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import TextInput from "@/commons/InputText";

const page: FC = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex w-full justify-center h-[18rem]  items-center">
        <Image
          src={"/images/motorcyclewithletters2.svg"}
          alt="Moto"
          width={20}
          height={20}
          className="w-[200px] h-[100px]"
        />
      </div>
      <form className="flex flex-col items-center">
        <TextInput name="Nombre" placeHolder="Nombre" label="Nombre" />
        <TextInput name="Apellido" placeHolder="Apellido" label="Apellido" />
        <TextInput name="Email" placeHolder="Email" label="Email" />
        <TextInput
          name="Constraseña"
          hidden
          placeHolder="Contraseña"
          label="Contraseña"
        />
        <TextInput
          name="Segunda Contraseña"
          hidden
          placeHolder="Segunda Contraseña"
          label="Segunda Contraseña"
        />
        <div className="w-full flex justify-center ">
          <Button className="mt-8 w-11/12 ">Registrar</Button>
        </div>
      </form>
    </div>
  );
};

export default page;
