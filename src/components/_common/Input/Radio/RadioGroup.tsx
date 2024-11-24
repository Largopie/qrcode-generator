import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import RadioContext from './RadioContext';

export interface RadioGroupProps<T> {
  name: string;
  value: T;
  onChange: (value: T) => void;
}

const RadioGroup = <RadioType extends string>({
  children,
  name,
  value,
  onChange,
}: PropsWithChildren<RadioGroupProps<RadioType>>) => {
  return (
    <StyledFieldSet>
      <RadioContext.Provider value={{ name, value, onChange }}>{children}</RadioContext.Provider>
    </StyledFieldSet>
  );
};

export default RadioGroup;

const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & input[type='radio'] {
    width: 2rem;
    height: 2rem;
    appearance: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    transition: border 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 3px #d1d1d1;
    }

    &:checked {
      border: 6px solid ${({ theme }) => theme.colors.main};
    }

    &:disabled {
      cursor: not-allowed;
      border: 1px solid #d1d1d1;
      box-shadow: none;
    }
  }

  & label {
    display: flex;
    align-items: center;
  }
`;
