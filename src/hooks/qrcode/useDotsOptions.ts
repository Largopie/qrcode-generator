import type { CSSProperties } from 'react';
import { useState } from 'react';
import type { QRCodeShapeOptions } from '../../types/option';

export type DotsType = 'classy' | 'classy-rounded' | 'dots' | 'extra-rounded' | 'rounded' | 'square';

const INITIAL_DOTS_OPTION: QRCodeShapeOptions<DotsType> = {
  color: '#000000',
  type: 'square',
};

const useDotsOptions = () => {
  const [dots, setDots] = useState<QRCodeShapeOptions<DotsType>>(INITIAL_DOTS_OPTION);

  const handleDotsTypeChange = (type: DotsType) => {
    setDots((prev) => ({ ...prev, type: type }));
  };

  const handleDotsColorChange = (color: CSSProperties['color']) => {
    setDots((prev) => ({ ...prev, color: color }));
  };

  const reset = () => {
    setDots(INITIAL_DOTS_OPTION);
  };

  return { dots, reset, handleDotsTypeChange, handleDotsColorChange };
};

export default useDotsOptions;
