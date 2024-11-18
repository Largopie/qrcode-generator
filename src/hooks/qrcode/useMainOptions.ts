import { useState } from 'react';
import useImage from './useImage';

interface MainOptionsForQRCode {
  data: string;
  width: number;
  height: number;
  image: string;
  margin: number;
}

interface MainOptions {
  data: string;
  width: string;
  height: string;
  margin: string;
}

const INITIAL_MAIN_OPTIONS: MainOptions = {
  data: 'https://momonow.kr',
  width: '300',
  height: '300',
  margin: '10',
};

const useMainOptions = () => {
  const [mainData, setMainData] = useState<MainOptions>(INITIAL_MAIN_OPTIONS);
  const { imageURL, value: imageValue, handleImageChange } = useImage();

  const mainDataForQRCode: MainOptionsForQRCode = {
    ...mainData,
    image: imageURL,
    width: Number(mainData.width),
    height: Number(mainData.height),
    margin: Number(mainData.margin),
  };

  const handleDataChange = (data: string) => {
    setMainData((prev) => ({ ...prev, data }));
  };

  const handleWidthChange = (width: string) => {
    setMainData((prev) => ({ ...prev, width }));
  };

  const handleHeightChange = (height: string) => {
    setMainData((prev) => ({ ...prev, height }));
  };

  const handleMarginChange = (margin: string) => {
    setMainData((prev) => ({ ...prev, margin }));
  };

  const reset = () => {
    setMainData(INITIAL_MAIN_OPTIONS);
  };

  return {
    mainData,
    mainDataForQRCode,
    imageValue,
    reset,
    handleDataChange,
    handleWidthChange,
    handleHeightChange,
    handleImageChange,
    handleMarginChange,
  };
};

export default useMainOptions;
