import styled from 'styled-components';
import { visuallyHidden } from '../../../styles/wrapper';
import { colorPalette } from '../../../styles/colorPalette';

export const FileInputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & input {
    ${visuallyHidden}
  }
`;

export const FileInputLabel = styled.label`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colorPalette.beige};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 4px;

  &:hover {
    opacity: 0.7;
  }
`;
