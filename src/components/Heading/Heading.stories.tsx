import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';
import { Highlight } from '../Highlight/Highlight';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Heading> = { title: 'Typography/Heading', component: Heading, args: { children: 'Kenapa langit berwarna biru?' } };
export default meta;
type Story = StoryObj<typeof Heading>;

export const Scale: Story = {
  render: () => (
    <Stack gap={4}>
      <Heading level={1} size="display">Belajar lewat <Highlight>cerita</Highlight></Heading>
      <Heading level={1}>Kenapa langit berwarna biru?</Heading>
      <Heading level={2}>Siklus air dalam 3 langkah</Heading>
      <Heading level={3}>Evaporasi</Heading>
      <Heading level={4}>Catatan untuk orang tua</Heading>
    </Stack>
  ),
};
