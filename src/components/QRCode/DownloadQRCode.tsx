import { useEffect, useMemo } from 'react';
import { useAtomValue } from 'jotai';
import styled from 'styled-components';

import { colorPalette } from '../../styles/colorPalette';

import QRCodeStyling from 'qr-code-styling';
import useDownload from '../../hooks/qrcode/useDownload';

import PreviewQRCode from './PreviewQRCode';
import Button from '../_common/Button/Button';

import { mainOptionAtom } from '../../store/client/mainOption';
import { dotsOptionAtom } from '../../store/client/dotsOption';
import { cornersDotOptionAtom, cornerSquaresOptionAtom } from '../../store/client/cornerSquaresOption';
import { backgroundOptionAtom } from '../../store/client/backgroundOption';
import { imageOptionAtom } from '../../store/client/imageOption';

const DownloadQRCode = () => {
  const mainOption = useAtomValue(mainOptionAtom);
  const dotsOption = useAtomValue(dotsOptionAtom);
  const cornerSquaresOption = useAtomValue(cornerSquaresOptionAtom);
  const cornerDotsOption = useAtomValue(cornersDotOptionAtom);
  const backgroundOption = useAtomValue(backgroundOptionAtom);
  const imageOption = useAtomValue(imageOptionAtom);

  const qrCode = useMemo(() => {
    return new QRCodeStyling({
      ...mainOption,
      type: 'canvas',
      dotsOptions: dotsOption,
      cornersSquareOptions: cornerSquaresOption,
      cornersDotOptions: cornerDotsOption,
      backgroundOptions: backgroundOption,
      imageOptions: {
        ...imageOption,
        crossOrigin: 'anonymous',
      },
    });
  }, [mainOption, cornerDotsOption, cornerSquaresOption, dotsOption, backgroundOption, imageOption]);

  useEffect(() => {
    qrCode.update({
      ...mainOption,
    });
  }, [qrCode, mainOption]);

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
