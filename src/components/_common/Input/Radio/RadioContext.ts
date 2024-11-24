import { createContext, useContext } from 'react';
import type { RadioGroupProps } from './RadioGroup';

// export const createRadioContext = <T>() => createContext({} as RadioGroupProps<T>);
// export const useRadioContext = <T>() => useContext(createRadioContext<T>());

const RadioContext = createContext<RadioGroupProps<any> | null>(null);

export const useRadioContext = <T extends string>() => {
  const context = useContext(RadioContext);

  if (!context) {
    throw new Error('useRadioContext는 RadioGroup과 함께 사용되어야 합니다.');
  }

  return context as RadioGroupProps<T>;
};

export default RadioContext;
