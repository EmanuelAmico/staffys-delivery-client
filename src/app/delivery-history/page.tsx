"use client";
import React, { useContext } from "react";
import InputText from "@/commons/TextInput";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const DeliveryHistory = () => {
  const router = useRouter();
  const { isRefreshed } = useContext(CheckRefreshContext);
  const { historyPackages } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <IconButton
        onClick={() => (isRefreshed ? router.push("/home") : router.back())}
        icon={<RiArrowLeftSLine size={40} />}
        className="self-start"
      />
      <div className="flex flex-col gap-6 mb-4 mt-3">
        <div className="flex flex-row gap-2 ">
          <Button className="w-11/12 " disabled>
            Direccion
          </Button>
          <Button className="w-11/12 " disabled>
            Destinatario
          </Button>
          <Button className="w-11/12 " disabled>
            ID
          </Button>
        </div>
        <form autoComplete="off">
          <InputText
            name="search"
            placeholder="Inserte su búsqueda"
            label="Filtrar Pedido"
          />
        </form>
      </div>
      <div className="pt-4 mb-4 px-4 border-t-2 overflow-y-scroll">
        {historyPackages?.map((_package) => (
          <div key={_package._id}>
            <DeliveryPackageCard
              className="mb-4"
              deliveryPackage={_package}
              status={_package.status}
              buttonText=""
              trash={false}
            />
            {_package !== historyPackages.at(-1) && <hr className="mb-4" />}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DeliveryHistory;
