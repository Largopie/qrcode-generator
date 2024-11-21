import type QRCodeStyling from 'qr-code-styling';
import PreviewQRCode from './PreviewQRCode';
import useDownload from '../../hooks/qrcode/useDownload';
import styled from 'styled-components';
import Button from '../_common/Button/Button';
import { colorPalette } from '../../styles/colorPalette';

interface DownloadQRCodeProps {
  qrCode: QRCodeStyling;
}

const DownloadQRCode = ({ qrCode }: DownloadQRCodeProps) => {
  const { fileExt, onDownloadClick, onExtensionChange } = useDownload(qrCode);

  return (
    <Wrapper>
      <PreviewQRCode qrCode={qrCode} />
      <ButtonContainer>
        <StyledSelect onChange={onExtensionChange} value={fileExt}>
          <option value='png'>PNG</option>
          <option value='jpeg'>JPEG</option>
          <option value='webp'>WEBP</option>
        </StyledSelect>
        <Button variant='primary' size='m' onClick={onDownloadClick}>
          Download
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default DownloadQRCode;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledSelect = styled.select`
  width: 14rem;
  padding: 0 1.2rem;
  font-weight: 600;
  color: ${colorPalette.purple};
  background-color: ${colorPalette.white};
  border: 2px solid ${colorPalette.purple};
  border-radius: 4px;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
