"use client";
import React, { useCallback, useContext, useEffect } from "react";
import DeliveryCollapsibleBox from "@/components/DeliveryCollapsibleBox";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  finishPackageDelivery,
  startPackageDelivery,
} from "@/redux/reducers/user";
import { getTodayForm } from "@/redux/reducers/form";

const Home = () => {
  const { push } = useRouter();
  const { changeRefresh } = useContext(CheckRefreshContext);
  const { user, form } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const handleStartPackageDelivery = useCallback(
    async (packageId: string) => {
      try {
        await dispatch(startPackageDelivery(packageId));
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  const handleFinishPackageDelivery = useCallback(async () => {
    try {
      await dispatch(finishPackageDelivery());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      try {
        if (form._id) return;
        await dispatch(getTodayForm());
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch, form._id]);

  return (
    <Layout className="flex gap-4">
      <Button
        onClick={() => {
          changeRefresh();
          push("/package/get");
        }}
        className="font-medium w-full"
        disabled={
          !user.is_active ||
          Boolean(user.currentPackage) ||
          user.pendingPackages.some((p) => p.status === "taken")
        }
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
        destination={user.currentPackage?.address}
        packageId={user.currentPackage?._id}
        recipient={user.currentPackage?.receptorName}
        // coordinates="24,25"
        buttonText={user.currentPackage ? "Finalizar" : undefined}
        buttonProps={{ onClick: handleFinishPackageDelivery }}
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
            addressee: receptorName,
            distance: 10,
            buttonText: "Iniciar reparto",
            buttonProps: {
              disabled:
                !user.is_active ||
                Boolean(user.currentPackage) ||
                !form._id ||
                user.pendingPackages.some((p) => p.status !== "taken"),
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
            addressee: receptorName,
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
