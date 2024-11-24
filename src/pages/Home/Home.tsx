import { useEffect, useMemo } from 'react';
import * as S from './Home.style';

import QRCodeStyling from 'qr-code-styling';

import DownloadQRCode from '../../components/QRCode/DownloadQRCode';
import { useAtomValue } from 'jotai';
import { mainOptionAtom } from '../../store/client/mainOption';
import MainOption from '../../components/options/MainOption/MainOption';
import DotsOption from '../../components/options/DotsOption/DotsOption';
import { dotsOptionAtom } from '../../store/client/dotsOption';
import { cornersDotOptionAtom, cornerSquaresOptionAtom } from '../../store/client/cornerSquaresOption';
import CornerSquaresOption from '../../components/options/CornerSquaresOption/CornerSquaresOption';
import BackgroundOption from '../../components/options/BackgroundOption/BackgroundOption';
import { backgroundOptionAtom } from '../../store/client/backgroundOption';
import { imageOptionAtom } from '../../store/client/imageOption';
import ImageOption from '../../components/options/ImageOption/ImageOption';

export default function Home() {
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

  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.OptionsContainer>
          <MainOption />
          <DotsOption />
          <CornerSquaresOption />
          <BackgroundOption />
          <ImageOption />
        </S.OptionsContainer>
        <S.PreviewContainer>
          <DownloadQRCode qrCode={qrCode} />
        </S.PreviewContainer>
      </S.MainWrapper>
    </S.MainContainer>
  );
}
