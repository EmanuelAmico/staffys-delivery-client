import React, { FC } from "react";
import DescriptionCard from "@/components/DescriptionCard";

import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";

const page: FC = () => {
  return (
    <>
      <div className="w-full flex  justify-center items-center flex-col">
        <div className="w-full mt-3">
          <IconButton icon={<RiArrowLeftSLine size={40} />} />
        </div>

        <DescriptionCard
          title={"Reparto En Curso"}
          destination="Amenabar 2356, Caba"
          packageId="712"
          recipient="Raul Rodriguez"
          coordinates="24,25"
          buttonText="Finalizar"
        />
      </div>
    </>
  );
};

export default page;
