import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Input } from '../InputContainer';
import type { ChangeEvent } from 'react';

const meta: Meta<typeof Input.Text> = {
  title: 'Common/Input/Text',
  component: Input.Text,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text', description: 'label과 연결하기 위한 id값 입니다.' },
    value: { control: 'text', description: 'input에 입력되는 값 입니다.' },
    placeholder: { control: 'text', description: 'input 내부에 사용되는 placeholder입니다.' },
    width: { control: 'text', description: 'input의 너비를 입력할 수 있습니다.' },
    onChange: { description: '입력되는 값을 변경하기 위한 핸들러 함수입니다.' },
  },
  args: {
    placeholder: '이름을 입력하세요',
    value: '',
    width: '40rem',
  },
};

export default meta;
type Story = StoryObj<typeof Input.Text>;

export const DefaultInput: Story = {
  render: (args) => {
    const [, setArgs] = useArgs();

    setArgs({ id: 'input-text' });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: e.target.value });
    };

    return (
      <Input>
        <Input.Text {...args} onChange={handleOnChange} />
      </Input>
    );
  },
};

export const InputWithLabel: Story = {
  render: (args) => {
    const [, setArgs] = useArgs();

    setArgs({ id: 'input-text-with-label' });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setArgs({ value: e.target.valueAsNumber });
    };

    return (
      <Input>
        <Input.Label id={args.id} description='이름' />
        <Input.Text {...args} onChange={handleOnChange} />
      </Input>
    );
  },
};
