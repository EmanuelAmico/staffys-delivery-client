import React, { FC } from "react";
import Image from "next/image";

export interface PackageDescriptionProps {
  destination?: string;
  packageId?: string;
  recipient?: string;
  coordinates?: string;
  className?: string;
}
const PackageDescription: FC<PackageDescriptionProps> = ({
  destination,
  packageId,
  recipient,
  className,
}) => {
  return (
    <div className={`flex justify-center flex-col gap-6 ${className || ""}`}>
      <div className="flex justify-center items-center">
        <Image
          src={"/svg/mapcoordinatesdelivery.svg"}
          alt="map"
          width={20}
          height={20}
          className="w-[335px] h-[290px] object-cover "
        />
      </div>
      <div className="text-1xl ">
        <p className="font-bold">
          Destino:<span className="font-normal ml-1">{destination}</span>
        </p>
        <p className="font-bold">
          # del paquete:<span className="font-normal ml-1">{packageId}</span>
        </p>
        <p className="font-bold">
          Recibe:<span className="font-normal ml-1">{recipient}</span>
        </p>
      </div>
    </div>
  );
};

export default PackageDescription;
