import { useEffect, useMemo } from 'react';
import * as S from './Home.style';

import QRCodeStyling from 'qr-code-styling';

import type { CornersSquareType } from '../../hooks/qrcode/useCornersSquareOptions';
import useCornersSquareOptions from '../../hooks/qrcode/useCornersSquareOptions';
import type { CornersDotType } from '../../hooks/qrcode/useCornersDotOptions';
import useCornersDotOptions from '../../hooks/qrcode/useCornersDotOptions';
import useBackgroundOptions from '../../hooks/qrcode/useBackgroundOptions';
import useImageOptions from '../../hooks/qrcode/useImageOptions';

import DownloadQRCode from '../../components/QRCode/DownloadQRCode';
import OptionContainer from '../../components/_common/OptionContainer/OptionContainer';
import { useAtomValue } from 'jotai';
import { mainOptionAtom } from '../../store/client/mainOption';
import MainOption from '../../components/options/MainOption/MainOption';
import DotsOption from '../../components/options/DotsOption/DotsOption';
import { dotsOptionAtom } from '../../store/client/dotsOption';

export default function Home() {
  const mainOption = useAtomValue(mainOptionAtom);
  const dotsOption = useAtomValue(dotsOptionAtom);
  const { cornersSquare, handleCornersSquareColorChange, handleCornersSquareTypeChange } = useCornersSquareOptions();
  const { cornersDot, handleCornersDotColorChange, handleCornersDotTypeChange } = useCornersDotOptions();
  const { background, handleBackgroundColorChange } = useBackgroundOptions();
  const { image, imageForQRCode, handleHideBackgroundDotsChange, handleImageMarginChange, handleImageSizeChange } =
    useImageOptions();

  const qrCode = useMemo(() => {
    return new QRCodeStyling({
      ...mainOption,
      type: 'canvas',
      dotsOptions: dotsOption,
      cornersSquareOptions: cornersSquare,
      cornersDotOptions: cornersDot,
      backgroundOptions: background,
      imageOptions: {
        ...imageForQRCode,
        crossOrigin: 'anonymous',
      },
    });
  }, [mainOption, cornersDot, cornersSquare, dotsOption, background, imageForQRCode]);

  useEffect(() => {
    qrCode.update({
      ...mainOption,
    });
  }, [qrCode, mainOption]);

  return (
    <S.MainContainer>
      <S.MainWrapper>
        <S.OptionsContainer>
          {/* Main Options 입력 */}
          <MainOption />

          {/* Dots Options 입력 */}
          <DotsOption />
          {/* Corners Square Options 입력 */}
          <OptionContainer title='큰 사각형 옵션 (Corners Square Options)' width='100%'>
            <div>
              <label htmlFor='corners-square-type'>Corners Square Type</label>
              <select
                id='corners-square-type'
                onChange={(e) => handleCornersSquareTypeChange(e.target.value as CornersSquareType)}
                value={cornersSquare.type}
              >
                <option value=''>None</option>
                <option value='dot'>Dot</option>
                <option value='extra-rounded'>Extra Rounded</option>
                <option value='square'>square</option>
              </select>
            </div>

            <div>
              <label htmlFor='corners-square-color'>Corners Square Color</label>
              <input
                id='corners-square-color'
                type='color'
                onChange={(e) => handleCornersSquareColorChange(e.target.value)}
                value={cornersSquare.color}
              />
            </div>
          </OptionContainer>

          {/* Corners Dot Options 입력 */}
          <OptionContainer title='큰 점 옵션 (Corners Square Options)' width='100%'>
            <div>
              <label htmlFor='corners-dot-type'>Corners Dot Type</label>
              <select
                id='corners-dot-type'
                onChange={(e) => handleCornersDotTypeChange(e.target.value as CornersDotType)}
                value={cornersDot.type}
              >
                <option value=''>None</option>
                <option value='dot'>Dot</option>
                <option value='square'>square</option>
              </select>
            </div>

            <div>
              <label htmlFor='corners-dot-color'>Corners Dot Color</label>
              <input
                id='corners-dot-color'
                type='color'
                onChange={(e) => handleCornersDotColorChange(e.target.value)}
                value={cornersDot.color}
              />
            </div>
          </OptionContainer>

          {/* Background Options 입력 */}
          <OptionContainer title='배경 옵션 (Background Options)' width='100%'>
            <div>
              <label htmlFor='background-color'>Background Color</label>
              <input
                id='background-color'
                type='color'
                onChange={(e) => handleBackgroundColorChange(e.target.value)}
                value={background.color}
              />
            </div>
          </OptionContainer>

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
