import * as S from './Home.style';

import DownloadQRCode from '../../components/QRCode/DownloadQRCode';
import MainOption from '../../components/options/MainOption/MainOption';
import DotsOption from '../../components/options/DotsOption/DotsOption';
import CornerSquaresOption from '../../components/options/CornerSquaresOption/CornerSquaresOption';
import BackgroundOption from '../../components/options/BackgroundOption/BackgroundOption';
import ImageOption from '../../components/options/ImageOption/ImageOption';

export default function Home() {
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
          <DownloadQRCode />
        </S.PreviewContainer>
      </S.MainWrapper>
    </S.MainContainer>
  );
}
