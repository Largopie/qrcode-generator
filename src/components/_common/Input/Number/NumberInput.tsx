import type { CSSProperties } from 'styled-components';
import type { ChangeEvent } from 'react';
import * as S from '../Input.style';

interface NumberInputProps {
  id: string;
  width: CSSProperties['width'];
  placeholder: string;
  min?: number;
  max?: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ id, width, placeholder = '', min, max, value, onChange }: NumberInputProps) => {
  return (
    <S.StyledInput
      placeholder={placeholder}
      $width={width}
      min={min}
      max={max}
      id={id}
      type='number'
      value={value}
      onChange={onChange}
    />
  );
};

export default NumberInput;
