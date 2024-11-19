import type { CSSProperties } from 'styled-components';
import type { ChangeEvent } from 'react';
import * as S from '../Input.style';

interface InputProps {
  id: string;
  width: CSSProperties['width'];
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ id, width, placeholder = '', value, onChange }: InputProps) => {
  return (
    <S.StyledInput placeholder={placeholder} $width={width} id={id} type='text' value={value} onChange={onChange} />
  );
};

export default TextInput;
