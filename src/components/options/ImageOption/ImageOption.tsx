import { useAtom } from 'jotai';
import { Input } from '../../_common/Input/InputContainer';
import OptionContainer from '../../_common/OptionContainer/OptionContainer';
import { hideBackgroundAtom, imageMarginAtom, imageSizeAtom } from '../../../store/client/imageOption';

const ImageOption = () => {
  const [hide, setHide] = useAtom(hideBackgroundAtom);
  const [size, setSize] = useAtom(imageSizeAtom);
  const [margin, setMargin] = useAtom(imageMarginAtom);

  return (
    <OptionContainer title='이미지 옵션 (Image Options)' width='100%'>
      <Input>
        <Input.Label id='hide-background-dots' description='배경 가리기 (Hide Background)' />
        <input id='hide-background-dots' type='checkbox' onChange={(e) => setHide(e.target.checked)} checked={hide} />
      </Input>

      <Input>
        <Input.Label id='image-size' description='이미지 크기 (Image Size)' />
        <Input.Number
          value={size}
          width='100%'
          id='image-size'
          placeholder='이미지 크기를 입력하세요(0.0~1.0)'
          onChange={(e) => setSize(e.target.value)}
        />
      </Input>

      <Input>
        <Input.Label id='image-margin' description='이미지 여백 (Image Margin)' />
        <Input.Number
          value={margin}
          width='100%'
          id='image-margin'
          placeholder='이미지 여백을 입력하세요.'
          onChange={(e) => setMargin(e.target.value)}
        />
      </Input>
    </OptionContainer>
  );
};

export default ImageOption;
