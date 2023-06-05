"use client";
import React from "react";
import IconButton from "@/commons/IconButton";
import Card from "@/commons/Card";
import PackageDescription from "@/commons/PackageDescription";
import Layout from "@/commons/Layout";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const SinglePackageDescription = () => {
  const { back } = useRouter();

  return (
    <Layout className="items-center">
      <IconButton
        onClick={() => back()}
        icon={<RiArrowLeftSLine size={40} />}
        className="self-start"
      />
      <Card title="Reparto finalizado">
        <PackageDescription
          className="pt-6"
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
