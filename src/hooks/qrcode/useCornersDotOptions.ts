import { CSSProperties, useState } from 'react';
import { QRCodeShapeOptions } from '../../types/option';

export type CornersDotType = 'square' | 'dot';

const INITIAL_CORNERS_DOT_OPTION: QRCodeShapeOptions<CornersDotType> = {
  color: '#000000',
  type: 'square',
};

const useCornersDotOptions = () => {
  const [cornersDot, setCornersDot] = useState<QRCodeShapeOptions<CornersDotType>>(INITIAL_CORNERS_DOT_OPTION);

  const handleCornersDotColorChange = (color: CSSProperties['color']) => {
    setCornersDot((prev) => ({ ...prev, color }));
  };

  const handleCornersDotTypeChange = (type: CornersDotType) => {
    setCornersDot((prev) => ({ ...prev, type }));
  };

  const reset = () => {
    setCornersDot(INITIAL_CORNERS_DOT_OPTION);
  };

  return { cornersDot, reset, handleCornersDotColorChange, handleCornersDotTypeChange };
};

export default useCornersDotOptions;
