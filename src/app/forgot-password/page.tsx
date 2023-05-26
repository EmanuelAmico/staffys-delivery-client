"use client";
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import InputText from "@/commons/InputText";
import Button from "@/commons/Button";

const Page = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [fullField, setFullField] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleCodeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (email.length > 0) {
      setFullField(true);
    }
  };

  return (
    <div className="bg-[#F5F5F5] w-[full] h-screen flex flex-col items-center">
      {!fullField ? (
        <>
          <div className="w-full  flex justify-start">
            <h1 className="mt-[10rem] ml-3 font-bold text-[1.7rem]">
              ¿Olvidaste tu contraseña?
            </h1>
          </div>
          <div className="w-[100%] flex justify-start">
            <p className="mt-1 ml-3  text-1xl w-[90%]">
              Ingresa tu dirección de email y te enviaremos un link para
              restablecer tu contraseña.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-[80%] mt-10">
            <InputText
              onChange={handleEmailChange}
              value={email}
              name="email"
              label="Email"
            />

            <Button onClick={handleSubmit} className="w-full mt-5">
              Submit
            </Button>
          </form>
        </>
      ) : (
        <>
          <div className="w-full  flex justify-start">
            <h1 className="mt-[10rem] ml-3 font-bold text-[1.7rem]">
              Restablecer contraseña.
            </h1>
          </div>
          <div className="w-[100%] flex justify-start">
            <p className="mt-1 ml-3  text-1xl w-[90%]">
              Ingresa el código que enviamos a {email}.
            </p>
          </div>
          <form className="w-[80%] mt-10">
            <InputText
              type="number"
              onChange={handleCodeInput}
              value={code}
              name="code"
              label="code"
            />

            <Button className="w-full mt-5">Submit</Button>
          </form>
        </>
      )}
    </div>
  );
};

export default Page;
