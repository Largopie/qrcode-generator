import { useAtom } from 'jotai';
import { Input } from '../../_common/Input/InputContainer';
import OptionContainer from '../../_common/OptionContainer/OptionContainer';
import { dataAtom, heightAtom, marginAtom, widthAtom } from '../../../store/client/mainOption';
import useImage from '../../../hooks/qrcode/useImage';
import * as W from '../../../styles/wrapper';
import * as S from './MainOption.style';
import Button from '../../_common/Button/Button';

const MainOption = () => {
  const [data, setData] = useAtom(dataAtom);
  const [width, setWidth] = useAtom(widthAtom);
  const [height, setHeight] = useAtom(heightAtom);
  const [margin, setMargin] = useAtom(marginAtom);
  const { value: imageValue, handleImageChange, removeImage } = useImage();

  return (
    <OptionContainer open title='기본 옵션 (Default Option)' width='100%'>
      <W.FlexColumnWrapper $gap='2rem'>
        <Input>
          <Input.Label description='데이터 (data)' id='data' />
          <Input.Text
            width='40rem'
            id='data'
            placeholder='QR코드를 생성할 데이터를 입력하세요.'
            onChange={(e) => setData(e.target.value)}
            value={data}
          />
        </Input>
        <W.FlexRowWrapper $gap='1.2rem'>
          <Input>
            <Input.Label description='너비 (width)' id='width' />
            <Input.Number
              width='16rem'
              id='width'
              placeholder='너비를 입력하세요.'
              onChange={(e) => setWidth(e.target.value)}
              value={width}
            />
          </Input>
          <Input>
            <Input.Label description='높이 (height)' id='height' />
            <Input.Number
              width='16rem'
              id='height'
              placeholder='높이를 입력하세요.'
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </Input>
          <Input>
            <Input.Label description='테두리 공백(margin)' id='margin' />
            <Input.Number
              width='16rem'
              id='height'
              placeholder='여백을 입력하세요.'
              onChange={(e) => setMargin(e.target.value)}
              value={margin}
            />
          </Input>
        </W.FlexRowWrapper>
        <S.FileInputWrapper>
          <S.FileInputLabel htmlFor='centerImage'>이미지 선택</S.FileInputLabel>
          <input id='centerImage' accept='image/*' type='file' value={imageValue} onChange={handleImageChange} />
          <Button size='s' variant='remove' onClick={removeImage}>
            이미지 초기화
          </Button>
        </S.FileInputWrapper>
      </W.FlexColumnWrapper>
    </OptionContainer>
  );
};

export default MainOption;
