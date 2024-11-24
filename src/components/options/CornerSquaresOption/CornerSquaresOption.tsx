import { useAtom } from 'jotai';
import { Input } from '../../_common/Input/InputContainer';
import OptionContainer from '../../_common/OptionContainer/OptionContainer';
import type { CornerSquaresType } from '../../../store/client/cornerSquaresOption';
import { cornerSquaresColorAtom, cornerSquaresTypeAtom } from '../../../store/client/cornerSquaresOption';
import Radio from '../../_common/Input/Radio/Radio';
import RadioGroup from '../../_common/Input/Radio/RadioGroup';

const cornerSquaresType: Array<[CornerSquaresType, string]> = [
  ['square', '사각형(square)'],
  ['extra-rounded', '둥근 모양(rounded)'],
  ['dot', '원형(dot)'],
];

const CornerSquaresOption = () => {
  const [type, setType] = useAtom(cornerSquaresTypeAtom);
  const [color, setColor] = useAtom(cornerSquaresColorAtom);

  const handleTypeChange = (type: CornerSquaresType) => {
    setType(type);
  };

  return (
    <OptionContainer title='큰 사각형 옵션 (Corners Square Options)' width='100%'>
      <Input>
        <Input.Label id='corner-squares-type' description='큰 사각형 타입 (Corner Squares Type)' />
        <RadioGroup name='corner-squares-type' value={type} onChange={handleTypeChange}>
          {cornerSquaresType.map(([value, title]) => (
            <Radio key={value} value={value}>
              {title}
            </Radio>
          ))}
        </RadioGroup>
      </Input>
      <Input>
        <Input.Label id='corner-squares-color' description='큰 사각형 색상 (Corner Squares Color)' />
        <input id='corner-squares-color' type='color' onChange={(e) => setColor(e.target.value)} value={color} />
      </Input>
    </OptionContainer>
  );
};

export default CornerSquaresOption;
