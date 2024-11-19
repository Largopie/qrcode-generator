import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Input } from '../InputContainer';
import type { ChangeEvent } from 'react';

const meta: Meta<typeof Input.Number> = {
  title: 'Common/Input/Number',
  component: Input.Number,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text', description: 'label과 연결하기 위한 id값 입니다.' },
    value: { control: 'text', description: 'input에 입력되는 값 입니다.' },
    min: { control: 'number', description: '최솟값을 지정할 수 있습니다.' },
    max: { control: 'number', description: '최대값을 지정할 수 있습니다.' },
    placeholder: { control: 'text', description: 'input 내부에 사용되는 placeholder입니다.' },
    width: { control: 'text', description: 'input의 너비를 입력할 수 있습니다.' },
    onChange: { description: '입력되는 값을 변경하기 위한 핸들러 함수입니다.' },
  },
  args: {
    placeholder: '나이를 입력하세요',
    value: '',
    width: '40rem',
    min: 0,
    max: 100,
  },
};

export default meta;
type Story = StoryObj<typeof Input.Number>;

export const DefaultInput: Story = {
  render: (args) => {
    const [, setArgs] = useArgs();

    setArgs({ id: 'input-number' });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (args.min && args.min > e.target.valueAsNumber) {
        setArgs({ value: args.min });
        return;
      }

      if (args.max && args.max < e.target.valueAsNumber) {
        setArgs({ value: args.max });
        return;
      }

      setArgs({ value: e.target.value });
    };

    return (
      <Input>
        <Input.Number {...args} onChange={handleOnChange} />
      </Input>
    );
  },
};

export const InputWithLabel: Story = {
  render: (args) => {
    const [, setArgs] = useArgs();

    setArgs({ id: 'input-number-with-label' });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: e.target.valueAsNumber });
    };

    return (
      <Input>
        <Input.Label id={args.id} description='나이' />
        <Input.Number {...args} value={args.value} onChange={handleOnChange} />
      </Input>
    );
  },
};
