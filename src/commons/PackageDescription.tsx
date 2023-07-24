import React from "react";
import Map from "./Map";

export interface PackageDescriptionProps {
  destination?: string;
  packageId?: string;
  recipient?: string;
  coordinatesPackage?: {
    lat: number;
    lng: number;
  };
  coordinatesUser?: {
    lat: number;
    lng: number;
  };
  className?: string;
}

const PackageDescription: React.FC<PackageDescriptionProps> = ({
  destination,
  packageId,
  recipient,
  className,
  coordinatesPackage,
  coordinatesUser,
}) => {
  if (!destination || !packageId || !recipient) {
    return null;
  }

  return (
    <div className={`flex justify-center flex-col gap-6 ${className || ""}`}>
      <div className="flex justify-center items-center">
        {/* Render the Map component passing the coordinates */}

        <Map
          originCoordinates={coordinatesUser}
          destinationCoordinates={coordinatesPackage}
        />
      </div>
      <div className="text-1xl">
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
