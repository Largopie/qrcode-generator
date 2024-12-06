import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';
import { useState } from 'storybook/internal/preview-api';

const meta: Meta<typeof Toggle> = {
  title: 'Common/Input/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    isToggle: {
      description: '현재 토글의 상태를 나타냅니다.',
    },
    handleToggle: {
      description: '토글의 상태를 핸들링하는 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const On: Story = {
  render: () => {
    const [isToggle, setIsToggle] = useState(true);

    const handleToggle = () => setIsToggle((prevToggle) => !prevToggle);

    return <Toggle isToggle={isToggle} handleToggle={handleToggle} />;
  },
};
export const Off: Story = {
  render: () => {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => setIsToggle((prevToggle) => !prevToggle);

    return <Toggle isToggle={isToggle} handleToggle={handleToggle} />;
  },
};
