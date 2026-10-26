import type { Meta, StoryObj } from '@storybook/react';
import { Highlight } from './Highlight';
import { Heading } from '../Heading/Heading';
import { MzProvider } from '../MzProvider/MzProvider';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Highlight> = { title: 'Typography/Highlight', component: Highlight };
export default meta;
type Story = StoryObj<typeof Highlight>;

export const OnLightAndDark: Story = {
  render: () => (
    <Stack gap={4}>
      <Heading level={2}>3 cara mudah memahami <Highlight>pecahan</Highlight></Heading>
      <MzProvider theme="dark" style={{ padding: 28, borderRadius: 16 }}>
        <Heading level={2}>3 cara mudah memahami <Highlight>pecahan</Highlight></Heading>
      </MzProvider>
    </Stack>
  ),
};
