import React, { FC } from "react";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import DropdownBox, { DropdownBoxProps } from "@/commons/DropdownBox";
import PackageDescription, {
  PackageDescriptionProps,
} from "@/commons/PackageDescription";
import Button, { ButtonProps } from "@/commons/Button";
import { StrictUnion } from "@/types/helper.types";
import { DeliveryFakeData } from "@/utils/FakeDataDeliveryPending";

interface DeliverysCardPropsWithDelivery
  extends DropdownBoxProps,
    PackageDescriptionProps {
  className?: string;
  delivery: true;
  packages?: DeliveryFakeData[];
  buttonProps?: ButtonProps;
  buttonText?: string;
}

interface DeliverysCardPropsWithoutDelivery
  extends DropdownBoxProps,
    PackageDescriptionProps {
  className?: string;
  delivery: false;
  packages?: DeliveryFakeData[];
  buttonProps?: ButtonProps;
}

type DeliverysCardProps = StrictUnion<
  DeliverysCardPropsWithDelivery | DeliverysCardPropsWithoutDelivery
>;

const DeliverysCard: FC<DeliverysCardProps> = ({
  title,
  description,
  delivery,
  destination,
  packageId,
  recipient,
  coordinates,
  packages,
  buttonProps,
  buttonText,
  className,
}) => {
  return (
    <div className={`${className || ""}`}>
      <DropdownBox title={title} description={description}>
        <>
          {delivery && buttonText ? (
            <div className="flex flex-col gap-4">
              <PackageDescription
                destination={destination}
                packageId={packageId}
                recipient={recipient}
                coordinates={coordinates}
              />
              <Button className="self-end" {...buttonProps}>
                {buttonText}
              </Button>
            </div>
          ) : packages ? (
            packages.map((deliveryPackage) => (
              <div key={deliveryPackage.id}>
                <DeliveryPackageCard className="mb-4" {...deliveryPackage} />
                {deliveryPackage !== packages.at(-1) && <hr className="mb-4" />}
              </div>
            ))
          ) : (
            <p>Ningun reparto añadido aun</p>
          )}
        </>
      </DropdownBox>
    </div>
  );
};

export default DeliverysCard;
