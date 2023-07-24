"use client";
import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Button from "@/commons/Button";
import Counter from "@/commons/Counter";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import IconButton from "@/commons/IconButton";
import Layout from "@/commons/Layout";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import { fetchPackagesByCurrentLocation } from "@/redux/reducers/package";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { me, startDelivery, takePackage } from "@/redux/reducers/user";
import { AxiosError } from "axios";
import { showToast } from "@/utils/toast";
import Loader from "@/commons/Loader";

const GetPackage = () => {
  const { push, back } = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshed } = useContext(CheckRefreshContext);
  const user = useSelector((state: RootState) => state.user);
  const deliveryPackages = useSelector(
    (state: RootState) => state.deliverypackages.packages
  );
  const [loading, setLoading] = useState(false);
  const [hasFetchedPackages, setHasFetchedPackages] = useState(false);

  const fetchPackages = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchPackagesByCurrentLocation()).unwrap();
      setLoading(false);
      setHasFetchedPackages(true);
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const handleTakePackage = useCallback(
    async (packageId: string) => {
      try {
        await dispatch(takePackage(packageId)).unwrap();
        showToast("success", "Paquete tomado");
        await fetchPackages();
      } catch (error) {
        await dispatch(me()).unwrap();
        console.error(error);
        showToast("error", "Error al tomar el paquete");
      }
    },
    [dispatch, fetchPackages]
  );

  const handleStartDelivery = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
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
        if (statusCode === 412) {
          setLoading(false);
          showToast("warn", "Para poder repartir debes llenar la declaración");
          push("/sworn-statement");
        }
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
    },
    [dispatch, push]
  );

  useEffect(() => {
    if (user.pendingPackages.some((p) => p.status === "taken")) {
      showToast("warn", "Ya has iniciado tu jornada");
      return push("/home");
    }
    fetchPackages();
  }, [fetchPackages, push, user.is_able_to_deliver, user.pendingPackages]);

  return (
    <Layout>
      <form className="flex flex-col h-full" onSubmit={handleStartDelivery}>
        <div className="flex justify-between">
          <IconButton
            onClick={() => (isRefreshed ? push("/home") : back())}
            icon={<RiArrowLeftSLine size={40} />}
            type="button"
          />
          <Counter
            title="Paquetes restantes"
            count={10 - user.pendingPackages.length}
          />
        </div>
        <h4 className="mt-4 font-bold text-xl">Obtener paquetes</h4>
        <p className="mb-4">¿Cuántos paquetes más vas a repartir hoy?</p>
        <div className="grow pt-4 mb-4 px-4 border-t-2 overflow-y-scroll">
          {deliveryPackages?.map((deliveryPackage) => {
            return (
              <div key={deliveryPackage._id}>
                <DeliveryPackageCard
                  className="mb-4"
                  deliveryPackage={deliveryPackage}
                  trash={false}
                  buttonText="Tomar"
                  status={deliveryPackage.status}
                  buttonProps={{
                    type: "button",
                    onClick: () => handleTakePackage(deliveryPackage._id),
                    disabled: user.is_disabled || !user.is_able_to_deliver,
                  }}
                />
                {deliveryPackage !==
                  deliveryPackages[deliveryPackages.length - 1] && (
                  <hr className="mb-4" />
                )}
              </div>
            );
          })}
          {!deliveryPackages?.length && hasFetchedPackages && (
            <p className="text-center">No hay paquetes disponibles</p>
          )}
          {loading && <Loader />}
        </div>
        <Button
          type="submit"
          disabled={loading || !user.pendingPackages.length}
        >
          Iniciar Jornada
        </Button>
      </form>
    </Layout>
  );
};

export default GetPackage;
