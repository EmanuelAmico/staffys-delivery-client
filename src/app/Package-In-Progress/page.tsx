import React, { FC } from "react";
import DescriptionCard from "@/components/DescriptionCard";

const page: FC = () => {
  return (
    <div className="w-full flex h-screen justify-center">
      <DescriptionCard
        title={"Reparto En Curso"}
        destination="Amenabar 2356, Caba"
        packageId="712"
        recipient="Raul Rodriguez"
        coordinates="24,25"
        buttonText="Finalizar"
      />
    </div>
  );
};

export default page;
