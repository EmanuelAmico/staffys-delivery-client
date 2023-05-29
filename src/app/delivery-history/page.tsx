"use client";
import React from "react";
import InputText from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import { deliveryHistory } from "@/utils/FakeDataDeliveryHistory";
import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const DeliveryHistory = () => {
  const { back } = useRouter();

  return (
    <Layout className="h-[93%]">
      <div>
        <IconButton
          onClick={() => back()}
          icon={<RiArrowLeftSLine size={40} />}
        />
      </div>
      <div className="flex flex-col gap-6 mb-4 mt-3">
        <div className="flex flex-row gap-2 ">
          <Button className="w-11/12 ">Direccion</Button>
          <Button className="w-11/12 " disabled>
            Destinatario
          </Button>
          <Button className="w-11/12 " disabled>
            ID
          </Button>
        </div>
        <InputText
          name="search"
          placeholder="Inserte su búsqueda"
          label="Filtrar Pedido"
        />
      </div>

      <div className="pt-4 mb-4 px-4 border-t-2 overflow-y-scroll">
        {deliveryHistory.map((deliveryPackage) => (
          <div key={deliveryPackage.id}>
            <DeliveryPackageCard className="mb-4" {...deliveryPackage} />
            {deliveryPackage !== deliveryHistory.at(-1) && (
              <hr className="mb-4" />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DeliveryHistory;
