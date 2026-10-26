import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Tag> = { title: 'Website/Tag', component: Tag, args: { children: 'Cerita minggu ini' } };
export default meta;
type Story = StoryObj<typeof Tag>;

export const All: Story = {
  render: () => (
    <Stack gap={3}>
      <Stack direction="horizontal" gap={2}><Tag>Cerita minggu ini</Tag><Tag tone="info">Kelas 5</Tag><Tag tone="neutral">5 menit baca</Tag></Stack>
      <Stack direction="horizontal" gap={2}><Tag variant="solid">Baru</Tag><Tag tone="info" variant="solid">IPA</Tag><Tag tone="neutral" variant="solid">Arsip</Tag></Stack>
    </Stack>
  ),
};
