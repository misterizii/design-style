import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Quote> = { title: 'Website/Quote', component: Quote };
export default meta;
type Story = StoryObj<typeof Quote>;

export const Sizes: Story = {
  render: () => (
    <Stack gap={8} style={{ maxWidth: 640 }}>
      <Quote author="Dika" context="Siswa kelas 5">Ternyata air hujan yang kemarin itu dulunya air laut, ya Pak?</Quote>
      <Quote size="lg" author="Pesan cerita hari ini">Hal besar selalu dimulai dari langkah kecil yang diulang setiap hari.</Quote>
    </Stack>
  ),
};
