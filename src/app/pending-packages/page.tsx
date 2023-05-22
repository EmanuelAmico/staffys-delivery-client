import React from "react";
import Layout from "@/commons/Layout";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
function PendingPackages() {
  const deliveryPackages = [
    {
      id: 1,
      destination: "Calle 1",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 2,
      destination: "Calle 2",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 3,
      destination: "Calle 3",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 4,
      destination: "Calle 4",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 5,
      destination: "Calle 5",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 6,
      destination: "Calle 6",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 6,
      destination: "Calle 6",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 6,
      destination: "Calle 6",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 6,
      destination: "Calle 6",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
    {
      id: 6,
      destination: "Calle 6",
      addressee: "Juan Perez",
      distance: "1.5 km",
      buttonText: "Iniciar",
      trash: false,
    },
  ];

  return (
    <Layout className="overflow-y-scroll items-center ">
      <div className=" w-full flex justify-start mt-[3rem] font-bold text-3xl text-black">
        <h1 className="ml-3">Repartos Pendientes:</h1>
      </div>

      <div className="w-[90%] mt-[1rem] border-t-2 flex  flex-col items-center overflow-y-scroll">
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
}

export default PendingPackages;
