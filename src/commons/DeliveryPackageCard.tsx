import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";
import IconButton, { IconButtonProps } from "./IconButton";
import Image from "next/image";
import imgpackage from "../../public/svg/package.svg";
import { BsFillTrash3Fill } from "react-icons/bs";
import { Package } from "@/types/package.types";

export interface DeliveryPackageCardProps {
  _id?: string;
  deliveryPackage?: Pick<
    Package,
    "city" | "receptorName" | "distance" | "status" | "weight"
  >;
  destination?: string;
  receptorName?: string;
  weight?: number;
  distance?: number;
  status: "taken" | "delivered" | "in_progress" | "pending" | null;
  trash: boolean;
  buttonText: string;
  buttonProps?: Omit<ButtonProps, "children"> &
    Partial<Pick<ButtonProps, "children">>;
  iconProps?: IconButtonProps;
  className?: string;
  onClick?: () => void;
}

const DeliveryPackageCard: FC<DeliveryPackageCardProps> = ({
  deliveryPackage,
  trash,
  buttonText,
  buttonProps,
  iconProps,
  className,
  onClick,
}) => {
  const { city, receptorName, distance, status, weight } =
    deliveryPackage || {};

  return (
    <div
      className={`bg-whiteBackground rounded-lg shadow-md ${className || ""}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && onClick && onClick()}
    >
      <div className="flex items-center gap-3 p-3">
        <div className="flex items-center justify-center bg-grayBackground h-24 w-24 rounded-lg">
          <Image src={imgpackage} alt="package" />
        </div>
        <div className="flex flex-col gap-[0.20rem] grow">
          <div className="flex gap-9 justify-between">
            <p className="text-greyText font-bold text-sm">
              Destino:{" "}
              <span className="text-greyText font-normal text-sm">{`${city}`}</span>
            </p>
            {trash ? (
              <IconButton
                icon={
                  <BsFillTrash3Fill
                    className="fill-redIcon hover:fill-hoverRedIcon"
                    size={18}
                  />
                }
                {...iconProps}
              />
            ) : null}
          </div>
          <p className="text-greyText font-bold text-sm">
            Recibe:{" "}
            <span className="text-greyText font-normal text-sm">{`${receptorName}`}</span>
          </p>
          {distance ? (
            <p className="text-greyText font-bold text-sm">
              Distancia:{" "}
              <span className="text-greyText font-normal text-sm">{`${distance} km`}</span>
            </p>
          ) : (
            <p className="text-greyText font-bold text-sm">
              Peso:{" "}
              <span className="text-greyText font-normal text-sm">{`${weight} kg`}</span>
            </p>
          )}
          <div className="self-end pt-1">
            {status ? (
              status === "in_progress" ? (
                <p className="font-bold text-yellowText">En curso</p>
              ) : (
                <p className="font-bold ">Entregado</p>
              )
            ) : (
              <Button
                className={"text-[0.70rem] py-[0.20rem]"}
                {...buttonProps}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPackageCard;
