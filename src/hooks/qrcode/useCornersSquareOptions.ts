import type { CSSProperties } from 'react';
import { useState } from 'react';
import type { QRCodeShapeOptions } from '../../types/option';

export type CornersSquareType = 'dot' | 'extra-rounded' | 'square';

const INITIAL_CORNERS_SQUARE_OPTION: QRCodeShapeOptions<CornersSquareType> = {
  color: '#000000',
  type: 'square',
};

const useCornersSquareOptions = () => {
  const [cornersSquare, setCornersSquare] =
    useState<QRCodeShapeOptions<CornersSquareType>>(INITIAL_CORNERS_SQUARE_OPTION);

  const handleCornersSquareColorChange = (color: CSSProperties['color']) => {
    setCornersSquare((prev) => ({ ...prev, color }));
  };

  const handleCornersSquareTypeChange = (type: CornersSquareType) => {
    setCornersSquare((prev) => ({ ...prev, type }));
  };

  const reset = () => {
    setCornersSquare(INITIAL_CORNERS_SQUARE_OPTION);
  };

  return { cornersSquare, reset, handleCornersSquareColorChange, handleCornersSquareTypeChange };
};

export default useCornersSquareOptions;
