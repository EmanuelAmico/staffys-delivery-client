import React, { FC, useContext } from "react";
import DeliveryPackageCard from "@/commons/DeliveryPackageCard";
import DropdownBox, { DropdownBoxProps } from "@/commons/DropdownBox";
import PackageDescription, {
  PackageDescriptionProps,
} from "@/commons/PackageDescription";
import Button, { ButtonProps } from "@/commons/Button";
import { StrictUnion } from "@/types/helper.types";
import { DeliveryFakeData } from "@/utils/FakeDataDeliveryPending";
import { useRouter } from "next/navigation";
import { CheckRefreshContext } from "@/context/refresh";

interface DeliveryCollapsibleBoxWithDelivery
  extends DropdownBoxProps,
    PackageDescriptionProps {
  className?: string;
  packages?: DeliveryFakeData[];
  buttonProps?: Omit<ButtonProps, "children"> &
    Partial<Pick<ButtonProps, "children">>;
  buttonText?: string;
  delivery: true;
}

interface DeliveryCollapsibleBoxWithoutDelivery
  extends DropdownBoxProps,
    PackageDescriptionProps {
  className?: string;
  packages?: DeliveryFakeData[];
  buttonProps?: Omit<ButtonProps, "children"> &
    Partial<Pick<ButtonProps, "children">>;
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
  coordinatesPackage,
  coordinatesUser,
  packages,
  buttonProps,
  buttonText,
  pathButton,
  className,
}) => {
  const { push } = useRouter();
  const { changeRefresh } = useContext(CheckRefreshContext);

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
                coordinatesUser={coordinatesUser}
                coordinatesPackage={coordinatesPackage}
              />
              <Button className="self-end" {...buttonProps}>
                {buttonText}
              </Button>
            </div>
          ) : packages ? (
            <>
              {packages.map((deliveryPackage) => (
                <div key={deliveryPackage.id + Date.now().toString()}>
                  <DeliveryPackageCard
                    className="mb-4"
                    deliveryPackage={{
                      city: deliveryPackage.destination,
                      receptorName: deliveryPackage.addressee,
                      status: deliveryPackage.status || null,
                    }}
                    buttonText={deliveryPackage.buttonText || ""}
                    trash={deliveryPackage.trash}
                    status={deliveryPackage.status || null}
                    buttonProps={deliveryPackage.buttonProps}
                    onClick={() => {
                      changeRefresh();
                      push(`package/description/${deliveryPackage.id}`);
                    }}
                  />
                  {deliveryPackage !== packages.at(-1) && (
                    <hr className="mb-4" />
                  )}
                </div>
              ))}
              {pathButton ? (
                <Button
                  onClick={() => {
                    changeRefresh();
                    push(pathButton);
                  }}
                  className="m-auto py-[0.20rem]"
                  {...buttonProps}
                >
                  Ver Mas
                </Button>
              ) : null}
            </>
          ) : null}
        </>
      </DropdownBox>
    </div>
  );
};

export default DeliveryCollapsibleBox;
