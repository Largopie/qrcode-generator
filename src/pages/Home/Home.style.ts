import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 114rem;
  border: 4px solid ${({ theme }) => theme.colors.main};
  border-radius: 4px;
`;

export const OptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 68rem;
  padding: 4rem;
`;

export const PreviewContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;
