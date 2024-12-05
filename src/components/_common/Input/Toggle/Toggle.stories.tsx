import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';
import { useState } from 'storybook/internal/preview-api';

const meta: Meta<typeof Toggle> = {
  title: 'Common/Input/Toggle',
  component: Toggle,
  tags: ['autodocs'],
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
