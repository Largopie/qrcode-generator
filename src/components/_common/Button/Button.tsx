import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { StyledButton } from './Button.style';

export type ButtonVariant = 'primary' | 'remove';
export type ButtonSize = 's' | 'm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
}

const Button = ({ variant = 'primary', size = 'm', onClick, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton $variant={variant} type='button' $size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
