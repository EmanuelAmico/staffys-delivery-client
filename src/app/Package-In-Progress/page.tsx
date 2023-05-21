import React, { FC } from "react";
import DescriptionCard from "@/components/DescriptionCard";
import Navbar from "../../components/Header";
import Image from "next/image";

const page: FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex  justify-center items-center flex-col">
        <div className="w-full">
          <Image
            src="/images/arrowleft.svg"
            alt="arrowleft"
            className="w-[2rem]  mt-4 ml-2"
            width={100}
            height={10}
          />
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
