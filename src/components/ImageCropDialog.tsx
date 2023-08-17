import React, { useState, ChangeEvent } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../hooks/cropImage";
import "../styles/crop.css";
import { croppedImageI } from "@/types/image.types";
import Button from "@/commons/Button";

interface ImageCropDialogProps {
  imageUrl?: string;
  cropInit?: { x: number; y: number };
  zoomInit?: number;
  onCancel: () => void;
  setCroppedImageFor: (props: croppedImageI, file: FileList) => void;
}

const ImageCropDialog: React.FC<ImageCropDialogProps> = ({
  imageUrl,
  cropInit,
  zoomInit,

  onCancel,
  setCroppedImageFor,
}) => {
  const [zoom, setZoom] = useState<number>(zoomInit ? zoomInit : 1);
  const [crop, setCrop] = useState<{ x: number; y: number }>(
    cropInit ? cropInit : { x: 0, y: 0 }
  );

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    height: number;
    width: number;
    x: number;
    y: number;
  }>({ height: 0, width: 0, x: 0, y: 0 });

  const onCropChange = (crop: { x: number; y: number }) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom: number) => {
    setZoom(zoom);
  };

  const onCropComplete = (
    _croppedArea: { height: number; width: number; x: number; y: number },
    croppedAreaPixels: { height: number; width: number; x: number; y: number }
  ) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(
      imageUrl as string,
      croppedAreaPixels
    );
    setCroppedImageFor(
      {
        crop,
        zoom,
        croppedImageUrl: croppedImageUrl[1],
      },
      croppedImageUrl[0] as FileList
    );
  };

  return (
    <div className="absolute z-30 flex flex-col justify-center items-center">
      <div className="backdrop"></div>
      <div className="crop-container">
        <Cropper
          image={imageUrl}
          zoom={zoom}
          crop={crop}
          aspect={1 / 1}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="w-[100%] h-[20vh] fixed bottom-1 flex flex-col justify-center items-center">
        <div className="flex flex-col w-[50%] mb-5">
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
              onZoomChange(e.target.value as unknown as number);
            }}
            className="slider"
          ></input>
        </div>
        <div className="flex justify-center w-[90%]">
          <Button className="m-3" onClick={onCancel}>
            Cancelar
          </Button>
          <Button className="m-3" onClick={onCrop}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropDialog;
