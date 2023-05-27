import React, { FC } from "react";
import DropdownBox from "@/commons/DropdownBox";
import InputText from "@/commons/InputText";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";

const page: FC = () => {
  return (
    <Layout className="h-full bg-pageBackground">
      <div className="flex flex-col gap-6 mb-4">
        <div className="flex flex-row gap-2">
          <Button className="mt-8 w-11/12 ">Direccion</Button>
          <Button className="mt-8 w-11/12 ">Destinatario</Button>
          <Button className="mt-8 w-11/12 ">ID</Button>
        </div>
        <InputText
          name="searcher"
          placeHolder="Inserte su búsqueda"
          label="Filtrar Pedido"
        />
      </div>
      <DropdownBox className="h-full" title="Historial de Repartos">
        <DeliveryPackageCard
          destination={"Amenabar 2356, Caba"}
          addressee={"Emanuel Amico"}
          distance={"26km"}
          buttonText={"Agregar"}
          trash={false}
        />
        <DeliveryPackageCard
          destination={"Amenabar 2356, Caba"}
          addressee={"Emanuel Amico"}
          distance={"26km"}
          buttonText={"Agregar"}
          trash={false}
        />
        <DeliveryPackageCard
          destination={"Amenabar 2356, Caba"}
          addressee={"Emanuel Amico"}
          distance={"26km"}
          buttonText={"Agregar"}
          trash={false}
        />
      </DropdownBox>
    </Layout>
  );
};

export default page;
