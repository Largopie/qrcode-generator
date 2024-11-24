import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';
import { useState } from 'storybook/internal/preview-api';

const meta: Meta<typeof RadioGroup> = {
  title: 'Common/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: '그룹 내 radio 버튼에 사용하는 공통 `name` 속성입니다.',
    },
    value: {
      description: '선택된 버튼이 저장되는 값(상태)입니다.',
    },
    onChange: {
      description: '선택한 버튼의 `value`로 변경하는 핸들러 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('value1');

    const handleOnChange = (value: string) => {
      setValue(value);
    };

    return (
      <RadioGroup name='values' value={value} onChange={handleOnChange}>
        <Radio value='value1'>value1</Radio>
        <Radio value='value2'>value2</Radio>
        <Radio value='value3'>value3</Radio>
        <Radio value='value4'>value4</Radio>
        <Radio disabled value='value5'>
          value5
        </Radio>
      </RadioGroup>
    );
  },
};
