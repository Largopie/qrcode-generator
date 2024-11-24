import { useEffect, useMemo } from 'react';
import * as S from './Home.style';

import QRCodeStyling from 'qr-code-styling';
import useImageOptions from '../../hooks/qrcode/useImageOptions';

import DownloadQRCode from '../../components/QRCode/DownloadQRCode';
import OptionContainer from '../../components/_common/OptionContainer/OptionContainer';
import { useAtomValue } from 'jotai';
import { mainOptionAtom } from '../../store/client/mainOption';
import MainOption from '../../components/options/MainOption/MainOption';
import DotsOption from '../../components/options/DotsOption/DotsOption';
import { dotsOptionAtom } from '../../store/client/dotsOption';
import { cornersDotOptionAtom, cornerSquaresOptionAtom } from '../../store/client/cornerSquaresOption';
import CornerSquaresOption from '../../components/options/CornerSquaresOption/CornerSquaresOption';
import BackgroundOption from '../../components/options/BackgroundOption/BackgroundOption';
import { backgroundOptionAtom } from '../../store/client/backgroundOption';

export default function Home() {
  const mainOption = useAtomValue(mainOptionAtom);
  const dotsOption = useAtomValue(dotsOptionAtom);
  const cornerSquaresOption = useAtomValue(cornerSquaresOptionAtom);
  const cornerDotsOption = useAtomValue(cornersDotOptionAtom);
  const backgroundOption = useAtomValue(backgroundOptionAtom);
  const { image, imageForQRCode, handleHideBackgroundDotsChange, handleImageMarginChange, handleImageSizeChange } =
    useImageOptions();

  const qrCode = useMemo(() => {
    return new QRCodeStyling({
      ...mainOption,
      type: 'canvas',
      dotsOptions: dotsOption,
      cornersSquareOptions: cornerSquaresOption,
      cornersDotOptions: cornerDotsOption,
      backgroundOptions: backgroundOption,
      imageOptions: {
        ...imageForQRCode,
        crossOrigin: 'anonymous',
      },
    });
  }, [mainOption, cornerDotsOption, cornerSquaresOption, dotsOption, backgroundOption, imageForQRCode]);

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

          {/* Image Options 입력 */}
          <OptionContainer title='이미지 옵션 (Image Options)' width='100%'>
            <div>
              <label htmlFor='hide-background-dots'>Hide Background Dots</label>
              <input
                id='hide-background-dots'
                type='checkbox'
                onChange={(e) => handleHideBackgroundDotsChange(e.target.checked)}
                checked={image.hideBackgroundDots}
              />
            </div>

            <div>
              <label htmlFor='image-size'>Image Size</label>
              <input id='image-size' onChange={(e) => handleImageSizeChange(e.target.value)} value={image.imageSize} />
            </div>

            <div>
              <label htmlFor='image-margin'>Image Margin</label>
              <input id='image-margin' onChange={(e) => handleImageMarginChange(e.target.value)} value={image.margin} />
            </div>
          </OptionContainer>
        </S.OptionsContainer>
        <S.PreviewContainer>
          <DownloadQRCode qrCode={qrCode} />
        </S.PreviewContainer>
      </S.MainWrapper>
    </S.MainContainer>
  );
}
