import type { Meta, StoryObj } from '@storybook/react';
import OptionContainer from './OptionContainer';
import { colorPalette } from '../../../styles/colorPalette';

const meta: Meta<typeof OptionContainer> = {
  title: 'Common/OptionContainer',
  component: OptionContainer,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: '제목을 입력할 수 있습니다.',
    },
    width: {
      description: '너비를 입력할 수 있습니다.',
    },
    children: {
      description: '내부에 사용할 컨텐츠를 삽입할 수 있습니다.',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', height: '30vh', backgroundColor: colorPalette.beige }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OptionContainer>;

export const Default: Story = {
  args: {
    title: '제목',
    width: '68rem',
    children: '내용을 삽입하세요.',
  },
};
