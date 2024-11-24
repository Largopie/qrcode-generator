import { useAtom } from 'jotai';
import { Input } from '../../_common/Input/InputContainer';
import OptionContainer from '../../_common/OptionContainer/OptionContainer';
import type { CornerDotsType, CornerSquaresType } from '../../../store/client/cornerSquaresOption';
import {
  cornerDotsColorAtom,
  cornerDotsTypeAtom,
  cornerSquaresColorAtom,
  cornerSquaresTypeAtom,
} from '../../../store/client/cornerSquaresOption';
import Radio from '../../_common/Input/Radio/Radio';
import RadioGroup from '../../_common/Input/Radio/RadioGroup';

const cornerSquaresType: Array<[CornerSquaresType, string]> = [
  ['square', '사각형(square)'],
  ['extra-rounded', '둥근 모양(rounded)'],
  ['dot', '원형(dot)'],
];

const cornerDotsType: Array<[CornerDotsType, string]> = [
  ['square', '사각형(square)'],
  ['dot', '원형(dot)'],
];

const CornerSquaresOption = () => {
  const [squareType, setSquareType] = useAtom(cornerSquaresTypeAtom);
  const [squareColor, setSquareColor] = useAtom(cornerSquaresColorAtom);
  const [dotType, setDotType] = useAtom(cornerDotsTypeAtom);
  const [dotColor, setDotColor] = useAtom(cornerDotsColorAtom);

  const handleSquareTypeChange = (type: CornerSquaresType) => {
    setSquareType(type);
  };

  const handleDotTypeChange = (type: CornerDotsType) => {
    setDotType(type);
  };

  return (
    <OptionContainer title='큰 사각형 옵션 (Corners Square Options)' width='100%'>
      <Input>
        <Input.Label id='corner-squares-type' description='바깥 사각형 타입 (Corner Squares Type)' />
        <RadioGroup name='corner-squares-type' value={squareType} onChange={handleSquareTypeChange}>
          {cornerSquaresType.map(([value, title]) => (
            <Radio key={value} value={value}>
              {title}
            </Radio>
          ))}
        </RadioGroup>
      </Input>
      <Input>
        <Input.Label id='corner-squares-color' description='바깥 사각형 색상 (Corner Squares Color)' />
        <input
          id='corner-squares-color'
          type='color'
          onChange={(e) => setSquareColor(e.target.value)}
          value={squareColor}
        />
      </Input>

      <Input>
        <Input.Label id='corner-dots-type' description='내부 사각형 타입 (Corner Dots Type)' />
        <RadioGroup name='corner-dots-type' value={dotType} onChange={handleDotTypeChange}>
          {cornerDotsType.map(([value, title]) => (
            <Radio key={value} value={value}>
              {title}
            </Radio>
          ))}
        </RadioGroup>
      </Input>
      <Input>
        <Input.Label id='corner-dots-color' description='내부 사각형 색상 (Corner Dots Color)' />
        <input id='corner-dots-color' type='color' onChange={(e) => setDotColor(e.target.value)} value={dotColor} />
      </Input>
    </OptionContainer>
  );
};

export default CornerSquaresOption;
