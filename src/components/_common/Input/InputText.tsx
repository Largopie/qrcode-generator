import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import { colorPalette } from '../../../styles/colorPalette';
import type { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  width: CSSProperties['width'];
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({ id, width, placeholder = '', value, onChange }: InputProps) => {
  return <StyledInput placeholder={placeholder} width={width} id={id} type='text' value={value} onChange={onChange} />;
};

export default InputText;

const StyledInput = styled.input<{ width: CSSProperties['width'] }>`
  width: ${({ width }) => width};
  height: 4.4rem;
  padding: 0.8rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.color};
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: 4px;

  &::placeholder {
    color: ${colorPalette.darkblue};
  }

  &:focus {
    outline: none;
  }
`;
