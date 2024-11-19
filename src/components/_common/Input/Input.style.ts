import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import { colorPalette } from '../../../styles/colorPalette';

export const StyledInput = styled.input<{ $width: CSSProperties['width'] }>`
  width: ${({ $width }) => $width};
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
