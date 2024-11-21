import type { CSSProperties } from 'styled-components';
import styled from 'styled-components';
import { colorPalette } from '../../../styles/colorPalette';

export const Wrapper = styled.section<{ $width: CSSProperties['width'] }>`
  width: ${({ $width }) => $width};
  background-color: inherit;
  border-radius: 4px 4px 0 0;
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${colorPalette.darkblue};
  border-radius: 4px 4px 0 0;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const ArrowContainer = styled.div<{ $isOpen: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const ContentWrapper = styled.div<{ $hidden: boolean }>`
  width: 100%;
  max-height: ${({ $hidden }) => ($hidden ? 0 : '100rem')};
  padding: ${({ $hidden }) => ($hidden ? '0 1.2rem 0 1.2rem' : '1.2rem')};
  overflow: hidden;
  background-color: ${colorPalette.white};
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transition: all 0.5s ease-in-out;
`;
