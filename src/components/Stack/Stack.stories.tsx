import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Tag } from '../Tag/Tag';

const meta: Meta<typeof Stack> = { title: 'Foundations/Stack', component: Stack };
export default meta;
type Story = StoryObj<typeof Stack>;

export const Directions: Story = {
  render: () => (
    <Stack gap={6}>
      <Stack direction="horizontal" gap={2}>
        <Tag>Matematika</Tag><Tag tone="info">Kelas 3</Tag><Tag tone="neutral">10 menit</Tag>
      </Stack>
      <Stack gap={2} align="start">
        <Tag>Matematika</Tag><Tag tone="info">Kelas 3</Tag><Tag tone="neutral">10 menit</Tag>
      </Stack>
    </Stack>
  ),
};
