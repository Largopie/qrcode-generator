import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: '버튼의 종류를 결정합니다.',
      table: {
        type: { summary: 'primary | remove' },
      },
    },
    size: {
      description: '버튼의 크기를 결정합니다.',
      table: {
        type: { summary: 's | m' },
      },
    },
    children: {
      description: '버튼 내부에 요소를 삽입합니다. 아이콘을 함께 삽입하기 위해 children prop으로 받도록 구현했습니다.',
      table: {
        type: { summary: 'children' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    type: 'primary',
    size: 'm',
    children: '버튼',
  },
};

export const RemoveButton: Story = {
  args: {
    type: 'remove',
    size: 's',
    children: '버튼',
  },
};
