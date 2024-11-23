import styled from 'styled-components';
import { colorPalette } from '../styles/colorPalette';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>
          Copyright © 2024, <StyledLink href='https://github.com/Largopie'>@largopie(snakta)</StyledLink>. All rights
          reserved.
        </p>
        <p>Email: jae990320@gmail.com</p>
      </div>

      <a href='https://hits.seeyoufarm.com'>
        <img
          alt=''
          src='https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Flargopie.github.io%2Fqrcode-generator%2F&count_bg=%23BD93F9&title_bg=%2344475A&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false'
        />
      </a>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.2rem;
  padding: 0 7rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${colorPalette.darkblue};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.main};

  &:hover {
    opacity: 0.7;
  }
`;
