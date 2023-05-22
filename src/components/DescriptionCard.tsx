import React, { FC } from "react";
import PackageDescription, {
  PackageDescriptionProps,
} from "@/commons/PackageDescription";
import Button, { ButtonProps } from "@/commons/Button";
import Card, { CardProps } from "@/commons/Card";

interface DescriptionCardProps
  extends PackageDescriptionProps,
    Omit<CardProps, "children">,
    Omit<ButtonProps, "children" | "loading"> {
  title: string;
  buttonText: string;
}

const DescriptionCard: FC<DescriptionCardProps> = ({
  destination,
  packageId,
  recipient,
  coordinates,
  title,
  buttonText,
  ...buttonProps
}) => {
  return (
    <div className="bg-white w-[90%] mt-8 rounded-lg shadow-lg h-[37rem] ">
      <Card title={title}>
        <PackageDescription
          destination={destination}
          packageId={packageId}
          recipient={recipient}
          coordinates={coordinates}
        />
        <div className="flex justify-end w-full">
          <Button className="mt-6" {...buttonProps}>
            {buttonText}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DescriptionCard;
