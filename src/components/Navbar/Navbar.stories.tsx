import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button } from '../Button/Button';
import { MzProvider } from '../MzProvider/MzProvider';
import { Stack } from '../Stack/Stack';

const meta: Meta<typeof Navbar> = { title: 'Website/Navbar', component: Navbar };
export default meta;
type Story = StoryObj<typeof Navbar>;

const links = [
  { label: 'Kelas', href: '#kelas', active: true },
  { label: 'Cerita', href: '#cerita' },
  { label: 'Tentang', href: '#tentang' },
];

export const LightAndDark: Story = {
  render: () => (
    <Stack gap={4}>
      <div style={{ border: '1px solid var(--mz-border)', borderRadius: 12 }}>
        <Navbar links={links} action={<Button size="sm" variant="accent">Mulai belajar</Button>} />
      </div>
      <MzProvider theme="dark" style={{ borderRadius: 12 }}>
        <Navbar links={links} action={<Button size="sm" variant="accent">Mulai belajar</Button>} />
      </MzProvider>
    </Stack>
  ),
};
