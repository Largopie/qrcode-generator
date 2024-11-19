import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Label from './Label';
import TextInput from './Text/TextInput';
import NumberInput from './Number/NumberInput';

const InputContainer = ({ children }: PropsWithChildren) => {
  return <StyledInputContainer>{children}</StyledInputContainer>;
};

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Input = Object.assign(InputContainer, {
  Text: TextInput,
  Number: NumberInput,
  Label: Label,
});
