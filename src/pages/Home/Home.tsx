import { useEffect, useMemo } from 'react';

import QRCodeStyling from 'qr-code-styling';

import useMainOptions from '../../hooks/qrcode/useMainOptions';
import type { DotsType } from '../../hooks/qrcode/useDotsOptions';
import useDotsOptions from '../../hooks/qrcode/useDotsOptions';
import type { CornersSquareType } from '../../hooks/qrcode/useCornersSquareOptions';
import useCornersSquareOptions from '../../hooks/qrcode/useCornersSquareOptions';
import type { CornersDotType } from '../../hooks/qrcode/useCornersDotOptions';
import useCornersDotOptions from '../../hooks/qrcode/useCornersDotOptions';
import useBackgroundOptions from '../../hooks/qrcode/useBackgroundOptions';
import useImageOptions from '../../hooks/qrcode/useImageOptions';
import QRCodeImage from '../../components/QRCodeImage';

export default function Home() {
  const {
    mainData,
    mainDataForQRCode,
    imageValue,
    handleImageChange,
    handleDataChange,
    handleWidthChange,
    handleHeightChange,
    handleMarginChange,
  } = useMainOptions();
  const { dots, handleDotsColorChange, handleDotsTypeChange } = useDotsOptions();
  const { cornersSquare, handleCornersSquareColorChange, handleCornersSquareTypeChange } = useCornersSquareOptions();
  const { cornersDot, handleCornersDotColorChange, handleCornersDotTypeChange } = useCornersDotOptions();
  const { background, handleBackgroundColorChange } = useBackgroundOptions();
  const { image, imageForQRCode, handleHideBackgroundDotsChange, handleImageMarginChange, handleImageSizeChange } =
    useImageOptions();

  const qrCode = useMemo(() => {
    return new QRCodeStyling({
      ...mainDataForQRCode,
      type: 'svg',
      dotsOptions: dots,
      cornersSquareOptions: cornersSquare,
      cornersDotOptions: cornersDot,
      backgroundOptions: background,
      imageOptions: {
        ...imageForQRCode,
        crossOrigin: 'anonymous',
      },
    });
  }, [mainDataForQRCode, cornersDot, cornersSquare, dots, background, imageForQRCode]);

  useEffect(() => {
    qrCode.update({
      ...mainDataForQRCode,
    });
  }, [qrCode, mainDataForQRCode]);

  return (
    <>
      <h1>QRCode Generator</h1>
      <div>
        {/* Main Options 입력 */}

        <div>
          <label htmlFor='centerImage'>이미지 선택</label>
          <input id='centerImage' accept='image/*' type='file' value={imageValue} onChange={handleImageChange} />
        </div>

        <div>
          <label htmlFor='data'>삽입할 데이터</label>
          <input id='data' value={mainData.data} onChange={(e) => handleDataChange(e.target.value)} />
        </div>

        <div>
          <label htmlFor='width'>너비(width)</label>
          <input
            id='width'
            value={String(mainData.width)}
            type='number'
            onChange={(e) => handleWidthChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='height'>높이(height)</label>
          <input
            id='height'
            value={String(mainData.height)}
            type='number'
            onChange={(e) => handleHeightChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='margin'>테두리 공백(margin)</label>
          <input
            id='margin'
            value={String(mainData.margin)}
            min={0}
            max={10000}
            type='number'
            onChange={(e) => handleMarginChange(e.target.value)}
          />
        </div>

        {/* Dots Options 입력 */}
        <div>
          <label htmlFor='dots-type'>Dots Type</label>
          <select id='dots-type' onChange={(e) => handleDotsTypeChange(e.target.value as DotsType)} value={dots.type}>
            <option value=''>None</option>
            <option value='classy'>Classy</option>
            <option value='classy-rounded'>Classy Rounded</option>
            <option value='dots'>Dots</option>
            <option value='extra-rounded'>Extra Rounded</option>
            <option value='rounded'>Rounded</option>
            <option value='square'>square</option>
          </select>
        </div>

        <div>
          <label htmlFor='dots-color'>Dots Color</label>
          <input
            id='dots-color'
            type='color'
            onChange={(e) => handleDotsColorChange(e.target.value)}
            value={dots.color}
          />
        </div>

        {/* Corners Square Options 입력 */}
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

        {/* Corners Dot Options 입력 */}
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

        {/* Background Options 입력 */}
        <div>
          <label htmlFor='background-color'>Background Color</label>
          <input
            id='background-color'
            type='color'
            onChange={(e) => handleBackgroundColorChange(e.target.value)}
            value={background.color}
          />
        </div>

        {/* Image Options 입력 */}
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
        <QRCodeImage qrCode={qrCode} />
      </div>
    </>
  );
}
