import { PropsWithChildren } from 'react';
import { StyledButton } from './Button.style';

export type ButtonType = 'primary' | 'remove';
export type ButtonSize = 's' | 'm';

interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
}

const Button = ({ type = 'primary', size = 'm', children }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton type={type} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
