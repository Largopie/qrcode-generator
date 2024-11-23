import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Header from '../components/Header';

const GlobalLayout = () => {
  return (
    <>
      <GlobalWrapper>
        <Header />
        <Outlet />
      </GlobalWrapper>
      <Footer />
    </>
  );
};

export default GlobalLayout;

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 114rem;
  min-height: calc(100vh - 7.2rem);
  margin: auto;
  overflow-y: scroll;
`;
