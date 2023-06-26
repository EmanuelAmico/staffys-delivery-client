"use client";
import React, { useCallback, useContext, useState } from "react";
import Layout from "@/commons/Layout";
import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";
import QuestionConfirmation from "@/commons/QuestionConfirmation";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import Button from "@/commons/Button";

export default function SwornStatement() {
  const [hasDrank, setHasDrank] = useState("");
  const [hasPsychotropicDrugs, setHasPsychotropicDrugs] = useState("");
  const [hasEmotionalProblems, setHasEmotionalProblems] = useState("");
  const router = useRouter();
  const { isRefreshed } = useContext(CheckRefreshContext);

  const onChange = useCallback((value: string, name: string) => {
    const stateSetter = {
      hasDrank: setHasDrank,
      hasPsychotropicDrugs: setHasPsychotropicDrugs,
      hasEmotionalProblems: setHasEmotionalProblems,
    }[name as "hasDrank" | "hasPsychotropicDrugs" | "hasEmotionalProblems"];

    stateSetter(value);
  }, []);

  return (
    <Layout>
      <IconButton
        onClick={() => (isRefreshed ? router.push("/home") : router.back())}
        icon={<RiArrowLeftSLine size={40} />}
        className="self-start"
      />
      <h2>Declaración jurada</h2>
      <QuestionConfirmation
        question="¿Ha consumido bebidas alcohólicas en las últimas 12 horas?"
        name="hasDrank"
        value={hasDrank}
        onChange={onChange}
      />
      <QuestionConfirmation
        question="¿Usted está haciendo uso de medicamentos psicoactivos? (tranquilizantes, antigripales, antialérgicos o para insomnio)"
        name="hasPsychotropicDrugs"
        value={hasPsychotropicDrugs}
        onChange={onChange}
      />
      <QuestionConfirmation
        question="¿Tiene usted algún problema familiar emocional o de cualquier tipo que lo distraiga?"
        name="hasEmotionalProblems"
        value={hasEmotionalProblems}
        onChange={onChange}
      />
      <Button>Continuar</Button>
    </Layout>
  );
}
