"use client";
import React, { useCallback, useContext, useEffect } from "react";
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
import { takePackage } from "@/redux/reducers/user";

const GetPackage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshed } = useContext(CheckRefreshContext);
  const user = useSelector((state: RootState) => state.user);
  const deliveryPackages = useSelector(
    (state: RootState) => state.deliverypackages.packages
  );

  const fetchPackages = useCallback(async () => {
    try {
      await dispatch(fetchPackagesByCurrentLocation()).unwrap();
    } catch (error) {
      console.error("error", error);
    }
  }, [dispatch]);

  const handleTakePackage = useCallback(
    async (packageId: string) => {
      try {
        await dispatch(takePackage(packageId)).unwrap();
        await fetchPackages();
      } catch (error) {
        console.error("error", error);
      }
    },
    [dispatch, fetchPackages]
  );

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  return (
    <Layout className="flex flex-col">
      <div className="flex justify-between">
        <IconButton
          onClick={() => (isRefreshed ? router.push("/home") : router.back())}
          icon={<RiArrowLeftSLine size={40} />}
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
                buttonProps={{
                  onClick: () => handleTakePackage(deliveryPackage._id),
                }}
              />
              {deliveryPackage !==
                deliveryPackages[deliveryPackages.length - 1] && (
                <hr className="mb-4" />
              )}
            </div>
          );
        })}
      </div>
      <Button>Iniciar Jornada</Button>
    </Layout>
  );
};

export default GetPackage;
