import type { Preview } from '@storybook/react';
import '../src/tokens/fonts.css';
import '../src/tokens/tokens.css';
import '../src/tokens/base.css';
import { MzProvider } from '../src';

import.meta.glob('../src/components/**/*.css', { eager: true });

const preview: Preview = {
  decorators: [
    (Story) => (
      <MzProvider style={{ padding: 32, minHeight: '100vh' }}>
        <Story />
      </MzProvider>
    ),
  ],
  parameters: { layout: 'fullscreen', controls: { expanded: true } },
};

export default preview;
