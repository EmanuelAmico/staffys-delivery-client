import React, { FC } from "react";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import DropdownBox, { DropdownBoxProps } from "@/commons/DropdownBox";
import PackageDescription, {
  PackageDescriptionProps,
} from "@/commons/PackageDescription";
import Button, { ButtonProps } from "@/commons/Button";
import { StrictUnion } from "@/types/helper.types";
import { DeliveryFakeData } from "@/utils/FakeDataDeliveryPending";
import { useRouter } from "next/navigation";

interface DeliveryCollapsibleBoxWithDelivery
  extends DropdownBoxProps,
    PackageDescriptionProps {
  className?: string;
  packages?: DeliveryFakeData[];
  buttonProps?: ButtonProps;
  buttonText?: string;
  delivery: true;
}

interface DeliveryCollapsibleBoxWithoutDelivery
  extends DropdownBoxProps,
    PackageDescriptionProps {
  className?: string;
  packages?: DeliveryFakeData[];
  buttonProps?: ButtonProps;
  pathButton?: string;
  delivery: false;
}

type DeliveryCollapsibleBoxProps = StrictUnion<
  DeliveryCollapsibleBoxWithDelivery | DeliveryCollapsibleBoxWithoutDelivery
>;

const DeliveryCollapsibleBox: FC<DeliveryCollapsibleBoxProps> = ({
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
  pathButton,
  className,
}) => {
  const { push } = useRouter();

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
            <>
              {packages.map((deliveryPackage) => (
                <div key={deliveryPackage.id}>
                  <DeliveryPackageCard
                    className="mb-4"
                    {...deliveryPackage}
                    onClick={() =>
                      push(`package/description/${deliveryPackage.id}`)
                    }
                  />
                  {deliveryPackage !== packages.at(-1) && (
                    <hr className="mb-4" />
                  )}
                </div>
              ))}
              {pathButton ? (
                <Button
                  onClick={() => push(pathButton)}
                  className="m-auto py-[0.20rem]"
                  {...buttonProps}
                >
                  Ver Mas
                </Button>
              ) : null}
            </>
          ) : (
            <p>Ningun reparto añadido aun</p>
          )}
        </>
      </DropdownBox>
    </div>
  );
};

export default DeliveryCollapsibleBox;
