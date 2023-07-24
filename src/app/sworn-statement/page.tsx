"use client";
import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Layout from "@/commons/Layout";
import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";
import QuestionConfirmation from "@/commons/QuestionConfirmation";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import Button from "@/commons/Button";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getOrCreateTodayForm, getTodayForm } from "@/redux/reducers/form";
import { showToast } from "@/utils/toast";
import { AxiosError } from "axios";
import { me, startDelivery } from "@/redux/reducers/user";

export default function SwornStatement() {
  const { user, form } = useSelector((state: RootState) => state);
  const [hasDrank, setHasDrank] = useState("");
  const [hasPsychotropicDrugs, setHasPsychotropicDrugs] = useState("");
  const [hasEmotionalProblems, setHasEmotionalProblems] = useState("");
  const [loading, setLoading] = useState(false);
  const { push, back } = useRouter();
  const { isRefreshed } = useContext(CheckRefreshContext);
  const dispatch = useDispatch<AppDispatch>();

  const onChange = useCallback((value: string, name: string) => {
    const stateSetter = {
      hasDrank: setHasDrank,
      hasPsychotropicDrugs: setHasPsychotropicDrugs,
      hasEmotionalProblems: setHasEmotionalProblems,
    }[name as "hasDrank" | "hasPsychotropicDrugs" | "hasEmotionalProblems"];

    stateSetter(value);
  }, []);

  const handleStartDelivery = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(startDelivery()).unwrap();
      showToast("success", "Jornada iniciada correctamente");
      push("/home");
      setLoading(false);
    } catch (error) {
      console.error(error);
      const statusCode = parseInt(
        (error as AxiosError).message.split(" ").at(-1) || ""
      );
      if (statusCode === 451) {
        setLoading(false);
        showToast(
          "warn",
          "Por cuestiones legales, no podrás repartir hasta el próximo día"
        );
        await dispatch(me()).unwrap();
        push("/home");
      }
    }
  }, [dispatch, push]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        for (const value of Object.values({
          hasDrank,
          hasPsychotropicDrugs,
          hasEmotionalProblems,
        })) {
          if (value === "") {
            return showToast("error", "Faltan campos por llenar");
          }
        }
        setLoading(true);
        await dispatch(
          getOrCreateTodayForm({
            hasDrank: hasDrank === "yes",
            hasPsychotropicDrugs: hasPsychotropicDrugs === "yes",
            hasEmotionalProblems: hasEmotionalProblems === "yes",
          })
        ).unwrap();
        showToast("success", "Declaración jurada enviada");
        await handleStartDelivery();
      } catch (error) {
        console.error(error);
        setLoading(false);
        showToast("error", "Error al enviar la declaración jurada");
      }
    },
    [
      dispatch,
      handleStartDelivery,
      hasDrank,
      hasEmotionalProblems,
      hasPsychotropicDrugs,
    ]
  );

  useEffect(() => {
    (async () => {
      try {
        if (form._id) return push("/home");
        await dispatch(getTodayForm()).unwrap();
      } catch (error) {
        console.error(error);
        const statusCode = parseInt(
          (error as AxiosError).message.split(" ").at(-1) || ""
        );
        if (statusCode === 404 && !user.is_able_to_deliver) {
          await dispatch(me()).unwrap();
        }
      }
    })();
  }, [dispatch, form._id, push, user.is_able_to_deliver, user.pendingPackages]);

  return (
    <Layout>
      <form className="flex flex-col h-full" onSubmit={handleSubmit}>
        <div className="grow">
          <IconButton
            onClick={() => (isRefreshed ? push("/home") : back())}
            icon={<RiArrowLeftSLine size={40} />}
            className="self-start -mb-2"
            type="button"
          />
          <h2 className="text-center text-xl mb-4">Declaración jurada</h2>
          <QuestionConfirmation
            question="¿Ha consumido bebidas alcohólicas en las últimas 12 horas?"
            name="hasDrank"
            value={hasDrank}
            onChange={onChange}
            className="mb-2"
          />
          <QuestionConfirmation
            question="¿Usted está haciendo uso de medicamentos psicoactivos? (tranquilizantes, antigripales, antialérgicos o para insomnio)"
            name="hasPsychotropicDrugs"
            value={hasPsychotropicDrugs}
            onChange={onChange}
            className="mb-2"
          />
          <QuestionConfirmation
            question="¿Tiene usted algún problema familiar emocional o de cualquier tipo que lo distraiga?"
            name="hasEmotionalProblems"
            value={hasEmotionalProblems}
            onChange={onChange}
          />
        </div>
        <Button type="submit" disabled={loading} loading={loading}>
          Continuar
        </Button>
      </form>
    </Layout>
  );
}
