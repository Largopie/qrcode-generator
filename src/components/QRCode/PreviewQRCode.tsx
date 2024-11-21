import type QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colorPalette } from '../../styles/colorPalette';

interface PreviewQRCodeProps {
  qrCode: QRCodeStyling;
}

const PreviewQRCode = ({ qrCode }: PreviewQRCodeProps) => {
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current ? ref.current : undefined);
  }, [qrCode]);

  return (
    <Wrapper>
      <div ref={ref} />
    </Wrapper>
  );
};

export default PreviewQRCode;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  border: 1px solid ${colorPalette.darkblue};
  border-radius: 4px;

  canvas {
    width: 100%;
    max-width: 28rem;
    height: 100%;
    max-height: 28rem;
    aspect-ratio: auto;
  }
`;
