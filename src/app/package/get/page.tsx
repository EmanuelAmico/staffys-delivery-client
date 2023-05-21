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
    <Layout>
      <div className="flex justify-between">
        <IconButton icon={<RiArrowLeftSLine size={40} />} />
        <Counter title="Paquetes restantes" count={10} />
      </div>
      <h4 className="mt-4 font-bold text-xl">Obtener paquetes</h4>
      <p>¿Cuántos paquetes más vas a repartir hoy?</p>
      <div className="flex flex-col justify-center items-center p-8">
        {deliveryPackages.map((deliveryPackage) => (
          <>
            <DeliveryPackageCard
              key={deliveryPackage.id}
              {...deliveryPackage}
            />
            <hr />
          </>
        ))}
      </div>
    </Layout>
  );
};

export default GetPackage;
