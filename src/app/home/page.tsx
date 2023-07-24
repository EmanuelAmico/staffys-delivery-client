"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import DeliveryCollapsibleBox from "@/components/DeliveryCollapsibleBox";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  finishPackageDelivery,
  me,
  startPackageDelivery,
} from "@/redux/reducers/user";
import { getTodayForm } from "@/redux/reducers/form";
import { AxiosError } from "axios";
import { showToast } from "@/utils/toast";

const Home = () => {
  const { push } = useRouter();
  const { changeRefresh } = useContext(CheckRefreshContext);
  const { user, form } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [loadingTakePackage, setLoadingTakePackage] = useState(false);
  const [loadingStartPackageDelivery, setLoadingStartPackageDelivery] =
    useState(false);
  const [loadingFinishPackageDelivery, setLoadingFinishPackageDelivery] =
    useState(false);

  const handleStartPackageDelivery = useCallback(
    async (packageId: string) => {
      try {
        setLoadingStartPackageDelivery(true);
        await dispatch(startPackageDelivery(packageId)).unwrap();
        setLoadingStartPackageDelivery(false);
        showToast("success", "Reparto iniciado");
      } catch (error) {
        console.error(error);
        showToast("error", "Error al iniciar el reparto");
        setLoadingStartPackageDelivery(false);
      }
    },
    [dispatch]
  );

  const handleFinishPackageDelivery = useCallback(async () => {
    try {
      setLoadingFinishPackageDelivery(true);
      await dispatch(finishPackageDelivery()).unwrap();
      setLoadingFinishPackageDelivery(false);
      showToast("success", "Reparto finalizado");
    } catch (error) {
      console.error(error);
      showToast("error", "Error al finalizar el reparto");
      setLoadingFinishPackageDelivery(false);
    }
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        if (form._id) return;
        setLoadingTakePackage(true);
        await dispatch(getTodayForm()).unwrap();
        setLoadingTakePackage(false);
      } catch (error) {
        console.error(error);
        const statusCode = parseInt(
          (error as AxiosError).message.split(" ").at(-1) || ""
        );
        if (
          statusCode === 404 &&
          (!user.is_able_to_deliver ||
            user.currentPackage ||
            user.pendingPackages.some((p) => p.status !== null))
        ) {
          await dispatch(me()).unwrap();
          showToast("success", "¡Bienvenido a otro día de trabajo! 🚚");
        }
        setLoadingTakePackage(false);
      }
    })();
  }, [
    dispatch,
    form._id,
    user.currentPackage,
    user.is_able_to_deliver,
    user.pendingPackages,
    user.pendingPackages.length,
  ]);

  useEffect(() => {
    if (user.is_disabled)
      showToast(
        "error",
        "Tu cuenta ha sido deshabilitada por un administrador"
      );
  }, [user.is_disabled]);

  return (
    <Layout className="flex gap-4">
      <Button
        onClick={() => {
          changeRefresh();
          push("/package/get");
        }}
        className="font-medium w-full"
        disabled={
          user.is_disabled ||
          !user.is_able_to_deliver ||
          Boolean(user.currentPackage) ||
          user.pendingPackages.some((p) => p.status === "taken") ||
          loadingTakePackage
        }
        loading={loadingTakePackage}
      >
        Obtener paquetes
      </Button>
      <DeliveryCollapsibleBox
        title="Reparto en curso"
        description={
          user.currentPackage
            ? "Tienes un reparto en curso"
            : "No tienes ningún reparto en curso"
        }
        coordinatesUser={user.currentPackage?.coordinatesUser}
        coordinatesPackage={user.currentPackage?.coordinatesPackage}
        destination={user.currentPackage?.address}
        packageId={user.currentPackage?._id}
        recipient={user.currentPackage?.receptorName || undefined}
        buttonText={user.currentPackage ? "Finalizar" : undefined}
        buttonProps={{
          onClick: handleFinishPackageDelivery,
          disabled: loadingFinishPackageDelivery,
          loading: loadingFinishPackageDelivery,
        }}
        delivery={true}
      />
      <DeliveryCollapsibleBox
        title="Repartos pendientes"
        description={
          user.pendingPackages.length
            ? `Tienes ${user.pendingPackages.length} ${
                user.pendingPackages.length === 1
                  ? "reparto pendiente"
                  : "repartos pendientes"
              }`
            : "No tienes ningún reparto pendiente"
        }
        delivery={false}
        packages={user.pendingPackages.map(
          ({ _id, address, receptorName }) => ({
            id: _id,
            destination: address,
            addressee: receptorName || "",
            distance: 10,
            buttonText: "Iniciar reparto",
            buttonProps: {
              disabled:
                user.is_disabled ||
                !user.is_able_to_deliver ||
                Boolean(user.currentPackage) ||
                !form._id ||
                user.pendingPackages.some((p) => p.status !== "taken") ||
                loadingStartPackageDelivery,
              loading: loadingStartPackageDelivery,
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                handleStartPackageDelivery(_id);
              },
            },
            trash: false,
          })
        )}
      />
      <DeliveryCollapsibleBox
        title="Historial de repartos"
        description={
          user.historyPackages.length
            ? `Ya repartiste ${user.historyPackages.length} ${
                user.historyPackages.length === 1 ? "paquete" : "paquetes"
              }`
            : "Todavía no has repartido ningún paquete"
        }
        delivery={false}
        // NOTE This will change
        packages={user.historyPackages.map(
          ({ _id, address, receptorName }) => ({
            id: _id,
            destination: address,
            addressee: receptorName || "",
            distance: 10,
            buttonText: "",
            trash: false,
          })
        )}
        pathButton={
          user.historyPackages.length ? "/delivery-history" : undefined
        }
      />
    </Layout>
  );
};

export default Home;
