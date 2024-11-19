import type { CSSProperties } from 'react';
import { useState } from 'react';

interface BackGroundOptions {
  color: CSSProperties['color'];
}

const INITIAL_BACKGROUND_OPTION: BackGroundOptions = {
  color: '#fff',
};

const useBackgroundOptions = () => {
  const [background, setBackground] = useState(INITIAL_BACKGROUND_OPTION);

  const handleBackgroundColorChange = (color: CSSProperties['color']) => {
    setBackground((prev) => ({ ...prev, color }));
  };

  return { background, handleBackgroundColorChange };
};

export default useBackgroundOptions;
