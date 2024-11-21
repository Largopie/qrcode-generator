import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import styled from 'styled-components';

const GlobalLayout = () => {
  return (
    <GlobalWrapper>
      <Outlet />
      <Footer />
    </GlobalWrapper>
  );
};

export default GlobalLayout;

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background};
`;
