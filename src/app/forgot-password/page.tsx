"use client";

import TextInput from "@/commons/InputText";
import { FormEvent, MouseEvent, useState } from "react";
import Button from "@/commons/Button";
import Layout from "@/commons/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [fullField, setFullField] = useState(false);

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (email.length > 0) {
      setFullField(true);
    }
  };

  return (
    <Layout className="h-[90%] flex justify-center">
      {!fullField ? (
        <div className="flex flex-col justify-center gap-4">
          <h1 className="m-auto font-bold text-2xl">
            ¿Olvidaste tu contraseña?
          </h1>
          <p className="text-1xl">
            Ingresa tu dirección de email y te enviaremos un codigo para
            restablecer tu contraseña.
          </p>
          <form onSubmit={handleSubmit}>
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              label="Email"
              placeholder="staffys@gmail.com"
            />
            <Button className="w-[100%] font-medium mt-5">Enviar</Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4">
          <h1 className="m-auto font-bold text-2xl">Restablecer contraseña</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-1xl">Ingresa el código que enviamos a:</p>
            <p className="font-medium text-1xl">{email}</p>
          </div>
          <form>
            <TextInput
              type="number"
              onChange={(e) => setCode(e.target.value)}
              value={code}
              name="code"
              label="Codigo"
              placeholder="Codigo"
            />
            <Button className="w-[100%] font-medium mt-5">Enviar</Button>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default ForgotPassword;
