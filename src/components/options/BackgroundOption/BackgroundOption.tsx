import { useAtom } from 'jotai';
import { Input } from '../../_common/Input/InputContainer';
import OptionContainer from '../../_common/OptionContainer/OptionContainer';
import { backgroundColorAtom } from '../../../store/client/backgroundOption';

const BackgroundOption = () => {
  const [backgroundColor, setBackgroundColor] = useAtom(backgroundColorAtom);

  return (
    <OptionContainer title='배경 옵션 (Background Options)' width='100%'>
      <Input>
        <Input.Label id='background-color' description='배경 색 (Background Color)' />
        <input
          id='background-color'
          type='color'
          onChange={(e) => setBackgroundColor(e.target.value)}
          value={backgroundColor}
        />
      </Input>
    </OptionContainer>
  );
};

export default BackgroundOption;
