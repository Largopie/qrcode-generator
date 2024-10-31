import { useState } from 'react';

export interface ImageOptionsForQRCode {
  hideBackgroundDots: boolean;
  imageSize: number;
  margin: number;
}

interface ImageOptions {
  hideBackgroundDots: boolean;
  imageSize: string;
  margin: string;
}

const INITIAL_IMAGE_OPTIONS: ImageOptions = {
  hideBackgroundDots: false,
  imageSize: '0.4',
  margin: '0',
};

const useImageOptions = () => {
  const [image, setImage] = useState<ImageOptions>(INITIAL_IMAGE_OPTIONS);
  const imageForQRCode: ImageOptionsForQRCode = {
    ...image,
    imageSize: Number(image.imageSize),
    margin: Number(image.margin),
  };

  const handleHideBackgroundDotsChange = (hideBackgroundDots: boolean) => {
    setImage((prev) => ({ ...prev, hideBackgroundDots }));
  };

  const handleImageSizeChange = (imageSize: string) => {
    setImage((prev) => ({ ...prev, imageSize }));
  };

  const handleImageMarginChange = (margin: string) => {
    setImage((prev) => ({ ...prev, margin }));
  };

  const reset = () => {
    setImage(INITIAL_IMAGE_OPTIONS);
  };

  return { image, imageForQRCode, reset, handleHideBackgroundDotsChange, handleImageSizeChange, handleImageMarginChange };
};

export default useImageOptions;
