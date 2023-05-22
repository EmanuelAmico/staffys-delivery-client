import React, { FC } from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import InputText from "@/commons/InputText";

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
      <div className="flex flex-col items-center">
        <InputText
          name="Nombre"
          className=""
          placeHolder="Nombre"
          label="Nombre"
        ></InputText>
        <InputText
          name="Apellido"
          className=""
          placeHolder="Apellido"
          label="Apellido"
        ></InputText>
        <InputText
          name="Email"
          className=""
          placeHolder="Email"
          label="Email"
        ></InputText>

        <InputText
          name="Constraseña"
          className=""
          hidden
          placeHolder="Contraseña"
          label="Contraseña"
        ></InputText>
        <InputText
          name="Segunda Contraseña"
          className=""
          hidden
          placeHolder="Segunda Contraseña"
          label="Segunda Contraseña"
        ></InputText>
      </div>
      <div className="w-full flex justify-center ">
        <Button className="mt-8 w-11/12 ">Registrar</Button>
      </div>
    </div>
  );
};

export default page;
