import { type PropsWithChildren } from 'react';
import { useRadioContext } from './RadioContext';

interface RadioProps<T> {
  value: T;
  disabled?: boolean;
}

const Radio = <T extends string>({ children, value, disabled = false }: PropsWithChildren<RadioProps<T>>) => {
  const group = useRadioContext<T>();

  return (
    <label>
      <input
        type='radio'
        name={group.name}
        value={value}
        onChange={() => group.onChange(value)}
        checked={group.value === value}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};

export default Radio;
