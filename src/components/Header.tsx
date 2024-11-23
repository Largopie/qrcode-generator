import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>QRCode Generator</h1>
      <h2>QR코드 생성기</h2>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  gap: 0.8rem;
  align-items: end;
  justify-content: flex-start;
  width: 100%;
  padding: 1.2rem 0;

  & h1 {
    font-size: 2.4rem;
  }

  & h2 {
    font-size: 2rem;
  }
`;
