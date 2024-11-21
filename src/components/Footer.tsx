import styled from 'styled-components';
import { colorPalette } from '../styles/colorPalette';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright © 2024, @snakta. All rights reserved.</p>
      <p>Email: jae990320@gmail.com</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 7.2rem;
  padding: 0 7rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${colorPalette.darkblue};
`;
