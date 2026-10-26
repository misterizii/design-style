import type { Meta, StoryObj } from '@storybook/react';
import { MzProvider } from './MzProvider';
import { Heading } from '../Heading/Heading';
import { Highlight } from '../Highlight/Highlight';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof MzProvider> = { title: 'Foundations/MzProvider', component: MzProvider };
export default meta;
type Story = StoryObj<typeof MzProvider>;

const Sample = () => (
  <Stack gap={4} align="start">
    <Heading level={2}>Belajar lewat <Highlight>cerita</Highlight></Heading>
    <Text tone="muted">Setiap pelajaran punya kisah. Mari mulai dari yang paling dekat.</Text>
    <Stack direction="horizontal" gap={3}>
      <Button variant="accent">Mulai belajar</Button>
      <Button variant="secondary">Lihat kelas</Button>
    </Stack>
  </Stack>
);

export const LightAndDark: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <MzProvider theme="light" style={{ padding: 32, borderRadius: 16, border: '1px solid var(--mz-border)' }}><Sample /></MzProvider>
      <MzProvider theme="dark" style={{ padding: 32, borderRadius: 16 }}><Sample /></MzProvider>
    </div>
  ),
};
