import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Component/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithLongText: Story = {
  args: { children: '아주 긴 버튼 텍스트 예시입니다' },
};
