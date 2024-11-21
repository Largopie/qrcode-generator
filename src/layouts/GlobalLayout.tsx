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
  width: 100vw;
  height: 100vh;
`;
