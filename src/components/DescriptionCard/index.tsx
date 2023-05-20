import React, { FC } from "react";
import PackageDescription, {
  PackageDescriptionProps,
} from "../../commons/PackageDescription";

interface DescriptionCardProps extends PackageDescriptionProps {
  title: string;
  buttonText: string;
}

const DescriptionCard: FC<DescriptionCardProps> = () => {
  return (
    <div>
      <PackageDescription
        destination="Av Cabildo 7474"
        packageId="74"
        recipient="Raul Rodriguez"
        coordinates="24,28"
      />
    </div>
  );
};

export default DescriptionCard;
