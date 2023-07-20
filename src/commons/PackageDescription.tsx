import React from "react";
import Map from "./Map";

export interface PackageDescriptionProps {
  destination?: string;
  packageId?: string;
  recipient?: string;
  originCoordinates?: {
    lat: number;
    lng: number;
  };
  destinationCoordinates?: {
    lat: number;
    lng: number;
  };
  className?: string;
  coordinates?: string;
}

const PackageDescription: React.FC<PackageDescriptionProps> = ({
  destination,
  packageId,
  recipient,
  className,
}) => {
  const originCoordinates = {
    lat: 37.7749, // Latitude of the origin
    lng: -122.4194, // Longitude of the origin
  };

  // Example coordinates for destination
  const destinationCoordinates = {
    lat: 34.0522, // Latitude of the destination
    lng: -118.2437, // Longitude of the destination
  };
  if (!destination || !packageId || !recipient) {
    return null;
  }

  return (
    <div className={`flex justify-center flex-col gap-6 ${className || ""}`}>
      <div className="flex justify-center items-center">
        {/* Render the Map component passing the coordinates */}
        <Map
          originCoordinates={originCoordinates}
          destinationCoordinates={destinationCoordinates}
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
