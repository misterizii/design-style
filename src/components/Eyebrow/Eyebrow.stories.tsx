import type { Meta, StoryObj } from '@storybook/react';
import { Eyebrow } from './Eyebrow';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Eyebrow> = { title: 'Typography/Eyebrow', component: Eyebrow, args: { children: 'Bab 2 · IPA Kelas 5' } };
export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const WithHeading: Story = {
  render: () => (
    <Stack gap={6}>
      <Stack gap={2}><Eyebrow>Bab 2 · IPA Kelas 5</Eyebrow><Heading level={2}>Siklus Air</Heading></Stack>
      <Stack gap={2}><Eyebrow tone="accent">Seri Cerita Sains</Eyebrow><Heading level={2}>Kenapa Bulan tidak jatuh?</Heading></Stack>
    </Stack>
  ),
};
