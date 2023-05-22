import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";
import IconButton, { IconButtonProps } from "./IconButton";
import Image from "next/image";
import imgpackage from "../../public/svg/package.svg";
import { BsFillTrash3Fill } from "react-icons/bs";

interface DeliveryPackageCardProps {
  destination: string;
  addressee: string;
  distance: string;
  trash: boolean;
  buttonText: string;
  status?: string;
  buttonProps?: ButtonProps;
  iconProps?: IconButtonProps;
  className?: string;
}

const DeliveryPackageCard: FC<DeliveryPackageCardProps> = ({
  destination,
  addressee,
  distance,
  status,
  buttonText,
  trash,
  buttonProps,
  iconProps,
  className,
}) => {
  return (
    <div
      className={`bg-whiteBackground rounded-lg shadow-md ${className || ""}`}
    >
      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center justify-center bg-grayBackground h-32 w-32 rounded-lg">
          <Image src={imgpackage} alt="package" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-9">
            <p className="text-greyText font-bold">
              Destino:{" "}
              <span className="text-greyText font-normal">{`${destination}`}</span>
            </p>
            {trash ? (
              <IconButton
                icon={
                  <BsFillTrash3Fill
                    className="fill-redIcon hover:fill-hoverRedIcon"
                    size={20}
                  />
                }
                {...iconProps}
              />
            ) : null}
          </div>
          <p className="text-greyText font-bold">
            Recibe:{" "}
            <span className="text-greyText font-normal">{`${addressee}`}</span>
          </p>
          <p className="text-greyText font-bold">
            Distancia:{" "}
            <span className="text-greyText font-normal">{`${distance}`}</span>
          </p>
          <div className="self-end pt-3">
            {status ? (
              status === "in progress" ? (
                <p className="font-bold text-yellowText">En curso</p>
              ) : (
                <p className="font-bold ">Entregado</p>
              )
            ) : (
              <Button className={"text-xs"} {...buttonProps}>
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
