"use client";
import Button from "@/commons/Button";
import Counter from "@/commons/Counter";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import IconButton from "@/commons/IconButton";
import Layout from "@/commons/Layout";
import { deliveryPackages } from "@/utils/FakeDataDeliveryPackages";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const GetPackage = () => {
  const { push } = useRouter();

  return (
    <Layout className="overflow-y-scroll">
      <div className="flex justify-between">
        <IconButton
          onClick={() => push("/home")}
          icon={<RiArrowLeftSLine size={40} />}
        />
        <Counter title="Paquetes restantes" count={10} />
      </div>
      <h4 className="mt-4 font-bold text-xl">Obtener paquetes</h4>
      <p className="mb-4">¿Cuántos paquetes más vas a repartir hoy?</p>
      <div className="pt-4 mb-4 px-4 border-t-2 overflow-y-scroll">
        {deliveryPackages.map((deliveryPackage) => (
          <div key={deliveryPackage.id}>
            <DeliveryPackageCard className="mb-4" {...deliveryPackage} />
            {deliveryPackage !== deliveryPackages.at(-1) && (
              <hr className="mb-4" />
            )}
          </div>
        ))}
      </div>
      <Button>Iniciar Jornada</Button>
    </Layout>
  );
};

export default GetPackage;
