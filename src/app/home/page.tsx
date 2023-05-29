"use client";

import React from "react";
import DeliverysCard from "@/components/DeliverysCard";
import Layout from "@/commons/Layout";
import Button from "@/commons/Button";
import { deliveryHistory } from "@/utils/FakeDataDeliveryHistory";
import { deliveryPending } from "@/utils/FakeDataDeliveryPending";
import { useRouter } from "next/navigation";

const Home = () => {
  const { push } = useRouter();

  return (
    <Layout className="flex gap-4">
      <Button
        onClick={() => push("/package/get")}
        className="font-medium w-full"
      >
        Obtener paquetes
      </Button>
      <DeliverysCard
        title="Reparto en curso"
        description="Tienes un reparto en curso"
        destination="Amenabar 2356, Caba"
        packageId="712"
        recipient="Raul Rodriguez"
        coordinates="24,25"
        buttonText="Finalizar"
        delivery={true}
      />
      <DeliverysCard
        title="Repartos pendientes"
        description="No tenes 6 repartos pendientes"
        delivery={false}
        packages={deliveryPending}
      />
      <DeliverysCard
        title="Historial de repartos"
        description="Ya repartiste 6 paquetes"
        delivery={false}
        packages={deliveryHistory}
      />
    </Layout>
  );
};

export default Home;
