import React, { FC } from "react";
import Image from "next/image";

export interface PackageDescriptionProps {
  destination: string;
  packageId: string;
  recipient: string;
  coordinates: string;
}
const PackageDescription: FC<PackageDescriptionProps> = ({
  destination,
  packageId,
  recipient,
}) => {
  return (
    <div className="flex justify-center flex-col w-4/5">
      <div>
        <Image
          src={"/images/moto.svg"}
          alt="Example"
          width={20}
          height={20}
          className="w-[80px] h-[60px]"
        />
      </div>
      <div>
        <p>Destino:{destination}</p>
        <p># del paquete:{packageId}</p>
        <p>Recibe:{recipient}</p>
      </div>
    </div>
  );
};

export default PackageDescription;
