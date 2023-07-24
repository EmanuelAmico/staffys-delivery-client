"use client";
import React, { FormEvent, useCallback, useState } from "react";
import TextInput from "@/commons/TextInput";
import Button from "@/commons/Button";
import Layout from "@/commons/Layout";
import Link from "@/commons/Link";
import useInput from "@/hooks/useInput";
import { useDispatch } from "react-redux";
import { initResetPassword, resetPassword } from "@/redux/reducers/user";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/toast";
import { AxiosError } from "axios";

const ForgotPassword = () => {
  const [showSecondStep, setShowSecondStep] = useState(false);
  const { push } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);
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
  const code = useInput({
    validators: [
      {
        type: "notEmpty",
        errorMessage: "El código es requerido",
      },
    ],
    extraValidator: (value) => {
      if (isNaN(parseInt(value)) || value.length !== 6)
        return {
          isValid: false,
          errorMessage: "Debe ser un número válido de 6 dígitos",
        };
      return {
        isValid: true,
      };
    },
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

  const handleEmailSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        if (email.error) return;
        setLoading(true);
        await dispatch(initResetPassword(email.value)).unwrap();
        showToast("success", "Por favor revisa tu email");
        setShowSecondStep(true);
        setLoading(false);
      } catch (error) {
        console.error(error);
        showToast("error", "Ha ocurrido un error");
        setLoading(false);
      }
    },
    [dispatch, email.error, email.value]
  );

  const handleResetPasswordSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        if (
          email.error ||
          code.error ||
          password.error ||
          passwordConfirmation.error
        )
          return;
        setLoading(true);
        await dispatch(
          resetPassword({
            email: email.value,
            code: parseInt(code.value),
            password: password.value,
            confirmPassword: passwordConfirmation.value,
          })
        ).unwrap();
        showToast("success", "Contraseña restablecida exitosamente");
        setLoading(false);
        push("/login");
      } catch (error) {
        console.error(error);
        const statusCode = parseInt(
          (error as AxiosError).message.split(" ").at(-1) || ""
        );
        if (statusCode === 400) {
          return showToast("error", "El código ingresado es inválido");
        }
        showToast("error", "Ha ocurrido un error");
        setLoading(false);
      }
    },
    [
      dispatch,
      push,
      code.error,
      code.value,
      email.error,
      email.value,
      password.error,
      password.value,
      passwordConfirmation.error,
      passwordConfirmation.value,
    ]
  );

  return (
    <Layout className="flex justify-center">
      {!showSecondStep ? (
        <div className="flex flex-col justify-center gap-4">
          <h1 className="m-auto font-bold text-2xl">
            ¿Olvidaste tu contraseña?
          </h1>
          <p className="text-1xl text-center">
            Ingresa tu dirección de email y te enviaremos un código para
            restablecer tu contraseña.
          </p>
          <form autoComplete="off" onSubmit={handleEmailSubmit}>
            <TextInput
              name="email"
              label="Email"
              placeholder="staffys@gmail.com"
              tooltip="El email con el que te registraste"
              {...email}
            />
            <Button
              type="submit"
              className="w-[100%] font-medium mt-5"
              loading={loading}
              disabled={loading}
            >
              Enviar
            </Button>
          </form>
          <div className="flex justify-center items-center">
            <Link href="/login" className="text-lg font-medium">
              Regresar
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-4">
          <h1 className="m-auto font-bold text-2xl">Restablecer contraseña</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-1xl">Ingresa el código enviado al email:</p>
            <p className="font-bold text-1xl">{email.value}</p>
          </div>
          <form autoComplete="off" onSubmit={handleResetPasswordSubmit}>
            <TextInput
              type="number"
              name="code"
              label="Código"
              placeholder="Código"
              tooltip="Código enviado al email"
              {...code}
            />
            <TextInput
              label="Contraseña"
              name="password"
              placeholder="Nueva contraseña"
              {...password}
              tooltip="Debe contener al menos 8 caracteres, una mayúscula y un numero "
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
            <Button
              type="submit"
              className="w-[100%] font-medium mt-5"
              loading={loading}
              disabled={loading}
            >
              Enviar
            </Button>
          </form>
          <div className="flex justify-center items-center">
            <Link href="/login" className="text-lg font-medium">
              Regresar
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ForgotPassword;
