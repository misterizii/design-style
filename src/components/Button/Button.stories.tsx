import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Stack } from '../Stack/Stack';
import { MzProvider } from '../MzProvider/MzProvider';

const meta: Meta<typeof Button> = { title: 'Website/Button', component: Button, args: { children: 'Mulai belajar' } };
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

const Row = () => (
  <Stack direction="horizontal" gap={3} wrap align="center">
    <Button variant="accent" iconRight="→">Mulai belajar</Button>
    <Button variant="primary">Daftar kelas</Button>
    <Button variant="secondary">Lihat materi</Button>
    <Button variant="ghost">Nanti saja</Button>
  </Stack>
);

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      <Row />
      <MzProvider theme="dark" style={{ padding: 24, borderRadius: 16 }}><Row /></MzProvider>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} align="center">
      <Button size="sm">Kecil</Button>
      <Button size="md">Sedang</Button>
      <Button size="lg" variant="accent">Besar</Button>
    </Stack>
  ),
};
