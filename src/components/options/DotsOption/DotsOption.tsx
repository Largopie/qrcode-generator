import { useAtom } from 'jotai';
import { Input } from '../../_common/Input/InputContainer';
import RadioGroup from '../../_common/Input/Radio/RadioGroup';
import OptionContainer from '../../_common/OptionContainer/OptionContainer';
import type { DotsType } from '../../../store/client/dotsOption';
import { dotsColorAtom, dotsTypeAtom } from '../../../store/client/dotsOption';
import Radio from '../../_common/Input/Radio/Radio';

const DotsTypes: Array<[DotsType, string]> = [
  ['square', '사각형(square)'],
  ['dots', '점(dots)'],
  ['rounded', '둥근 모양1(rounded1)'],
  ['extra-rounded', '둥근 모양2(rounded2)'],
  ['classy', '고급 모양1(classy1)'],
  ['classy-rounded', '고급 모양2(classy2)'],
];

const DotsOption = () => {
  const [type, setType] = useAtom(dotsTypeAtom);
  const [color, setColor] = useAtom(dotsColorAtom);

  const handleTypeChange = (type: DotsType) => {
    setType(type);
  };

  return (
    <OptionContainer title='내부 점 옵션 (Dots Option)' width='100%'>
      <Input>
        <Input.Label id='dots-type' description='내부 점 스타일 (Dots Type)' />
        <RadioGroup name='dots-type' value={type} onChange={handleTypeChange}>
          {DotsTypes.map(([value, title]) => (
            <Radio key={value} value={value}>
              {title}
            </Radio>
          ))}
        </RadioGroup>
      </Input>
      <Input>
        <Input.Label id='dots-color' description='내부 점 색상 (Dots Color)' />
        <input id='dots-color' type='color' onChange={(e) => setColor(e.target.value)} value={color} />
      </Input>
    </OptionContainer>
  );
};

export default DotsOption;
