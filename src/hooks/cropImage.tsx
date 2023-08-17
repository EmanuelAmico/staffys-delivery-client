const createImage = (url: string) =>
  new Promise<CanvasImageSource>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
    return image;
  });

const createObjImage = (url: string) =>
  new Promise<{ height: number; width: number }>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
    return image;
  });

function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { width: number; height: number; x: number; y: number },
  rotation = 0
): Promise<[File | FileList, string]> {
  const imageObj = await createObjImage(imageSrc);
  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const maxSize = Math.max(imageObj.width, imageObj.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx?.translate(safeArea / 2, safeArea / 2);
  ctx?.rotate(getRadianAngle(rotation));
  ctx?.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  ctx?.drawImage(
    image,
    safeArea / 2 - imageObj.width * 0.5,
    safeArea / 2 - imageObj.height * 0.5
  );
  const data = ctx?.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx?.putImageData(
    data as ImageData,
    Math.round(0 - safeArea / 2 + imageObj.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + imageObj.height * 0.5 - pixelCrop.y)
  );

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      const newFile = new File([file] as BlobPart[], "fileName.jpg", {
        type: "image/jpeg",
      });
      const toResolve: [File | FileList, string] = [
        newFile,
        URL.createObjectURL(file as Blob),
      ];
      resolve(toResolve);
    }, "image/jpeg");
  });
}
