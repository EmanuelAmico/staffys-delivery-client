"use client";
import React, { useContext, useEffect } from "react";
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

const GetPackage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshed } = useContext(CheckRefreshContext);
  const deliveryPackages = useSelector(
    (state: RootState) => state.deliverypackages.packages
  );

  useEffect(() => {
    try {
      dispatch(fetchPackagesByCurrentLocation());
    } catch (error) {
      console.error("error", error);
    }
  }, [dispatch]);

  return (
    <Layout>
      <div className="flex justify-between">
        <IconButton
          onClick={() => (isRefreshed ? router.push("/home") : router.back())}
          icon={<RiArrowLeftSLine size={40} />}
        />
        <Counter title="Paquetes restantes" count={10} />
      </div>
      <h4 className="mt-4 font-bold text-xl">Obtener paquetes</h4>
      <p className="mb-4">¿Cuántos paquetes más vas a repartir hoy?</p>
      <div className="pt-4 mb-4 px-4 border-t-2 overflow-y-scroll">
        {deliveryPackages?.map((deliveryPackage) => {
          return (
            <div key={deliveryPackage._id}>
              <DeliveryPackageCard
                className="mb-4"
                deliveryPackage={deliveryPackage}
                trash={false}
                buttonText="Tomar"
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
