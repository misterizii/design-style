import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Highlight } from '../Highlight/Highlight';

const meta: Meta<typeof Card> = { title: 'Website/Card', component: Card };
export default meta;
type Story = StoryObj<typeof Card>;

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16, maxWidth: 960 }}>
      <Card eyebrow="IPA · Kelas 5" title="Siklus Air" badge={<Tag tone="info">Bab 2</Tag>} interactive footer={<Button size="sm" variant="secondary">Baca cerita</Button>}>
        Perjalanan setetes air dari laut, ke awan, lalu kembali lagi sebagai hujan.
      </Card>
      <Card tone="soft" eyebrow="Matematika · Kelas 3" title="Pecahan Sederhana" footer={<Button size="sm">Mulai</Button>}>
        Belajar pecahan dengan pizza, coklat, dan uang jajan.
      </Card>
      <Card tone="dark" eyebrow="Cerita minggu ini" footer={<Button size="sm" variant="accent">Tonton</Button>}>
        <Heading level={3}>Kenapa Bulan tidak <Highlight>jatuh</Highlight> ke Bumi?</Heading>
      </Card>
    </div>
  ),
};
