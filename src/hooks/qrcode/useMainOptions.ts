import { useState } from 'react';

interface MainOptionsForQRCode {
  data: string;
  width: number;
  height: number;
  imageURL: string;
  margin: number;
}

interface MainOptions {
  data: string;
  width: string;
  height: string;
  imageURL: string;
  margin: string;
}

const INITIAL_MAIN_OPTIONS: MainOptions = {
  data: 'https://momonow.kr',
  width: '300',
  height: '300',
  imageURL: '',
  margin: '10',
};

const useMainOptions = () => {
  const [mainData, setMainData] = useState<MainOptions>(INITIAL_MAIN_OPTIONS);

  const mainDataForQRCode: MainOptionsForQRCode = {
    ...mainData,
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

  const handleImageURLChange = (imageURL: string) => {
    setMainData((prev) => ({ ...prev, imageURL }));
  };

  const handleMarginChange = (margin: string) => {
    setMainData((prev) => ({ ...prev, margin }));
  };

  const reset = () => {
    setMainData(INITIAL_MAIN_OPTIONS);
  };

  return { mainData, mainDataForQRCode, reset, handleDataChange, handleWidthChange, handleHeightChange, handleImageURLChange, handleMarginChange };
};

export default useMainOptions;
