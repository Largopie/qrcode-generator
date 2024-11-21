import type { RuleSet } from 'styled-components';
import styled, { css } from 'styled-components';
import type { ButtonSize, ButtonType } from './Button';
import { colorPalette } from '../../../styles/colorPalette';

// button Type 관련 스타일 정의
const primary = css`
  color: ${(props) => props.theme.colors.background};
  background-color: ${({ theme }) => theme.colors.main};
`;

const remove = css`
  color: ${colorPalette.red};
  background-color: inherit;
  border: 1px solid ${colorPalette.red};
`;

const buttonType: Record<ButtonType, RuleSet<object>> = {
  primary,
  remove,
};

// button size 관련 스타일 정의
const medium = css`
  width: 14rem;
  height: 4rem;
`;

const small = css`
  width: 10rem;
  height: 3.2rem;
`;

const buttonSize: Record<ButtonSize, RuleSet<object>> = {
  m: medium,
  s: small,
};

export const StyledButton = styled.button<{ type: ButtonType; size: ButtonSize }>`
  ${({ type }) => buttonType[type]}
  ${({ size }) => buttonSize[size]}
  
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
  }
`;
