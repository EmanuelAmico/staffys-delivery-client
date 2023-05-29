import React, { FC } from "react";

import IconButton from "@/commons/IconButton";
import { RiArrowLeftSLine } from "react-icons/ri";
import Card from "@/commons/Card";
import PackageDescription from "@/commons/PackageDescription";
import Layout from "@/commons/Layout";

const SinglePackageDescription: FC = () => {
  return (
    <Layout className="h-[93%] items-center">
      <div className="w-full mt-3">
        <IconButton icon={<RiArrowLeftSLine size={40} />} />
      </div>
      <Card
        title="Reparto finalizado"
        className="flex justify-center bg-white w-[90%] mt-8 rounded-lg shadow-lg h-[37rem]"
      >
        <PackageDescription
          destination="Amenabar 2356, Caba"
          packageId="712"
          recipient="Raul Rodriguez"
          coordinates="24,25"
        />
      </Card>
    </Layout>
  );
};

export default SinglePackageDescription;
