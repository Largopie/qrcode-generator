import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import InputText from './InputText';
import Label from './Label';

const InputContainer = ({ children }: PropsWithChildren) => {
  return <StyledInputContainer>{children}</StyledInputContainer>;
};

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Input = Object.assign(InputContainer, {
  Text: InputText,
  Label: Label,
});
