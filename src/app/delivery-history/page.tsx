import React, { FC } from "react";

import InputText from "@/commons/InputText";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import { deliveryPackages } from "@/utils/FakeDataDeliveryPackages";
import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";

const page: FC = () => {
  return (
    <Layout className="h-[93%] bg-pageBackground">
      <div>
        <IconButton icon={<RiArrowLeftSLine size={40} />} />
      </div>
      <div className="flex flex-col gap-6 mb-4 mt-3">
        <div className="flex flex-row gap-2 ">
          <Button className="w-11/12 ">Direccion</Button>
          <Button className="w-11/12 ">Destinatario</Button>
          <Button className="w-11/12 ">ID</Button>
        </div>
        <InputText
          name="search"
          placeholder="Inserte su búsqueda"
          label="Filtrar Pedido"
        />
      </div>

      <div className="pt-4 mb-4 px-4 border-t-2 overflow-y-scroll">
        {deliveryPackages.map((deliveryPackage) => (
          <>
            <DeliveryPackageCard
              className="mb-4"
              key={deliveryPackage.id}
              {...deliveryPackage}
            />
            {deliveryPackage !== deliveryPackages.at(-1) && (
              <hr className="mb-4" />
            )}
          </>
        ))}
      </div>
    </Layout>
  );
};

export default page;
