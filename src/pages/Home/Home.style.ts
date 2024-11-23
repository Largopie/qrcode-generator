import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  max-width: 114rem;
  border: 4px solid ${({ theme }) => theme.colors.main};
  border-radius: 4px;
`;

export const OptionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 76rem;
  padding: 4rem;
`;

export const PreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background-color: ${colorPalette.white};
`;

export const OptionFlexWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;
