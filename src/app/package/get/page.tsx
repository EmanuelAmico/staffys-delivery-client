import Button from "@/commons/Button";
import Counter from "@/commons/Counter";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import IconButton from "@/commons/IconButton";
import Layout from "@/commons/Layout";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

const GetPackage = () => {
  const deliveryPackages = [
    {
      id: 1,
      destination: "Calle 1",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Tomar",
      trash: false,
    },
    {
      id: 2,
      destination: "Calle 2",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Tomar",
      trash: false,
    },
    {
      id: 3,
      destination: "Calle 3",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Tomar",
      trash: false,
    },
    {
      id: 4,
      destination: "Calle 4",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Tomar",
      trash: false,
    },
    {
      id: 5,
      destination: "Calle 5",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Tomar",
      trash: false,
    },
    {
      id: 6,
      destination: "Calle 6",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Tomar",
      trash: false,
    },
  ];

  return (
    <Layout className="overflow-y-scroll">
      <div className="flex justify-between">
        <IconButton icon={<RiArrowLeftSLine size={40} />} />
        <Counter title="Paquetes restantes" count={10} />
      </div>
      <h4 className="mt-4 font-bold text-xl">Obtener paquetes</h4>
      <p className="mb-4">¿Cuántos paquetes más vas a repartir hoy?</p>
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
      <Button>Iniciar Jornada</Button>
    </Layout>
  );
};

export default GetPackage;
